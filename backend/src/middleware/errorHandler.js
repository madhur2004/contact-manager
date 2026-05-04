import { errorResponse } from '../utils/apiResponse.js';

export const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  // Mongoose duplicate key error
  if (err.code === 11000) {
    const field = Object.keys(err.keyPattern)[0];
    return errorResponse(res, `Duplicate value for ${field}. Please use another value.`, err, 409);
  }

  // Mongoose validation error
  if (err.name === 'ValidationError') {
    const messages = Object.values(err.errors).map(e => e.message);
    return errorResponse(res, messages.join(', '), err, 400);
  }

  // Zod validation error
  if (err.name === 'ZodError') {
    const errors = err.issues || err.errors || [];
    const messages = errors.map(
      e => `${e.path.join('.')}: ${e.message}`
    );
    return errorResponse(res, messages.join(', '), err, 400);
  }

  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  errorResponse(res, message, err, statusCode);
};