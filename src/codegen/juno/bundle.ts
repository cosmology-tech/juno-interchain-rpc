import * as _79 from "./mint/genesis";
import * as _80 from "./mint/mint";
import * as _81 from "./mint/query";
import * as _116 from "./mint/query.rpc.query";
import * as _121 from "./rpc.query";
export namespace juno {
  export const mint = { ..._79,
    ..._80,
    ..._81,
    ..._116
  };
  export const ClientFactory = { ..._121
  };
}