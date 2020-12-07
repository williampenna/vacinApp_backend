import express from 'express';
import vaccineRouter from './routes/v1/vaccine';

const app = express();

app.use(vaccineRouter);

// eslint-disable-next-line prefer-arrow-callback
app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log(':rocket running on port 3000!');
});
