import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const reportIssue = async (issue) => {
  const response = await axios.post(`${API_URL}/issues/report`, issue);
  return response.data;
};

export const getCityServices = async () => {
  const response = await axios.get(`${API_URL}/services`);
  return response.data;
};

export const getRealTimeData = async () => {
  const response = await axios.get(`${API_URL}/data`);
  return response.data;
};

