# daodao

<p align="center">
  <a href="https://github.com/cosmology-tech/daodao">
    <img width="150" src="https://user-images.githubusercontent.com/545047/195505140-95d21dd6-12bc-4438-aa0c-02b93f493873.svg">
  </a>
</p>

<p align="center" width="100%">
   <a href="https://github.com/cosmology-tech/daodao/blob/main/LICENSE"><img height="20" src="https://img.shields.io/badge/license-BSD-blue.svg"></a>
   <a href="https://www.npmjs.com/package/osmojs"><img height="20" src="https://img.shields.io/github/package-json/v/cosmology-tech/daodao"></a>
</p>

[DaoDaoJS](https://github.com/cosmology-tech/daodao) provides simple, capable, and free DAO tooling. 

---
## install

```sh
npm install daodao
```

## Table of contents

- [DaoDao](#daodao)
  - [Install](#install)
  - [Table of contents](#table-of-contents)
- [Usage](#usage)
    - [RPC Clients](#rpc-clients)
- [Developing](#developing)
- [Credits](#credits)

## Usage

### RPC Clients

```js
import { juno } from 'daodao';

const { createRPCQueryClient } = juno.ClientFactory;
const client = await createRPCQueryClient({ rpcEndpoint: RPC_ENDPOINT });

// now you can query the cosmos modules
const balance = await client.cosmos.bank.v1beta1
    .allBalances({ address: 'juno1addresshere' });

// you can also query params
const response = await client.juno.mint.params();
response.params.blocksPerYear
```

** Every RPC endpoint is available! Simply use vscode or another tool to visually explore through autocomplete all of the RPC endpoints available on the `RPCQueryClient`!

## Developing

When first cloning the repo:

```
yarn
yarn build
```

### Publishing

Build the types and then publish:

```
yarn build:ts
yarn publish
```

## Credits

🛠 Built by Cosmology — if you like our tools, please consider delegating to [our validator ⚛️](https://cosmology.tech/validator)

Code built with the help of these related projects:

* [@cosmwasm/ts-codegen](https://github.com/CosmWasm/ts-codegen) for generated CosmWasm contract Typescript classes
* [@osmonauts/telescope](https://github.com/osmosis-labs/telescope) a "babel for the Cosmos", Telescope is a TypeScript Transpiler for Cosmos Protobufs.
* [cosmos-kit](https://github.com/cosmology-tech/cosmos-kit) A wallet connector for the Cosmos ⚛️

## Disclaimer

AS DESCRIBED IN THE LICENSES, THE SOFTWARE IS PROVIDED “AS IS”, AT YOUR OWN RISK, AND WITHOUT WARRANTIES OF ANY KIND.

No developer or entity involved in creating this software will be liable for any claims or damages whatsoever associated with your use, inability to use, or your interaction with other users of the code, including any direct, indirect, incidental, special, exemplary, punitive or consequential damages, or loss of profits, cryptocurrencies, tokens, or anything else of value.
