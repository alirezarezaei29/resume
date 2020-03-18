import axios from 'axios';
import * as apiUrls from './urls';

class LoginApi {
  static async login(credentials) {
    const config = {
      timeout: 10000,
      mode: 'cors',
      headers:
            {
              'Content-Type': 'application/json',
            },
    };

    const response = await axios.post(apiUrls.LOGIN, JSON.stringify({
      username: credentials.username,
      password: credentials.password,
    }), config);
    return response;
  }
}

export default LoginApi;
