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
                fromPartial(object: Partial<_5.MsgSend>): _5.MsgSend;
            };
            MsgSendResponse: {
                encode(_: _5.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.MsgSendResponse;
                fromPartial(_: Partial<_5.MsgSendResponse>): _5.MsgSendResponse;
            };
            MsgMultiSend: {
                encode(message: _5.MsgMultiSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.MsgMultiSend;
                fromPartial(object: Partial<_5.MsgMultiSend>): _5.MsgMultiSend;
            };
            MsgMultiSendResponse: {
                encode(_: _5.MsgMultiSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.MsgMultiSendResponse;
                fromPartial(_: Partial<_5.MsgMultiSendResponse>): _5.MsgMultiSendResponse;
            };
            QueryBalanceRequest: {
                encode(message: _4.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.QueryBalanceRequest;
                fromPartial(object: Partial<_4.QueryBalanceRequest>): _4.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _4.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.QueryBalanceResponse;
                fromPartial(object: Partial<_4.QueryBalanceResponse>): _4.QueryBalanceResponse;
            };
            QueryAllBalancesRequest: {
                encode(message: _4.QueryAllBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.QueryAllBalancesRequest;
                fromPartial(object: Partial<_4.QueryAllBalancesRequest>): _4.QueryAllBalancesRequest;
            };
            QueryAllBalancesResponse: {
                encode(message: _4.QueryAllBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.QueryAllBalancesResponse;
                fromPartial(object: Partial<_4.QueryAllBalancesResponse>): _4.QueryAllBalancesResponse;
            };
            QuerySpendableBalancesRequest: {
                encode(message: _4.QuerySpendableBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.QuerySpendableBalancesRequest;
                fromPartial(object: Partial<_4.QuerySpendableBalancesRequest>): _4.QuerySpendableBalancesRequest;
            };
            QuerySpendableBalancesResponse: {
                encode(message: _4.QuerySpendableBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.QuerySpendableBalancesResponse;
                fromPartial(object: Partial<_4.QuerySpendableBalancesResponse>): _4.QuerySpendableBalancesResponse;
            };
            QueryTotalSupplyRequest: {
                encode(message: _4.QueryTotalSupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.QueryTotalSupplyRequest;
                fromPartial(object: Partial<_4.QueryTotalSupplyRequest>): _4.QueryTotalSupplyRequest;
            };
            QueryTotalSupplyResponse: {
                encode(message: _4.QueryTotalSupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.QueryTotalSupplyResponse;
                fromPartial(object: Partial<_4.QueryTotalSupplyResponse>): _4.QueryTotalSupplyResponse;
            };
            QuerySupplyOfRequest: {
                encode(message: _4.QuerySupplyOfRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.QuerySupplyOfRequest;
                fromPartial(object: Partial<_4.QuerySupplyOfRequest>): _4.QuerySupplyOfRequest;
            };
            QuerySupplyOfResponse: {
                encode(message: _4.QuerySupplyOfResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.QuerySupplyOfResponse;
                fromPartial(object: Partial<_4.QuerySupplyOfResponse>): _4.QuerySupplyOfResponse;
            };
            QueryParamsRequest: {
                encode(_: _4.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.QueryParamsRequest;
                fromPartial(_: Partial<_4.QueryParamsRequest>): _4.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _4.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.QueryParamsResponse;
                fromPartial(object: Partial<_4.QueryParamsResponse>): _4.QueryParamsResponse;
            };
            QueryDenomsMetadataRequest: {
                encode(message: _4.QueryDenomsMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.QueryDenomsMetadataRequest;
                fromPartial(object: Partial<_4.QueryDenomsMetadataRequest>): _4.QueryDenomsMetadataRequest;
            };
            QueryDenomsMetadataResponse: {
                encode(message: _4.QueryDenomsMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.QueryDenomsMetadataResponse;
                fromPartial(object: Partial<_4.QueryDenomsMetadataResponse>): _4.QueryDenomsMetadataResponse;
            };
            QueryDenomMetadataRequest: {
                encode(message: _4.QueryDenomMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.QueryDenomMetadataRequest;
                fromPartial(object: Partial<_4.QueryDenomMetadataRequest>): _4.QueryDenomMetadataRequest;
            };
            QueryDenomMetadataResponse: {
                encode(message: _4.QueryDenomMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.QueryDenomMetadataResponse;
                fromPartial(object: Partial<_4.QueryDenomMetadataResponse>): _4.QueryDenomMetadataResponse;
            };
            QueryDenomOwnersRequest: {
                encode(message: _4.QueryDenomOwnersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.QueryDenomOwnersRequest;
                fromPartial(object: Partial<_4.QueryDenomOwnersRequest>): _4.QueryDenomOwnersRequest;
            };
            DenomOwner: {
                encode(message: _4.DenomOwner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.DenomOwner;
                fromPartial(object: Partial<_4.DenomOwner>): _4.DenomOwner;
            };
            QueryDenomOwnersResponse: {
                encode(message: _4.QueryDenomOwnersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.QueryDenomOwnersResponse;
                fromPartial(object: Partial<_4.QueryDenomOwnersResponse>): _4.QueryDenomOwnersResponse;
            };
            GenesisState: {
                encode(message: _3.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.GenesisState;
                fromPartial(object: Partial<_3.GenesisState>): _3.GenesisState;
            };
            Balance: {
                encode(message: _3.Balance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.Balance;
                fromPartial(object: Partial<_3.Balance>): _3.Balance;
            };
            Params: {
                encode(message: _2.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.Params;
                fromPartial(object: Partial<_2.Params>): _2.Params;
            };
            SendEnabled: {
                encode(message: _2.SendEnabled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.SendEnabled;
                fromPartial(object: Partial<_2.SendEnabled>): _2.SendEnabled;
            };
            Input: {
                encode(message: _2.Input, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.Input;
                fromPartial(object: Partial<_2.Input>): _2.Input;
            };
            Output: {
                encode(message: _2.Output, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.Output;
                fromPartial(object: Partial<_2.Output>): _2.Output;
            };
            Supply: {
                encode(message: _2.Supply, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.Supply;
                fromPartial(object: Partial<_2.Supply>): _2.Supply;
            };
            DenomUnit: {
                encode(message: _2.DenomUnit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.DenomUnit;
                fromPartial(object: Partial<_2.DenomUnit>): _2.DenomUnit;
            };
            Metadata: {
                encode(message: _2.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.Metadata;
                fromPartial(object: Partial<_2.Metadata>): _2.Metadata;
            };
            SendAuthorization: {
                encode(message: _1.SendAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.SendAuthorization;
                fromPartial(object: Partial<_1.SendAuthorization>): _1.SendAuthorization;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    encode(message: _6.TxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.TxResponse;
                    fromPartial(object: Partial<_6.TxResponse>): _6.TxResponse;
                };
                ABCIMessageLog: {
                    encode(message: _6.ABCIMessageLog, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.ABCIMessageLog;
                    fromPartial(object: Partial<_6.ABCIMessageLog>): _6.ABCIMessageLog;
                };
                StringEvent: {
                    encode(message: _6.StringEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.StringEvent;
                    fromPartial(object: Partial<_6.StringEvent>): _6.StringEvent;
                };
                Attribute: {
                    encode(message: _6.Attribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.Attribute;
                    fromPartial(object: Partial<_6.Attribute>): _6.Attribute;
                };
                GasInfo: {
                    encode(message: _6.GasInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.GasInfo;
                    fromPartial(object: Partial<_6.GasInfo>): _6.GasInfo;
                };
                Result: {
                    encode(message: _6.Result, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.Result;
                    fromPartial(object: Partial<_6.Result>): _6.Result;
                };
                SimulationResponse: {
                    encode(message: _6.SimulationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.SimulationResponse;
                    fromPartial(object: Partial<_6.SimulationResponse>): _6.SimulationResponse;
                };
                MsgData: {
                    encode(message: _6.MsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.MsgData;
                    fromPartial(object: Partial<_6.MsgData>): _6.MsgData;
                };
                TxMsgData: {
                    encode(message: _6.TxMsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.TxMsgData;
                    fromPartial(object: Partial<_6.TxMsgData>): _6.TxMsgData;
                };
                SearchTxsResult: {
                    encode(message: _6.SearchTxsResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.SearchTxsResult;
                    fromPartial(object: Partial<_6.SearchTxsResult>): _6.SearchTxsResult;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    encode(message: _7.PageRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.PageRequest;
                    fromPartial(object: Partial<_7.PageRequest>): _7.PageRequest;
                };
                PageResponse: {
                    encode(message: _7.PageResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.PageResponse;
                    fromPartial(object: Partial<_7.PageResponse>): _7.PageResponse;
                };
            };
        }
        namespace reflection {
            const v2alpha1: {
                AppDescriptor: {
                    encode(message: _8.AppDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.AppDescriptor;
                    fromPartial(object: Partial<_8.AppDescriptor>): _8.AppDescriptor;
                };
                TxDescriptor: {
                    encode(message: _8.TxDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.TxDescriptor;
                    fromPartial(object: Partial<_8.TxDescriptor>): _8.TxDescriptor;
                };
                AuthnDescriptor: {
                    encode(message: _8.AuthnDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.AuthnDescriptor;
                    fromPartial(object: Partial<_8.AuthnDescriptor>): _8.AuthnDescriptor;
                };
                SigningModeDescriptor: {
                    encode(message: _8.SigningModeDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.SigningModeDescriptor;
                    fromPartial(object: Partial<_8.SigningModeDescriptor>): _8.SigningModeDescriptor;
                };
                ChainDescriptor: {
                    encode(message: _8.ChainDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.ChainDescriptor;
                    fromPartial(object: Partial<_8.ChainDescriptor>): _8.ChainDescriptor;
                };
                CodecDescriptor: {
                    encode(message: _8.CodecDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.CodecDescriptor;
                    fromPartial(object: Partial<_8.CodecDescriptor>): _8.CodecDescriptor;
                };
                InterfaceDescriptor: {
                    encode(message: _8.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.InterfaceDescriptor;
                    fromPartial(object: Partial<_8.InterfaceDescriptor>): _8.InterfaceDescriptor;
                };
                InterfaceImplementerDescriptor: {
                    encode(message: _8.InterfaceImplementerDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.InterfaceImplementerDescriptor;
                    fromPartial(object: Partial<_8.InterfaceImplementerDescriptor>): _8.InterfaceImplementerDescriptor;
                };
                InterfaceAcceptingMessageDescriptor: {
                    encode(message: _8.InterfaceAcceptingMessageDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.InterfaceAcceptingMessageDescriptor;
                    fromPartial(object: Partial<_8.InterfaceAcceptingMessageDescriptor>): _8.InterfaceAcceptingMessageDescriptor;
                };
                ConfigurationDescriptor: {
                    encode(message: _8.ConfigurationDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.ConfigurationDescriptor;
                    fromPartial(object: Partial<_8.ConfigurationDescriptor>): _8.ConfigurationDescriptor;
                };
                MsgDescriptor: {
                    encode(message: _8.MsgDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.MsgDescriptor;
                    fromPartial(object: Partial<_8.MsgDescriptor>): _8.MsgDescriptor;
                };
                GetAuthnDescriptorRequest: {
                    encode(_: _8.GetAuthnDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.GetAuthnDescriptorRequest;
                    fromPartial(_: Partial<_8.GetAuthnDescriptorRequest>): _8.GetAuthnDescriptorRequest;
                };
                GetAuthnDescriptorResponse: {
                    encode(message: _8.GetAuthnDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.GetAuthnDescriptorResponse;
                    fromPartial(object: Partial<_8.GetAuthnDescriptorResponse>): _8.GetAuthnDescriptorResponse;
                };
                GetChainDescriptorRequest: {
                    encode(_: _8.GetChainDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.GetChainDescriptorRequest;
                    fromPartial(_: Partial<_8.GetChainDescriptorRequest>): _8.GetChainDescriptorRequest;
                };
                GetChainDescriptorResponse: {
                    encode(message: _8.GetChainDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.GetChainDescriptorResponse;
                    fromPartial(object: Partial<_8.GetChainDescriptorResponse>): _8.GetChainDescriptorResponse;
                };
                GetCodecDescriptorRequest: {
                    encode(_: _8.GetCodecDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.GetCodecDescriptorRequest;
                    fromPartial(_: Partial<_8.GetCodecDescriptorRequest>): _8.GetCodecDescriptorRequest;
                };
                GetCodecDescriptorResponse: {
                    encode(message: _8.GetCodecDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.GetCodecDescriptorResponse;
                    fromPartial(object: Partial<_8.GetCodecDescriptorResponse>): _8.GetCodecDescriptorResponse;
                };
                GetConfigurationDescriptorRequest: {
                    encode(_: _8.GetConfigurationDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.GetConfigurationDescriptorRequest;
                    fromPartial(_: Partial<_8.GetConfigurationDescriptorRequest>): _8.GetConfigurationDescriptorRequest;
                };
                GetConfigurationDescriptorResponse: {
                    encode(message: _8.GetConfigurationDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.GetConfigurationDescriptorResponse;
                    fromPartial(object: Partial<_8.GetConfigurationDescriptorResponse>): _8.GetConfigurationDescriptorResponse;
                };
                GetQueryServicesDescriptorRequest: {
                    encode(_: _8.GetQueryServicesDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.GetQueryServicesDescriptorRequest;
                    fromPartial(_: Partial<_8.GetQueryServicesDescriptorRequest>): _8.GetQueryServicesDescriptorRequest;
                };
                GetQueryServicesDescriptorResponse: {
                    encode(message: _8.GetQueryServicesDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.GetQueryServicesDescriptorResponse;
                    fromPartial(object: Partial<_8.GetQueryServicesDescriptorResponse>): _8.GetQueryServicesDescriptorResponse;
                };
                GetTxDescriptorRequest: {
                    encode(_: _8.GetTxDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.GetTxDescriptorRequest;
                    fromPartial(_: Partial<_8.GetTxDescriptorRequest>): _8.GetTxDescriptorRequest;
                };
                GetTxDescriptorResponse: {
                    encode(message: _8.GetTxDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.GetTxDescriptorResponse;
                    fromPartial(object: Partial<_8.GetTxDescriptorResponse>): _8.GetTxDescriptorResponse;
                };
                QueryServicesDescriptor: {
                    encode(message: _8.QueryServicesDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.QueryServicesDescriptor;
                    fromPartial(object: Partial<_8.QueryServicesDescriptor>): _8.QueryServicesDescriptor;
                };
                QueryServiceDescriptor: {
                    encode(message: _8.QueryServiceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.QueryServiceDescriptor;
                    fromPartial(object: Partial<_8.QueryServiceDescriptor>): _8.QueryServiceDescriptor;
                };
                QueryMethodDescriptor: {
                    encode(message: _8.QueryMethodDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.QueryMethodDescriptor;
                    fromPartial(object: Partial<_8.QueryMethodDescriptor>): _8.QueryMethodDescriptor;
                };
            };
        }
        const v1beta1: {
            Coin: {
                encode(message: _9.Coin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.Coin;
                fromPartial(object: Partial<_9.Coin>): _9.Coin;
            };
            DecCoin: {
                encode(message: _9.DecCoin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.DecCoin;
                fromPartial(object: Partial<_9.DecCoin>): _9.DecCoin;
            };
            IntProto: {
                encode(message: _9.IntProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.IntProto;
                fromPartial(object: Partial<_9.IntProto>): _9.IntProto;
            };
            DecProto: {
                encode(message: _9.DecProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.DecProto;
                fromPartial(object: Partial<_9.DecProto>): _9.DecProto;
            };
        };
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                encode(message: _10.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.PubKey;
                fromPartial(object: Partial<_10.PubKey>): _10.PubKey;
            };
            PrivKey: {
                encode(message: _10.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.PrivKey;
                fromPartial(object: Partial<_10.PrivKey>): _10.PrivKey;
            };
        };
        namespace hd {
            const v1: {
                BIP44Params: {
                    encode(message: _11.BIP44Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.BIP44Params;
                    fromPartial(object: Partial<_11.BIP44Params>): _11.BIP44Params;
                };
            };
        }
        namespace keyring {
            const v1: {
                Record: {
                    encode(message: _12.Record, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.Record;
                    fromPartial(object: Partial<_12.Record>): _12.Record;
                };
                Record_Local: {
                    encode(message: _12.Record_Local, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.Record_Local;
                    fromPartial(object: Partial<_12.Record_Local>): _12.Record_Local;
                };
                Record_Ledger: {
                    encode(message: _12.Record_Ledger, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.Record_Ledger;
                    fromPartial(object: Partial<_12.Record_Ledger>): _12.Record_Ledger;
                };
                Record_Multi: {
                    encode(_: _12.Record_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.Record_Multi;
                    fromPartial(_: Partial<_12.Record_Multi>): _12.Record_Multi;
                };
                Record_Offline: {
                    encode(_: _12.Record_Offline, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.Record_Offline;
                    fromPartial(_: Partial<_12.Record_Offline>): _12.Record_Offline;
                };
            };
        }
        const multisig: {
            LegacyAminoPubKey: {
                encode(message: _13.LegacyAminoPubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.LegacyAminoPubKey;
                fromPartial(object: Partial<_13.LegacyAminoPubKey>): _13.LegacyAminoPubKey;
            };
        };
        const secp256k1: {
            PubKey: {
                encode(message: _14.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.PubKey;
                fromPartial(object: Partial<_14.PubKey>): _14.PubKey;
            };
            PrivKey: {
                encode(message: _14.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.PrivKey;
                fromPartial(object: Partial<_14.PrivKey>): _14.PrivKey;
            };
        };
        const secp256r1: {
            PubKey: {
                encode(message: _15.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.PubKey;
                fromPartial(object: Partial<_15.PubKey>): _15.PubKey;
            };
            PrivKey: {
                encode(message: _15.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.PrivKey;
                fromPartial(object: Partial<_15.PrivKey>): _15.PrivKey;
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
                fromPartial(object: Partial<_19.MsgSetWithdrawAddress>): _19.MsgSetWithdrawAddress;
            };
            MsgSetWithdrawAddressResponse: {
                encode(_: _19.MsgSetWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.MsgSetWithdrawAddressResponse;
                fromPartial(_: Partial<_19.MsgSetWithdrawAddressResponse>): _19.MsgSetWithdrawAddressResponse;
            };
            MsgWithdrawDelegatorReward: {
                encode(message: _19.MsgWithdrawDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.MsgWithdrawDelegatorReward;
                fromPartial(object: Partial<_19.MsgWithdrawDelegatorReward>): _19.MsgWithdrawDelegatorReward;
            };
            MsgWithdrawDelegatorRewardResponse: {
                encode(message: _19.MsgWithdrawDelegatorRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.MsgWithdrawDelegatorRewardResponse;
                fromPartial(object: Partial<_19.MsgWithdrawDelegatorRewardResponse>): _19.MsgWithdrawDelegatorRewardResponse;
            };
            MsgWithdrawValidatorCommission: {
                encode(message: _19.MsgWithdrawValidatorCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.MsgWithdrawValidatorCommission;
                fromPartial(object: Partial<_19.MsgWithdrawValidatorCommission>): _19.MsgWithdrawValidatorCommission;
            };
            MsgWithdrawValidatorCommissionResponse: {
                encode(message: _19.MsgWithdrawValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.MsgWithdrawValidatorCommissionResponse;
                fromPartial(object: Partial<_19.MsgWithdrawValidatorCommissionResponse>): _19.MsgWithdrawValidatorCommissionResponse;
            };
            MsgFundCommunityPool: {
                encode(message: _19.MsgFundCommunityPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.MsgFundCommunityPool;
                fromPartial(object: Partial<_19.MsgFundCommunityPool>): _19.MsgFundCommunityPool;
            };
            MsgFundCommunityPoolResponse: {
                encode(_: _19.MsgFundCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.MsgFundCommunityPoolResponse;
                fromPartial(_: Partial<_19.MsgFundCommunityPoolResponse>): _19.MsgFundCommunityPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _18.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.QueryParamsRequest;
                fromPartial(_: Partial<_18.QueryParamsRequest>): _18.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _18.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.QueryParamsResponse;
                fromPartial(object: Partial<_18.QueryParamsResponse>): _18.QueryParamsResponse;
            };
            QueryValidatorOutstandingRewardsRequest: {
                encode(message: _18.QueryValidatorOutstandingRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.QueryValidatorOutstandingRewardsRequest;
                fromPartial(object: Partial<_18.QueryValidatorOutstandingRewardsRequest>): _18.QueryValidatorOutstandingRewardsRequest;
            };
            QueryValidatorOutstandingRewardsResponse: {
                encode(message: _18.QueryValidatorOutstandingRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.QueryValidatorOutstandingRewardsResponse;
                fromPartial(object: Partial<_18.QueryValidatorOutstandingRewardsResponse>): _18.QueryValidatorOutstandingRewardsResponse;
            };
            QueryValidatorCommissionRequest: {
                encode(message: _18.QueryValidatorCommissionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.QueryValidatorCommissionRequest;
                fromPartial(object: Partial<_18.QueryValidatorCommissionRequest>): _18.QueryValidatorCommissionRequest;
            };
            QueryValidatorCommissionResponse: {
                encode(message: _18.QueryValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.QueryValidatorCommissionResponse;
                fromPartial(object: Partial<_18.QueryValidatorCommissionResponse>): _18.QueryValidatorCommissionResponse;
            };
            QueryValidatorSlashesRequest: {
                encode(message: _18.QueryValidatorSlashesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.QueryValidatorSlashesRequest;
                fromPartial(object: Partial<_18.QueryValidatorSlashesRequest>): _18.QueryValidatorSlashesRequest;
            };
            QueryValidatorSlashesResponse: {
                encode(message: _18.QueryValidatorSlashesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.QueryValidatorSlashesResponse;
                fromPartial(object: Partial<_18.QueryValidatorSlashesResponse>): _18.QueryValidatorSlashesResponse;
            };
            QueryDelegationRewardsRequest: {
                encode(message: _18.QueryDelegationRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.QueryDelegationRewardsRequest;
                fromPartial(object: Partial<_18.QueryDelegationRewardsRequest>): _18.QueryDelegationRewardsRequest;
            };
            QueryDelegationRewardsResponse: {
                encode(message: _18.QueryDelegationRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.QueryDelegationRewardsResponse;
                fromPartial(object: Partial<_18.QueryDelegationRewardsResponse>): _18.QueryDelegationRewardsResponse;
            };
            QueryDelegationTotalRewardsRequest: {
                encode(message: _18.QueryDelegationTotalRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.QueryDelegationTotalRewardsRequest;
                fromPartial(object: Partial<_18.QueryDelegationTotalRewardsRequest>): _18.QueryDelegationTotalRewardsRequest;
            };
            QueryDelegationTotalRewardsResponse: {
                encode(message: _18.QueryDelegationTotalRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.QueryDelegationTotalRewardsResponse;
                fromPartial(object: Partial<_18.QueryDelegationTotalRewardsResponse>): _18.QueryDelegationTotalRewardsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _18.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_18.QueryDelegatorValidatorsRequest>): _18.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _18.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_18.QueryDelegatorValidatorsResponse>): _18.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorWithdrawAddressRequest: {
                encode(message: _18.QueryDelegatorWithdrawAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.QueryDelegatorWithdrawAddressRequest;
                fromPartial(object: Partial<_18.QueryDelegatorWithdrawAddressRequest>): _18.QueryDelegatorWithdrawAddressRequest;
            };
            QueryDelegatorWithdrawAddressResponse: {
                encode(message: _18.QueryDelegatorWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.QueryDelegatorWithdrawAddressResponse;
                fromPartial(object: Partial<_18.QueryDelegatorWithdrawAddressResponse>): _18.QueryDelegatorWithdrawAddressResponse;
            };
            QueryCommunityPoolRequest: {
                encode(_: _18.QueryCommunityPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.QueryCommunityPoolRequest;
                fromPartial(_: Partial<_18.QueryCommunityPoolRequest>): _18.QueryCommunityPoolRequest;
            };
            QueryCommunityPoolResponse: {
                encode(message: _18.QueryCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.QueryCommunityPoolResponse;
                fromPartial(object: Partial<_18.QueryCommunityPoolResponse>): _18.QueryCommunityPoolResponse;
            };
            DelegatorWithdrawInfo: {
                encode(message: _17.DelegatorWithdrawInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.DelegatorWithdrawInfo;
                fromPartial(object: Partial<_17.DelegatorWithdrawInfo>): _17.DelegatorWithdrawInfo;
            };
            ValidatorOutstandingRewardsRecord: {
                encode(message: _17.ValidatorOutstandingRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.ValidatorOutstandingRewardsRecord;
                fromPartial(object: Partial<_17.ValidatorOutstandingRewardsRecord>): _17.ValidatorOutstandingRewardsRecord;
            };
            ValidatorAccumulatedCommissionRecord: {
                encode(message: _17.ValidatorAccumulatedCommissionRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.ValidatorAccumulatedCommissionRecord;
                fromPartial(object: Partial<_17.ValidatorAccumulatedCommissionRecord>): _17.ValidatorAccumulatedCommissionRecord;
            };
            ValidatorHistoricalRewardsRecord: {
                encode(message: _17.ValidatorHistoricalRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.ValidatorHistoricalRewardsRecord;
                fromPartial(object: Partial<_17.ValidatorHistoricalRewardsRecord>): _17.ValidatorHistoricalRewardsRecord;
            };
            ValidatorCurrentRewardsRecord: {
                encode(message: _17.ValidatorCurrentRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.ValidatorCurrentRewardsRecord;
                fromPartial(object: Partial<_17.ValidatorCurrentRewardsRecord>): _17.ValidatorCurrentRewardsRecord;
            };
            DelegatorStartingInfoRecord: {
                encode(message: _17.DelegatorStartingInfoRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.DelegatorStartingInfoRecord;
                fromPartial(object: Partial<_17.DelegatorStartingInfoRecord>): _17.DelegatorStartingInfoRecord;
            };
            ValidatorSlashEventRecord: {
                encode(message: _17.ValidatorSlashEventRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.ValidatorSlashEventRecord;
                fromPartial(object: Partial<_17.ValidatorSlashEventRecord>): _17.ValidatorSlashEventRecord;
            };
            GenesisState: {
                encode(message: _17.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.GenesisState;
                fromPartial(object: Partial<_17.GenesisState>): _17.GenesisState;
            };
            Params: {
                encode(message: _16.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.Params;
                fromPartial(object: Partial<_16.Params>): _16.Params;
            };
            ValidatorHistoricalRewards: {
                encode(message: _16.ValidatorHistoricalRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.ValidatorHistoricalRewards;
                fromPartial(object: Partial<_16.ValidatorHistoricalRewards>): _16.ValidatorHistoricalRewards;
            };
            ValidatorCurrentRewards: {
                encode(message: _16.ValidatorCurrentRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.ValidatorCurrentRewards;
                fromPartial(object: Partial<_16.ValidatorCurrentRewards>): _16.ValidatorCurrentRewards;
            };
            ValidatorAccumulatedCommission: {
                encode(message: _16.ValidatorAccumulatedCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.ValidatorAccumulatedCommission;
                fromPartial(object: Partial<_16.ValidatorAccumulatedCommission>): _16.ValidatorAccumulatedCommission;
            };
            ValidatorOutstandingRewards: {
                encode(message: _16.ValidatorOutstandingRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.ValidatorOutstandingRewards;
                fromPartial(object: Partial<_16.ValidatorOutstandingRewards>): _16.ValidatorOutstandingRewards;
            };
            ValidatorSlashEvent: {
                encode(message: _16.ValidatorSlashEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.ValidatorSlashEvent;
                fromPartial(object: Partial<_16.ValidatorSlashEvent>): _16.ValidatorSlashEvent;
            };
            ValidatorSlashEvents: {
                encode(message: _16.ValidatorSlashEvents, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.ValidatorSlashEvents;
                fromPartial(object: Partial<_16.ValidatorSlashEvents>): _16.ValidatorSlashEvents;
            };
            FeePool: {
                encode(message: _16.FeePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.FeePool;
                fromPartial(object: Partial<_16.FeePool>): _16.FeePool;
            };
            CommunityPoolSpendProposal: {
                encode(message: _16.CommunityPoolSpendProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.CommunityPoolSpendProposal;
                fromPartial(object: Partial<_16.CommunityPoolSpendProposal>): _16.CommunityPoolSpendProposal;
            };
            DelegatorStartingInfo: {
                encode(message: _16.DelegatorStartingInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.DelegatorStartingInfo;
                fromPartial(object: Partial<_16.DelegatorStartingInfo>): _16.DelegatorStartingInfo;
            };
            DelegationDelegatorReward: {
                encode(message: _16.DelegationDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.DelegationDelegatorReward;
                fromPartial(object: Partial<_16.DelegationDelegatorReward>): _16.DelegationDelegatorReward;
            };
            CommunityPoolSpendProposalWithDeposit: {
                encode(message: _16.CommunityPoolSpendProposalWithDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.CommunityPoolSpendProposalWithDeposit;
                fromPartial(object: Partial<_16.CommunityPoolSpendProposalWithDeposit>): _16.CommunityPoolSpendProposalWithDeposit;
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
                fromPartial(object: Partial<_23.MsgSubmitProposal>): _23.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _23.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_23.MsgSubmitProposalResponse>): _23.MsgSubmitProposalResponse;
            };
            MsgExecLegacyContent: {
                encode(message: _23.MsgExecLegacyContent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.MsgExecLegacyContent;
                fromPartial(object: Partial<_23.MsgExecLegacyContent>): _23.MsgExecLegacyContent;
            };
            MsgExecLegacyContentResponse: {
                encode(_: _23.MsgExecLegacyContentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.MsgExecLegacyContentResponse;
                fromPartial(_: Partial<_23.MsgExecLegacyContentResponse>): _23.MsgExecLegacyContentResponse;
            };
            MsgVote: {
                encode(message: _23.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.MsgVote;
                fromPartial(object: Partial<_23.MsgVote>): _23.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _23.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.MsgVoteResponse;
                fromPartial(_: Partial<_23.MsgVoteResponse>): _23.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: _23.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.MsgVoteWeighted;
                fromPartial(object: Partial<_23.MsgVoteWeighted>): _23.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _23.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_23.MsgVoteWeightedResponse>): _23.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _23.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.MsgDeposit;
                fromPartial(object: Partial<_23.MsgDeposit>): _23.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _23.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.MsgDepositResponse;
                fromPartial(_: Partial<_23.MsgDepositResponse>): _23.MsgDepositResponse;
            };
            QueryProposalRequest: {
                encode(message: _22.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.QueryProposalRequest;
                fromPartial(object: Partial<_22.QueryProposalRequest>): _22.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _22.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.QueryProposalResponse;
                fromPartial(object: Partial<_22.QueryProposalResponse>): _22.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _22.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.QueryProposalsRequest;
                fromPartial(object: Partial<_22.QueryProposalsRequest>): _22.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _22.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.QueryProposalsResponse;
                fromPartial(object: Partial<_22.QueryProposalsResponse>): _22.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _22.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.QueryVoteRequest;
                fromPartial(object: Partial<_22.QueryVoteRequest>): _22.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _22.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.QueryVoteResponse;
                fromPartial(object: Partial<_22.QueryVoteResponse>): _22.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _22.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.QueryVotesRequest;
                fromPartial(object: Partial<_22.QueryVotesRequest>): _22.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _22.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.QueryVotesResponse;
                fromPartial(object: Partial<_22.QueryVotesResponse>): _22.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: _22.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.QueryParamsRequest;
                fromPartial(object: Partial<_22.QueryParamsRequest>): _22.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _22.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.QueryParamsResponse;
                fromPartial(object: Partial<_22.QueryParamsResponse>): _22.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: _22.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.QueryDepositRequest;
                fromPartial(object: Partial<_22.QueryDepositRequest>): _22.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _22.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.QueryDepositResponse;
                fromPartial(object: Partial<_22.QueryDepositResponse>): _22.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _22.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.QueryDepositsRequest;
                fromPartial(object: Partial<_22.QueryDepositsRequest>): _22.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _22.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.QueryDepositsResponse;
                fromPartial(object: Partial<_22.QueryDepositsResponse>): _22.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _22.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.QueryTallyResultRequest;
                fromPartial(object: Partial<_22.QueryTallyResultRequest>): _22.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _22.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.QueryTallyResultResponse;
                fromPartial(object: Partial<_22.QueryTallyResultResponse>): _22.QueryTallyResultResponse;
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
                fromPartial(object: Partial<_21.WeightedVoteOption>): _21.WeightedVoteOption;
            };
            Deposit: {
                encode(message: _21.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.Deposit;
                fromPartial(object: Partial<_21.Deposit>): _21.Deposit;
            };
            Proposal: {
                encode(message: _21.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.Proposal;
                fromPartial(object: Partial<_21.Proposal>): _21.Proposal;
            };
            TallyResult: {
                encode(message: _21.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.TallyResult;
                fromPartial(object: Partial<_21.TallyResult>): _21.TallyResult;
            };
            Vote: {
                encode(message: _21.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.Vote;
                fromPartial(object: Partial<_21.Vote>): _21.Vote;
            };
            DepositParams: {
                encode(message: _21.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.DepositParams;
                fromPartial(object: Partial<_21.DepositParams>): _21.DepositParams;
            };
            VotingParams: {
                encode(message: _21.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.VotingParams;
                fromPartial(object: Partial<_21.VotingParams>): _21.VotingParams;
            };
            TallyParams: {
                encode(message: _21.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.TallyParams;
                fromPartial(object: Partial<_21.TallyParams>): _21.TallyParams;
            };
            GenesisState: {
                encode(message: _20.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.GenesisState;
                fromPartial(object: Partial<_20.GenesisState>): _20.GenesisState;
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
                fromPartial(object: Partial<_27.MsgSubmitProposal>): _27.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _27.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_27.MsgSubmitProposalResponse>): _27.MsgSubmitProposalResponse;
            };
            MsgVote: {
                encode(message: _27.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.MsgVote;
                fromPartial(object: Partial<_27.MsgVote>): _27.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _27.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.MsgVoteResponse;
                fromPartial(_: Partial<_27.MsgVoteResponse>): _27.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: _27.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.MsgVoteWeighted;
                fromPartial(object: Partial<_27.MsgVoteWeighted>): _27.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _27.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_27.MsgVoteWeightedResponse>): _27.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _27.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.MsgDeposit;
                fromPartial(object: Partial<_27.MsgDeposit>): _27.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _27.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.MsgDepositResponse;
                fromPartial(_: Partial<_27.MsgDepositResponse>): _27.MsgDepositResponse;
            };
            QueryProposalRequest: {
                encode(message: _26.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.QueryProposalRequest;
                fromPartial(object: Partial<_26.QueryProposalRequest>): _26.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _26.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.QueryProposalResponse;
                fromPartial(object: Partial<_26.QueryProposalResponse>): _26.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _26.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.QueryProposalsRequest;
                fromPartial(object: Partial<_26.QueryProposalsRequest>): _26.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _26.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.QueryProposalsResponse;
                fromPartial(object: Partial<_26.QueryProposalsResponse>): _26.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _26.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.QueryVoteRequest;
                fromPartial(object: Partial<_26.QueryVoteRequest>): _26.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _26.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.QueryVoteResponse;
                fromPartial(object: Partial<_26.QueryVoteResponse>): _26.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _26.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.QueryVotesRequest;
                fromPartial(object: Partial<_26.QueryVotesRequest>): _26.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _26.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.QueryVotesResponse;
                fromPartial(object: Partial<_26.QueryVotesResponse>): _26.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: _26.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.QueryParamsRequest;
                fromPartial(object: Partial<_26.QueryParamsRequest>): _26.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _26.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.QueryParamsResponse;
                fromPartial(object: Partial<_26.QueryParamsResponse>): _26.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: _26.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.QueryDepositRequest;
                fromPartial(object: Partial<_26.QueryDepositRequest>): _26.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _26.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.QueryDepositResponse;
                fromPartial(object: Partial<_26.QueryDepositResponse>): _26.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _26.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.QueryDepositsRequest;
                fromPartial(object: Partial<_26.QueryDepositsRequest>): _26.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _26.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.QueryDepositsResponse;
                fromPartial(object: Partial<_26.QueryDepositsResponse>): _26.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _26.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.QueryTallyResultRequest;
                fromPartial(object: Partial<_26.QueryTallyResultRequest>): _26.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _26.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.QueryTallyResultResponse;
                fromPartial(object: Partial<_26.QueryTallyResultResponse>): _26.QueryTallyResultResponse;
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
                fromPartial(object: Partial<_25.WeightedVoteOption>): _25.WeightedVoteOption;
            };
            TextProposal: {
                encode(message: _25.TextProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.TextProposal;
                fromPartial(object: Partial<_25.TextProposal>): _25.TextProposal;
            };
            Deposit: {
                encode(message: _25.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.Deposit;
                fromPartial(object: Partial<_25.Deposit>): _25.Deposit;
            };
            Proposal: {
                encode(message: _25.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.Proposal;
                fromPartial(object: Partial<_25.Proposal>): _25.Proposal;
            };
            TallyResult: {
                encode(message: _25.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.TallyResult;
                fromPartial(object: Partial<_25.TallyResult>): _25.TallyResult;
            };
            Vote: {
                encode(message: _25.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.Vote;
                fromPartial(object: Partial<_25.Vote>): _25.Vote;
            };
            DepositParams: {
                encode(message: _25.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.DepositParams;
                fromPartial(object: Partial<_25.DepositParams>): _25.DepositParams;
            };
            VotingParams: {
                encode(message: _25.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.VotingParams;
                fromPartial(object: Partial<_25.VotingParams>): _25.VotingParams;
            };
            TallyParams: {
                encode(message: _25.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.TallyParams;
                fromPartial(object: Partial<_25.TallyParams>): _25.TallyParams;
            };
            GenesisState: {
                encode(message: _24.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.GenesisState;
                fromPartial(object: Partial<_24.GenesisState>): _24.GenesisState;
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
                fromPartial(_: Partial<_30.QueryParamsRequest>): _30.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _30.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.QueryParamsResponse;
                fromPartial(object: Partial<_30.QueryParamsResponse>): _30.QueryParamsResponse;
            };
            QueryInflationRequest: {
                encode(_: _30.QueryInflationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.QueryInflationRequest;
                fromPartial(_: Partial<_30.QueryInflationRequest>): _30.QueryInflationRequest;
            };
            QueryInflationResponse: {
                encode(message: _30.QueryInflationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.QueryInflationResponse;
                fromPartial(object: Partial<_30.QueryInflationResponse>): _30.QueryInflationResponse;
            };
            QueryAnnualProvisionsRequest: {
                encode(_: _30.QueryAnnualProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.QueryAnnualProvisionsRequest;
                fromPartial(_: Partial<_30.QueryAnnualProvisionsRequest>): _30.QueryAnnualProvisionsRequest;
            };
            QueryAnnualProvisionsResponse: {
                encode(message: _30.QueryAnnualProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.QueryAnnualProvisionsResponse;
                fromPartial(object: Partial<_30.QueryAnnualProvisionsResponse>): _30.QueryAnnualProvisionsResponse;
            };
            Minter: {
                encode(message: _29.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.Minter;
                fromPartial(object: Partial<_29.Minter>): _29.Minter;
            };
            Params: {
                encode(message: _29.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.Params;
                fromPartial(object: Partial<_29.Params>): _29.Params;
            };
            GenesisState: {
                encode(message: _28.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.GenesisState;
                fromPartial(object: Partial<_28.GenesisState>): _28.GenesisState;
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
                fromPartial(object: Partial<_35.MsgCreateValidator>): _35.MsgCreateValidator;
            };
            MsgCreateValidatorResponse: {
                encode(_: _35.MsgCreateValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.MsgCreateValidatorResponse;
                fromPartial(_: Partial<_35.MsgCreateValidatorResponse>): _35.MsgCreateValidatorResponse;
            };
            MsgEditValidator: {
                encode(message: _35.MsgEditValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.MsgEditValidator;
                fromPartial(object: Partial<_35.MsgEditValidator>): _35.MsgEditValidator;
            };
            MsgEditValidatorResponse: {
                encode(_: _35.MsgEditValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.MsgEditValidatorResponse;
                fromPartial(_: Partial<_35.MsgEditValidatorResponse>): _35.MsgEditValidatorResponse;
            };
            MsgDelegate: {
                encode(message: _35.MsgDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.MsgDelegate;
                fromPartial(object: Partial<_35.MsgDelegate>): _35.MsgDelegate;
            };
            MsgDelegateResponse: {
                encode(_: _35.MsgDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.MsgDelegateResponse;
                fromPartial(_: Partial<_35.MsgDelegateResponse>): _35.MsgDelegateResponse;
            };
            MsgBeginRedelegate: {
                encode(message: _35.MsgBeginRedelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.MsgBeginRedelegate;
                fromPartial(object: Partial<_35.MsgBeginRedelegate>): _35.MsgBeginRedelegate;
            };
            MsgBeginRedelegateResponse: {
                encode(message: _35.MsgBeginRedelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.MsgBeginRedelegateResponse;
                fromPartial(object: Partial<_35.MsgBeginRedelegateResponse>): _35.MsgBeginRedelegateResponse;
            };
            MsgUndelegate: {
                encode(message: _35.MsgUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.MsgUndelegate;
                fromPartial(object: Partial<_35.MsgUndelegate>): _35.MsgUndelegate;
            };
            MsgUndelegateResponse: {
                encode(message: _35.MsgUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.MsgUndelegateResponse;
                fromPartial(object: Partial<_35.MsgUndelegateResponse>): _35.MsgUndelegateResponse;
            };
            bondStatusFromJSON(object: any): _34.BondStatus;
            bondStatusToJSON(object: _34.BondStatus): string;
            BondStatus: typeof _34.BondStatus;
            BondStatusSDKType: typeof _34.BondStatusSDKType;
            HistoricalInfo: {
                encode(message: _34.HistoricalInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.HistoricalInfo;
                fromPartial(object: Partial<_34.HistoricalInfo>): _34.HistoricalInfo;
            };
            CommissionRates: {
                encode(message: _34.CommissionRates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.CommissionRates;
                fromPartial(object: Partial<_34.CommissionRates>): _34.CommissionRates;
            };
            Commission: {
                encode(message: _34.Commission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.Commission;
                fromPartial(object: Partial<_34.Commission>): _34.Commission;
            };
            Description: {
                encode(message: _34.Description, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.Description;
                fromPartial(object: Partial<_34.Description>): _34.Description;
            };
            Validator: {
                encode(message: _34.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.Validator;
                fromPartial(object: Partial<_34.Validator>): _34.Validator;
            };
            ValAddresses: {
                encode(message: _34.ValAddresses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.ValAddresses;
                fromPartial(object: Partial<_34.ValAddresses>): _34.ValAddresses;
            };
            DVPair: {
                encode(message: _34.DVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.DVPair;
                fromPartial(object: Partial<_34.DVPair>): _34.DVPair;
            };
            DVPairs: {
                encode(message: _34.DVPairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.DVPairs;
                fromPartial(object: Partial<_34.DVPairs>): _34.DVPairs;
            };
            DVVTriplet: {
                encode(message: _34.DVVTriplet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.DVVTriplet;
                fromPartial(object: Partial<_34.DVVTriplet>): _34.DVVTriplet;
            };
            DVVTriplets: {
                encode(message: _34.DVVTriplets, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.DVVTriplets;
                fromPartial(object: Partial<_34.DVVTriplets>): _34.DVVTriplets;
            };
            Delegation: {
                encode(message: _34.Delegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.Delegation;
                fromPartial(object: Partial<_34.Delegation>): _34.Delegation;
            };
            UnbondingDelegation: {
                encode(message: _34.UnbondingDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.UnbondingDelegation;
                fromPartial(object: Partial<_34.UnbondingDelegation>): _34.UnbondingDelegation;
            };
            UnbondingDelegationEntry: {
                encode(message: _34.UnbondingDelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.UnbondingDelegationEntry;
                fromPartial(object: Partial<_34.UnbondingDelegationEntry>): _34.UnbondingDelegationEntry;
            };
            RedelegationEntry: {
                encode(message: _34.RedelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.RedelegationEntry;
                fromPartial(object: Partial<_34.RedelegationEntry>): _34.RedelegationEntry;
            };
            Redelegation: {
                encode(message: _34.Redelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.Redelegation;
                fromPartial(object: Partial<_34.Redelegation>): _34.Redelegation;
            };
            Params: {
                encode(message: _34.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.Params;
                fromPartial(object: Partial<_34.Params>): _34.Params;
            };
            DelegationResponse: {
                encode(message: _34.DelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.DelegationResponse;
                fromPartial(object: Partial<_34.DelegationResponse>): _34.DelegationResponse;
            };
            RedelegationEntryResponse: {
                encode(message: _34.RedelegationEntryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.RedelegationEntryResponse;
                fromPartial(object: Partial<_34.RedelegationEntryResponse>): _34.RedelegationEntryResponse;
            };
            RedelegationResponse: {
                encode(message: _34.RedelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.RedelegationResponse;
                fromPartial(object: Partial<_34.RedelegationResponse>): _34.RedelegationResponse;
            };
            Pool: {
                encode(message: _34.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.Pool;
                fromPartial(object: Partial<_34.Pool>): _34.Pool;
            };
            QueryValidatorsRequest: {
                encode(message: _33.QueryValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryValidatorsRequest;
                fromPartial(object: Partial<_33.QueryValidatorsRequest>): _33.QueryValidatorsRequest;
            };
            QueryValidatorsResponse: {
                encode(message: _33.QueryValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryValidatorsResponse;
                fromPartial(object: Partial<_33.QueryValidatorsResponse>): _33.QueryValidatorsResponse;
            };
            QueryValidatorRequest: {
                encode(message: _33.QueryValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryValidatorRequest;
                fromPartial(object: Partial<_33.QueryValidatorRequest>): _33.QueryValidatorRequest;
            };
            QueryValidatorResponse: {
                encode(message: _33.QueryValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryValidatorResponse;
                fromPartial(object: Partial<_33.QueryValidatorResponse>): _33.QueryValidatorResponse;
            };
            QueryValidatorDelegationsRequest: {
                encode(message: _33.QueryValidatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryValidatorDelegationsRequest;
                fromPartial(object: Partial<_33.QueryValidatorDelegationsRequest>): _33.QueryValidatorDelegationsRequest;
            };
            QueryValidatorDelegationsResponse: {
                encode(message: _33.QueryValidatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryValidatorDelegationsResponse;
                fromPartial(object: Partial<_33.QueryValidatorDelegationsResponse>): _33.QueryValidatorDelegationsResponse;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                encode(message: _33.QueryValidatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryValidatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_33.QueryValidatorUnbondingDelegationsRequest>): _33.QueryValidatorUnbondingDelegationsRequest;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                encode(message: _33.QueryValidatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryValidatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_33.QueryValidatorUnbondingDelegationsResponse>): _33.QueryValidatorUnbondingDelegationsResponse;
            };
            QueryDelegationRequest: {
                encode(message: _33.QueryDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryDelegationRequest;
                fromPartial(object: Partial<_33.QueryDelegationRequest>): _33.QueryDelegationRequest;
            };
            QueryDelegationResponse: {
                encode(message: _33.QueryDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryDelegationResponse;
                fromPartial(object: Partial<_33.QueryDelegationResponse>): _33.QueryDelegationResponse;
            };
            QueryUnbondingDelegationRequest: {
                encode(message: _33.QueryUnbondingDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryUnbondingDelegationRequest;
                fromPartial(object: Partial<_33.QueryUnbondingDelegationRequest>): _33.QueryUnbondingDelegationRequest;
            };
            QueryUnbondingDelegationResponse: {
                encode(message: _33.QueryUnbondingDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryUnbondingDelegationResponse;
                fromPartial(object: Partial<_33.QueryUnbondingDelegationResponse>): _33.QueryUnbondingDelegationResponse;
            };
            QueryDelegatorDelegationsRequest: {
                encode(message: _33.QueryDelegatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryDelegatorDelegationsRequest;
                fromPartial(object: Partial<_33.QueryDelegatorDelegationsRequest>): _33.QueryDelegatorDelegationsRequest;
            };
            QueryDelegatorDelegationsResponse: {
                encode(message: _33.QueryDelegatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryDelegatorDelegationsResponse;
                fromPartial(object: Partial<_33.QueryDelegatorDelegationsResponse>): _33.QueryDelegatorDelegationsResponse;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                encode(message: _33.QueryDelegatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryDelegatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_33.QueryDelegatorUnbondingDelegationsRequest>): _33.QueryDelegatorUnbondingDelegationsRequest;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                encode(message: _33.QueryDelegatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryDelegatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_33.QueryDelegatorUnbondingDelegationsResponse>): _33.QueryDelegatorUnbondingDelegationsResponse;
            };
            QueryRedelegationsRequest: {
                encode(message: _33.QueryRedelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryRedelegationsRequest;
                fromPartial(object: Partial<_33.QueryRedelegationsRequest>): _33.QueryRedelegationsRequest;
            };
            QueryRedelegationsResponse: {
                encode(message: _33.QueryRedelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryRedelegationsResponse;
                fromPartial(object: Partial<_33.QueryRedelegationsResponse>): _33.QueryRedelegationsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _33.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_33.QueryDelegatorValidatorsRequest>): _33.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _33.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_33.QueryDelegatorValidatorsResponse>): _33.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorValidatorRequest: {
                encode(message: _33.QueryDelegatorValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryDelegatorValidatorRequest;
                fromPartial(object: Partial<_33.QueryDelegatorValidatorRequest>): _33.QueryDelegatorValidatorRequest;
            };
            QueryDelegatorValidatorResponse: {
                encode(message: _33.QueryDelegatorValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryDelegatorValidatorResponse;
                fromPartial(object: Partial<_33.QueryDelegatorValidatorResponse>): _33.QueryDelegatorValidatorResponse;
            };
            QueryHistoricalInfoRequest: {
                encode(message: _33.QueryHistoricalInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryHistoricalInfoRequest;
                fromPartial(object: Partial<_33.QueryHistoricalInfoRequest>): _33.QueryHistoricalInfoRequest;
            };
            QueryHistoricalInfoResponse: {
                encode(message: _33.QueryHistoricalInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryHistoricalInfoResponse;
                fromPartial(object: Partial<_33.QueryHistoricalInfoResponse>): _33.QueryHistoricalInfoResponse;
            };
            QueryPoolRequest: {
                encode(_: _33.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryPoolRequest;
                fromPartial(_: Partial<_33.QueryPoolRequest>): _33.QueryPoolRequest;
            };
            QueryPoolResponse: {
                encode(message: _33.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryPoolResponse;
                fromPartial(object: Partial<_33.QueryPoolResponse>): _33.QueryPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _33.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryParamsRequest;
                fromPartial(_: Partial<_33.QueryParamsRequest>): _33.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _33.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryParamsResponse;
                fromPartial(object: Partial<_33.QueryParamsResponse>): _33.QueryParamsResponse;
            };
            GenesisState: {
                encode(message: _32.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.GenesisState;
                fromPartial(object: Partial<_32.GenesisState>): _32.GenesisState;
            };
            LastValidatorPower: {
                encode(message: _32.LastValidatorPower, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.LastValidatorPower;
                fromPartial(object: Partial<_32.LastValidatorPower>): _32.LastValidatorPower;
            };
            authorizationTypeFromJSON(object: any): _31.AuthorizationType;
            authorizationTypeToJSON(object: _31.AuthorizationType): string;
            AuthorizationType: typeof _31.AuthorizationType;
            AuthorizationTypeSDKType: typeof _31.AuthorizationTypeSDKType;
            StakeAuthorization: {
                encode(message: _31.StakeAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.StakeAuthorization;
                fromPartial(object: Partial<_31.StakeAuthorization>): _31.StakeAuthorization;
            };
            StakeAuthorization_Validators: {
                encode(message: _31.StakeAuthorization_Validators, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.StakeAuthorization_Validators;
                fromPartial(object: Partial<_31.StakeAuthorization_Validators>): _31.StakeAuthorization_Validators;
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
                    fromPartial(object: Partial<_36.SignatureDescriptors>): _36.SignatureDescriptors;
                };
                SignatureDescriptor: {
                    encode(message: _36.SignatureDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.SignatureDescriptor;
                    fromPartial(object: Partial<_36.SignatureDescriptor>): _36.SignatureDescriptor;
                };
                SignatureDescriptor_Data: {
                    encode(message: _36.SignatureDescriptor_Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.SignatureDescriptor_Data;
                    fromPartial(object: Partial<_36.SignatureDescriptor_Data>): _36.SignatureDescriptor_Data;
                };
                SignatureDescriptor_Data_Single: {
                    encode(message: _36.SignatureDescriptor_Data_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.SignatureDescriptor_Data_Single;
                    fromPartial(object: Partial<_36.SignatureDescriptor_Data_Single>): _36.SignatureDescriptor_Data_Single;
                };
                SignatureDescriptor_Data_Multi: {
                    encode(message: _36.SignatureDescriptor_Data_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.SignatureDescriptor_Data_Multi;
                    fromPartial(object: Partial<_36.SignatureDescriptor_Data_Multi>): _36.SignatureDescriptor_Data_Multi;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _65.ServiceClientImpl;
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
                fromPartial(object: Partial<_38.Tx>): _38.Tx;
            };
            TxRaw: {
                encode(message: _38.TxRaw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.TxRaw;
                fromPartial(object: Partial<_38.TxRaw>): _38.TxRaw;
            };
            SignDoc: {
                encode(message: _38.SignDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.SignDoc;
                fromPartial(object: Partial<_38.SignDoc>): _38.SignDoc;
            };
            SignDocDirectAux: {
                encode(message: _38.SignDocDirectAux, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.SignDocDirectAux;
                fromPartial(object: Partial<_38.SignDocDirectAux>): _38.SignDocDirectAux;
            };
            TxBody: {
                encode(message: _38.TxBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.TxBody;
                fromPartial(object: Partial<_38.TxBody>): _38.TxBody;
            };
            AuthInfo: {
                encode(message: _38.AuthInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.AuthInfo;
                fromPartial(object: Partial<_38.AuthInfo>): _38.AuthInfo;
            };
            SignerInfo: {
                encode(message: _38.SignerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.SignerInfo;
                fromPartial(object: Partial<_38.SignerInfo>): _38.SignerInfo;
            };
            ModeInfo: {
                encode(message: _38.ModeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.ModeInfo;
                fromPartial(object: Partial<_38.ModeInfo>): _38.ModeInfo;
            };
            ModeInfo_Single: {
                encode(message: _38.ModeInfo_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.ModeInfo_Single;
                fromPartial(object: Partial<_38.ModeInfo_Single>): _38.ModeInfo_Single;
            };
            ModeInfo_Multi: {
                encode(message: _38.ModeInfo_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.ModeInfo_Multi;
                fromPartial(object: Partial<_38.ModeInfo_Multi>): _38.ModeInfo_Multi;
            };
            Fee: {
                encode(message: _38.Fee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.Fee;
                fromPartial(object: Partial<_38.Fee>): _38.Fee;
            };
            Tip: {
                encode(message: _38.Tip, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.Tip;
                fromPartial(object: Partial<_38.Tip>): _38.Tip;
            };
            AuxSignerData: {
                encode(message: _38.AuxSignerData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.AuxSignerData;
                fromPartial(object: Partial<_38.AuxSignerData>): _38.AuxSignerData;
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
                fromPartial(object: Partial<_37.GetTxsEventRequest>): _37.GetTxsEventRequest;
            };
            GetTxsEventResponse: {
                encode(message: _37.GetTxsEventResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.GetTxsEventResponse;
                fromPartial(object: Partial<_37.GetTxsEventResponse>): _37.GetTxsEventResponse;
            };
            BroadcastTxRequest: {
                encode(message: _37.BroadcastTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.BroadcastTxRequest;
                fromPartial(object: Partial<_37.BroadcastTxRequest>): _37.BroadcastTxRequest;
            };
            BroadcastTxResponse: {
                encode(message: _37.BroadcastTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.BroadcastTxResponse;
                fromPartial(object: Partial<_37.BroadcastTxResponse>): _37.BroadcastTxResponse;
            };
            SimulateRequest: {
                encode(message: _37.SimulateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.SimulateRequest;
                fromPartial(object: Partial<_37.SimulateRequest>): _37.SimulateRequest;
            };
            SimulateResponse: {
                encode(message: _37.SimulateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.SimulateResponse;
                fromPartial(object: Partial<_37.SimulateResponse>): _37.SimulateResponse;
            };
            GetTxRequest: {
                encode(message: _37.GetTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.GetTxRequest;
                fromPartial(object: Partial<_37.GetTxRequest>): _37.GetTxRequest;
            };
            GetTxResponse: {
                encode(message: _37.GetTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.GetTxResponse;
                fromPartial(object: Partial<_37.GetTxResponse>): _37.GetTxResponse;
            };
            GetBlockWithTxsRequest: {
                encode(message: _37.GetBlockWithTxsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.GetBlockWithTxsRequest;
                fromPartial(object: Partial<_37.GetBlockWithTxsRequest>): _37.GetBlockWithTxsRequest;
            };
            GetBlockWithTxsResponse: {
                encode(message: _37.GetBlockWithTxsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.GetBlockWithTxsResponse;
                fromPartial(object: Partial<_37.GetBlockWithTxsResponse>): _37.GetBlockWithTxsResponse;
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
