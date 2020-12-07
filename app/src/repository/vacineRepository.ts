import sequelize from '../services/mysql';
import { VaccineInterface } from '../interfaces/vaccine';

class VaccineRepository {
  async save(vacineArgs: VaccineInterface): Promise<unknown> {
    const vacineResult = sequelize.define('vacine', {
      name: vacineArgs.name,
      description: vacineArgs.description,
    });
    // eslint-disable-next-line no-console
    console.log('Vacine Result::', vacineResult);
    return vacineResult;
  }
}

export default VaccineRepository;
