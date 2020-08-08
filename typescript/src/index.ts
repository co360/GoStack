import express from 'express';

const app = express();

import { user } from './routes';

app.get('/', user)

app.listen(3333)