import axios from 'axios';

const API_URL = 'http://192.168.1.5:8000/api/clientes';

export const createCliente = (cliente) =>
  axios.post(API_URL, cliente, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  });

export const getClientes = () =>
  axios.get(API_URL, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  }).then(res => res.data);
