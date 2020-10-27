import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 2zF73042aqD19ov7rNWC2fnhgj5x9TOFjOsckyH2uAk'
  }
});
