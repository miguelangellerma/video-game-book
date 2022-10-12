const API_KEY = "a2bb4511c7b2410895f09afa44233447";
const RAWG_KEY = "c542e67aec3a4340908f9de9e86038af";
const BASE_URL = `https://api.rawg.io/api/`;

export const getGameList = async (page, order) => {
  const response = await fetch(`${BASE_URL}games?key=${RAWG_KEY}&ordering=${order}&page=${page}&page_size=100`);
  return await response.json();
};

export const getGameDetail = async gameId => {
  const response = await fetch(`${BASE_URL}games/${gameId}?key=${RAWG_KEY}`);
  return await response.json();
};

export const getGameDetailScreenshots = async gameId => {
  const response = await fetch(`${BASE_URL}games/${gameId}/screenshots?key=${RAWG_KEY}`);
  return await response.json();
};

export const getGameSearchList = async query => {
  const response = await fetch(`${BASE_URL}games?page_size=10&search=${query}&page=1&key=${RAWG_KEY}`);
  return await response.json();
};
