import * as _3 from "./bank/v1beta1/authz";
import * as _4 from "./bank/v1beta1/bank";
import * as _5 from "./bank/v1beta1/genesis";
import * as _6 from "./bank/v1beta1/query";
import * as _7 from "./bank/v1beta1/tx";
import * as _8 from "./base/abci/v1beta1/abci";
import * as _9 from "./base/query/v1beta1/pagination";
import * as _10 from "./base/reflection/v2alpha1/reflection";
import * as _11 from "./base/v1beta1/coin";
import * as _12 from "./crypto/ed25519/keys";
import * as _13 from "./crypto/hd/v1/hd";
import * as _14 from "./crypto/keyring/v1/record";
import * as _15 from "./crypto/multisig/keys";
import * as _16 from "./crypto/secp256k1/keys";
import * as _17 from "./crypto/secp256r1/keys";
import * as _18 from "./distribution/v1beta1/distribution";
import * as _19 from "./distribution/v1beta1/genesis";
import * as _20 from "./distribution/v1beta1/query";
import * as _21 from "./distribution/v1beta1/tx";
import * as _22 from "./gov/v1/genesis";
import * as _23 from "./gov/v1/gov";
import * as _24 from "./gov/v1/query";
import * as _25 from "./gov/v1/tx";
import * as _26 from "./gov/v1beta1/genesis";
import * as _27 from "./gov/v1beta1/gov";
import * as _28 from "./gov/v1beta1/query";
import * as _29 from "./gov/v1beta1/tx";
import * as _30 from "./mint/v1beta1/genesis";
import * as _31 from "./mint/v1beta1/mint";
import * as _32 from "./mint/v1beta1/query";
import * as _33 from "./staking/v1beta1/authz";
import * as _34 from "./staking/v1beta1/genesis";
import * as _35 from "./staking/v1beta1/query";
import * as _36 from "./staking/v1beta1/staking";
import * as _37 from "./staking/v1beta1/tx";
import * as _38 from "./tx/signing/v1beta1/signing";
import * as _39 from "./tx/v1beta1/service";
import * as _40 from "./tx/v1beta1/tx";
import * as _93 from "./bank/v1beta1/query.rpc.query";
import * as _94 from "./distribution/v1beta1/query.rpc.query";
import * as _95 from "./gov/v1/query.rpc.query";
import * as _96 from "./gov/v1beta1/query.rpc.query";
import * as _97 from "./mint/v1beta1/query.rpc.query";
import * as _98 from "./staking/v1beta1/query.rpc.query";
import * as _99 from "./tx/v1beta1/service.rpc.svc";
import * as _100 from "./bank/v1beta1/tx.rpc.msg";
import * as _101 from "./distribution/v1beta1/tx.rpc.msg";
import * as _102 from "./gov/v1/tx.rpc.msg";
import * as _103 from "./gov/v1beta1/tx.rpc.msg";
import * as _104 from "./staking/v1beta1/tx.rpc.msg";
import * as _117 from "./rpc.query";
import * as _118 from "./rpc.tx";
export namespace cosmos {
  export namespace bank {
    export const v1beta1 = { ..._3,
      ..._4,
      ..._5,
      ..._6,
      ..._7,
      ..._93,
      ..._100
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = { ..._8
      };
    }
    export namespace query {
      export const v1beta1 = { ..._9
      };
    }
    export namespace reflection {
      export const v2alpha1 = { ..._10
      };
    }
    export const v1beta1 = { ..._11
    };
  }
  export namespace crypto {
    export const ed25519 = { ..._12
    };
    export namespace hd {
      export const v1 = { ..._13
      };
    }
    export namespace keyring {
      export const v1 = { ..._14
      };
    }
    export const multisig = { ..._15
    };
    export const secp256k1 = { ..._16
    };
    export const secp256r1 = { ..._17
    };
  }
  export namespace distribution {
    export const v1beta1 = { ..._18,
      ..._19,
      ..._20,
      ..._21,
      ..._94,
      ..._101
    };
  }
  export namespace gov {
    export const v1 = { ..._22,
      ..._23,
      ..._24,
      ..._25,
      ..._95,
      ..._102
    };
    export const v1beta1 = { ..._26,
      ..._27,
      ..._28,
      ..._29,
      ..._96,
      ..._103
    };
  }
  export namespace mint {
    export const v1beta1 = { ..._30,
      ..._31,
      ..._32,
      ..._97
    };
  }
  export namespace staking {
    export const v1beta1 = { ..._33,
      ..._34,
      ..._35,
      ..._36,
      ..._37,
      ..._98,
      ..._104
    };
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = { ..._38
      };
    }
    export const v1beta1 = { ..._39,
      ..._40,
      ..._99
    };
  }
  export const ClientFactory = { ..._117,
    ..._118
  };
}