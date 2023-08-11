# Test MockServerURL Generator

This is a demo project for this [bug](https://github.com/pact-foundation/pact-stub-server/issues/55)

# Usage

Commands to run:

```shell
yarn install
yarn test
yarn start-stub-server
yarn run request # Expect no 'connection refused' error
# yarn stop-stub-server
```

# Explain

See [Slack discussion](https://pact-foundation.slack.com/archives/CA2S7E6KC/p1682530823430519)

The idea is: `url2` allow argument value for the `basePath` parameter to be empty. In that case, it use `MockServerURL` generator.

That generator work fine with **contract** tests, because mock server support it.

But it does not work with **integration** tests, because stub server doesn't support it.

That's why when we run `yarn run request` (simulate integration test), it throw `ECONNREFUSED` error, because the base url was wrong (not stub server's base url).
