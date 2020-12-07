import express from 'express';
import saveVaccine from '../../handler/vaccine';

const vaccineRouter = express.Router();

vaccineRouter.get('/v1/vaccines', saveVaccine);

export default vaccineRouter;
