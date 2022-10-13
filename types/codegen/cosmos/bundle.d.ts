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
export declare namespace cosmos {
    namespace bank {
        const v1beta1: {
            MsgClientImpl: typeof _66.MsgClientImpl;
            QueryClientImpl: typeof _59.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _4.QueryBalanceRequest): Promise<_4.QueryBalanceResponse>;
                allBalances(request: _4.QueryAllBalancesRequest): Promise<_4.QueryAllBalancesResponse>;
                spendableBalances(request: _4.QuerySpendableBalancesRequest): Promise<_4.QuerySpendableBalancesResponse>;
                totalSupply(request?: _4.QueryTotalSupplyRequest): Promise<_4.QueryTotalSupplyResponse>;
                supplyOf(request: _4.QuerySupplyOfRequest): Promise<_4.QuerySupplyOfResponse>;
                params(request?: _4.QueryParamsRequest): Promise<_4.QueryParamsResponse>;
                denomMetadata(request: _4.QueryDenomMetadataRequest): Promise<_4.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _4.QueryDenomsMetadataRequest): Promise<_4.QueryDenomsMetadataResponse>;
                denomOwners(request: _4.QueryDenomOwnersRequest): Promise<_4.QueryDenomOwnersResponse>;
            };
            MsgSend: {
                encode(message: _5.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.MsgSend;
                fromPartial(object: {
                    fromAddress?: string;
                    toAddress?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _5.MsgSend;
            };
            MsgSendResponse: {
                encode(_: _5.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.MsgSendResponse;
                fromPartial(_: {}): _5.MsgSendResponse;
            };
            MsgMultiSend: {
                encode(message: _5.MsgMultiSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.MsgMultiSend;
                fromPartial(object: {
                    inputs?: {
                        address?: string;
                        coins?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    outputs?: {
                        address?: string;
                        coins?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                }): _5.MsgMultiSend;
            };
            MsgMultiSendResponse: {
                encode(_: _5.MsgMultiSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.MsgMultiSendResponse;
                fromPartial(_: {}): _5.MsgMultiSendResponse;
            };
            QueryBalanceRequest: {
                encode(message: _4.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.QueryBalanceRequest;
                fromPartial(object: {
                    address?: string;
                    denom?: string;
                }): _4.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _4.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.QueryBalanceResponse;
                fromPartial(object: {
                    balance?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _4.QueryBalanceResponse;
            };
            QueryAllBalancesRequest: {
                encode(message: _4.QueryAllBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.QueryAllBalancesRequest;
                fromPartial(object: {
                    address?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _4.QueryAllBalancesRequest;
            };
            QueryAllBalancesResponse: {
                encode(message: _4.QueryAllBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.QueryAllBalancesResponse;
                fromPartial(object: {
                    balances?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _4.QueryAllBalancesResponse;
            };
            QuerySpendableBalancesRequest: {
                encode(message: _4.QuerySpendableBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.QuerySpendableBalancesRequest;
                fromPartial(object: {
                    address?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _4.QuerySpendableBalancesRequest;
            };
            QuerySpendableBalancesResponse: {
                encode(message: _4.QuerySpendableBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.QuerySpendableBalancesResponse;
                fromPartial(object: {
                    balances?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _4.QuerySpendableBalancesResponse;
            };
            QueryTotalSupplyRequest: {
                encode(message: _4.QueryTotalSupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.QueryTotalSupplyRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _4.QueryTotalSupplyRequest;
            };
            QueryTotalSupplyResponse: {
                encode(message: _4.QueryTotalSupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.QueryTotalSupplyResponse;
                fromPartial(object: {
                    supply?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _4.QueryTotalSupplyResponse;
            };
            QuerySupplyOfRequest: {
                encode(message: _4.QuerySupplyOfRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.QuerySupplyOfRequest;
                fromPartial(object: {
                    denom?: string;
                }): _4.QuerySupplyOfRequest;
            };
            QuerySupplyOfResponse: {
                encode(message: _4.QuerySupplyOfResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.QuerySupplyOfResponse;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _4.QuerySupplyOfResponse;
            };
            QueryParamsRequest: {
                encode(_: _4.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.QueryParamsRequest;
                fromPartial(_: {}): _4.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _4.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.QueryParamsResponse;
                fromPartial(object: {
                    params?: {
                        sendEnabled?: {
                            denom?: string;
                            enabled?: boolean;
                        }[];
                        defaultSendEnabled?: boolean;
                    };
                }): _4.QueryParamsResponse;
            };
            QueryDenomsMetadataRequest: {
                encode(message: _4.QueryDenomsMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.QueryDenomsMetadataRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _4.QueryDenomsMetadataRequest;
            };
            QueryDenomsMetadataResponse: {
                encode(message: _4.QueryDenomsMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.QueryDenomsMetadataResponse;
                fromPartial(object: {
                    metadatas?: {
                        description?: string;
                        denomUnits?: {
                            denom?: string;
                            exponent?: number;
                            aliases?: string[];
                        }[];
                        base?: string;
                        display?: string;
                        name?: string;
                        symbol?: string;
                        uri?: string;
                        uriHash?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _4.QueryDenomsMetadataResponse;
            };
            QueryDenomMetadataRequest: {
                encode(message: _4.QueryDenomMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.QueryDenomMetadataRequest;
                fromPartial(object: {
                    denom?: string;
                }): _4.QueryDenomMetadataRequest;
            };
            QueryDenomMetadataResponse: {
                encode(message: _4.QueryDenomMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.QueryDenomMetadataResponse;
                fromPartial(object: {
                    metadata?: {
                        description?: string;
                        denomUnits?: {
                            denom?: string;
                            exponent?: number;
                            aliases?: string[];
                        }[];
                        base?: string;
                        display?: string;
                        name?: string;
                        symbol?: string;
                        uri?: string;
                        uriHash?: string;
                    };
                }): _4.QueryDenomMetadataResponse;
            };
            QueryDenomOwnersRequest: {
                encode(message: _4.QueryDenomOwnersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.QueryDenomOwnersRequest;
                fromPartial(object: {
                    denom?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _4.QueryDenomOwnersRequest;
            };
            DenomOwner: {
                encode(message: _4.DenomOwner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.DenomOwner;
                fromPartial(object: {
                    address?: string;
                    balance?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _4.DenomOwner;
            };
            QueryDenomOwnersResponse: {
                encode(message: _4.QueryDenomOwnersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.QueryDenomOwnersResponse;
                fromPartial(object: {
                    denomOwners?: {
                        address?: string;
                        balance?: {
                            denom?: string;
                            amount?: string;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _4.QueryDenomOwnersResponse;
            };
            GenesisState: {
                encode(message: _3.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.GenesisState;
                fromPartial(object: {
                    params?: {
                        sendEnabled?: {
                            denom?: string;
                            enabled?: boolean;
                        }[];
                        defaultSendEnabled?: boolean;
                    };
                    balances?: {
                        address?: string;
                        coins?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    supply?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    denomMetadata?: {
                        description?: string;
                        denomUnits?: {
                            denom?: string;
                            exponent?: number;
                            aliases?: string[];
                        }[];
                        base?: string;
                        display?: string;
                        name?: string;
                        symbol?: string;
                        uri?: string;
                        uriHash?: string;
                    }[];
                }): _3.GenesisState;
            };
            Balance: {
                encode(message: _3.Balance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.Balance;
                fromPartial(object: {
                    address?: string;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _3.Balance;
            };
            Params: {
                encode(message: _2.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.Params;
                fromPartial(object: {
                    sendEnabled?: {
                        denom?: string;
                        enabled?: boolean;
                    }[];
                    defaultSendEnabled?: boolean;
                }): _2.Params;
            };
            SendEnabled: {
                encode(message: _2.SendEnabled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.SendEnabled;
                fromPartial(object: {
                    denom?: string;
                    enabled?: boolean;
                }): _2.SendEnabled;
            };
            Input: {
                encode(message: _2.Input, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.Input;
                fromPartial(object: {
                    address?: string;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _2.Input;
            };
            Output: {
                encode(message: _2.Output, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.Output;
                fromPartial(object: {
                    address?: string;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _2.Output;
            };
            Supply: {
                encode(message: _2.Supply, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.Supply;
                fromPartial(object: {
                    total?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _2.Supply;
            };
            DenomUnit: {
                encode(message: _2.DenomUnit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.DenomUnit;
                fromPartial(object: {
                    denom?: string;
                    exponent?: number;
                    aliases?: string[];
                }): _2.DenomUnit;
            };
            Metadata: {
                encode(message: _2.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.Metadata;
                fromPartial(object: {
                    description?: string;
                    denomUnits?: {
                        denom?: string;
                        exponent?: number;
                        aliases?: string[];
                    }[];
                    base?: string;
                    display?: string;
                    name?: string;
                    symbol?: string;
                    uri?: string;
                    uriHash?: string;
                }): _2.Metadata;
            };
            SendAuthorization: {
                encode(message: _1.SendAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.SendAuthorization;
                fromPartial(object: {
                    spendLimit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _1.SendAuthorization;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    encode(message: _6.TxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.TxResponse;
                    fromPartial(object: {
                        height?: any;
                        txhash?: string;
                        codespace?: string;
                        code?: number;
                        data?: string;
                        rawLog?: string;
                        logs?: {
                            msgIndex?: number;
                            log?: string;
                            events?: {
                                type?: string;
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                }[];
                            }[];
                        }[];
                        info?: string;
                        gasWanted?: any;
                        gasUsed?: any;
                        tx?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        timestamp?: string;
                        events?: {
                            type?: string;
                            attributes?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                                index?: boolean;
                            }[];
                        }[];
                    }): _6.TxResponse;
                };
                ABCIMessageLog: {
                    encode(message: _6.ABCIMessageLog, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.ABCIMessageLog;
                    fromPartial(object: {
                        msgIndex?: number;
                        log?: string;
                        events?: {
                            type?: string;
                            attributes?: {
                                key?: string;
                                value?: string;
                            }[];
                        }[];
                    }): _6.ABCIMessageLog;
                };
                StringEvent: {
                    encode(message: _6.StringEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.StringEvent;
                    fromPartial(object: {
                        type?: string;
                        attributes?: {
                            key?: string;
                            value?: string;
                        }[];
                    }): _6.StringEvent;
                };
                Attribute: {
                    encode(message: _6.Attribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.Attribute;
                    fromPartial(object: {
                        key?: string;
                        value?: string;
                    }): _6.Attribute;
                };
                GasInfo: {
                    encode(message: _6.GasInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.GasInfo;
                    fromPartial(object: {
                        gasWanted?: any;
                        gasUsed?: any;
                    }): _6.GasInfo;
                };
                Result: {
                    encode(message: _6.Result, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.Result;
                    fromPartial(object: {
                        data?: Uint8Array;
                        log?: string;
                        events?: {
                            type?: string;
                            attributes?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                                index?: boolean;
                            }[];
                        }[];
                        msgResponses?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                    }): _6.Result;
                };
                SimulationResponse: {
                    encode(message: _6.SimulationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.SimulationResponse;
                    fromPartial(object: {
                        gasInfo?: {
                            gasWanted?: any;
                            gasUsed?: any;
                        };
                        result?: {
                            data?: Uint8Array;
                            log?: string;
                            events?: {
                                type?: string;
                                attributes?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                    index?: boolean;
                                }[];
                            }[];
                            msgResponses?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                        };
                    }): _6.SimulationResponse;
                };
                MsgData: {
                    encode(message: _6.MsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.MsgData;
                    fromPartial(object: {
                        msgType?: string;
                        data?: Uint8Array;
                    }): _6.MsgData;
                };
                TxMsgData: {
                    encode(message: _6.TxMsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.TxMsgData;
                    fromPartial(object: {
                        data?: {
                            msgType?: string;
                            data?: Uint8Array;
                        }[];
                        msgResponses?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                    }): _6.TxMsgData;
                };
                SearchTxsResult: {
                    encode(message: _6.SearchTxsResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.SearchTxsResult;
                    fromPartial(object: {
                        totalCount?: any;
                        count?: any;
                        pageNumber?: any;
                        pageTotal?: any;
                        limit?: any;
                        txs?: {
                            height?: any;
                            txhash?: string;
                            codespace?: string;
                            code?: number;
                            data?: string;
                            rawLog?: string;
                            logs?: {
                                msgIndex?: number;
                                log?: string;
                                events?: {
                                    type?: string;
                                    attributes?: {
                                        key?: string;
                                        value?: string;
                                    }[];
                                }[];
                            }[];
                            info?: string;
                            gasWanted?: any;
                            gasUsed?: any;
                            tx?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            timestamp?: string;
                            events?: {
                                type?: string;
                                attributes?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                    index?: boolean;
                                }[];
                            }[];
                        }[];
                    }): _6.SearchTxsResult;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    encode(message: _7.PageRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.PageRequest;
                    fromPartial(object: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    }): _7.PageRequest;
                };
                PageResponse: {
                    encode(message: _7.PageResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.PageResponse;
                    fromPartial(object: {
                        nextKey?: Uint8Array;
                        total?: any;
                    }): _7.PageResponse;
                };
            };
        }
        namespace reflection {
            const v2alpha1: {
                AppDescriptor: {
                    encode(message: _8.AppDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.AppDescriptor;
                    fromPartial(object: {
                        authn?: {
                            signModes?: {
                                name?: string;
                                number?: number;
                                authnInfoProviderMethodFullname?: string;
                            }[];
                        };
                        chain?: {
                            id?: string;
                        };
                        codec?: {
                            interfaces?: {
                                fullname?: string;
                                interfaceAcceptingMessages?: {
                                    fullname?: string;
                                    fieldDescriptorNames?: string[];
                                }[];
                                interfaceImplementers?: {
                                    fullname?: string;
                                    typeUrl?: string;
                                }[];
                            }[];
                        };
                        configuration?: {
                            bech32AccountAddressPrefix?: string;
                        };
                        queryServices?: {
                            queryServices?: {
                                fullname?: string;
                                isModule?: boolean;
                                methods?: {
                                    name?: string;
                                    fullQueryPath?: string;
                                }[];
                            }[];
                        };
                        tx?: {
                            fullname?: string;
                            msgs?: {
                                msgTypeUrl?: string;
                            }[];
                        };
                    }): _8.AppDescriptor;
                };
                TxDescriptor: {
                    encode(message: _8.TxDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.TxDescriptor;
                    fromPartial(object: {
                        fullname?: string;
                        msgs?: {
                            msgTypeUrl?: string;
                        }[];
                    }): _8.TxDescriptor;
                };
                AuthnDescriptor: {
                    encode(message: _8.AuthnDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.AuthnDescriptor;
                    fromPartial(object: {
                        signModes?: {
                            name?: string;
                            number?: number;
                            authnInfoProviderMethodFullname?: string;
                        }[];
                    }): _8.AuthnDescriptor;
                };
                SigningModeDescriptor: {
                    encode(message: _8.SigningModeDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.SigningModeDescriptor;
                    fromPartial(object: {
                        name?: string;
                        number?: number;
                        authnInfoProviderMethodFullname?: string;
                    }): _8.SigningModeDescriptor;
                };
                ChainDescriptor: {
                    encode(message: _8.ChainDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.ChainDescriptor;
                    fromPartial(object: {
                        id?: string;
                    }): _8.ChainDescriptor;
                };
                CodecDescriptor: {
                    encode(message: _8.CodecDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.CodecDescriptor;
                    fromPartial(object: {
                        interfaces?: {
                            fullname?: string;
                            interfaceAcceptingMessages?: {
                                fullname?: string;
                                fieldDescriptorNames?: string[];
                            }[];
                            interfaceImplementers?: {
                                fullname?: string;
                                typeUrl?: string;
                            }[];
                        }[];
                    }): _8.CodecDescriptor;
                };
                InterfaceDescriptor: {
                    encode(message: _8.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.InterfaceDescriptor;
                    fromPartial(object: {
                        fullname?: string;
                        interfaceAcceptingMessages?: {
                            fullname?: string;
                            fieldDescriptorNames?: string[];
                        }[];
                        interfaceImplementers?: {
                            fullname?: string;
                            typeUrl?: string;
                        }[];
                    }): _8.InterfaceDescriptor;
                };
                InterfaceImplementerDescriptor: {
                    encode(message: _8.InterfaceImplementerDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.InterfaceImplementerDescriptor;
                    fromPartial(object: {
                        fullname?: string;
                        typeUrl?: string;
                    }): _8.InterfaceImplementerDescriptor;
                };
                InterfaceAcceptingMessageDescriptor: {
                    encode(message: _8.InterfaceAcceptingMessageDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.InterfaceAcceptingMessageDescriptor;
                    fromPartial(object: {
                        fullname?: string;
                        fieldDescriptorNames?: string[];
                    }): _8.InterfaceAcceptingMessageDescriptor;
                };
                ConfigurationDescriptor: {
                    encode(message: _8.ConfigurationDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.ConfigurationDescriptor;
                    fromPartial(object: {
                        bech32AccountAddressPrefix?: string;
                    }): _8.ConfigurationDescriptor;
                };
                MsgDescriptor: {
                    encode(message: _8.MsgDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.MsgDescriptor;
                    fromPartial(object: {
                        msgTypeUrl?: string;
                    }): _8.MsgDescriptor;
                };
                GetAuthnDescriptorRequest: {
                    encode(_: _8.GetAuthnDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.GetAuthnDescriptorRequest;
                    fromPartial(_: {}): _8.GetAuthnDescriptorRequest;
                };
                GetAuthnDescriptorResponse: {
                    encode(message: _8.GetAuthnDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.GetAuthnDescriptorResponse;
                    fromPartial(object: {
                        authn?: {
                            signModes?: {
                                name?: string;
                                number?: number;
                                authnInfoProviderMethodFullname?: string;
                            }[];
                        };
                    }): _8.GetAuthnDescriptorResponse;
                };
                GetChainDescriptorRequest: {
                    encode(_: _8.GetChainDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.GetChainDescriptorRequest;
                    fromPartial(_: {}): _8.GetChainDescriptorRequest;
                };
                GetChainDescriptorResponse: {
                    encode(message: _8.GetChainDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.GetChainDescriptorResponse;
                    fromPartial(object: {
                        chain?: {
                            id?: string;
                        };
                    }): _8.GetChainDescriptorResponse;
                };
                GetCodecDescriptorRequest: {
                    encode(_: _8.GetCodecDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.GetCodecDescriptorRequest;
                    fromPartial(_: {}): _8.GetCodecDescriptorRequest;
                };
                GetCodecDescriptorResponse: {
                    encode(message: _8.GetCodecDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.GetCodecDescriptorResponse;
                    fromPartial(object: {
                        codec?: {
                            interfaces?: {
                                fullname?: string;
                                interfaceAcceptingMessages?: {
                                    fullname?: string;
                                    fieldDescriptorNames?: string[];
                                }[];
                                interfaceImplementers?: {
                                    fullname?: string;
                                    typeUrl?: string;
                                }[];
                            }[];
                        };
                    }): _8.GetCodecDescriptorResponse;
                };
                GetConfigurationDescriptorRequest: {
                    encode(_: _8.GetConfigurationDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.GetConfigurationDescriptorRequest;
                    fromPartial(_: {}): _8.GetConfigurationDescriptorRequest;
                };
                GetConfigurationDescriptorResponse: {
                    encode(message: _8.GetConfigurationDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.GetConfigurationDescriptorResponse;
                    fromPartial(object: {
                        config?: {
                            bech32AccountAddressPrefix?: string;
                        };
                    }): _8.GetConfigurationDescriptorResponse;
                };
                GetQueryServicesDescriptorRequest: {
                    encode(_: _8.GetQueryServicesDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.GetQueryServicesDescriptorRequest;
                    fromPartial(_: {}): _8.GetQueryServicesDescriptorRequest;
                };
                GetQueryServicesDescriptorResponse: {
                    encode(message: _8.GetQueryServicesDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.GetQueryServicesDescriptorResponse;
                    fromPartial(object: {
                        queries?: {
                            queryServices?: {
                                fullname?: string;
                                isModule?: boolean;
                                methods?: {
                                    name?: string;
                                    fullQueryPath?: string;
                                }[];
                            }[];
                        };
                    }): _8.GetQueryServicesDescriptorResponse;
                };
                GetTxDescriptorRequest: {
                    encode(_: _8.GetTxDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.GetTxDescriptorRequest;
                    fromPartial(_: {}): _8.GetTxDescriptorRequest;
                };
                GetTxDescriptorResponse: {
                    encode(message: _8.GetTxDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.GetTxDescriptorResponse;
                    fromPartial(object: {
                        tx?: {
                            fullname?: string;
                            msgs?: {
                                msgTypeUrl?: string;
                            }[];
                        };
                    }): _8.GetTxDescriptorResponse;
                };
                QueryServicesDescriptor: {
                    encode(message: _8.QueryServicesDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.QueryServicesDescriptor;
                    fromPartial(object: {
                        queryServices?: {
                            fullname?: string;
                            isModule?: boolean;
                            methods?: {
                                name?: string;
                                fullQueryPath?: string;
                            }[];
                        }[];
                    }): _8.QueryServicesDescriptor;
                };
                QueryServiceDescriptor: {
                    encode(message: _8.QueryServiceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.QueryServiceDescriptor;
                    fromPartial(object: {
                        fullname?: string;
                        isModule?: boolean;
                        methods?: {
                            name?: string;
                            fullQueryPath?: string;
                        }[];
                    }): _8.QueryServiceDescriptor;
                };
                QueryMethodDescriptor: {
                    encode(message: _8.QueryMethodDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.QueryMethodDescriptor;
                    fromPartial(object: {
                        name?: string;
                        fullQueryPath?: string;
                    }): _8.QueryMethodDescriptor;
                };
            };
        }
        const v1beta1: {
            Coin: {
                encode(message: _9.Coin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.Coin;
                fromPartial(object: {
                    denom?: string;
                    amount?: string;
                }): _9.Coin;
            };
            DecCoin: {
                encode(message: _9.DecCoin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.DecCoin;
                fromPartial(object: {
                    denom?: string;
                    amount?: string;
                }): _9.DecCoin;
            };
            IntProto: {
                encode(message: _9.IntProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.IntProto;
                fromPartial(object: {
                    int?: string;
                }): _9.IntProto;
            };
            DecProto: {
                encode(message: _9.DecProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.DecProto;
                fromPartial(object: {
                    dec?: string;
                }): _9.DecProto;
            };
        };
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                encode(message: _10.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.PubKey;
                fromPartial(object: {
                    key?: Uint8Array;
                }): _10.PubKey;
            };
            PrivKey: {
                encode(message: _10.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.PrivKey;
                fromPartial(object: {
                    key?: Uint8Array;
                }): _10.PrivKey;
            };
        };
        namespace hd {
            const v1: {
                BIP44Params: {
                    encode(message: _11.BIP44Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.BIP44Params;
                    fromPartial(object: {
                        purpose?: number;
                        coinType?: number;
                        account?: number;
                        change?: boolean;
                        addressIndex?: number;
                    }): _11.BIP44Params;
                };
            };
        }
        namespace keyring {
            const v1: {
                Record: {
                    encode(message: _12.Record, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.Record;
                    fromPartial(object: {
                        name?: string;
                        pubKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        local?: {
                            privKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            privKeyType?: string;
                        };
                        ledger?: {
                            path?: {
                                purpose?: number;
                                coinType?: number;
                                account?: number;
                                change?: boolean;
                                addressIndex?: number;
                            };
                        };
                        multi?: {};
                        offline?: {};
                    }): _12.Record;
                };
                Record_Local: {
                    encode(message: _12.Record_Local, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.Record_Local;
                    fromPartial(object: {
                        privKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        privKeyType?: string;
                    }): _12.Record_Local;
                };
                Record_Ledger: {
                    encode(message: _12.Record_Ledger, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.Record_Ledger;
                    fromPartial(object: {
                        path?: {
                            purpose?: number;
                            coinType?: number;
                            account?: number;
                            change?: boolean;
                            addressIndex?: number;
                        };
                    }): _12.Record_Ledger;
                };
                Record_Multi: {
                    encode(_: _12.Record_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.Record_Multi;
                    fromPartial(_: {}): _12.Record_Multi;
                };
                Record_Offline: {
                    encode(_: _12.Record_Offline, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.Record_Offline;
                    fromPartial(_: {}): _12.Record_Offline;
                };
            };
        }
        const multisig: {
            LegacyAminoPubKey: {
                encode(message: _13.LegacyAminoPubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.LegacyAminoPubKey;
                fromPartial(object: {
                    threshold?: number;
                    publicKeys?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                }): _13.LegacyAminoPubKey;
            };
        };
        const secp256k1: {
            PubKey: {
                encode(message: _14.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.PubKey;
                fromPartial(object: {
                    key?: Uint8Array;
                }): _14.PubKey;
            };
            PrivKey: {
                encode(message: _14.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.PrivKey;
                fromPartial(object: {
                    key?: Uint8Array;
                }): _14.PrivKey;
            };
        };
        const secp256r1: {
            PubKey: {
                encode(message: _15.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.PubKey;
                fromPartial(object: {
                    key?: Uint8Array;
                }): _15.PubKey;
            };
            PrivKey: {
                encode(message: _15.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.PrivKey;
                fromPartial(object: {
                    secret?: Uint8Array;
                }): _15.PrivKey;
            };
        };
    }
    namespace distribution {
        const v1beta1: {
            MsgClientImpl: typeof _67.MsgClientImpl;
            QueryClientImpl: typeof _60.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _18.QueryParamsRequest): Promise<_18.QueryParamsResponse>;
                validatorOutstandingRewards(request: _18.QueryValidatorOutstandingRewardsRequest): Promise<_18.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _18.QueryValidatorCommissionRequest): Promise<_18.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _18.QueryValidatorSlashesRequest): Promise<_18.QueryValidatorSlashesResponse>;
                delegationRewards(request: _18.QueryDelegationRewardsRequest): Promise<_18.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _18.QueryDelegationTotalRewardsRequest): Promise<_18.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _18.QueryDelegatorValidatorsRequest): Promise<_18.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _18.QueryDelegatorWithdrawAddressRequest): Promise<_18.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _18.QueryCommunityPoolRequest): Promise<_18.QueryCommunityPoolResponse>;
            };
            MsgSetWithdrawAddress: {
                encode(message: _19.MsgSetWithdrawAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.MsgSetWithdrawAddress;
                fromPartial(object: {
                    delegatorAddress?: string;
                    withdrawAddress?: string;
                }): _19.MsgSetWithdrawAddress;
            };
            MsgSetWithdrawAddressResponse: {
                encode(_: _19.MsgSetWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.MsgSetWithdrawAddressResponse;
                fromPartial(_: {}): _19.MsgSetWithdrawAddressResponse;
            };
            MsgWithdrawDelegatorReward: {
                encode(message: _19.MsgWithdrawDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.MsgWithdrawDelegatorReward;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                }): _19.MsgWithdrawDelegatorReward;
            };
            MsgWithdrawDelegatorRewardResponse: {
                encode(message: _19.MsgWithdrawDelegatorRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.MsgWithdrawDelegatorRewardResponse;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _19.MsgWithdrawDelegatorRewardResponse;
            };
            MsgWithdrawValidatorCommission: {
                encode(message: _19.MsgWithdrawValidatorCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.MsgWithdrawValidatorCommission;
                fromPartial(object: {
                    validatorAddress?: string;
                }): _19.MsgWithdrawValidatorCommission;
            };
            MsgWithdrawValidatorCommissionResponse: {
                encode(message: _19.MsgWithdrawValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.MsgWithdrawValidatorCommissionResponse;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _19.MsgWithdrawValidatorCommissionResponse;
            };
            MsgFundCommunityPool: {
                encode(message: _19.MsgFundCommunityPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.MsgFundCommunityPool;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    depositor?: string;
                }): _19.MsgFundCommunityPool;
            };
            MsgFundCommunityPoolResponse: {
                encode(_: _19.MsgFundCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.MsgFundCommunityPoolResponse;
                fromPartial(_: {}): _19.MsgFundCommunityPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _18.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.QueryParamsRequest;
                fromPartial(_: {}): _18.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _18.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.QueryParamsResponse;
                fromPartial(object: {
                    params?: {
                        communityTax?: string;
                        baseProposerReward?: string;
                        bonusProposerReward?: string;
                        withdrawAddrEnabled?: boolean;
                    };
                }): _18.QueryParamsResponse;
            };
            QueryValidatorOutstandingRewardsRequest: {
                encode(message: _18.QueryValidatorOutstandingRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.QueryValidatorOutstandingRewardsRequest;
                fromPartial(object: {
                    validatorAddress?: string;
                }): _18.QueryValidatorOutstandingRewardsRequest;
            };
            QueryValidatorOutstandingRewardsResponse: {
                encode(message: _18.QueryValidatorOutstandingRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.QueryValidatorOutstandingRewardsResponse;
                fromPartial(object: {
                    rewards?: {
                        rewards?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _18.QueryValidatorOutstandingRewardsResponse;
            };
            QueryValidatorCommissionRequest: {
                encode(message: _18.QueryValidatorCommissionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.QueryValidatorCommissionRequest;
                fromPartial(object: {
                    validatorAddress?: string;
                }): _18.QueryValidatorCommissionRequest;
            };
            QueryValidatorCommissionResponse: {
                encode(message: _18.QueryValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.QueryValidatorCommissionResponse;
                fromPartial(object: {
                    commission?: {
                        commission?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _18.QueryValidatorCommissionResponse;
            };
            QueryValidatorSlashesRequest: {
                encode(message: _18.QueryValidatorSlashesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.QueryValidatorSlashesRequest;
                fromPartial(object: {
                    validatorAddress?: string;
                    startingHeight?: any;
                    endingHeight?: any;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _18.QueryValidatorSlashesRequest;
            };
            QueryValidatorSlashesResponse: {
                encode(message: _18.QueryValidatorSlashesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.QueryValidatorSlashesResponse;
                fromPartial(object: {
                    slashes?: {
                        validatorPeriod?: any;
                        fraction?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _18.QueryValidatorSlashesResponse;
            };
            QueryDelegationRewardsRequest: {
                encode(message: _18.QueryDelegationRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.QueryDelegationRewardsRequest;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                }): _18.QueryDelegationRewardsRequest;
            };
            QueryDelegationRewardsResponse: {
                encode(message: _18.QueryDelegationRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.QueryDelegationRewardsResponse;
                fromPartial(object: {
                    rewards?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _18.QueryDelegationRewardsResponse;
            };
            QueryDelegationTotalRewardsRequest: {
                encode(message: _18.QueryDelegationTotalRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.QueryDelegationTotalRewardsRequest;
                fromPartial(object: {
                    delegatorAddress?: string;
                }): _18.QueryDelegationTotalRewardsRequest;
            };
            QueryDelegationTotalRewardsResponse: {
                encode(message: _18.QueryDelegationTotalRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.QueryDelegationTotalRewardsResponse;
                fromPartial(object: {
                    rewards?: {
                        validatorAddress?: string;
                        reward?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    total?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _18.QueryDelegationTotalRewardsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _18.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.QueryDelegatorValidatorsRequest;
                fromPartial(object: {
                    delegatorAddress?: string;
                }): _18.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _18.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.QueryDelegatorValidatorsResponse;
                fromPartial(object: {
                    validators?: string[];
                }): _18.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorWithdrawAddressRequest: {
                encode(message: _18.QueryDelegatorWithdrawAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.QueryDelegatorWithdrawAddressRequest;
                fromPartial(object: {
                    delegatorAddress?: string;
                }): _18.QueryDelegatorWithdrawAddressRequest;
            };
            QueryDelegatorWithdrawAddressResponse: {
                encode(message: _18.QueryDelegatorWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.QueryDelegatorWithdrawAddressResponse;
                fromPartial(object: {
                    withdrawAddress?: string;
                }): _18.QueryDelegatorWithdrawAddressResponse;
            };
            QueryCommunityPoolRequest: {
                encode(_: _18.QueryCommunityPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.QueryCommunityPoolRequest;
                fromPartial(_: {}): _18.QueryCommunityPoolRequest;
            };
            QueryCommunityPoolResponse: {
                encode(message: _18.QueryCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.QueryCommunityPoolResponse;
                fromPartial(object: {
                    pool?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _18.QueryCommunityPoolResponse;
            };
            DelegatorWithdrawInfo: {
                encode(message: _17.DelegatorWithdrawInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.DelegatorWithdrawInfo;
                fromPartial(object: {
                    delegatorAddress?: string;
                    withdrawAddress?: string;
                }): _17.DelegatorWithdrawInfo;
            };
            ValidatorOutstandingRewardsRecord: {
                encode(message: _17.ValidatorOutstandingRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.ValidatorOutstandingRewardsRecord;
                fromPartial(object: {
                    validatorAddress?: string;
                    outstandingRewards?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _17.ValidatorOutstandingRewardsRecord;
            };
            ValidatorAccumulatedCommissionRecord: {
                encode(message: _17.ValidatorAccumulatedCommissionRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.ValidatorAccumulatedCommissionRecord;
                fromPartial(object: {
                    validatorAddress?: string;
                    accumulated?: {
                        commission?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _17.ValidatorAccumulatedCommissionRecord;
            };
            ValidatorHistoricalRewardsRecord: {
                encode(message: _17.ValidatorHistoricalRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.ValidatorHistoricalRewardsRecord;
                fromPartial(object: {
                    validatorAddress?: string;
                    period?: any;
                    rewards?: {
                        cumulativeRewardRatio?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        referenceCount?: number;
                    };
                }): _17.ValidatorHistoricalRewardsRecord;
            };
            ValidatorCurrentRewardsRecord: {
                encode(message: _17.ValidatorCurrentRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.ValidatorCurrentRewardsRecord;
                fromPartial(object: {
                    validatorAddress?: string;
                    rewards?: {
                        rewards?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        period?: any;
                    };
                }): _17.ValidatorCurrentRewardsRecord;
            };
            DelegatorStartingInfoRecord: {
                encode(message: _17.DelegatorStartingInfoRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.DelegatorStartingInfoRecord;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                    startingInfo?: {
                        previousPeriod?: any;
                        stake?: string;
                        height?: any;
                    };
                }): _17.DelegatorStartingInfoRecord;
            };
            ValidatorSlashEventRecord: {
                encode(message: _17.ValidatorSlashEventRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.ValidatorSlashEventRecord;
                fromPartial(object: {
                    validatorAddress?: string;
                    height?: any;
                    period?: any;
                    validatorSlashEvent?: {
                        validatorPeriod?: any;
                        fraction?: string;
                    };
                }): _17.ValidatorSlashEventRecord;
            };
            GenesisState: {
                encode(message: _17.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.GenesisState;
                fromPartial(object: {
                    params?: {
                        communityTax?: string;
                        baseProposerReward?: string;
                        bonusProposerReward?: string;
                        withdrawAddrEnabled?: boolean;
                    };
                    feePool?: {
                        communityPool?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                    delegatorWithdrawInfos?: {
                        delegatorAddress?: string;
                        withdrawAddress?: string;
                    }[];
                    previousProposer?: string;
                    outstandingRewards?: {
                        validatorAddress?: string;
                        outstandingRewards?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    validatorAccumulatedCommissions?: {
                        validatorAddress?: string;
                        accumulated?: {
                            commission?: {
                                denom?: string;
                                amount?: string;
                            }[];
                        };
                    }[];
                    validatorHistoricalRewards?: {
                        validatorAddress?: string;
                        period?: any;
                        rewards?: {
                            cumulativeRewardRatio?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            referenceCount?: number;
                        };
                    }[];
                    validatorCurrentRewards?: {
                        validatorAddress?: string;
                        rewards?: {
                            rewards?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            period?: any;
                        };
                    }[];
                    delegatorStartingInfos?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                        startingInfo?: {
                            previousPeriod?: any;
                            stake?: string;
                            height?: any;
                        };
                    }[];
                    validatorSlashEvents?: {
                        validatorAddress?: string;
                        height?: any;
                        period?: any;
                        validatorSlashEvent?: {
                            validatorPeriod?: any;
                            fraction?: string;
                        };
                    }[];
                }): _17.GenesisState;
            };
            Params: {
                encode(message: _16.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.Params;
                fromPartial(object: {
                    communityTax?: string;
                    baseProposerReward?: string;
                    bonusProposerReward?: string;
                    withdrawAddrEnabled?: boolean;
                }): _16.Params;
            };
            ValidatorHistoricalRewards: {
                encode(message: _16.ValidatorHistoricalRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.ValidatorHistoricalRewards;
                fromPartial(object: {
                    cumulativeRewardRatio?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    referenceCount?: number;
                }): _16.ValidatorHistoricalRewards;
            };
            ValidatorCurrentRewards: {
                encode(message: _16.ValidatorCurrentRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.ValidatorCurrentRewards;
                fromPartial(object: {
                    rewards?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    period?: any;
                }): _16.ValidatorCurrentRewards;
            };
            ValidatorAccumulatedCommission: {
                encode(message: _16.ValidatorAccumulatedCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.ValidatorAccumulatedCommission;
                fromPartial(object: {
                    commission?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _16.ValidatorAccumulatedCommission;
            };
            ValidatorOutstandingRewards: {
                encode(message: _16.ValidatorOutstandingRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.ValidatorOutstandingRewards;
                fromPartial(object: {
                    rewards?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _16.ValidatorOutstandingRewards;
            };
            ValidatorSlashEvent: {
                encode(message: _16.ValidatorSlashEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.ValidatorSlashEvent;
                fromPartial(object: {
                    validatorPeriod?: any;
                    fraction?: string;
                }): _16.ValidatorSlashEvent;
            };
            ValidatorSlashEvents: {
                encode(message: _16.ValidatorSlashEvents, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.ValidatorSlashEvents;
                fromPartial(object: {
                    validatorSlashEvents?: {
                        validatorPeriod?: any;
                        fraction?: string;
                    }[];
                }): _16.ValidatorSlashEvents;
            };
            FeePool: {
                encode(message: _16.FeePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.FeePool;
                fromPartial(object: {
                    communityPool?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _16.FeePool;
            };
            CommunityPoolSpendProposal: {
                encode(message: _16.CommunityPoolSpendProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.CommunityPoolSpendProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    recipient?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _16.CommunityPoolSpendProposal;
            };
            DelegatorStartingInfo: {
                encode(message: _16.DelegatorStartingInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.DelegatorStartingInfo;
                fromPartial(object: {
                    previousPeriod?: any;
                    stake?: string;
                    height?: any;
                }): _16.DelegatorStartingInfo;
            };
            DelegationDelegatorReward: {
                encode(message: _16.DelegationDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.DelegationDelegatorReward;
                fromPartial(object: {
                    validatorAddress?: string;
                    reward?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _16.DelegationDelegatorReward;
            };
            CommunityPoolSpendProposalWithDeposit: {
                encode(message: _16.CommunityPoolSpendProposalWithDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.CommunityPoolSpendProposalWithDeposit;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    recipient?: string;
                    amount?: string;
                    deposit?: string;
                }): _16.CommunityPoolSpendProposalWithDeposit;
            };
        };
    }
    namespace gov {
        const v1: {
            MsgClientImpl: typeof _68.MsgClientImpl;
            QueryClientImpl: typeof _61.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _22.QueryProposalRequest): Promise<_22.QueryProposalResponse>;
                proposals(request: _22.QueryProposalsRequest): Promise<_22.QueryProposalsResponse>;
                vote(request: _22.QueryVoteRequest): Promise<_22.QueryVoteResponse>;
                votes(request: _22.QueryVotesRequest): Promise<_22.QueryVotesResponse>;
                params(request: _22.QueryParamsRequest): Promise<_22.QueryParamsResponse>;
                deposit(request: _22.QueryDepositRequest): Promise<_22.QueryDepositResponse>;
                deposits(request: _22.QueryDepositsRequest): Promise<_22.QueryDepositsResponse>;
                tallyResult(request: _22.QueryTallyResultRequest): Promise<_22.QueryTallyResultResponse>;
            };
            MsgSubmitProposal: {
                encode(message: _23.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.MsgSubmitProposal;
                fromPartial(object: {
                    messages?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    initialDeposit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    proposer?: string;
                    metadata?: string;
                }): _23.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _23.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.MsgSubmitProposalResponse;
                fromPartial(object: {
                    proposalId?: any;
                }): _23.MsgSubmitProposalResponse;
            };
            MsgExecLegacyContent: {
                encode(message: _23.MsgExecLegacyContent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.MsgExecLegacyContent;
                fromPartial(object: {
                    content?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    authority?: string;
                }): _23.MsgExecLegacyContent;
            };
            MsgExecLegacyContentResponse: {
                encode(_: _23.MsgExecLegacyContentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.MsgExecLegacyContentResponse;
                fromPartial(_: {}): _23.MsgExecLegacyContentResponse;
            };
            MsgVote: {
                encode(message: _23.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.MsgVote;
                fromPartial(object: {
                    proposalId?: any;
                    voter?: string;
                    option?: _21.VoteOption;
                    metadata?: string;
                }): _23.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _23.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.MsgVoteResponse;
                fromPartial(_: {}): _23.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: _23.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.MsgVoteWeighted;
                fromPartial(object: {
                    proposalId?: any;
                    voter?: string;
                    options?: {
                        option?: _21.VoteOption;
                        weight?: string;
                    }[];
                    metadata?: string;
                }): _23.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _23.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.MsgVoteWeightedResponse;
                fromPartial(_: {}): _23.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _23.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.MsgDeposit;
                fromPartial(object: {
                    proposalId?: any;
                    depositor?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _23.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _23.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.MsgDepositResponse;
                fromPartial(_: {}): _23.MsgDepositResponse;
            };
            QueryProposalRequest: {
                encode(message: _22.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.QueryProposalRequest;
                fromPartial(object: {
                    proposalId?: any;
                }): _22.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _22.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.QueryProposalResponse;
                fromPartial(object: {
                    proposal?: {
                        id?: any;
                        messages?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                        status?: _21.ProposalStatus;
                        finalTallyResult?: {
                            yesCount?: string;
                            abstainCount?: string;
                            noCount?: string;
                            noWithVetoCount?: string;
                        };
                        submitTime?: Date;
                        depositEndTime?: Date;
                        totalDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        votingStartTime?: Date;
                        votingEndTime?: Date;
                        metadata?: string;
                    };
                }): _22.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _22.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.QueryProposalsRequest;
                fromPartial(object: {
                    proposalStatus?: _21.ProposalStatus;
                    voter?: string;
                    depositor?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _22.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _22.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.QueryProposalsResponse;
                fromPartial(object: {
                    proposals?: {
                        id?: any;
                        messages?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                        status?: _21.ProposalStatus;
                        finalTallyResult?: {
                            yesCount?: string;
                            abstainCount?: string;
                            noCount?: string;
                            noWithVetoCount?: string;
                        };
                        submitTime?: Date;
                        depositEndTime?: Date;
                        totalDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        votingStartTime?: Date;
                        votingEndTime?: Date;
                        metadata?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _22.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _22.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.QueryVoteRequest;
                fromPartial(object: {
                    proposalId?: any;
                    voter?: string;
                }): _22.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _22.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.QueryVoteResponse;
                fromPartial(object: {
                    vote?: {
                        proposalId?: any;
                        voter?: string;
                        options?: {
                            option?: _21.VoteOption;
                            weight?: string;
                        }[];
                        metadata?: string;
                    };
                }): _22.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _22.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.QueryVotesRequest;
                fromPartial(object: {
                    proposalId?: any;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _22.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _22.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.QueryVotesResponse;
                fromPartial(object: {
                    votes?: {
                        proposalId?: any;
                        voter?: string;
                        options?: {
                            option?: _21.VoteOption;
                            weight?: string;
                        }[];
                        metadata?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _22.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: _22.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.QueryParamsRequest;
                fromPartial(object: {
                    paramsType?: string;
                }): _22.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _22.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.QueryParamsResponse;
                fromPartial(object: {
                    votingParams?: {
                        votingPeriod?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                    depositParams?: {
                        minDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        maxDepositPeriod?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                    tallyParams?: {
                        quorum?: string;
                        threshold?: string;
                        vetoThreshold?: string;
                    };
                }): _22.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: _22.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.QueryDepositRequest;
                fromPartial(object: {
                    proposalId?: any;
                    depositor?: string;
                }): _22.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _22.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.QueryDepositResponse;
                fromPartial(object: {
                    deposit?: {
                        proposalId?: any;
                        depositor?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _22.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _22.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.QueryDepositsRequest;
                fromPartial(object: {
                    proposalId?: any;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _22.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _22.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.QueryDepositsResponse;
                fromPartial(object: {
                    deposits?: {
                        proposalId?: any;
                        depositor?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _22.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _22.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.QueryTallyResultRequest;
                fromPartial(object: {
                    proposalId?: any;
                }): _22.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _22.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.QueryTallyResultResponse;
                fromPartial(object: {
                    tally?: {
                        yesCount?: string;
                        abstainCount?: string;
                        noCount?: string;
                        noWithVetoCount?: string;
                    };
                }): _22.QueryTallyResultResponse;
            };
            voteOptionFromJSON(object: any): _21.VoteOption;
            voteOptionToJSON(object: _21.VoteOption): string;
            proposalStatusFromJSON(object: any): _21.ProposalStatus;
            proposalStatusToJSON(object: _21.ProposalStatus): string;
            VoteOption: typeof _21.VoteOption;
            VoteOptionSDKType: typeof _21.VoteOptionSDKType;
            ProposalStatus: typeof _21.ProposalStatus;
            ProposalStatusSDKType: typeof _21.ProposalStatusSDKType;
            WeightedVoteOption: {
                encode(message: _21.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.WeightedVoteOption;
                fromPartial(object: {
                    option?: _21.VoteOption;
                    weight?: string;
                }): _21.WeightedVoteOption;
            };
            Deposit: {
                encode(message: _21.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.Deposit;
                fromPartial(object: {
                    proposalId?: any;
                    depositor?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _21.Deposit;
            };
            Proposal: {
                encode(message: _21.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.Proposal;
                fromPartial(object: {
                    id?: any;
                    messages?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    status?: _21.ProposalStatus;
                    finalTallyResult?: {
                        yesCount?: string;
                        abstainCount?: string;
                        noCount?: string;
                        noWithVetoCount?: string;
                    };
                    submitTime?: Date;
                    depositEndTime?: Date;
                    totalDeposit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    votingStartTime?: Date;
                    votingEndTime?: Date;
                    metadata?: string;
                }): _21.Proposal;
            };
            TallyResult: {
                encode(message: _21.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.TallyResult;
                fromPartial(object: {
                    yesCount?: string;
                    abstainCount?: string;
                    noCount?: string;
                    noWithVetoCount?: string;
                }): _21.TallyResult;
            };
            Vote: {
                encode(message: _21.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.Vote;
                fromPartial(object: {
                    proposalId?: any;
                    voter?: string;
                    options?: {
                        option?: _21.VoteOption;
                        weight?: string;
                    }[];
                    metadata?: string;
                }): _21.Vote;
            };
            DepositParams: {
                encode(message: _21.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.DepositParams;
                fromPartial(object: {
                    minDeposit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    maxDepositPeriod?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _21.DepositParams;
            };
            VotingParams: {
                encode(message: _21.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.VotingParams;
                fromPartial(object: {
                    votingPeriod?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _21.VotingParams;
            };
            TallyParams: {
                encode(message: _21.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.TallyParams;
                fromPartial(object: {
                    quorum?: string;
                    threshold?: string;
                    vetoThreshold?: string;
                }): _21.TallyParams;
            };
            GenesisState: {
                encode(message: _20.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.GenesisState;
                fromPartial(object: {
                    startingProposalId?: any;
                    deposits?: {
                        proposalId?: any;
                        depositor?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    votes?: {
                        proposalId?: any;
                        voter?: string;
                        options?: {
                            option?: _21.VoteOption;
                            weight?: string;
                        }[];
                        metadata?: string;
                    }[];
                    proposals?: {
                        id?: any;
                        messages?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                        status?: _21.ProposalStatus;
                        finalTallyResult?: {
                            yesCount?: string;
                            abstainCount?: string;
                            noCount?: string;
                            noWithVetoCount?: string;
                        };
                        submitTime?: Date;
                        depositEndTime?: Date;
                        totalDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        votingStartTime?: Date;
                        votingEndTime?: Date;
                        metadata?: string;
                    }[];
                    depositParams?: {
                        minDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        maxDepositPeriod?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                    votingParams?: {
                        votingPeriod?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                    tallyParams?: {
                        quorum?: string;
                        threshold?: string;
                        vetoThreshold?: string;
                    };
                }): _20.GenesisState;
            };
        };
        const v1beta1: {
            MsgClientImpl: typeof _69.MsgClientImpl;
            QueryClientImpl: typeof _62.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _26.QueryProposalRequest): Promise<_26.QueryProposalResponse>;
                proposals(request: _26.QueryProposalsRequest): Promise<_26.QueryProposalsResponse>;
                vote(request: _26.QueryVoteRequest): Promise<_26.QueryVoteResponse>;
                votes(request: _26.QueryVotesRequest): Promise<_26.QueryVotesResponse>;
                params(request: _26.QueryParamsRequest): Promise<_26.QueryParamsResponse>;
                deposit(request: _26.QueryDepositRequest): Promise<_26.QueryDepositResponse>;
                deposits(request: _26.QueryDepositsRequest): Promise<_26.QueryDepositsResponse>;
                tallyResult(request: _26.QueryTallyResultRequest): Promise<_26.QueryTallyResultResponse>;
            };
            MsgSubmitProposal: {
                encode(message: _27.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.MsgSubmitProposal;
                fromPartial(object: {
                    content?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    initialDeposit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    proposer?: string;
                }): _27.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _27.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.MsgSubmitProposalResponse;
                fromPartial(object: {
                    proposalId?: any;
                }): _27.MsgSubmitProposalResponse;
            };
            MsgVote: {
                encode(message: _27.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.MsgVote;
                fromPartial(object: {
                    proposalId?: any;
                    voter?: string;
                    option?: _25.VoteOption;
                }): _27.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _27.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.MsgVoteResponse;
                fromPartial(_: {}): _27.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: _27.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.MsgVoteWeighted;
                fromPartial(object: {
                    proposalId?: any;
                    voter?: string;
                    options?: {
                        option?: _25.VoteOption;
                        weight?: string;
                    }[];
                }): _27.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _27.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.MsgVoteWeightedResponse;
                fromPartial(_: {}): _27.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _27.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.MsgDeposit;
                fromPartial(object: {
                    proposalId?: any;
                    depositor?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _27.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _27.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.MsgDepositResponse;
                fromPartial(_: {}): _27.MsgDepositResponse;
            };
            QueryProposalRequest: {
                encode(message: _26.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.QueryProposalRequest;
                fromPartial(object: {
                    proposalId?: any;
                }): _26.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _26.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.QueryProposalResponse;
                fromPartial(object: {
                    proposal?: {
                        proposalId?: any;
                        content?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        status?: _25.ProposalStatus;
                        finalTallyResult?: {
                            yes?: string;
                            abstain?: string;
                            no?: string;
                            noWithVeto?: string;
                        };
                        submitTime?: Date;
                        depositEndTime?: Date;
                        totalDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        votingStartTime?: Date;
                        votingEndTime?: Date;
                    };
                }): _26.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _26.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.QueryProposalsRequest;
                fromPartial(object: {
                    proposalStatus?: _25.ProposalStatus;
                    voter?: string;
                    depositor?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _26.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _26.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.QueryProposalsResponse;
                fromPartial(object: {
                    proposals?: {
                        proposalId?: any;
                        content?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        status?: _25.ProposalStatus;
                        finalTallyResult?: {
                            yes?: string;
                            abstain?: string;
                            no?: string;
                            noWithVeto?: string;
                        };
                        submitTime?: Date;
                        depositEndTime?: Date;
                        totalDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        votingStartTime?: Date;
                        votingEndTime?: Date;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _26.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _26.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.QueryVoteRequest;
                fromPartial(object: {
                    proposalId?: any;
                    voter?: string;
                }): _26.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _26.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.QueryVoteResponse;
                fromPartial(object: {
                    vote?: {
                        proposalId?: any;
                        voter?: string;
                        option?: _25.VoteOption;
                        options?: {
                            option?: _25.VoteOption;
                            weight?: string;
                        }[];
                    };
                }): _26.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _26.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.QueryVotesRequest;
                fromPartial(object: {
                    proposalId?: any;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _26.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _26.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.QueryVotesResponse;
                fromPartial(object: {
                    votes?: {
                        proposalId?: any;
                        voter?: string;
                        option?: _25.VoteOption;
                        options?: {
                            option?: _25.VoteOption;
                            weight?: string;
                        }[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _26.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: _26.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.QueryParamsRequest;
                fromPartial(object: {
                    paramsType?: string;
                }): _26.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _26.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.QueryParamsResponse;
                fromPartial(object: {
                    votingParams?: {
                        votingPeriod?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                    depositParams?: {
                        minDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        maxDepositPeriod?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                    tallyParams?: {
                        quorum?: Uint8Array;
                        threshold?: Uint8Array;
                        vetoThreshold?: Uint8Array;
                    };
                }): _26.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: _26.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.QueryDepositRequest;
                fromPartial(object: {
                    proposalId?: any;
                    depositor?: string;
                }): _26.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _26.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.QueryDepositResponse;
                fromPartial(object: {
                    deposit?: {
                        proposalId?: any;
                        depositor?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _26.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _26.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.QueryDepositsRequest;
                fromPartial(object: {
                    proposalId?: any;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _26.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _26.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.QueryDepositsResponse;
                fromPartial(object: {
                    deposits?: {
                        proposalId?: any;
                        depositor?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _26.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _26.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.QueryTallyResultRequest;
                fromPartial(object: {
                    proposalId?: any;
                }): _26.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _26.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.QueryTallyResultResponse;
                fromPartial(object: {
                    tally?: {
                        yes?: string;
                        abstain?: string;
                        no?: string;
                        noWithVeto?: string;
                    };
                }): _26.QueryTallyResultResponse;
            };
            voteOptionFromJSON(object: any): _25.VoteOption;
            voteOptionToJSON(object: _25.VoteOption): string;
            proposalStatusFromJSON(object: any): _25.ProposalStatus;
            proposalStatusToJSON(object: _25.ProposalStatus): string;
            VoteOption: typeof _25.VoteOption;
            VoteOptionSDKType: typeof _25.VoteOptionSDKType;
            ProposalStatus: typeof _25.ProposalStatus;
            ProposalStatusSDKType: typeof _25.ProposalStatusSDKType;
            WeightedVoteOption: {
                encode(message: _25.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.WeightedVoteOption;
                fromPartial(object: {
                    option?: _25.VoteOption;
                    weight?: string;
                }): _25.WeightedVoteOption;
            };
            TextProposal: {
                encode(message: _25.TextProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.TextProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                }): _25.TextProposal;
            };
            Deposit: {
                encode(message: _25.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.Deposit;
                fromPartial(object: {
                    proposalId?: any;
                    depositor?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _25.Deposit;
            };
            Proposal: {
                encode(message: _25.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.Proposal;
                fromPartial(object: {
                    proposalId?: any;
                    content?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    status?: _25.ProposalStatus;
                    finalTallyResult?: {
                        yes?: string;
                        abstain?: string;
                        no?: string;
                        noWithVeto?: string;
                    };
                    submitTime?: Date;
                    depositEndTime?: Date;
                    totalDeposit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    votingStartTime?: Date;
                    votingEndTime?: Date;
                }): _25.Proposal;
            };
            TallyResult: {
                encode(message: _25.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.TallyResult;
                fromPartial(object: {
                    yes?: string;
                    abstain?: string;
                    no?: string;
                    noWithVeto?: string;
                }): _25.TallyResult;
            };
            Vote: {
                encode(message: _25.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.Vote;
                fromPartial(object: {
                    proposalId?: any;
                    voter?: string;
                    option?: _25.VoteOption;
                    options?: {
                        option?: _25.VoteOption;
                        weight?: string;
                    }[];
                }): _25.Vote;
            };
            DepositParams: {
                encode(message: _25.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.DepositParams;
                fromPartial(object: {
                    minDeposit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    maxDepositPeriod?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _25.DepositParams;
            };
            VotingParams: {
                encode(message: _25.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.VotingParams;
                fromPartial(object: {
                    votingPeriod?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _25.VotingParams;
            };
            TallyParams: {
                encode(message: _25.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.TallyParams;
                fromPartial(object: {
                    quorum?: Uint8Array;
                    threshold?: Uint8Array;
                    vetoThreshold?: Uint8Array;
                }): _25.TallyParams;
            };
            GenesisState: {
                encode(message: _24.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.GenesisState;
                fromPartial(object: {
                    startingProposalId?: any;
                    deposits?: {
                        proposalId?: any;
                        depositor?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    votes?: {
                        proposalId?: any;
                        voter?: string;
                        option?: _25.VoteOption;
                        options?: {
                            option?: _25.VoteOption;
                            weight?: string;
                        }[];
                    }[];
                    proposals?: {
                        proposalId?: any;
                        content?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        status?: _25.ProposalStatus;
                        finalTallyResult?: {
                            yes?: string;
                            abstain?: string;
                            no?: string;
                            noWithVeto?: string;
                        };
                        submitTime?: Date;
                        depositEndTime?: Date;
                        totalDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        votingStartTime?: Date;
                        votingEndTime?: Date;
                    }[];
                    depositParams?: {
                        minDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        maxDepositPeriod?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                    votingParams?: {
                        votingPeriod?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                    tallyParams?: {
                        quorum?: Uint8Array;
                        threshold?: Uint8Array;
                        vetoThreshold?: Uint8Array;
                    };
                }): _24.GenesisState;
            };
        };
    }
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _63.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _30.QueryParamsRequest): Promise<_30.QueryParamsResponse>;
                inflation(request?: _30.QueryInflationRequest): Promise<_30.QueryInflationResponse>;
                annualProvisions(request?: _30.QueryAnnualProvisionsRequest): Promise<_30.QueryAnnualProvisionsResponse>;
            };
            QueryParamsRequest: {
                encode(_: _30.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.QueryParamsRequest;
                fromPartial(_: {}): _30.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _30.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.QueryParamsResponse;
                fromPartial(object: {
                    params?: {
                        mintDenom?: string;
                        inflationRateChange?: string;
                        inflationMax?: string;
                        inflationMin?: string;
                        goalBonded?: string;
                        blocksPerYear?: any;
                    };
                }): _30.QueryParamsResponse;
            };
            QueryInflationRequest: {
                encode(_: _30.QueryInflationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.QueryInflationRequest;
                fromPartial(_: {}): _30.QueryInflationRequest;
            };
            QueryInflationResponse: {
                encode(message: _30.QueryInflationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.QueryInflationResponse;
                fromPartial(object: {
                    inflation?: Uint8Array;
                }): _30.QueryInflationResponse;
            };
            QueryAnnualProvisionsRequest: {
                encode(_: _30.QueryAnnualProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.QueryAnnualProvisionsRequest;
                fromPartial(_: {}): _30.QueryAnnualProvisionsRequest;
            };
            QueryAnnualProvisionsResponse: {
                encode(message: _30.QueryAnnualProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.QueryAnnualProvisionsResponse;
                fromPartial(object: {
                    annualProvisions?: Uint8Array;
                }): _30.QueryAnnualProvisionsResponse;
            };
            Minter: {
                encode(message: _29.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.Minter;
                fromPartial(object: {
                    inflation?: string;
                    annualProvisions?: string;
                }): _29.Minter;
            };
            Params: {
                encode(message: _29.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.Params;
                fromPartial(object: {
                    mintDenom?: string;
                    inflationRateChange?: string;
                    inflationMax?: string;
                    inflationMin?: string;
                    goalBonded?: string;
                    blocksPerYear?: any;
                }): _29.Params;
            };
            GenesisState: {
                encode(message: _28.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.GenesisState;
                fromPartial(object: {
                    minter?: {
                        inflation?: string;
                        annualProvisions?: string;
                    };
                    params?: {
                        mintDenom?: string;
                        inflationRateChange?: string;
                        inflationMax?: string;
                        inflationMin?: string;
                        goalBonded?: string;
                        blocksPerYear?: any;
                    };
                }): _28.GenesisState;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            MsgClientImpl: typeof _70.MsgClientImpl;
            QueryClientImpl: typeof _64.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _33.QueryValidatorsRequest): Promise<_33.QueryValidatorsResponse>;
                validator(request: _33.QueryValidatorRequest): Promise<_33.QueryValidatorResponse>;
                validatorDelegations(request: _33.QueryValidatorDelegationsRequest): Promise<_33.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _33.QueryValidatorUnbondingDelegationsRequest): Promise<_33.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _33.QueryDelegationRequest): Promise<_33.QueryDelegationResponse>;
                unbondingDelegation(request: _33.QueryUnbondingDelegationRequest): Promise<_33.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _33.QueryDelegatorDelegationsRequest): Promise<_33.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _33.QueryDelegatorUnbondingDelegationsRequest): Promise<_33.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _33.QueryRedelegationsRequest): Promise<_33.QueryRedelegationsResponse>;
                delegatorValidators(request: _33.QueryDelegatorValidatorsRequest): Promise<_33.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _33.QueryDelegatorValidatorRequest): Promise<_33.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _33.QueryHistoricalInfoRequest): Promise<_33.QueryHistoricalInfoResponse>;
                pool(request?: _33.QueryPoolRequest): Promise<_33.QueryPoolResponse>;
                params(request?: _33.QueryParamsRequest): Promise<_33.QueryParamsResponse>;
            };
            MsgCreateValidator: {
                encode(message: _35.MsgCreateValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.MsgCreateValidator;
                fromPartial(object: {
                    description?: {
                        moniker?: string;
                        identity?: string;
                        website?: string;
                        securityContact?: string;
                        details?: string;
                    };
                    commission?: {
                        rate?: string;
                        maxRate?: string;
                        maxChangeRate?: string;
                    };
                    minSelfDelegation?: string;
                    delegatorAddress?: string;
                    validatorAddress?: string;
                    pubkey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    value?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _35.MsgCreateValidator;
            };
            MsgCreateValidatorResponse: {
                encode(_: _35.MsgCreateValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.MsgCreateValidatorResponse;
                fromPartial(_: {}): _35.MsgCreateValidatorResponse;
            };
            MsgEditValidator: {
                encode(message: _35.MsgEditValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.MsgEditValidator;
                fromPartial(object: {
                    description?: {
                        moniker?: string;
                        identity?: string;
                        website?: string;
                        securityContact?: string;
                        details?: string;
                    };
                    validatorAddress?: string;
                    commissionRate?: string;
                    minSelfDelegation?: string;
                }): _35.MsgEditValidator;
            };
            MsgEditValidatorResponse: {
                encode(_: _35.MsgEditValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.MsgEditValidatorResponse;
                fromPartial(_: {}): _35.MsgEditValidatorResponse;
            };
            MsgDelegate: {
                encode(message: _35.MsgDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.MsgDelegate;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _35.MsgDelegate;
            };
            MsgDelegateResponse: {
                encode(_: _35.MsgDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.MsgDelegateResponse;
                fromPartial(_: {}): _35.MsgDelegateResponse;
            };
            MsgBeginRedelegate: {
                encode(message: _35.MsgBeginRedelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.MsgBeginRedelegate;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorSrcAddress?: string;
                    validatorDstAddress?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _35.MsgBeginRedelegate;
            };
            MsgBeginRedelegateResponse: {
                encode(message: _35.MsgBeginRedelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.MsgBeginRedelegateResponse;
                fromPartial(object: {
                    completionTime?: Date;
                }): _35.MsgBeginRedelegateResponse;
            };
            MsgUndelegate: {
                encode(message: _35.MsgUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.MsgUndelegate;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _35.MsgUndelegate;
            };
            MsgUndelegateResponse: {
                encode(message: _35.MsgUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.MsgUndelegateResponse;
                fromPartial(object: {
                    completionTime?: Date;
                }): _35.MsgUndelegateResponse;
            };
            bondStatusFromJSON(object: any): _34.BondStatus;
            bondStatusToJSON(object: _34.BondStatus): string;
            BondStatus: typeof _34.BondStatus;
            BondStatusSDKType: typeof _34.BondStatusSDKType;
            HistoricalInfo: {
                encode(message: _34.HistoricalInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.HistoricalInfo;
                fromPartial(object: {
                    header?: {
                        version?: {
                            block?: any;
                            app?: any;
                        };
                        chainId?: string;
                        height?: any;
                        time?: Date;
                        lastBlockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        lastCommitHash?: Uint8Array;
                        dataHash?: Uint8Array;
                        validatorsHash?: Uint8Array;
                        nextValidatorsHash?: Uint8Array;
                        consensusHash?: Uint8Array;
                        appHash?: Uint8Array;
                        lastResultsHash?: Uint8Array;
                        evidenceHash?: Uint8Array;
                        proposerAddress?: Uint8Array;
                    };
                    valset?: {
                        operatorAddress?: string;
                        consensusPubkey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        jailed?: boolean;
                        status?: _34.BondStatus;
                        tokens?: string;
                        delegatorShares?: string;
                        description?: {
                            moniker?: string;
                            identity?: string;
                            website?: string;
                            securityContact?: string;
                            details?: string;
                        };
                        unbondingHeight?: any;
                        unbondingTime?: Date;
                        commission?: {
                            commissionRates?: {
                                rate?: string;
                                maxRate?: string;
                                maxChangeRate?: string;
                            };
                            updateTime?: Date;
                        };
                        minSelfDelegation?: string;
                    }[];
                }): _34.HistoricalInfo;
            };
            CommissionRates: {
                encode(message: _34.CommissionRates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.CommissionRates;
                fromPartial(object: {
                    rate?: string;
                    maxRate?: string;
                    maxChangeRate?: string;
                }): _34.CommissionRates;
            };
            Commission: {
                encode(message: _34.Commission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.Commission;
                fromPartial(object: {
                    commissionRates?: {
                        rate?: string;
                        maxRate?: string;
                        maxChangeRate?: string;
                    };
                    updateTime?: Date;
                }): _34.Commission;
            };
            Description: {
                encode(message: _34.Description, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.Description;
                fromPartial(object: {
                    moniker?: string;
                    identity?: string;
                    website?: string;
                    securityContact?: string;
                    details?: string;
                }): _34.Description;
            };
            Validator: {
                encode(message: _34.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.Validator;
                fromPartial(object: {
                    operatorAddress?: string;
                    consensusPubkey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    jailed?: boolean;
                    status?: _34.BondStatus;
                    tokens?: string;
                    delegatorShares?: string;
                    description?: {
                        moniker?: string;
                        identity?: string;
                        website?: string;
                        securityContact?: string;
                        details?: string;
                    };
                    unbondingHeight?: any;
                    unbondingTime?: Date;
                    commission?: {
                        commissionRates?: {
                            rate?: string;
                            maxRate?: string;
                            maxChangeRate?: string;
                        };
                        updateTime?: Date;
                    };
                    minSelfDelegation?: string;
                }): _34.Validator;
            };
            ValAddresses: {
                encode(message: _34.ValAddresses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.ValAddresses;
                fromPartial(object: {
                    addresses?: string[];
                }): _34.ValAddresses;
            };
            DVPair: {
                encode(message: _34.DVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.DVPair;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                }): _34.DVPair;
            };
            DVPairs: {
                encode(message: _34.DVPairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.DVPairs;
                fromPartial(object: {
                    pairs?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                    }[];
                }): _34.DVPairs;
            };
            DVVTriplet: {
                encode(message: _34.DVVTriplet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.DVVTriplet;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorSrcAddress?: string;
                    validatorDstAddress?: string;
                }): _34.DVVTriplet;
            };
            DVVTriplets: {
                encode(message: _34.DVVTriplets, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.DVVTriplets;
                fromPartial(object: {
                    triplets?: {
                        delegatorAddress?: string;
                        validatorSrcAddress?: string;
                        validatorDstAddress?: string;
                    }[];
                }): _34.DVVTriplets;
            };
            Delegation: {
                encode(message: _34.Delegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.Delegation;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                    shares?: string;
                }): _34.Delegation;
            };
            UnbondingDelegation: {
                encode(message: _34.UnbondingDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.UnbondingDelegation;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                    entries?: {
                        creationHeight?: any;
                        completionTime?: Date;
                        initialBalance?: string;
                        balance?: string;
                    }[];
                }): _34.UnbondingDelegation;
            };
            UnbondingDelegationEntry: {
                encode(message: _34.UnbondingDelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.UnbondingDelegationEntry;
                fromPartial(object: {
                    creationHeight?: any;
                    completionTime?: Date;
                    initialBalance?: string;
                    balance?: string;
                }): _34.UnbondingDelegationEntry;
            };
            RedelegationEntry: {
                encode(message: _34.RedelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.RedelegationEntry;
                fromPartial(object: {
                    creationHeight?: any;
                    completionTime?: Date;
                    initialBalance?: string;
                    sharesDst?: string;
                }): _34.RedelegationEntry;
            };
            Redelegation: {
                encode(message: _34.Redelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.Redelegation;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorSrcAddress?: string;
                    validatorDstAddress?: string;
                    entries?: {
                        creationHeight?: any;
                        completionTime?: Date;
                        initialBalance?: string;
                        sharesDst?: string;
                    }[];
                }): _34.Redelegation;
            };
            Params: {
                encode(message: _34.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.Params;
                fromPartial(object: {
                    unbondingTime?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    maxValidators?: number;
                    maxEntries?: number;
                    historicalEntries?: number;
                    bondDenom?: string;
                    minCommissionRate?: string;
                }): _34.Params;
            };
            DelegationResponse: {
                encode(message: _34.DelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.DelegationResponse;
                fromPartial(object: {
                    delegation?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                        shares?: string;
                    };
                    balance?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _34.DelegationResponse;
            };
            RedelegationEntryResponse: {
                encode(message: _34.RedelegationEntryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.RedelegationEntryResponse;
                fromPartial(object: {
                    redelegationEntry?: {
                        creationHeight?: any;
                        completionTime?: Date;
                        initialBalance?: string;
                        sharesDst?: string;
                    };
                    balance?: string;
                }): _34.RedelegationEntryResponse;
            };
            RedelegationResponse: {
                encode(message: _34.RedelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.RedelegationResponse;
                fromPartial(object: {
                    redelegation?: {
                        delegatorAddress?: string;
                        validatorSrcAddress?: string;
                        validatorDstAddress?: string;
                        entries?: {
                            creationHeight?: any;
                            completionTime?: Date;
                            initialBalance?: string;
                            sharesDst?: string;
                        }[];
                    };
                    entries?: {
                        redelegationEntry?: {
                            creationHeight?: any;
                            completionTime?: Date;
                            initialBalance?: string;
                            sharesDst?: string;
                        };
                        balance?: string;
                    }[];
                }): _34.RedelegationResponse;
            };
            Pool: {
                encode(message: _34.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.Pool;
                fromPartial(object: {
                    notBondedTokens?: string;
                    bondedTokens?: string;
                }): _34.Pool;
            };
            QueryValidatorsRequest: {
                encode(message: _33.QueryValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryValidatorsRequest;
                fromPartial(object: {
                    status?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _33.QueryValidatorsRequest;
            };
            QueryValidatorsResponse: {
                encode(message: _33.QueryValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryValidatorsResponse;
                fromPartial(object: {
                    validators?: {
                        operatorAddress?: string;
                        consensusPubkey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        jailed?: boolean;
                        status?: _34.BondStatus;
                        tokens?: string;
                        delegatorShares?: string;
                        description?: {
                            moniker?: string;
                            identity?: string;
                            website?: string;
                            securityContact?: string;
                            details?: string;
                        };
                        unbondingHeight?: any;
                        unbondingTime?: Date;
                        commission?: {
                            commissionRates?: {
                                rate?: string;
                                maxRate?: string;
                                maxChangeRate?: string;
                            };
                            updateTime?: Date;
                        };
                        minSelfDelegation?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _33.QueryValidatorsResponse;
            };
            QueryValidatorRequest: {
                encode(message: _33.QueryValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryValidatorRequest;
                fromPartial(object: {
                    validatorAddr?: string;
                }): _33.QueryValidatorRequest;
            };
            QueryValidatorResponse: {
                encode(message: _33.QueryValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryValidatorResponse;
                fromPartial(object: {
                    validator?: {
                        operatorAddress?: string;
                        consensusPubkey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        jailed?: boolean;
                        status?: _34.BondStatus;
                        tokens?: string;
                        delegatorShares?: string;
                        description?: {
                            moniker?: string;
                            identity?: string;
                            website?: string;
                            securityContact?: string;
                            details?: string;
                        };
                        unbondingHeight?: any;
                        unbondingTime?: Date;
                        commission?: {
                            commissionRates?: {
                                rate?: string;
                                maxRate?: string;
                                maxChangeRate?: string;
                            };
                            updateTime?: Date;
                        };
                        minSelfDelegation?: string;
                    };
                }): _33.QueryValidatorResponse;
            };
            QueryValidatorDelegationsRequest: {
                encode(message: _33.QueryValidatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryValidatorDelegationsRequest;
                fromPartial(object: {
                    validatorAddr?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _33.QueryValidatorDelegationsRequest;
            };
            QueryValidatorDelegationsResponse: {
                encode(message: _33.QueryValidatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryValidatorDelegationsResponse;
                fromPartial(object: {
                    delegationResponses?: {
                        delegation?: {
                            delegatorAddress?: string;
                            validatorAddress?: string;
                            shares?: string;
                        };
                        balance?: {
                            denom?: string;
                            amount?: string;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _33.QueryValidatorDelegationsResponse;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                encode(message: _33.QueryValidatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryValidatorUnbondingDelegationsRequest;
                fromPartial(object: {
                    validatorAddr?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _33.QueryValidatorUnbondingDelegationsRequest;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                encode(message: _33.QueryValidatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryValidatorUnbondingDelegationsResponse;
                fromPartial(object: {
                    unbondingResponses?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                        entries?: {
                            creationHeight?: any;
                            completionTime?: Date;
                            initialBalance?: string;
                            balance?: string;
                        }[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _33.QueryValidatorUnbondingDelegationsResponse;
            };
            QueryDelegationRequest: {
                encode(message: _33.QueryDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryDelegationRequest;
                fromPartial(object: {
                    delegatorAddr?: string;
                    validatorAddr?: string;
                }): _33.QueryDelegationRequest;
            };
            QueryDelegationResponse: {
                encode(message: _33.QueryDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryDelegationResponse;
                fromPartial(object: {
                    delegationResponse?: {
                        delegation?: {
                            delegatorAddress?: string;
                            validatorAddress?: string;
                            shares?: string;
                        };
                        balance?: {
                            denom?: string;
                            amount?: string;
                        };
                    };
                }): _33.QueryDelegationResponse;
            };
            QueryUnbondingDelegationRequest: {
                encode(message: _33.QueryUnbondingDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryUnbondingDelegationRequest;
                fromPartial(object: {
                    delegatorAddr?: string;
                    validatorAddr?: string;
                }): _33.QueryUnbondingDelegationRequest;
            };
            QueryUnbondingDelegationResponse: {
                encode(message: _33.QueryUnbondingDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryUnbondingDelegationResponse;
                fromPartial(object: {
                    unbond?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                        entries?: {
                            creationHeight?: any;
                            completionTime?: Date;
                            initialBalance?: string;
                            balance?: string;
                        }[];
                    };
                }): _33.QueryUnbondingDelegationResponse;
            };
            QueryDelegatorDelegationsRequest: {
                encode(message: _33.QueryDelegatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryDelegatorDelegationsRequest;
                fromPartial(object: {
                    delegatorAddr?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _33.QueryDelegatorDelegationsRequest;
            };
            QueryDelegatorDelegationsResponse: {
                encode(message: _33.QueryDelegatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryDelegatorDelegationsResponse;
                fromPartial(object: {
                    delegationResponses?: {
                        delegation?: {
                            delegatorAddress?: string;
                            validatorAddress?: string;
                            shares?: string;
                        };
                        balance?: {
                            denom?: string;
                            amount?: string;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _33.QueryDelegatorDelegationsResponse;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                encode(message: _33.QueryDelegatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryDelegatorUnbondingDelegationsRequest;
                fromPartial(object: {
                    delegatorAddr?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _33.QueryDelegatorUnbondingDelegationsRequest;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                encode(message: _33.QueryDelegatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryDelegatorUnbondingDelegationsResponse;
                fromPartial(object: {
                    unbondingResponses?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                        entries?: {
                            creationHeight?: any;
                            completionTime?: Date;
                            initialBalance?: string;
                            balance?: string;
                        }[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _33.QueryDelegatorUnbondingDelegationsResponse;
            };
            QueryRedelegationsRequest: {
                encode(message: _33.QueryRedelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryRedelegationsRequest;
                fromPartial(object: {
                    delegatorAddr?: string;
                    srcValidatorAddr?: string;
                    dstValidatorAddr?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _33.QueryRedelegationsRequest;
            };
            QueryRedelegationsResponse: {
                encode(message: _33.QueryRedelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryRedelegationsResponse;
                fromPartial(object: {
                    redelegationResponses?: {
                        redelegation?: {
                            delegatorAddress?: string;
                            validatorSrcAddress?: string;
                            validatorDstAddress?: string;
                            entries?: {
                                creationHeight?: any;
                                completionTime?: Date;
                                initialBalance?: string;
                                sharesDst?: string;
                            }[];
                        };
                        entries?: {
                            redelegationEntry?: {
                                creationHeight?: any;
                                completionTime?: Date;
                                initialBalance?: string;
                                sharesDst?: string;
                            };
                            balance?: string;
                        }[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _33.QueryRedelegationsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _33.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryDelegatorValidatorsRequest;
                fromPartial(object: {
                    delegatorAddr?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _33.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _33.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryDelegatorValidatorsResponse;
                fromPartial(object: {
                    validators?: {
                        operatorAddress?: string;
                        consensusPubkey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        jailed?: boolean;
                        status?: _34.BondStatus;
                        tokens?: string;
                        delegatorShares?: string;
                        description?: {
                            moniker?: string;
                            identity?: string;
                            website?: string;
                            securityContact?: string;
                            details?: string;
                        };
                        unbondingHeight?: any;
                        unbondingTime?: Date;
                        commission?: {
                            commissionRates?: {
                                rate?: string;
                                maxRate?: string;
                                maxChangeRate?: string;
                            };
                            updateTime?: Date;
                        };
                        minSelfDelegation?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _33.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorValidatorRequest: {
                encode(message: _33.QueryDelegatorValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryDelegatorValidatorRequest;
                fromPartial(object: {
                    delegatorAddr?: string;
                    validatorAddr?: string;
                }): _33.QueryDelegatorValidatorRequest;
            };
            QueryDelegatorValidatorResponse: {
                encode(message: _33.QueryDelegatorValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryDelegatorValidatorResponse;
                fromPartial(object: {
                    validator?: {
                        operatorAddress?: string;
                        consensusPubkey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        jailed?: boolean;
                        status?: _34.BondStatus;
                        tokens?: string;
                        delegatorShares?: string;
                        description?: {
                            moniker?: string;
                            identity?: string;
                            website?: string;
                            securityContact?: string;
                            details?: string;
                        };
                        unbondingHeight?: any;
                        unbondingTime?: Date;
                        commission?: {
                            commissionRates?: {
                                rate?: string;
                                maxRate?: string;
                                maxChangeRate?: string;
                            };
                            updateTime?: Date;
                        };
                        minSelfDelegation?: string;
                    };
                }): _33.QueryDelegatorValidatorResponse;
            };
            QueryHistoricalInfoRequest: {
                encode(message: _33.QueryHistoricalInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryHistoricalInfoRequest;
                fromPartial(object: {
                    height?: any;
                }): _33.QueryHistoricalInfoRequest;
            };
            QueryHistoricalInfoResponse: {
                encode(message: _33.QueryHistoricalInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryHistoricalInfoResponse;
                fromPartial(object: {
                    hist?: {
                        header?: {
                            version?: {
                                block?: any;
                                app?: any;
                            };
                            chainId?: string;
                            height?: any;
                            time?: Date;
                            lastBlockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            lastCommitHash?: Uint8Array;
                            dataHash?: Uint8Array;
                            validatorsHash?: Uint8Array;
                            nextValidatorsHash?: Uint8Array;
                            consensusHash?: Uint8Array;
                            appHash?: Uint8Array;
                            lastResultsHash?: Uint8Array;
                            evidenceHash?: Uint8Array;
                            proposerAddress?: Uint8Array;
                        };
                        valset?: {
                            operatorAddress?: string;
                            consensusPubkey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            jailed?: boolean;
                            status?: _34.BondStatus;
                            tokens?: string;
                            delegatorShares?: string;
                            description?: {
                                moniker?: string;
                                identity?: string;
                                website?: string;
                                securityContact?: string;
                                details?: string;
                            };
                            unbondingHeight?: any;
                            unbondingTime?: Date;
                            commission?: {
                                commissionRates?: {
                                    rate?: string;
                                    maxRate?: string;
                                    maxChangeRate?: string;
                                };
                                updateTime?: Date;
                            };
                            minSelfDelegation?: string;
                        }[];
                    };
                }): _33.QueryHistoricalInfoResponse;
            };
            QueryPoolRequest: {
                encode(_: _33.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryPoolRequest;
                fromPartial(_: {}): _33.QueryPoolRequest;
            };
            QueryPoolResponse: {
                encode(message: _33.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryPoolResponse;
                fromPartial(object: {
                    pool?: {
                        notBondedTokens?: string;
                        bondedTokens?: string;
                    };
                }): _33.QueryPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _33.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryParamsRequest;
                fromPartial(_: {}): _33.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _33.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryParamsResponse;
                fromPartial(object: {
                    params?: {
                        unbondingTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        maxValidators?: number;
                        maxEntries?: number;
                        historicalEntries?: number;
                        bondDenom?: string;
                        minCommissionRate?: string;
                    };
                }): _33.QueryParamsResponse;
            };
            GenesisState: {
                encode(message: _32.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.GenesisState;
                fromPartial(object: {
                    params?: {
                        unbondingTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        maxValidators?: number;
                        maxEntries?: number;
                        historicalEntries?: number;
                        bondDenom?: string;
                        minCommissionRate?: string;
                    };
                    lastTotalPower?: Uint8Array;
                    lastValidatorPowers?: {
                        address?: string;
                        power?: any;
                    }[];
                    validators?: {
                        operatorAddress?: string;
                        consensusPubkey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        jailed?: boolean;
                        status?: _34.BondStatus;
                        tokens?: string;
                        delegatorShares?: string;
                        description?: {
                            moniker?: string;
                            identity?: string;
                            website?: string;
                            securityContact?: string;
                            details?: string;
                        };
                        unbondingHeight?: any;
                        unbondingTime?: Date;
                        commission?: {
                            commissionRates?: {
                                rate?: string;
                                maxRate?: string;
                                maxChangeRate?: string;
                            };
                            updateTime?: Date;
                        };
                        minSelfDelegation?: string;
                    }[];
                    delegations?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                        shares?: string;
                    }[];
                    unbondingDelegations?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                        entries?: {
                            creationHeight?: any;
                            completionTime?: Date;
                            initialBalance?: string;
                            balance?: string;
                        }[];
                    }[];
                    redelegations?: {
                        delegatorAddress?: string;
                        validatorSrcAddress?: string;
                        validatorDstAddress?: string;
                        entries?: {
                            creationHeight?: any;
                            completionTime?: Date;
                            initialBalance?: string;
                            sharesDst?: string;
                        }[];
                    }[];
                    exported?: boolean;
                }): _32.GenesisState;
            };
            LastValidatorPower: {
                encode(message: _32.LastValidatorPower, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.LastValidatorPower;
                fromPartial(object: {
                    address?: string;
                    power?: any;
                }): _32.LastValidatorPower;
            };
            authorizationTypeFromJSON(object: any): _31.AuthorizationType;
            authorizationTypeToJSON(object: _31.AuthorizationType): string;
            AuthorizationType: typeof _31.AuthorizationType;
            AuthorizationTypeSDKType: typeof _31.AuthorizationTypeSDKType;
            StakeAuthorization: {
                encode(message: _31.StakeAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.StakeAuthorization;
                fromPartial(object: {
                    maxTokens?: {
                        denom?: string;
                        amount?: string;
                    };
                    allowList?: {
                        address?: string[];
                    };
                    denyList?: {
                        address?: string[];
                    };
                    authorizationType?: _31.AuthorizationType;
                }): _31.StakeAuthorization;
            };
            StakeAuthorization_Validators: {
                encode(message: _31.StakeAuthorization_Validators, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.StakeAuthorization_Validators;
                fromPartial(object: {
                    address?: string[];
                }): _31.StakeAuthorization_Validators;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _36.SignMode;
                signModeToJSON(object: _36.SignMode): string;
                SignMode: typeof _36.SignMode;
                SignModeSDKType: typeof _36.SignModeSDKType;
                SignatureDescriptors: {
                    encode(message: _36.SignatureDescriptors, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.SignatureDescriptors;
                    fromPartial(object: {
                        signatures?: {
                            publicKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            data?: {
                                single?: {
                                    mode?: _36.SignMode;
                                    signature?: Uint8Array;
                                };
                                multi?: {
                                    bitarray?: {
                                        extraBitsStored?: number;
                                        elems?: Uint8Array;
                                    };
                                    signatures?: any[];
                                };
                            };
                            sequence?: any;
                        }[];
                    }): _36.SignatureDescriptors;
                };
                SignatureDescriptor: {
                    encode(message: _36.SignatureDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.SignatureDescriptor;
                    fromPartial(object: {
                        publicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        data?: {
                            single?: {
                                mode?: _36.SignMode;
                                signature?: Uint8Array;
                            };
                            multi?: {
                                bitarray?: {
                                    extraBitsStored?: number;
                                    elems?: Uint8Array;
                                };
                                signatures?: any[];
                            };
                        };
                        sequence?: any;
                    }): _36.SignatureDescriptor;
                };
                SignatureDescriptor_Data: {
                    encode(message: _36.SignatureDescriptor_Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.SignatureDescriptor_Data;
                    fromPartial(object: {
                        single?: {
                            mode?: _36.SignMode;
                            signature?: Uint8Array;
                        };
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number;
                                elems?: Uint8Array;
                            };
                            signatures?: any[];
                        };
                    }): _36.SignatureDescriptor_Data;
                };
                SignatureDescriptor_Data_Single: {
                    encode(message: _36.SignatureDescriptor_Data_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.SignatureDescriptor_Data_Single;
                    fromPartial(object: {
                        mode?: _36.SignMode;
                        signature?: Uint8Array;
                    }): _36.SignatureDescriptor_Data_Single;
                };
                SignatureDescriptor_Data_Multi: {
                    encode(message: _36.SignatureDescriptor_Data_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.SignatureDescriptor_Data_Multi;
                    fromPartial(object: {
                        bitarray?: {
                            extraBitsStored?: number;
                            elems?: Uint8Array;
                        };
                        signatures?: any[];
                    }): _36.SignatureDescriptor_Data_Multi;
                };
            };
        }
        const v1beta1: {
            QueryClientImpl: typeof _65.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _37.SimulateRequest): Promise<_37.SimulateResponse>;
                getTx(request: _37.GetTxRequest): Promise<_37.GetTxResponse>;
                broadcastTx(request: _37.BroadcastTxRequest): Promise<_37.BroadcastTxResponse>;
                getTxsEvent(request: _37.GetTxsEventRequest): Promise<_37.GetTxsEventResponse>;
                getBlockWithTxs(request: _37.GetBlockWithTxsRequest): Promise<_37.GetBlockWithTxsResponse>;
            };
            Tx: {
                encode(message: _38.Tx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.Tx;
                fromPartial(object: {
                    body?: {
                        messages?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                        memo?: string;
                        timeoutHeight?: any;
                        extensionOptions?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                        nonCriticalExtensionOptions?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                    };
                    authInfo?: {
                        signerInfos?: {
                            publicKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            modeInfo?: {
                                single?: {
                                    mode?: _36.SignMode;
                                };
                                multi?: {
                                    bitarray?: {
                                        extraBitsStored?: number;
                                        elems?: Uint8Array;
                                    };
                                    modeInfos?: any[];
                                };
                            };
                            sequence?: any;
                        }[];
                        fee?: {
                            amount?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            gasLimit?: any;
                            payer?: string;
                            granter?: string;
                        };
                        tip?: {
                            amount?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            tipper?: string;
                        };
                    };
                    signatures?: Uint8Array[];
                }): _38.Tx;
            };
            TxRaw: {
                encode(message: _38.TxRaw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.TxRaw;
                fromPartial(object: {
                    bodyBytes?: Uint8Array;
                    authInfoBytes?: Uint8Array;
                    signatures?: Uint8Array[];
                }): _38.TxRaw;
            };
            SignDoc: {
                encode(message: _38.SignDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.SignDoc;
                fromPartial(object: {
                    bodyBytes?: Uint8Array;
                    authInfoBytes?: Uint8Array;
                    chainId?: string;
                    accountNumber?: any;
                }): _38.SignDoc;
            };
            SignDocDirectAux: {
                encode(message: _38.SignDocDirectAux, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.SignDocDirectAux;
                fromPartial(object: {
                    bodyBytes?: Uint8Array;
                    publicKey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    chainId?: string;
                    accountNumber?: any;
                    sequence?: any;
                    tip?: {
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        tipper?: string;
                    };
                }): _38.SignDocDirectAux;
            };
            TxBody: {
                encode(message: _38.TxBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.TxBody;
                fromPartial(object: {
                    messages?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    memo?: string;
                    timeoutHeight?: any;
                    extensionOptions?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    nonCriticalExtensionOptions?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                }): _38.TxBody;
            };
            AuthInfo: {
                encode(message: _38.AuthInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.AuthInfo;
                fromPartial(object: {
                    signerInfos?: {
                        publicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        modeInfo?: {
                            single?: {
                                mode?: _36.SignMode;
                            };
                            multi?: {
                                bitarray?: {
                                    extraBitsStored?: number;
                                    elems?: Uint8Array;
                                };
                                modeInfos?: any[];
                            };
                        };
                        sequence?: any;
                    }[];
                    fee?: {
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        gasLimit?: any;
                        payer?: string;
                        granter?: string;
                    };
                    tip?: {
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        tipper?: string;
                    };
                }): _38.AuthInfo;
            };
            SignerInfo: {
                encode(message: _38.SignerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.SignerInfo;
                fromPartial(object: {
                    publicKey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    modeInfo?: {
                        single?: {
                            mode?: _36.SignMode;
                        };
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number;
                                elems?: Uint8Array;
                            };
                            modeInfos?: any[];
                        };
                    };
                    sequence?: any;
                }): _38.SignerInfo;
            };
            ModeInfo: {
                encode(message: _38.ModeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.ModeInfo;
                fromPartial(object: {
                    single?: {
                        mode?: _36.SignMode;
                    };
                    multi?: {
                        bitarray?: {
                            extraBitsStored?: number;
                            elems?: Uint8Array;
                        };
                        modeInfos?: any[];
                    };
                }): _38.ModeInfo;
            };
            ModeInfo_Single: {
                encode(message: _38.ModeInfo_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.ModeInfo_Single;
                fromPartial(object: {
                    mode?: _36.SignMode;
                }): _38.ModeInfo_Single;
            };
            ModeInfo_Multi: {
                encode(message: _38.ModeInfo_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.ModeInfo_Multi;
                fromPartial(object: {
                    bitarray?: {
                        extraBitsStored?: number;
                        elems?: Uint8Array;
                    };
                    modeInfos?: any[];
                }): _38.ModeInfo_Multi;
            };
            Fee: {
                encode(message: _38.Fee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.Fee;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    gasLimit?: any;
                    payer?: string;
                    granter?: string;
                }): _38.Fee;
            };
            Tip: {
                encode(message: _38.Tip, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.Tip;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    tipper?: string;
                }): _38.Tip;
            };
            AuxSignerData: {
                encode(message: _38.AuxSignerData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.AuxSignerData;
                fromPartial(object: {
                    address?: string;
                    signDoc?: {
                        bodyBytes?: Uint8Array;
                        publicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        chainId?: string;
                        accountNumber?: any;
                        sequence?: any;
                        tip?: {
                            amount?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            tipper?: string;
                        };
                    };
                    mode?: _36.SignMode;
                    sig?: Uint8Array;
                }): _38.AuxSignerData;
            };
            orderByFromJSON(object: any): _37.OrderBy;
            orderByToJSON(object: _37.OrderBy): string;
            broadcastModeFromJSON(object: any): _37.BroadcastMode;
            broadcastModeToJSON(object: _37.BroadcastMode): string;
            OrderBy: typeof _37.OrderBy;
            OrderBySDKType: typeof _37.OrderBySDKType;
            BroadcastMode: typeof _37.BroadcastMode;
            BroadcastModeSDKType: typeof _37.BroadcastModeSDKType;
            GetTxsEventRequest: {
                encode(message: _37.GetTxsEventRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.GetTxsEventRequest;
                fromPartial(object: {
                    events?: string[];
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                    orderBy?: _37.OrderBy;
                }): _37.GetTxsEventRequest;
            };
            GetTxsEventResponse: {
                encode(message: _37.GetTxsEventResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.GetTxsEventResponse;
                fromPartial(object: {
                    txs?: {
                        body?: {
                            messages?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            memo?: string;
                            timeoutHeight?: any;
                            extensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            nonCriticalExtensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                        };
                        authInfo?: {
                            signerInfos?: {
                                publicKey?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                                modeInfo?: {
                                    single?: {
                                        mode?: _36.SignMode;
                                    };
                                    multi?: {
                                        bitarray?: {
                                            extraBitsStored?: number;
                                            elems?: Uint8Array;
                                        };
                                        modeInfos?: any[];
                                    };
                                };
                                sequence?: any;
                            }[];
                            fee?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                gasLimit?: any;
                                payer?: string;
                                granter?: string;
                            };
                            tip?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                tipper?: string;
                            };
                        };
                        signatures?: Uint8Array[];
                    }[];
                    txResponses?: {
                        height?: any;
                        txhash?: string;
                        codespace?: string;
                        code?: number;
                        data?: string;
                        rawLog?: string;
                        logs?: {
                            msgIndex?: number;
                            log?: string;
                            events?: {
                                type?: string;
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                }[];
                            }[];
                        }[];
                        info?: string;
                        gasWanted?: any;
                        gasUsed?: any;
                        tx?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        timestamp?: string;
                        events?: {
                            type?: string;
                            attributes?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                                index?: boolean;
                            }[];
                        }[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _37.GetTxsEventResponse;
            };
            BroadcastTxRequest: {
                encode(message: _37.BroadcastTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.BroadcastTxRequest;
                fromPartial(object: {
                    txBytes?: Uint8Array;
                    mode?: _37.BroadcastMode;
                }): _37.BroadcastTxRequest;
            };
            BroadcastTxResponse: {
                encode(message: _37.BroadcastTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.BroadcastTxResponse;
                fromPartial(object: {
                    txResponse?: {
                        height?: any;
                        txhash?: string;
                        codespace?: string;
                        code?: number;
                        data?: string;
                        rawLog?: string;
                        logs?: {
                            msgIndex?: number;
                            log?: string;
                            events?: {
                                type?: string;
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                }[];
                            }[];
                        }[];
                        info?: string;
                        gasWanted?: any;
                        gasUsed?: any;
                        tx?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        timestamp?: string;
                        events?: {
                            type?: string;
                            attributes?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                                index?: boolean;
                            }[];
                        }[];
                    };
                }): _37.BroadcastTxResponse;
            };
            SimulateRequest: {
                encode(message: _37.SimulateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.SimulateRequest;
                fromPartial(object: {
                    tx?: {
                        body?: {
                            messages?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            memo?: string;
                            timeoutHeight?: any;
                            extensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            nonCriticalExtensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                        };
                        authInfo?: {
                            signerInfos?: {
                                publicKey?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                                modeInfo?: {
                                    single?: {
                                        mode?: _36.SignMode;
                                    };
                                    multi?: {
                                        bitarray?: {
                                            extraBitsStored?: number;
                                            elems?: Uint8Array;
                                        };
                                        modeInfos?: any[];
                                    };
                                };
                                sequence?: any;
                            }[];
                            fee?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                gasLimit?: any;
                                payer?: string;
                                granter?: string;
                            };
                            tip?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                tipper?: string;
                            };
                        };
                        signatures?: Uint8Array[];
                    };
                    txBytes?: Uint8Array;
                }): _37.SimulateRequest;
            };
            SimulateResponse: {
                encode(message: _37.SimulateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.SimulateResponse;
                fromPartial(object: {
                    gasInfo?: {
                        gasWanted?: any;
                        gasUsed?: any;
                    };
                    result?: {
                        data?: Uint8Array;
                        log?: string;
                        events?: {
                            type?: string;
                            attributes?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                                index?: boolean;
                            }[];
                        }[];
                        msgResponses?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                    };
                }): _37.SimulateResponse;
            };
            GetTxRequest: {
                encode(message: _37.GetTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.GetTxRequest;
                fromPartial(object: {
                    hash?: string;
                }): _37.GetTxRequest;
            };
            GetTxResponse: {
                encode(message: _37.GetTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.GetTxResponse;
                fromPartial(object: {
                    tx?: {
                        body?: {
                            messages?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            memo?: string;
                            timeoutHeight?: any;
                            extensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            nonCriticalExtensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                        };
                        authInfo?: {
                            signerInfos?: {
                                publicKey?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                                modeInfo?: {
                                    single?: {
                                        mode?: _36.SignMode;
                                    };
                                    multi?: {
                                        bitarray?: {
                                            extraBitsStored?: number;
                                            elems?: Uint8Array;
                                        };
                                        modeInfos?: any[];
                                    };
                                };
                                sequence?: any;
                            }[];
                            fee?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                gasLimit?: any;
                                payer?: string;
                                granter?: string;
                            };
                            tip?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                tipper?: string;
                            };
                        };
                        signatures?: Uint8Array[];
                    };
                    txResponse?: {
                        height?: any;
                        txhash?: string;
                        codespace?: string;
                        code?: number;
                        data?: string;
                        rawLog?: string;
                        logs?: {
                            msgIndex?: number;
                            log?: string;
                            events?: {
                                type?: string;
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                }[];
                            }[];
                        }[];
                        info?: string;
                        gasWanted?: any;
                        gasUsed?: any;
                        tx?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        timestamp?: string;
                        events?: {
                            type?: string;
                            attributes?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                                index?: boolean;
                            }[];
                        }[];
                    };
                }): _37.GetTxResponse;
            };
            GetBlockWithTxsRequest: {
                encode(message: _37.GetBlockWithTxsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.GetBlockWithTxsRequest;
                fromPartial(object: {
                    height?: any;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _37.GetBlockWithTxsRequest;
            };
            GetBlockWithTxsResponse: {
                encode(message: _37.GetBlockWithTxsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.GetBlockWithTxsResponse;
                fromPartial(object: {
                    txs?: {
                        body?: {
                            messages?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            memo?: string;
                            timeoutHeight?: any;
                            extensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            nonCriticalExtensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                        };
                        authInfo?: {
                            signerInfos?: {
                                publicKey?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                                modeInfo?: {
                                    single?: {
                                        mode?: _36.SignMode;
                                    };
                                    multi?: {
                                        bitarray?: {
                                            extraBitsStored?: number;
                                            elems?: Uint8Array;
                                        };
                                        modeInfos?: any[];
                                    };
                                };
                                sequence?: any;
                            }[];
                            fee?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                gasLimit?: any;
                                payer?: string;
                                granter?: string;
                            };
                            tip?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                tipper?: string;
                            };
                        };
                        signatures?: Uint8Array[];
                    }[];
                    blockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    block?: {
                        header?: {
                            version?: {
                                block?: any;
                                app?: any;
                            };
                            chainId?: string;
                            height?: any;
                            time?: Date;
                            lastBlockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            lastCommitHash?: Uint8Array;
                            dataHash?: Uint8Array;
                            validatorsHash?: Uint8Array;
                            nextValidatorsHash?: Uint8Array;
                            consensusHash?: Uint8Array;
                            appHash?: Uint8Array;
                            lastResultsHash?: Uint8Array;
                            evidenceHash?: Uint8Array;
                            proposerAddress?: Uint8Array;
                        };
                        data?: {
                            txs?: Uint8Array[];
                        };
                        evidence?: {
                            evidence?: {
                                duplicateVoteEvidence?: {
                                    voteA?: {
                                        type?: import("../tendermint/types/types").SignedMsgType;
                                        height?: any;
                                        round?: number;
                                        blockId?: {
                                            hash?: Uint8Array;
                                            partSetHeader?: {
                                                total?: number;
                                                hash?: Uint8Array;
                                            };
                                        };
                                        timestamp?: Date;
                                        validatorAddress?: Uint8Array;
                                        validatorIndex?: number;
                                        signature?: Uint8Array;
                                    };
                                    voteB?: {
                                        type?: import("../tendermint/types/types").SignedMsgType;
                                        height?: any;
                                        round?: number;
                                        blockId?: {
                                            hash?: Uint8Array;
                                            partSetHeader?: {
                                                total?: number;
                                                hash?: Uint8Array;
                                            };
                                        };
                                        timestamp?: Date;
                                        validatorAddress?: Uint8Array;
                                        validatorIndex?: number;
                                        signature?: Uint8Array;
                                    };
                                    totalVotingPower?: any;
                                    validatorPower?: any;
                                    timestamp?: Date;
                                };
                                lightClientAttackEvidence?: {
                                    conflictingBlock?: {
                                        signedHeader?: {
                                            header?: {
                                                version?: {
                                                    block?: any;
                                                    app?: any;
                                                };
                                                chainId?: string;
                                                height?: any;
                                                time?: Date;
                                                lastBlockId?: {
                                                    hash?: Uint8Array;
                                                    partSetHeader?: {
                                                        total?: number;
                                                        hash?: Uint8Array;
                                                    };
                                                };
                                                lastCommitHash?: Uint8Array;
                                                dataHash?: Uint8Array;
                                                validatorsHash?: Uint8Array;
                                                nextValidatorsHash?: Uint8Array;
                                                consensusHash?: Uint8Array;
                                                appHash?: Uint8Array;
                                                lastResultsHash?: Uint8Array;
                                                evidenceHash?: Uint8Array;
                                                proposerAddress?: Uint8Array;
                                            };
                                            commit?: {
                                                height?: any;
                                                round?: number;
                                                blockId?: {
                                                    hash?: Uint8Array;
                                                    partSetHeader?: {
                                                        total?: number;
                                                        hash?: Uint8Array;
                                                    };
                                                };
                                                signatures?: {
                                                    blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                                    validatorAddress?: Uint8Array;
                                                    timestamp?: Date;
                                                    signature?: Uint8Array;
                                                }[];
                                            };
                                        };
                                        validatorSet?: {
                                            validators?: {
                                                address?: Uint8Array;
                                                pubKey?: {
                                                    ed25519?: Uint8Array;
                                                    secp256k1?: Uint8Array;
                                                };
                                                votingPower?: any;
                                                proposerPriority?: any;
                                            }[];
                                            proposer?: {
                                                address?: Uint8Array;
                                                pubKey?: {
                                                    ed25519?: Uint8Array;
                                                    secp256k1?: Uint8Array;
                                                };
                                                votingPower?: any;
                                                proposerPriority?: any;
                                            };
                                            totalVotingPower?: any;
                                        };
                                    };
                                    commonHeight?: any;
                                    byzantineValidators?: {
                                        address?: Uint8Array;
                                        pubKey?: {
                                            ed25519?: Uint8Array;
                                            secp256k1?: Uint8Array;
                                        };
                                        votingPower?: any;
                                        proposerPriority?: any;
                                    }[];
                                    totalVotingPower?: any;
                                    timestamp?: Date;
                                };
                            }[];
                        };
                        lastCommit?: {
                            height?: any;
                            round?: number;
                            blockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            signatures?: {
                                blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                validatorAddress?: Uint8Array;
                                timestamp?: Date;
                                signature?: Uint8Array;
                            }[];
                        };
                    };
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _37.GetBlockWithTxsResponse;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                bank: {
                    v1beta1: _66.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _67.MsgClientImpl;
                };
                gov: {
                    v1: _68.MsgClientImpl;
                    v1beta1: _69.MsgClientImpl;
                };
                staking: {
                    v1beta1: _70.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string;
        }) => Promise<{
            cosmos: {
                bank: {
                    v1beta1: {
                        balance(request: _4.QueryBalanceRequest): Promise<_4.QueryBalanceResponse>;
                        allBalances(request: _4.QueryAllBalancesRequest): Promise<_4.QueryAllBalancesResponse>;
                        spendableBalances(request: _4.QuerySpendableBalancesRequest): Promise<_4.QuerySpendableBalancesResponse>;
                        totalSupply(request?: _4.QueryTotalSupplyRequest): Promise<_4.QueryTotalSupplyResponse>;
                        supplyOf(request: _4.QuerySupplyOfRequest): Promise<_4.QuerySupplyOfResponse>;
                        params(request?: _4.QueryParamsRequest): Promise<_4.QueryParamsResponse>;
                        denomMetadata(request: _4.QueryDenomMetadataRequest): Promise<_4.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _4.QueryDenomsMetadataRequest): Promise<_4.QueryDenomsMetadataResponse>;
                        denomOwners(request: _4.QueryDenomOwnersRequest): Promise<_4.QueryDenomOwnersResponse>;
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _18.QueryParamsRequest): Promise<_18.QueryParamsResponse>;
                        validatorOutstandingRewards(request: _18.QueryValidatorOutstandingRewardsRequest): Promise<_18.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _18.QueryValidatorCommissionRequest): Promise<_18.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _18.QueryValidatorSlashesRequest): Promise<_18.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _18.QueryDelegationRewardsRequest): Promise<_18.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _18.QueryDelegationTotalRewardsRequest): Promise<_18.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _18.QueryDelegatorValidatorsRequest): Promise<_18.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _18.QueryDelegatorWithdrawAddressRequest): Promise<_18.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _18.QueryCommunityPoolRequest): Promise<_18.QueryCommunityPoolResponse>;
                    };
                };
                gov: {
                    v1: {
                        proposal(request: _22.QueryProposalRequest): Promise<_22.QueryProposalResponse>;
                        proposals(request: _22.QueryProposalsRequest): Promise<_22.QueryProposalsResponse>;
                        vote(request: _22.QueryVoteRequest): Promise<_22.QueryVoteResponse>;
                        votes(request: _22.QueryVotesRequest): Promise<_22.QueryVotesResponse>;
                        params(request: _22.QueryParamsRequest): Promise<_22.QueryParamsResponse>;
                        deposit(request: _22.QueryDepositRequest): Promise<_22.QueryDepositResponse>;
                        deposits(request: _22.QueryDepositsRequest): Promise<_22.QueryDepositsResponse>;
                        tallyResult(request: _22.QueryTallyResultRequest): Promise<_22.QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: _26.QueryProposalRequest): Promise<_26.QueryProposalResponse>;
                        proposals(request: _26.QueryProposalsRequest): Promise<_26.QueryProposalsResponse>;
                        vote(request: _26.QueryVoteRequest): Promise<_26.QueryVoteResponse>;
                        votes(request: _26.QueryVotesRequest): Promise<_26.QueryVotesResponse>;
                        params(request: _26.QueryParamsRequest): Promise<_26.QueryParamsResponse>;
                        deposit(request: _26.QueryDepositRequest): Promise<_26.QueryDepositResponse>;
                        deposits(request: _26.QueryDepositsRequest): Promise<_26.QueryDepositsResponse>;
                        tallyResult(request: _26.QueryTallyResultRequest): Promise<_26.QueryTallyResultResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: _30.QueryParamsRequest): Promise<_30.QueryParamsResponse>;
                        inflation(request?: _30.QueryInflationRequest): Promise<_30.QueryInflationResponse>;
                        annualProvisions(request?: _30.QueryAnnualProvisionsRequest): Promise<_30.QueryAnnualProvisionsResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _33.QueryValidatorsRequest): Promise<_33.QueryValidatorsResponse>;
                        validator(request: _33.QueryValidatorRequest): Promise<_33.QueryValidatorResponse>;
                        validatorDelegations(request: _33.QueryValidatorDelegationsRequest): Promise<_33.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _33.QueryValidatorUnbondingDelegationsRequest): Promise<_33.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _33.QueryDelegationRequest): Promise<_33.QueryDelegationResponse>;
                        unbondingDelegation(request: _33.QueryUnbondingDelegationRequest): Promise<_33.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _33.QueryDelegatorDelegationsRequest): Promise<_33.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _33.QueryDelegatorUnbondingDelegationsRequest): Promise<_33.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _33.QueryRedelegationsRequest): Promise<_33.QueryRedelegationsResponse>;
                        delegatorValidators(request: _33.QueryDelegatorValidatorsRequest): Promise<_33.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _33.QueryDelegatorValidatorRequest): Promise<_33.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _33.QueryHistoricalInfoRequest): Promise<_33.QueryHistoricalInfoResponse>;
                        pool(request?: _33.QueryPoolRequest): Promise<_33.QueryPoolResponse>;
                        params(request?: _33.QueryParamsRequest): Promise<_33.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _37.SimulateRequest): Promise<_37.SimulateResponse>;
                        getTx(request: _37.GetTxRequest): Promise<_37.GetTxResponse>;
                        broadcastTx(request: _37.BroadcastTxRequest): Promise<_37.BroadcastTxResponse>;
                        getTxsEvent(request: _37.GetTxsEventRequest): Promise<_37.GetTxsEventResponse>;
                        getBlockWithTxs(request: _37.GetBlockWithTxsRequest): Promise<_37.GetBlockWithTxsResponse>;
                    };
                };
            };
        }>;
    };
}
