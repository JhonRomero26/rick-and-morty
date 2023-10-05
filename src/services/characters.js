import { API } from "../utils/contants";

export const getCharacters = async ({ query }) => {
  let result = [];
  const url = new URL(`${API}/character`);
  if (query !== undefined) {
    Object.entries(query).forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });
  }

  try {
    const res = await fetch(url.toString());
    const data = await res.json();
    result = data;
  } catch (err) {
    console.error(error);
  }

  return result;
};
