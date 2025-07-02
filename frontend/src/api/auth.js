import axios from 'axios';

const API_URL = 'http://192.168.1.5:8000'; // cambia por la IP de tu backend

export const login = async (username, password) => {
  const response = await axios.post(`${API_URL}/login`, new URLSearchParams({
    username,
    password
  }), {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
  });

  return response.data;
};
