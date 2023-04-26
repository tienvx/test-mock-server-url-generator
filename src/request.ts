import { Client } from '../src/client';

const request = async () => {
    const client = new Client('http://localhost:8001');
    let response = await client.getUrls();
    return await client.requestUrl(response.urls[0].url);
};

request();
