import express from 'express';
import { getGame } from './api.js';
import { config } from 'dotenv';

config();

const app = express();

app.get('/game', getGame);

app.listen(4000, () => console.log('App is running on port 4000'));
