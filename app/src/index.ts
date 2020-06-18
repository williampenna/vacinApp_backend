import { Person } from './interfaces/person';

export const handler = async (req: any, res: any) => {
    try {
        let person = { firstName: 'William', lastName: 'Penna' };
        let personFullName = concatenateName(person);
        res.status(200).send({ message: personFullName });
    } catch (error) {
        res.status(error.statusCode).send({ message: error.message });
    }
}

function concatenateName (person: Person): string {
    return person.firstName + ' ' + person.lastName;
}