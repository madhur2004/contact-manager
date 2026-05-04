import Contact from '../models/Contact.js';
import { successResponse, errorResponse } from '../utils/apiResponse.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { createContactSchema, updateContactSchema } from '../validators/contactValidator.js';

//     Get all contacts with pagination and search
//    GET /api/contacts
export const getContacts = asyncHandler(async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const search = req.query.search || '';

  const skip = (page - 1) * limit;

  const searchFilter = search
    ? {
      $or: [
        { name: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } }
      ]
    }
    : {};

  const [contacts, total] = await Promise.all([
    Contact.find(searchFilter).sort({ createdAt: -1 }).skip(skip).limit(limit),
    Contact.countDocuments(searchFilter)
  ]);

  successResponse(res, 'Contacts retrieved successfully', {
    contacts,
    pagination: {
      page,
      limit,
      total,
      pages: Math.ceil(total / limit)
    }
  });
});

//    Get single contact
//    GET /api/contacts/:id
export const getContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);

  if (!contact) {
    return errorResponse(res, 'Contact not found', null, 404);
  }

  successResponse(res, 'Contact retrieved successfully', contact);
});

//    Create a contact
//    POST /api/contacts
export const createContact = asyncHandler(async (req, res) => {
  const validatedData = createContactSchema.parse(req.body);

  const existingContact = await Contact.findOne({ email: validatedData.email });
  if (existingContact) {
    return errorResponse(res, 'Email already exists', null, 409);
  }

  const contact = await Contact.create(validatedData);
  successResponse(res, 'Contact created successfully', contact, 201);
});

//     Update a contact
//    PUT /api/contacts/:id
export const updateContact = asyncHandler(async (req, res) => {
  const validatedData = updateContactSchema.parse(req.body);

  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    return errorResponse(res, 'Contact not found', null, 404);
  }

  if (validatedData.email && validatedData.email !== contact.email) {
    const existingContact = await Contact.findOne({ email: validatedData.email });
    if (existingContact) {
      return errorResponse(res, 'Email already exists', null, 409);
    }
  }

  const updatedContact = await Contact.findByIdAndUpdate(
    req.params.id,
    validatedData,
    { new: true, runValidators: true }
  );

  successResponse(res, 'Contact updated successfully', updatedContact);
});

//     Delete a contact
//    DELETE /api/contacts/:id
export const deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    return errorResponse(res, 'Contact not found', null, 404);
  }

  await contact.deleteOne();
  successResponse(res, 'Contact deleted successfully', null);
});