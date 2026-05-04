import express from 'express';
import {
  getContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact
} from '../controllers/contactController.js';
import { validateObjectId } from '../middleware/validateObjectId.js';

const router = express.Router();

router.route('/')
  .get(getContacts)
  .post(createContact);

router.route('/:id')
  .get(validateObjectId(), getContact)
  .put(validateObjectId(), updateContact)
  .delete(validateObjectId(), deleteContact);

export default router;