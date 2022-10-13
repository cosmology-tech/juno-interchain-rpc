import * as _48 from "./abci/types";
import * as _49 from "./crypto/keys";
import * as _50 from "./crypto/proof";
import * as _51 from "./libs/bits/types";
import * as _52 from "./p2p/types";
import * as _53 from "./types/block";
import * as _54 from "./types/evidence";
import * as _55 from "./types/params";
import * as _56 from "./types/types";
import * as _57 from "./types/validator";
import * as _58 from "./version/types";
export namespace tendermint {
  export const abci = { ..._48
  };
  export const crypto = { ..._49,
    ..._50
  };
  export namespace libs {
    export const bits = { ..._51
    };
  }
  export const p2p = { ..._52
  };
  export const types = { ..._53,
    ..._54,
    ..._55,
    ..._56,
    ..._57
  };
  export const version = { ..._58
  };
}