import * as _47 from "./applications/fee/v1/ack";
import * as _48 from "./applications/fee/v1/fee";
import * as _49 from "./applications/fee/v1/genesis";
import * as _50 from "./applications/fee/v1/metadata";
import * as _51 from "./applications/fee/v1/query";
import * as _52 from "./applications/fee/v1/tx";
import * as _53 from "./applications/interchain_accounts/controller/v1/controller";
import * as _54 from "./applications/interchain_accounts/controller/v1/query";
import * as _55 from "./applications/interchain_accounts/controller/v1/tx";
import * as _56 from "./applications/interchain_accounts/genesis/v1/genesis";
import * as _57 from "./applications/interchain_accounts/host/v1/host";
import * as _58 from "./applications/interchain_accounts/host/v1/query";
import * as _59 from "./applications/interchain_accounts/v1/account";
import * as _60 from "./applications/interchain_accounts/v1/metadata";
import * as _61 from "./applications/interchain_accounts/v1/packet";
import * as _62 from "./applications/transfer/v1/genesis";
import * as _63 from "./applications/transfer/v1/query";
import * as _64 from "./applications/transfer/v1/transfer";
import * as _65 from "./applications/transfer/v1/tx";
import * as _66 from "./applications/transfer/v2/packet";
import * as _67 from "./core/channel/v1/channel";
import * as _68 from "./core/channel/v1/genesis";
import * as _69 from "./core/channel/v1/query";
import * as _70 from "./core/channel/v1/tx";
import * as _71 from "./core/client/v1/client";
import * as _72 from "./core/client/v1/genesis";
import * as _73 from "./core/client/v1/query";
import * as _74 from "./core/client/v1/tx";
import * as _75 from "./core/commitment/v1/commitment";
import * as _76 from "./lightclients/solomachine/v2/solomachine";
import * as _77 from "./lightclients/solomachine/v3/solomachine";
import * as _78 from "./lightclients/tendermint/v1/tendermint";
import * as _105 from "./applications/fee/v1/query.rpc.query";
import * as _106 from "./applications/interchain_accounts/controller/v1/query.rpc.query";
import * as _107 from "./applications/interchain_accounts/host/v1/query.rpc.query";
import * as _108 from "./applications/transfer/v1/query.rpc.query";
import * as _109 from "./core/channel/v1/query.rpc.query";
import * as _110 from "./core/client/v1/query.rpc.query";
import * as _111 from "./applications/fee/v1/tx.rpc.msg";
import * as _112 from "./applications/interchain_accounts/controller/v1/tx.rpc.msg";
import * as _113 from "./applications/transfer/v1/tx.rpc.msg";
import * as _114 from "./core/channel/v1/tx.rpc.msg";
import * as _115 from "./core/client/v1/tx.rpc.msg";
import * as _119 from "./rpc.query";
import * as _120 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace fee {
      export const v1 = { ..._47,
        ..._48,
        ..._49,
        ..._50,
        ..._51,
        ..._52,
        ..._105,
        ..._111
      };
    }
    export namespace interchain_accounts {
      export namespace controller {
        export const v1 = { ..._53,
          ..._54,
          ..._55,
          ..._106,
          ..._112
        };
      }
      export namespace genesis {
        export const v1 = { ..._56
        };
      }
      export namespace host {
        export const v1 = { ..._57,
          ..._58,
          ..._107
        };
      }
      export const v1 = { ..._59,
        ..._60,
        ..._61
      };
    }
    export namespace transfer {
      export const v1 = { ..._62,
        ..._63,
        ..._64,
        ..._65,
        ..._108,
        ..._113
      };
      export const v2 = { ..._66
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = { ..._67,
        ..._68,
        ..._69,
        ..._70,
        ..._109,
        ..._114
      };
    }
    export namespace client {
      export const v1 = { ..._71,
        ..._72,
        ..._73,
        ..._74,
        ..._110,
        ..._115
      };
    }
    export namespace commitment {
      export const v1 = { ..._75
      };
    }
  }
  export namespace lightclients {
    export namespace solomachine {
      export const v2 = { ..._76
      };
      export const v3 = { ..._77
      };
    }
    export namespace tendermint {
      export const v1 = { ..._78
      };
    }
  }
  export const ClientFactory = { ..._119,
    ..._120
  };
}