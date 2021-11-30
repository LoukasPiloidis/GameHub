import express from 'express';
import { getGames } from './api.js';
import { config } from 'dotenv';

config();

const app = express();

app.get('/api/games/:searchQuery', getGames);

app.listen(4000, () => console.log('App is running on port 4000'));
