import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import contactRoutes from './routes/contactRoutes.js';
import { errorHandler } from './middleware/errorHandler.js';
import { errorResponse } from './utils/apiResponse.js';

const app = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/contacts', contactRoutes);

// 404 handler (must be AFTER all routes)
app.use((req, res) => {
  errorResponse(res, `Route ${req.originalUrl} not found`, null, 404);
});

// Global error handler
app.use(errorHandler);


export default app;