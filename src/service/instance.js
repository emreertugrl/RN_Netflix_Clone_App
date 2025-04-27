import axios from 'axios';
import Config from 'react-native-config';
import {BASE_URL} from './urls';

const apiKey = Config.IMDB_API_KEY;
const apiToken = Config.IMDB_API_TOKEN;

const Client = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${apiToken}`,
  },
  params: {
    api_key: apiKey,
    language: 'en-EN',
  },
});

export default Client;
