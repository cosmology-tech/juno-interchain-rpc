import * as _1 from "./bank/v1beta1/authz";
import * as _2 from "./bank/v1beta1/bank";
import * as _3 from "./bank/v1beta1/genesis";
import * as _4 from "./bank/v1beta1/query";
import * as _5 from "./bank/v1beta1/tx";
import * as _6 from "./base/abci/v1beta1/abci";
import * as _7 from "./base/query/v1beta1/pagination";
import * as _8 from "./base/reflection/v2alpha1/reflection";
import * as _9 from "./base/v1beta1/coin";
import * as _10 from "./crypto/ed25519/keys";
import * as _11 from "./crypto/hd/v1/hd";
import * as _12 from "./crypto/keyring/v1/record";
import * as _13 from "./crypto/multisig/keys";
import * as _14 from "./crypto/secp256k1/keys";
import * as _15 from "./crypto/secp256r1/keys";
import * as _16 from "./distribution/v1beta1/distribution";
import * as _17 from "./distribution/v1beta1/genesis";
import * as _18 from "./distribution/v1beta1/query";
import * as _19 from "./distribution/v1beta1/tx";
import * as _20 from "./gov/v1/genesis";
import * as _21 from "./gov/v1/gov";
import * as _22 from "./gov/v1/query";
import * as _23 from "./gov/v1/tx";
import * as _24 from "./gov/v1beta1/genesis";
import * as _25 from "./gov/v1beta1/gov";
import * as _26 from "./gov/v1beta1/query";
import * as _27 from "./gov/v1beta1/tx";
import * as _28 from "./mint/v1beta1/genesis";
import * as _29 from "./mint/v1beta1/mint";
import * as _30 from "./mint/v1beta1/query";
import * as _31 from "./staking/v1beta1/authz";
import * as _32 from "./staking/v1beta1/genesis";
import * as _33 from "./staking/v1beta1/query";
import * as _34 from "./staking/v1beta1/staking";
import * as _35 from "./staking/v1beta1/tx";
import * as _36 from "./tx/signing/v1beta1/signing";
import * as _37 from "./tx/v1beta1/service";
import * as _38 from "./tx/v1beta1/tx";
import * as _59 from "./bank/v1beta1/query.rpc.query";
import * as _60 from "./distribution/v1beta1/query.rpc.query";
import * as _61 from "./gov/v1/query.rpc.query";
import * as _62 from "./gov/v1beta1/query.rpc.query";
import * as _63 from "./mint/v1beta1/query.rpc.query";
import * as _64 from "./staking/v1beta1/query.rpc.query";
import * as _65 from "./tx/v1beta1/service.rpc.svc";
import * as _66 from "./bank/v1beta1/tx.rpc.msg";
import * as _67 from "./distribution/v1beta1/tx.rpc.msg";
import * as _68 from "./gov/v1/tx.rpc.msg";
import * as _69 from "./gov/v1beta1/tx.rpc.msg";
import * as _70 from "./staking/v1beta1/tx.rpc.msg";
import * as _72 from "./rpc.query";
import * as _73 from "./rpc.tx";
export namespace cosmos {
  export namespace bank {
    export const v1beta1 = { ..._1,
      ..._2,
      ..._3,
      ..._4,
      ..._5,
      ..._59,
      ..._66
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = { ..._6
      };
    }
    export namespace query {
      export const v1beta1 = { ..._7
      };
    }
    export namespace reflection {
      export const v2alpha1 = { ..._8
      };
    }
    export const v1beta1 = { ..._9
    };
  }
  export namespace crypto {
    export const ed25519 = { ..._10
    };
    export namespace hd {
      export const v1 = { ..._11
      };
    }
    export namespace keyring {
      export const v1 = { ..._12
      };
    }
    export const multisig = { ..._13
    };
    export const secp256k1 = { ..._14
    };
    export const secp256r1 = { ..._15
    };
  }
  export namespace distribution {
    export const v1beta1 = { ..._16,
      ..._17,
      ..._18,
      ..._19,
      ..._60,
      ..._67
    };
  }
  export namespace gov {
    export const v1 = { ..._20,
      ..._21,
      ..._22,
      ..._23,
      ..._61,
      ..._68
    };
    export const v1beta1 = { ..._24,
      ..._25,
      ..._26,
      ..._27,
      ..._62,
      ..._69
    };
  }
  export namespace mint {
    export const v1beta1 = { ..._28,
      ..._29,
      ..._30,
      ..._63
    };
  }
  export namespace staking {
    export const v1beta1 = { ..._31,
      ..._32,
      ..._33,
      ..._34,
      ..._35,
      ..._64,
      ..._70
    };
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = { ..._36
      };
    }
    export const v1beta1 = { ..._37,
      ..._38,
      ..._65
    };
  }
  export const ClientFactory = { ..._72,
    ..._73
  };
}