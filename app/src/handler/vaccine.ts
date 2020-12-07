import { Request, Response } from 'express';
import { VaccineInterface } from '../interfaces/vaccine';
import vaccineCreateSchema from '../schemas/joi/vaccine';
import schemaValidator from '../utils/commonsValidator';
import VaccineBusiness from '../business/vaccine';
import VaccineRepository from '../repository/vacineRepository';

const saveVaccine = async (req: Request, res: Response): Promise<void> => {
  try {
    const body = await schemaValidator(
      JSON.parse(req.body),
      vaccineCreateSchema
    ) as VaccineInterface;
    const vaccineRepository = new VaccineRepository();
    const vaccineBusiness = new VaccineBusiness(vaccineRepository);
    const response = await vaccineBusiness.saveVaccine(body);
    res.status(200).send(response);
  } catch (error) {
    res.status(error.statusCode).send({ message: error.message });
  }
};

export default saveVaccine;
