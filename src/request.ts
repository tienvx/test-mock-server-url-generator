import { Client } from '../src/client';

const request = async () => {
    const client = new Client('http://127.0.0.1:8001');
    const response = await client.getUrls();
    return await client.requestUrl(response.urls[0].url);
};

const response = request();
console.log(response);
