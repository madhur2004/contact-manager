import { z } from 'zod';

export const createContactSchema = z.object({
  name: z.string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name cannot exceed 50 characters'),

  email: z.string()
    .email('Invalid email format')
    .max(100, 'Email cannot exceed 100 characters'),

  phone: z.string()
    .regex(/^[6-9]\d{9}$/, 'Enter a valid 10-digit mobile number'),

  address: z.string()
    .max(200, 'Address cannot exceed 200 characters')
    .optional()
});

export const updateContactSchema = createContactSchema.partial();