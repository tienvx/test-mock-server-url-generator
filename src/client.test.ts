import { PactV3, MatchersV3, V3MockServer, SpecificationVersion } from '@pact-foundation/pact';
import { describe, it, expect } from 'vitest';

import { Client } from './client';

const { eachLike, url2 } = MatchersV3;

const provider = new PactV3({
    dir: `${__dirname}/../pacts`,
    consumer: 'MyConsumer',
    provider: 'MyProvider',
    spec: SpecificationVersion.SPECIFICATION_VERSION_V4,
});

describe('GET /urls', () => {
    it('returns an HTTP 200 and a list of urls', async () => {
        provider
            .given('I have a list of urls')
            .uponReceiving('a request for all urls')
            .withRequest({
                method: 'GET',
                path: '/urls',
                headers: { Accept: 'application/json' },
            })
            .willRespondWith({
                status: 200,
                headers: { 'Content-Type': 'application/json' },
                body: {
                    urls: eachLike({
                        url: url2(null, ['example/path'])
                    })
                },
            });

        await provider.executeTest(async (mockserver: V3MockServer) => {
            const client = new Client(mockserver.url);
            const response = await client.getUrls()

            expect(response).to.deep.eq({
                urls: [
                    {
                        url: `${mockserver.url}/example/path`
                    }
                ]
            });
        });
    });
});
