import axios from 'axios';

const api = axios.create({
  //MacOS
  // baseURL: 'http://localhost:3000',
  //Emulador do Android
  // baseURL: 'http://10.0.2.2:3000',
  //Android
  // baseURL: 'http://10.0.3.2:3000',
  //usb
  baseURL: 'http://192.168.0.6:3000',
});

export default api;
