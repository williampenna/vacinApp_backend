import express from 'express';
import { testRouter } from '../routes/v1/tests';
const app = express();

app.use(testRouter);

app.listen(3000, function() {
    console.log(':rocket running on port 3000!');
})