import axios from 'axios';
import * as apiUrls from './urls';

class ModalApi {
  static async eaManagers(credentials, type) {
    const retrievedObject = localStorage.getItem('user_info');
    const info = JSON.parse(retrievedObject);
    const secretKey = info.secret_key;
    const config = {
      timeout: 10000,
      mode: 'cors',
      headers:
      {
        'Content-Type': 'application/json',
        'Secret-Key': secretKey,
      },
    };
    if (type === 'edit') {
      const url = apiUrls.MANAGER + credentials.username;
      const response = await axios.put(url, JSON.stringify({
        name: credentials.name,
        password: credentials.password,
        permissions: credentials.permissions,
        notifications: credentials.notifications,
      }), config);
      return response;
    }
    const response = await axios.post(apiUrls.MANAGERS, JSON.stringify({
      name: credentials.name,
      username: credentials.username,
      password: credentials.password,
      permissions: credentials.permissions,
      notifications: credentials.notifications,
    }), config);
    return response;
  }
}

export default ModalApi;
