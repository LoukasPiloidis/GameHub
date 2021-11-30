import express from 'express';
import { getGameRawg, getGameIgdb, getGameHowLong } from './api.js';
import { config } from 'dotenv';

config();

const app = express();

app.get('/game', getGameRawg);
app.get('/game/igdb', getGameIgdb);
app.get('/game/how', getGameHowLong);

app.listen(4000, () => console.log('App is running on port 4000'));
