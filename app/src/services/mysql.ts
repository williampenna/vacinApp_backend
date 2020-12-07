import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('mysql://root:development@localhost:3306/vacinapp_db');

export default sequelize;
