import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': 'da1ae12421msh4035fd6f0031809p16edadjsn0a6a810f00f9' ,
    },
  });
    
  return data;
}