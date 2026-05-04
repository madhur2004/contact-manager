import mongoose from 'mongoose';
import { errorResponse } from '../utils/apiResponse.js';

export const validateObjectId = (paramName = 'id') => {
  return (req, res, next) => {
    const id = req.params[paramName];
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return errorResponse(res, 'Invalid ID format', null, 400);
    }
    next();
  };
};