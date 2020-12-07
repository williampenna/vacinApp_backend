import VaccineRepository from '../repository/vacineRepository';
import { VaccineInterface } from '../interfaces/vaccine';
import { ResponseMessageInterface } from '../interfaces/responseMessage';

class VaccineBusiness {
    repository: VaccineRepository;

    constructor(vaccineRepository: VaccineRepository) {
      this.repository = vaccineRepository;
    }

    async saveVaccine(vaccine: VaccineInterface): Promise<ResponseMessageInterface> {
      await this.repository.save(vaccine);
      return { message: 'Vaccine saved successfully.' };
    }
}

export default VaccineBusiness;
