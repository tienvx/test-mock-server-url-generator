import axios from 'axios'

export class Client {
    serverUrl: string
    constructor(serverUrl: string) {
        this.serverUrl = serverUrl;
    }
    async getUrls() {
        return axios
          .get(this.serverUrl + '/urls', {
            headers: {
              Accept: 'application/json',
            },
          })
          .then((response) => {
            console.log(response.data);
            return response.data;
          })
          .catch((error) => {
            console.log('get urls error', error.message);
            return Promise.reject(error);
          });
    }
    async requestUrl(url: string) {
        return axios
          .get(url, {
            headers: {
              Accept: 'application/json',
            },
          })
          .then((response) => {
            console.log(response.data);
            return response.data;
          })
          .catch((error) => {
            console.log('request error', error.message);
            return Promise.reject(error);
          });
    }
}
