import axios from 'axios';

const baseUrl = 'https://api.rawg.io/api/';

export const getGame = async (req, res) => {
  //const { searchQuery } = req.body;
  const searchQuery = 'skyrim';
  const data = await axios.get(`${baseUrl}games?search=${searchQuery}&key=${process.env.RAWG_KEY}`)
  console.log(data.data.results);
  res.send('Connected');
};
