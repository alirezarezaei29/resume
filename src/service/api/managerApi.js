import axios from 'axios';
import * as apiUrls from './urls';

class ManagerApi {
  static async getManagers(pageNumber) {
    const retrievedObject = localStorage.getItem('user_info');
    const info = JSON.parse(retrievedObject);
    const secretKey = info.secret_key;
    const config = {
      timeout: 10000,
      mode: 'cors',
      headers:
            {
              'Secret-Key': secretKey,
            },
      params: {
        page: pageNumber,
      },
    };
  
    const response = await axios.get(apiUrls.MANAGERS, config);
    return response;
  }

  static async getOne(username) {
    const retrievedObject = localStorage.getItem('user_info');
    const info = JSON.parse(retrievedObject);
    const secretKey = info.secret_key;

    const config = {
      timeout: 10000,
      mode: 'cors',
      headers:
            {
              'Secret-Key': secretKey,
            },
    };

    const response = await axios.get(apiUrls.MANAGER + username, config);
    return response;
  }
}

export default ManagerApi;
