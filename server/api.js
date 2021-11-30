import axios from 'axios';
import hltb from 'howlongtobeat';

const hltbService = new hltb.HowLongToBeatService();

const baseUrlRAWG = 'https://api.rawg.io/api/';
const baseUrlIGDB = 'https://api.igdb.com/v4/';

export const getGameRawg = async (req, res) => {
  //const { searchQuery } = req.body;
  const searchQuery = 'skyrim';
  const data = await axios.get(`${baseUrlRAWG}games?search=${searchQuery}&key=${process.env.RAWG_KEY}`)
  console.log(data.data.results);
  const result = data.data.results.map(game => {
    return({
      name: game.name,
      platforms: game.platforms.map(platform => platform.platform.name),
      year: game.released,
      genre: game.genres.map(genre => genre.name),
      background_image: game.background_image,
    })})[0];
  res.send(result);
};

export const getGameIgdb = async (req, res) => {
  const accessToken = await axios.post(`https://id.twitch.tv/oauth2/token?client_id=${process.env.IGDB_CLIENT_ID}&client_secret=${process.env.IGDB_CLIENT_SECRET}&grant_type=client_credentials`);

  const data = await axios({
    url: "https://api.igdb.com/v4/games",
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Client-ID': process.env.IGDB_CLIENT_ID,
        'Authorization': `Bearer ${accessToken.data.access_token}`,
    },
    data: "fields age_ratings,aggregated_rating,aggregated_rating_count,alternative_names,artworks,bundles,category,checksum,collection,cover,created_at,dlcs,expanded_games,expansions,external_games,first_release_date,follows,forks,franchise,franchises,game_engines,game_modes,genres,hypes,involved_companies,keywords,multiplayer_modes,name,parent_game,platforms,player_perspectives,ports,rating,rating_count,release_dates,remakes,remasters,screenshots,similar_games,slug,standalone_expansions,status,storyline,summary,tags,themes,total_rating,total_rating_count,updated_at,url,version_parent,version_title,videos,websites;"
    });

  res.send(data.data);
};

export const getGameHowLong = async (req, res) => {
  //const { searchQuery } = req.body;
  const searchQuery = 'skyrim';
  const data = await hltbService.search(`${searchQuery}`);
  const results = data.sort((a, b) => b.similarity - a.similarity)
                      .map(game => {
                        return({
                          name: game.name,
                          gameplayMain: game.gameplayMain,
                          gameplayMainExtra: game.gameplayMainExtra,
                          gameplayCompletionist: game.gameplayCompletionist,
                        })
                      });
  res.send(results);
};
