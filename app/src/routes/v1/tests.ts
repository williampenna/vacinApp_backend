import express from 'express';
export const testRouter = express.Router();
import { handler } from '../../index';

testRouter.get('/v1/tests', handler);