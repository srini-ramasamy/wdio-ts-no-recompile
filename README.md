# wdio-ts-no-recompile

[![Greenkeeper badge](https://badges.greenkeeper.io/joscha/wdio-ts-no-recompile.svg)](https://greenkeeper.io/)


Example repository to show that the default `local` runner from `wdio` performs poorly with transpiled languages (e.g. Typescript).
Run `yarn test` to see three outputs of transpilation processes:
* one for loading the `wdio.conf.ts`
* one for loading the repository for `1.feature`
* one for loading the repository for `2.feature`

Adding more feature files means adding more transpilation steps; e.g. for `n` features I want to run I get `n + 1` transpilation steps.

Ideally this would only be a single transpile; or possibly two (one for the bootstrapping of wdio itself and one for all feature files).
