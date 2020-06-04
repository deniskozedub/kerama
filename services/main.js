import { API_URL_MAIN } from '../enums/api';

const headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

export const getMainInfo = async () => {
  const response = await fetch(`${API_URL_MAIN}information`, { headers });
  const body = await response.json();
  return body;
};

export const sendUserData = async (bodyRequest) => {
  const response = await fetch(`${API_URL_MAIN}request`, {
    method: 'POST',
    body: JSON.stringify(bodyRequest),
    headers,
    mode: 'cors',
  });
  const body = await response.json();
  return body;
};
