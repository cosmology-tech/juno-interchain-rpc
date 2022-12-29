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
export declare namespace cosmos {
    namespace bank {
        const v1beta1: {
            MsgClientImpl: typeof _100.MsgClientImpl;
            QueryClientImpl: typeof _93.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _6.QueryBalanceRequest): Promise<_6.QueryBalanceResponse>;
                allBalances(request: _6.QueryAllBalancesRequest): Promise<_6.QueryAllBalancesResponse>;
                spendableBalances(request: _6.QuerySpendableBalancesRequest): Promise<_6.QuerySpendableBalancesResponse>;
                totalSupply(request?: _6.QueryTotalSupplyRequest): Promise<_6.QueryTotalSupplyResponse>;
                supplyOf(request: _6.QuerySupplyOfRequest): Promise<_6.QuerySupplyOfResponse>;
                params(request?: _6.QueryParamsRequest): Promise<_6.QueryParamsResponse>;
                denomMetadata(request: _6.QueryDenomMetadataRequest): Promise<_6.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _6.QueryDenomsMetadataRequest): Promise<_6.QueryDenomsMetadataResponse>;
                denomOwners(request: _6.QueryDenomOwnersRequest): Promise<_6.QueryDenomOwnersResponse>;
            };
            MsgSend: {
                encode(message: _7.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.MsgSend;
                fromPartial(object: Partial<_7.MsgSend>): _7.MsgSend;
            };
            MsgSendResponse: {
                encode(_: _7.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.MsgSendResponse;
                fromPartial(_: Partial<_7.MsgSendResponse>): _7.MsgSendResponse;
            };
            MsgMultiSend: {
                encode(message: _7.MsgMultiSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.MsgMultiSend;
                fromPartial(object: Partial<_7.MsgMultiSend>): _7.MsgMultiSend;
            };
            MsgMultiSendResponse: {
                encode(_: _7.MsgMultiSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.MsgMultiSendResponse;
                fromPartial(_: Partial<_7.MsgMultiSendResponse>): _7.MsgMultiSendResponse;
            };
            QueryBalanceRequest: {
                encode(message: _6.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.QueryBalanceRequest;
                fromPartial(object: Partial<_6.QueryBalanceRequest>): _6.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _6.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.QueryBalanceResponse;
                fromPartial(object: Partial<_6.QueryBalanceResponse>): _6.QueryBalanceResponse;
            };
            QueryAllBalancesRequest: {
                encode(message: _6.QueryAllBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.QueryAllBalancesRequest;
                fromPartial(object: Partial<_6.QueryAllBalancesRequest>): _6.QueryAllBalancesRequest;
            };
            QueryAllBalancesResponse: {
                encode(message: _6.QueryAllBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.QueryAllBalancesResponse;
                fromPartial(object: Partial<_6.QueryAllBalancesResponse>): _6.QueryAllBalancesResponse;
            };
            QuerySpendableBalancesRequest: {
                encode(message: _6.QuerySpendableBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.QuerySpendableBalancesRequest;
                fromPartial(object: Partial<_6.QuerySpendableBalancesRequest>): _6.QuerySpendableBalancesRequest;
            };
            QuerySpendableBalancesResponse: {
                encode(message: _6.QuerySpendableBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.QuerySpendableBalancesResponse;
                fromPartial(object: Partial<_6.QuerySpendableBalancesResponse>): _6.QuerySpendableBalancesResponse;
            };
            QueryTotalSupplyRequest: {
                encode(message: _6.QueryTotalSupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.QueryTotalSupplyRequest;
                fromPartial(object: Partial<_6.QueryTotalSupplyRequest>): _6.QueryTotalSupplyRequest;
            };
            QueryTotalSupplyResponse: {
                encode(message: _6.QueryTotalSupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.QueryTotalSupplyResponse;
                fromPartial(object: Partial<_6.QueryTotalSupplyResponse>): _6.QueryTotalSupplyResponse;
            };
            QuerySupplyOfRequest: {
                encode(message: _6.QuerySupplyOfRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.QuerySupplyOfRequest;
                fromPartial(object: Partial<_6.QuerySupplyOfRequest>): _6.QuerySupplyOfRequest;
            };
            QuerySupplyOfResponse: {
                encode(message: _6.QuerySupplyOfResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.QuerySupplyOfResponse;
                fromPartial(object: Partial<_6.QuerySupplyOfResponse>): _6.QuerySupplyOfResponse;
            };
            QueryParamsRequest: {
                encode(_: _6.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.QueryParamsRequest;
                fromPartial(_: Partial<_6.QueryParamsRequest>): _6.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _6.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.QueryParamsResponse;
                fromPartial(object: Partial<_6.QueryParamsResponse>): _6.QueryParamsResponse;
            };
            QueryDenomsMetadataRequest: {
                encode(message: _6.QueryDenomsMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.QueryDenomsMetadataRequest;
                fromPartial(object: Partial<_6.QueryDenomsMetadataRequest>): _6.QueryDenomsMetadataRequest;
            };
            QueryDenomsMetadataResponse: {
                encode(message: _6.QueryDenomsMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.QueryDenomsMetadataResponse;
                fromPartial(object: Partial<_6.QueryDenomsMetadataResponse>): _6.QueryDenomsMetadataResponse;
            };
            QueryDenomMetadataRequest: {
                encode(message: _6.QueryDenomMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.QueryDenomMetadataRequest;
                fromPartial(object: Partial<_6.QueryDenomMetadataRequest>): _6.QueryDenomMetadataRequest;
            };
            QueryDenomMetadataResponse: {
                encode(message: _6.QueryDenomMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.QueryDenomMetadataResponse;
                fromPartial(object: Partial<_6.QueryDenomMetadataResponse>): _6.QueryDenomMetadataResponse;
            };
            QueryDenomOwnersRequest: {
                encode(message: _6.QueryDenomOwnersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.QueryDenomOwnersRequest;
                fromPartial(object: Partial<_6.QueryDenomOwnersRequest>): _6.QueryDenomOwnersRequest;
            };
            DenomOwner: {
                encode(message: _6.DenomOwner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.DenomOwner;
                fromPartial(object: Partial<_6.DenomOwner>): _6.DenomOwner;
            };
            QueryDenomOwnersResponse: {
                encode(message: _6.QueryDenomOwnersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.QueryDenomOwnersResponse;
                fromPartial(object: Partial<_6.QueryDenomOwnersResponse>): _6.QueryDenomOwnersResponse;
            };
            GenesisState: {
                encode(message: _5.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.GenesisState;
                fromPartial(object: Partial<_5.GenesisState>): _5.GenesisState;
            };
            Balance: {
                encode(message: _5.Balance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.Balance;
                fromPartial(object: Partial<_5.Balance>): _5.Balance;
            };
            Params: {
                encode(message: _4.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.Params;
                fromPartial(object: Partial<_4.Params>): _4.Params;
            };
            SendEnabled: {
                encode(message: _4.SendEnabled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.SendEnabled;
                fromPartial(object: Partial<_4.SendEnabled>): _4.SendEnabled;
            };
            Input: {
                encode(message: _4.Input, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.Input;
                fromPartial(object: Partial<_4.Input>): _4.Input;
            };
            Output: {
                encode(message: _4.Output, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.Output;
                fromPartial(object: Partial<_4.Output>): _4.Output;
            };
            Supply: {
                encode(message: _4.Supply, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.Supply;
                fromPartial(object: Partial<_4.Supply>): _4.Supply;
            };
            DenomUnit: {
                encode(message: _4.DenomUnit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.DenomUnit;
                fromPartial(object: Partial<_4.DenomUnit>): _4.DenomUnit;
            };
            Metadata: {
                encode(message: _4.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.Metadata;
                fromPartial(object: Partial<_4.Metadata>): _4.Metadata;
            };
            SendAuthorization: {
                encode(message: _3.SendAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.SendAuthorization;
                fromPartial(object: Partial<_3.SendAuthorization>): _3.SendAuthorization;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    encode(message: _8.TxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.TxResponse;
                    fromPartial(object: Partial<_8.TxResponse>): _8.TxResponse;
                };
                ABCIMessageLog: {
                    encode(message: _8.ABCIMessageLog, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.ABCIMessageLog;
                    fromPartial(object: Partial<_8.ABCIMessageLog>): _8.ABCIMessageLog;
                };
                StringEvent: {
                    encode(message: _8.StringEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.StringEvent;
                    fromPartial(object: Partial<_8.StringEvent>): _8.StringEvent;
                };
                Attribute: {
                    encode(message: _8.Attribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.Attribute;
                    fromPartial(object: Partial<_8.Attribute>): _8.Attribute;
                };
                GasInfo: {
                    encode(message: _8.GasInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.GasInfo;
                    fromPartial(object: Partial<_8.GasInfo>): _8.GasInfo;
                };
                Result: {
                    encode(message: _8.Result, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.Result;
                    fromPartial(object: Partial<_8.Result>): _8.Result;
                };
                SimulationResponse: {
                    encode(message: _8.SimulationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.SimulationResponse;
                    fromPartial(object: Partial<_8.SimulationResponse>): _8.SimulationResponse;
                };
                MsgData: {
                    encode(message: _8.MsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.MsgData;
                    fromPartial(object: Partial<_8.MsgData>): _8.MsgData;
                };
                TxMsgData: {
                    encode(message: _8.TxMsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.TxMsgData;
                    fromPartial(object: Partial<_8.TxMsgData>): _8.TxMsgData;
                };
                SearchTxsResult: {
                    encode(message: _8.SearchTxsResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.SearchTxsResult;
                    fromPartial(object: Partial<_8.SearchTxsResult>): _8.SearchTxsResult;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    encode(message: _9.PageRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.PageRequest;
                    fromPartial(object: Partial<_9.PageRequest>): _9.PageRequest;
                };
                PageResponse: {
                    encode(message: _9.PageResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.PageResponse;
                    fromPartial(object: Partial<_9.PageResponse>): _9.PageResponse;
                };
            };
        }
        namespace reflection {
            const v2alpha1: {
                AppDescriptor: {
                    encode(message: _10.AppDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.AppDescriptor;
                    fromPartial(object: Partial<_10.AppDescriptor>): _10.AppDescriptor;
                };
                TxDescriptor: {
                    encode(message: _10.TxDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.TxDescriptor;
                    fromPartial(object: Partial<_10.TxDescriptor>): _10.TxDescriptor;
                };
                AuthnDescriptor: {
                    encode(message: _10.AuthnDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.AuthnDescriptor;
                    fromPartial(object: Partial<_10.AuthnDescriptor>): _10.AuthnDescriptor;
                };
                SigningModeDescriptor: {
                    encode(message: _10.SigningModeDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.SigningModeDescriptor;
                    fromPartial(object: Partial<_10.SigningModeDescriptor>): _10.SigningModeDescriptor;
                };
                ChainDescriptor: {
                    encode(message: _10.ChainDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.ChainDescriptor;
                    fromPartial(object: Partial<_10.ChainDescriptor>): _10.ChainDescriptor;
                };
                CodecDescriptor: {
                    encode(message: _10.CodecDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.CodecDescriptor;
                    fromPartial(object: Partial<_10.CodecDescriptor>): _10.CodecDescriptor;
                };
                InterfaceDescriptor: {
                    encode(message: _10.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.InterfaceDescriptor;
                    fromPartial(object: Partial<_10.InterfaceDescriptor>): _10.InterfaceDescriptor;
                };
                InterfaceImplementerDescriptor: {
                    encode(message: _10.InterfaceImplementerDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.InterfaceImplementerDescriptor;
                    fromPartial(object: Partial<_10.InterfaceImplementerDescriptor>): _10.InterfaceImplementerDescriptor;
                };
                InterfaceAcceptingMessageDescriptor: {
                    encode(message: _10.InterfaceAcceptingMessageDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.InterfaceAcceptingMessageDescriptor;
                    fromPartial(object: Partial<_10.InterfaceAcceptingMessageDescriptor>): _10.InterfaceAcceptingMessageDescriptor;
                };
                ConfigurationDescriptor: {
                    encode(message: _10.ConfigurationDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.ConfigurationDescriptor;
                    fromPartial(object: Partial<_10.ConfigurationDescriptor>): _10.ConfigurationDescriptor;
                };
                MsgDescriptor: {
                    encode(message: _10.MsgDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.MsgDescriptor;
                    fromPartial(object: Partial<_10.MsgDescriptor>): _10.MsgDescriptor;
                };
                GetAuthnDescriptorRequest: {
                    encode(_: _10.GetAuthnDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.GetAuthnDescriptorRequest;
                    fromPartial(_: Partial<_10.GetAuthnDescriptorRequest>): _10.GetAuthnDescriptorRequest;
                };
                GetAuthnDescriptorResponse: {
                    encode(message: _10.GetAuthnDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.GetAuthnDescriptorResponse;
                    fromPartial(object: Partial<_10.GetAuthnDescriptorResponse>): _10.GetAuthnDescriptorResponse;
                };
                GetChainDescriptorRequest: {
                    encode(_: _10.GetChainDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.GetChainDescriptorRequest;
                    fromPartial(_: Partial<_10.GetChainDescriptorRequest>): _10.GetChainDescriptorRequest;
                };
                GetChainDescriptorResponse: {
                    encode(message: _10.GetChainDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.GetChainDescriptorResponse;
                    fromPartial(object: Partial<_10.GetChainDescriptorResponse>): _10.GetChainDescriptorResponse;
                };
                GetCodecDescriptorRequest: {
                    encode(_: _10.GetCodecDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.GetCodecDescriptorRequest;
                    fromPartial(_: Partial<_10.GetCodecDescriptorRequest>): _10.GetCodecDescriptorRequest;
                };
                GetCodecDescriptorResponse: {
                    encode(message: _10.GetCodecDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.GetCodecDescriptorResponse;
                    fromPartial(object: Partial<_10.GetCodecDescriptorResponse>): _10.GetCodecDescriptorResponse;
                };
                GetConfigurationDescriptorRequest: {
                    encode(_: _10.GetConfigurationDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.GetConfigurationDescriptorRequest;
                    fromPartial(_: Partial<_10.GetConfigurationDescriptorRequest>): _10.GetConfigurationDescriptorRequest;
                };
                GetConfigurationDescriptorResponse: {
                    encode(message: _10.GetConfigurationDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.GetConfigurationDescriptorResponse;
                    fromPartial(object: Partial<_10.GetConfigurationDescriptorResponse>): _10.GetConfigurationDescriptorResponse;
                };
                GetQueryServicesDescriptorRequest: {
                    encode(_: _10.GetQueryServicesDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.GetQueryServicesDescriptorRequest;
                    fromPartial(_: Partial<_10.GetQueryServicesDescriptorRequest>): _10.GetQueryServicesDescriptorRequest;
                };
                GetQueryServicesDescriptorResponse: {
                    encode(message: _10.GetQueryServicesDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.GetQueryServicesDescriptorResponse;
                    fromPartial(object: Partial<_10.GetQueryServicesDescriptorResponse>): _10.GetQueryServicesDescriptorResponse;
                };
                GetTxDescriptorRequest: {
                    encode(_: _10.GetTxDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.GetTxDescriptorRequest;
                    fromPartial(_: Partial<_10.GetTxDescriptorRequest>): _10.GetTxDescriptorRequest;
                };
                GetTxDescriptorResponse: {
                    encode(message: _10.GetTxDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.GetTxDescriptorResponse;
                    fromPartial(object: Partial<_10.GetTxDescriptorResponse>): _10.GetTxDescriptorResponse;
                };
                QueryServicesDescriptor: {
                    encode(message: _10.QueryServicesDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.QueryServicesDescriptor;
                    fromPartial(object: Partial<_10.QueryServicesDescriptor>): _10.QueryServicesDescriptor;
                };
                QueryServiceDescriptor: {
                    encode(message: _10.QueryServiceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.QueryServiceDescriptor;
                    fromPartial(object: Partial<_10.QueryServiceDescriptor>): _10.QueryServiceDescriptor;
                };
                QueryMethodDescriptor: {
                    encode(message: _10.QueryMethodDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.QueryMethodDescriptor;
                    fromPartial(object: Partial<_10.QueryMethodDescriptor>): _10.QueryMethodDescriptor;
                };
            };
        }
        const v1beta1: {
            Coin: {
                encode(message: _11.Coin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.Coin;
                fromPartial(object: Partial<_11.Coin>): _11.Coin;
            };
            DecCoin: {
                encode(message: _11.DecCoin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.DecCoin;
                fromPartial(object: Partial<_11.DecCoin>): _11.DecCoin;
            };
            IntProto: {
                encode(message: _11.IntProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.IntProto;
                fromPartial(object: Partial<_11.IntProto>): _11.IntProto;
            };
            DecProto: {
                encode(message: _11.DecProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.DecProto;
                fromPartial(object: Partial<_11.DecProto>): _11.DecProto;
            };
        };
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                encode(message: _12.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.PubKey;
                fromPartial(object: Partial<_12.PubKey>): _12.PubKey;
            };
            PrivKey: {
                encode(message: _12.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.PrivKey;
                fromPartial(object: Partial<_12.PrivKey>): _12.PrivKey;
            };
        };
        namespace hd {
            const v1: {
                BIP44Params: {
                    encode(message: _13.BIP44Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.BIP44Params;
                    fromPartial(object: Partial<_13.BIP44Params>): _13.BIP44Params;
                };
            };
        }
        namespace keyring {
            const v1: {
                Record: {
                    encode(message: _14.Record, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.Record;
                    fromPartial(object: Partial<_14.Record>): _14.Record;
                };
                Record_Local: {
                    encode(message: _14.Record_Local, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.Record_Local;
                    fromPartial(object: Partial<_14.Record_Local>): _14.Record_Local;
                };
                Record_Ledger: {
                    encode(message: _14.Record_Ledger, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.Record_Ledger;
                    fromPartial(object: Partial<_14.Record_Ledger>): _14.Record_Ledger;
                };
                Record_Multi: {
                    encode(_: _14.Record_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.Record_Multi;
                    fromPartial(_: Partial<_14.Record_Multi>): _14.Record_Multi;
                };
                Record_Offline: {
                    encode(_: _14.Record_Offline, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.Record_Offline;
                    fromPartial(_: Partial<_14.Record_Offline>): _14.Record_Offline;
                };
            };
        }
        const multisig: {
            LegacyAminoPubKey: {
                encode(message: _15.LegacyAminoPubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.LegacyAminoPubKey;
                fromPartial(object: Partial<_15.LegacyAminoPubKey>): _15.LegacyAminoPubKey;
            };
        };
        const secp256k1: {
            PubKey: {
                encode(message: _16.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.PubKey;
                fromPartial(object: Partial<_16.PubKey>): _16.PubKey;
            };
            PrivKey: {
                encode(message: _16.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.PrivKey;
                fromPartial(object: Partial<_16.PrivKey>): _16.PrivKey;
            };
        };
        const secp256r1: {
            PubKey: {
                encode(message: _17.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.PubKey;
                fromPartial(object: Partial<_17.PubKey>): _17.PubKey;
            };
            PrivKey: {
                encode(message: _17.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.PrivKey;
                fromPartial(object: Partial<_17.PrivKey>): _17.PrivKey;
            };
        };
    }
    namespace distribution {
        const v1beta1: {
            MsgClientImpl: typeof _101.MsgClientImpl;
            QueryClientImpl: typeof _94.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _20.QueryParamsRequest): Promise<_20.QueryParamsResponse>;
                validatorOutstandingRewards(request: _20.QueryValidatorOutstandingRewardsRequest): Promise<_20.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _20.QueryValidatorCommissionRequest): Promise<_20.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _20.QueryValidatorSlashesRequest): Promise<_20.QueryValidatorSlashesResponse>;
                delegationRewards(request: _20.QueryDelegationRewardsRequest): Promise<_20.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _20.QueryDelegationTotalRewardsRequest): Promise<_20.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _20.QueryDelegatorValidatorsRequest): Promise<_20.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _20.QueryDelegatorWithdrawAddressRequest): Promise<_20.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _20.QueryCommunityPoolRequest): Promise<_20.QueryCommunityPoolResponse>;
            };
            MsgSetWithdrawAddress: {
                encode(message: _21.MsgSetWithdrawAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.MsgSetWithdrawAddress;
                fromPartial(object: Partial<_21.MsgSetWithdrawAddress>): _21.MsgSetWithdrawAddress;
            };
            MsgSetWithdrawAddressResponse: {
                encode(_: _21.MsgSetWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.MsgSetWithdrawAddressResponse;
                fromPartial(_: Partial<_21.MsgSetWithdrawAddressResponse>): _21.MsgSetWithdrawAddressResponse;
            };
            MsgWithdrawDelegatorReward: {
                encode(message: _21.MsgWithdrawDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.MsgWithdrawDelegatorReward;
                fromPartial(object: Partial<_21.MsgWithdrawDelegatorReward>): _21.MsgWithdrawDelegatorReward;
            };
            MsgWithdrawDelegatorRewardResponse: {
                encode(message: _21.MsgWithdrawDelegatorRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.MsgWithdrawDelegatorRewardResponse;
                fromPartial(object: Partial<_21.MsgWithdrawDelegatorRewardResponse>): _21.MsgWithdrawDelegatorRewardResponse;
            };
            MsgWithdrawValidatorCommission: {
                encode(message: _21.MsgWithdrawValidatorCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.MsgWithdrawValidatorCommission;
                fromPartial(object: Partial<_21.MsgWithdrawValidatorCommission>): _21.MsgWithdrawValidatorCommission;
            };
            MsgWithdrawValidatorCommissionResponse: {
                encode(message: _21.MsgWithdrawValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.MsgWithdrawValidatorCommissionResponse;
                fromPartial(object: Partial<_21.MsgWithdrawValidatorCommissionResponse>): _21.MsgWithdrawValidatorCommissionResponse;
            };
            MsgFundCommunityPool: {
                encode(message: _21.MsgFundCommunityPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.MsgFundCommunityPool;
                fromPartial(object: Partial<_21.MsgFundCommunityPool>): _21.MsgFundCommunityPool;
            };
            MsgFundCommunityPoolResponse: {
                encode(_: _21.MsgFundCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.MsgFundCommunityPoolResponse;
                fromPartial(_: Partial<_21.MsgFundCommunityPoolResponse>): _21.MsgFundCommunityPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _20.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.QueryParamsRequest;
                fromPartial(_: Partial<_20.QueryParamsRequest>): _20.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _20.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.QueryParamsResponse;
                fromPartial(object: Partial<_20.QueryParamsResponse>): _20.QueryParamsResponse;
            };
            QueryValidatorOutstandingRewardsRequest: {
                encode(message: _20.QueryValidatorOutstandingRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.QueryValidatorOutstandingRewardsRequest;
                fromPartial(object: Partial<_20.QueryValidatorOutstandingRewardsRequest>): _20.QueryValidatorOutstandingRewardsRequest;
            };
            QueryValidatorOutstandingRewardsResponse: {
                encode(message: _20.QueryValidatorOutstandingRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.QueryValidatorOutstandingRewardsResponse;
                fromPartial(object: Partial<_20.QueryValidatorOutstandingRewardsResponse>): _20.QueryValidatorOutstandingRewardsResponse;
            };
            QueryValidatorCommissionRequest: {
                encode(message: _20.QueryValidatorCommissionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.QueryValidatorCommissionRequest;
                fromPartial(object: Partial<_20.QueryValidatorCommissionRequest>): _20.QueryValidatorCommissionRequest;
            };
            QueryValidatorCommissionResponse: {
                encode(message: _20.QueryValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.QueryValidatorCommissionResponse;
                fromPartial(object: Partial<_20.QueryValidatorCommissionResponse>): _20.QueryValidatorCommissionResponse;
            };
            QueryValidatorSlashesRequest: {
                encode(message: _20.QueryValidatorSlashesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.QueryValidatorSlashesRequest;
                fromPartial(object: Partial<_20.QueryValidatorSlashesRequest>): _20.QueryValidatorSlashesRequest;
            };
            QueryValidatorSlashesResponse: {
                encode(message: _20.QueryValidatorSlashesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.QueryValidatorSlashesResponse;
                fromPartial(object: Partial<_20.QueryValidatorSlashesResponse>): _20.QueryValidatorSlashesResponse;
            };
            QueryDelegationRewardsRequest: {
                encode(message: _20.QueryDelegationRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.QueryDelegationRewardsRequest;
                fromPartial(object: Partial<_20.QueryDelegationRewardsRequest>): _20.QueryDelegationRewardsRequest;
            };
            QueryDelegationRewardsResponse: {
                encode(message: _20.QueryDelegationRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.QueryDelegationRewardsResponse;
                fromPartial(object: Partial<_20.QueryDelegationRewardsResponse>): _20.QueryDelegationRewardsResponse;
            };
            QueryDelegationTotalRewardsRequest: {
                encode(message: _20.QueryDelegationTotalRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.QueryDelegationTotalRewardsRequest;
                fromPartial(object: Partial<_20.QueryDelegationTotalRewardsRequest>): _20.QueryDelegationTotalRewardsRequest;
            };
            QueryDelegationTotalRewardsResponse: {
                encode(message: _20.QueryDelegationTotalRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.QueryDelegationTotalRewardsResponse;
                fromPartial(object: Partial<_20.QueryDelegationTotalRewardsResponse>): _20.QueryDelegationTotalRewardsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _20.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_20.QueryDelegatorValidatorsRequest>): _20.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _20.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_20.QueryDelegatorValidatorsResponse>): _20.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorWithdrawAddressRequest: {
                encode(message: _20.QueryDelegatorWithdrawAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.QueryDelegatorWithdrawAddressRequest;
                fromPartial(object: Partial<_20.QueryDelegatorWithdrawAddressRequest>): _20.QueryDelegatorWithdrawAddressRequest;
            };
            QueryDelegatorWithdrawAddressResponse: {
                encode(message: _20.QueryDelegatorWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.QueryDelegatorWithdrawAddressResponse;
                fromPartial(object: Partial<_20.QueryDelegatorWithdrawAddressResponse>): _20.QueryDelegatorWithdrawAddressResponse;
            };
            QueryCommunityPoolRequest: {
                encode(_: _20.QueryCommunityPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.QueryCommunityPoolRequest;
                fromPartial(_: Partial<_20.QueryCommunityPoolRequest>): _20.QueryCommunityPoolRequest;
            };
            QueryCommunityPoolResponse: {
                encode(message: _20.QueryCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.QueryCommunityPoolResponse;
                fromPartial(object: Partial<_20.QueryCommunityPoolResponse>): _20.QueryCommunityPoolResponse;
            };
            DelegatorWithdrawInfo: {
                encode(message: _19.DelegatorWithdrawInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.DelegatorWithdrawInfo;
                fromPartial(object: Partial<_19.DelegatorWithdrawInfo>): _19.DelegatorWithdrawInfo;
            };
            ValidatorOutstandingRewardsRecord: {
                encode(message: _19.ValidatorOutstandingRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.ValidatorOutstandingRewardsRecord;
                fromPartial(object: Partial<_19.ValidatorOutstandingRewardsRecord>): _19.ValidatorOutstandingRewardsRecord;
            };
            ValidatorAccumulatedCommissionRecord: {
                encode(message: _19.ValidatorAccumulatedCommissionRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.ValidatorAccumulatedCommissionRecord;
                fromPartial(object: Partial<_19.ValidatorAccumulatedCommissionRecord>): _19.ValidatorAccumulatedCommissionRecord;
            };
            ValidatorHistoricalRewardsRecord: {
                encode(message: _19.ValidatorHistoricalRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.ValidatorHistoricalRewardsRecord;
                fromPartial(object: Partial<_19.ValidatorHistoricalRewardsRecord>): _19.ValidatorHistoricalRewardsRecord;
            };
            ValidatorCurrentRewardsRecord: {
                encode(message: _19.ValidatorCurrentRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.ValidatorCurrentRewardsRecord;
                fromPartial(object: Partial<_19.ValidatorCurrentRewardsRecord>): _19.ValidatorCurrentRewardsRecord;
            };
            DelegatorStartingInfoRecord: {
                encode(message: _19.DelegatorStartingInfoRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.DelegatorStartingInfoRecord;
                fromPartial(object: Partial<_19.DelegatorStartingInfoRecord>): _19.DelegatorStartingInfoRecord;
            };
            ValidatorSlashEventRecord: {
                encode(message: _19.ValidatorSlashEventRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.ValidatorSlashEventRecord;
                fromPartial(object: Partial<_19.ValidatorSlashEventRecord>): _19.ValidatorSlashEventRecord;
            };
            GenesisState: {
                encode(message: _19.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.GenesisState;
                fromPartial(object: Partial<_19.GenesisState>): _19.GenesisState;
            };
            Params: {
                encode(message: _18.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.Params;
                fromPartial(object: Partial<_18.Params>): _18.Params;
            };
            ValidatorHistoricalRewards: {
                encode(message: _18.ValidatorHistoricalRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.ValidatorHistoricalRewards;
                fromPartial(object: Partial<_18.ValidatorHistoricalRewards>): _18.ValidatorHistoricalRewards;
            };
            ValidatorCurrentRewards: {
                encode(message: _18.ValidatorCurrentRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.ValidatorCurrentRewards;
                fromPartial(object: Partial<_18.ValidatorCurrentRewards>): _18.ValidatorCurrentRewards;
            };
            ValidatorAccumulatedCommission: {
                encode(message: _18.ValidatorAccumulatedCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.ValidatorAccumulatedCommission;
                fromPartial(object: Partial<_18.ValidatorAccumulatedCommission>): _18.ValidatorAccumulatedCommission;
            };
            ValidatorOutstandingRewards: {
                encode(message: _18.ValidatorOutstandingRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.ValidatorOutstandingRewards;
                fromPartial(object: Partial<_18.ValidatorOutstandingRewards>): _18.ValidatorOutstandingRewards;
            };
            ValidatorSlashEvent: {
                encode(message: _18.ValidatorSlashEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.ValidatorSlashEvent;
                fromPartial(object: Partial<_18.ValidatorSlashEvent>): _18.ValidatorSlashEvent;
            };
            ValidatorSlashEvents: {
                encode(message: _18.ValidatorSlashEvents, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.ValidatorSlashEvents;
                fromPartial(object: Partial<_18.ValidatorSlashEvents>): _18.ValidatorSlashEvents;
            };
            FeePool: {
                encode(message: _18.FeePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.FeePool;
                fromPartial(object: Partial<_18.FeePool>): _18.FeePool;
            };
            CommunityPoolSpendProposal: {
                encode(message: _18.CommunityPoolSpendProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.CommunityPoolSpendProposal;
                fromPartial(object: Partial<_18.CommunityPoolSpendProposal>): _18.CommunityPoolSpendProposal;
            };
            DelegatorStartingInfo: {
                encode(message: _18.DelegatorStartingInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.DelegatorStartingInfo;
                fromPartial(object: Partial<_18.DelegatorStartingInfo>): _18.DelegatorStartingInfo;
            };
            DelegationDelegatorReward: {
                encode(message: _18.DelegationDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.DelegationDelegatorReward;
                fromPartial(object: Partial<_18.DelegationDelegatorReward>): _18.DelegationDelegatorReward;
            };
            CommunityPoolSpendProposalWithDeposit: {
                encode(message: _18.CommunityPoolSpendProposalWithDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.CommunityPoolSpendProposalWithDeposit;
                fromPartial(object: Partial<_18.CommunityPoolSpendProposalWithDeposit>): _18.CommunityPoolSpendProposalWithDeposit;
            };
        };
    }
    namespace gov {
        const v1: {
            MsgClientImpl: typeof _102.MsgClientImpl;
            QueryClientImpl: typeof _95.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _24.QueryProposalRequest): Promise<_24.QueryProposalResponse>;
                proposals(request: _24.QueryProposalsRequest): Promise<_24.QueryProposalsResponse>;
                vote(request: _24.QueryVoteRequest): Promise<_24.QueryVoteResponse>;
                votes(request: _24.QueryVotesRequest): Promise<_24.QueryVotesResponse>;
                params(request: _24.QueryParamsRequest): Promise<_24.QueryParamsResponse>;
                deposit(request: _24.QueryDepositRequest): Promise<_24.QueryDepositResponse>;
                deposits(request: _24.QueryDepositsRequest): Promise<_24.QueryDepositsResponse>;
                tallyResult(request: _24.QueryTallyResultRequest): Promise<_24.QueryTallyResultResponse>;
            };
            MsgSubmitProposal: {
                encode(message: _25.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.MsgSubmitProposal;
                fromPartial(object: Partial<_25.MsgSubmitProposal>): _25.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _25.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_25.MsgSubmitProposalResponse>): _25.MsgSubmitProposalResponse;
            };
            MsgExecLegacyContent: {
                encode(message: _25.MsgExecLegacyContent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.MsgExecLegacyContent;
                fromPartial(object: Partial<_25.MsgExecLegacyContent>): _25.MsgExecLegacyContent;
            };
            MsgExecLegacyContentResponse: {
                encode(_: _25.MsgExecLegacyContentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.MsgExecLegacyContentResponse;
                fromPartial(_: Partial<_25.MsgExecLegacyContentResponse>): _25.MsgExecLegacyContentResponse;
            };
            MsgVote: {
                encode(message: _25.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.MsgVote;
                fromPartial(object: Partial<_25.MsgVote>): _25.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _25.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.MsgVoteResponse;
                fromPartial(_: Partial<_25.MsgVoteResponse>): _25.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: _25.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.MsgVoteWeighted;
                fromPartial(object: Partial<_25.MsgVoteWeighted>): _25.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _25.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_25.MsgVoteWeightedResponse>): _25.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _25.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.MsgDeposit;
                fromPartial(object: Partial<_25.MsgDeposit>): _25.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _25.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.MsgDepositResponse;
                fromPartial(_: Partial<_25.MsgDepositResponse>): _25.MsgDepositResponse;
            };
            QueryProposalRequest: {
                encode(message: _24.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryProposalRequest;
                fromPartial(object: Partial<_24.QueryProposalRequest>): _24.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _24.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryProposalResponse;
                fromPartial(object: Partial<_24.QueryProposalResponse>): _24.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _24.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryProposalsRequest;
                fromPartial(object: Partial<_24.QueryProposalsRequest>): _24.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _24.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryProposalsResponse;
                fromPartial(object: Partial<_24.QueryProposalsResponse>): _24.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _24.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryVoteRequest;
                fromPartial(object: Partial<_24.QueryVoteRequest>): _24.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _24.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryVoteResponse;
                fromPartial(object: Partial<_24.QueryVoteResponse>): _24.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _24.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryVotesRequest;
                fromPartial(object: Partial<_24.QueryVotesRequest>): _24.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _24.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryVotesResponse;
                fromPartial(object: Partial<_24.QueryVotesResponse>): _24.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: _24.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryParamsRequest;
                fromPartial(object: Partial<_24.QueryParamsRequest>): _24.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _24.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryParamsResponse;
                fromPartial(object: Partial<_24.QueryParamsResponse>): _24.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: _24.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryDepositRequest;
                fromPartial(object: Partial<_24.QueryDepositRequest>): _24.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _24.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryDepositResponse;
                fromPartial(object: Partial<_24.QueryDepositResponse>): _24.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _24.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryDepositsRequest;
                fromPartial(object: Partial<_24.QueryDepositsRequest>): _24.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _24.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryDepositsResponse;
                fromPartial(object: Partial<_24.QueryDepositsResponse>): _24.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _24.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryTallyResultRequest;
                fromPartial(object: Partial<_24.QueryTallyResultRequest>): _24.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _24.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryTallyResultResponse;
                fromPartial(object: Partial<_24.QueryTallyResultResponse>): _24.QueryTallyResultResponse;
            };
            voteOptionFromJSON(object: any): _23.VoteOption;
            voteOptionToJSON(object: _23.VoteOption): string;
            proposalStatusFromJSON(object: any): _23.ProposalStatus;
            proposalStatusToJSON(object: _23.ProposalStatus): string;
            VoteOption: typeof _23.VoteOption;
            VoteOptionSDKType: typeof _23.VoteOptionSDKType;
            ProposalStatus: typeof _23.ProposalStatus;
            ProposalStatusSDKType: typeof _23.ProposalStatusSDKType;
            WeightedVoteOption: {
                encode(message: _23.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.WeightedVoteOption;
                fromPartial(object: Partial<_23.WeightedVoteOption>): _23.WeightedVoteOption;
            };
            Deposit: {
                encode(message: _23.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.Deposit;
                fromPartial(object: Partial<_23.Deposit>): _23.Deposit;
            };
            Proposal: {
                encode(message: _23.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.Proposal;
                fromPartial(object: Partial<_23.Proposal>): _23.Proposal;
            };
            TallyResult: {
                encode(message: _23.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.TallyResult;
                fromPartial(object: Partial<_23.TallyResult>): _23.TallyResult;
            };
            Vote: {
                encode(message: _23.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.Vote;
                fromPartial(object: Partial<_23.Vote>): _23.Vote;
            };
            DepositParams: {
                encode(message: _23.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.DepositParams;
                fromPartial(object: Partial<_23.DepositParams>): _23.DepositParams;
            };
            VotingParams: {
                encode(message: _23.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.VotingParams;
                fromPartial(object: Partial<_23.VotingParams>): _23.VotingParams;
            };
            TallyParams: {
                encode(message: _23.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.TallyParams;
                fromPartial(object: Partial<_23.TallyParams>): _23.TallyParams;
            };
            GenesisState: {
                encode(message: _22.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.GenesisState;
                fromPartial(object: Partial<_22.GenesisState>): _22.GenesisState;
            };
        };
        const v1beta1: {
            MsgClientImpl: typeof _103.MsgClientImpl;
            QueryClientImpl: typeof _96.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _28.QueryProposalRequest): Promise<_28.QueryProposalResponse>;
                proposals(request: _28.QueryProposalsRequest): Promise<_28.QueryProposalsResponse>;
                vote(request: _28.QueryVoteRequest): Promise<_28.QueryVoteResponse>;
                votes(request: _28.QueryVotesRequest): Promise<_28.QueryVotesResponse>;
                params(request: _28.QueryParamsRequest): Promise<_28.QueryParamsResponse>;
                deposit(request: _28.QueryDepositRequest): Promise<_28.QueryDepositResponse>;
                deposits(request: _28.QueryDepositsRequest): Promise<_28.QueryDepositsResponse>;
                tallyResult(request: _28.QueryTallyResultRequest): Promise<_28.QueryTallyResultResponse>;
            };
            MsgSubmitProposal: {
                encode(message: _29.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.MsgSubmitProposal;
                fromPartial(object: Partial<_29.MsgSubmitProposal>): _29.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _29.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_29.MsgSubmitProposalResponse>): _29.MsgSubmitProposalResponse;
            };
            MsgVote: {
                encode(message: _29.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.MsgVote;
                fromPartial(object: Partial<_29.MsgVote>): _29.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _29.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.MsgVoteResponse;
                fromPartial(_: Partial<_29.MsgVoteResponse>): _29.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: _29.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.MsgVoteWeighted;
                fromPartial(object: Partial<_29.MsgVoteWeighted>): _29.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _29.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_29.MsgVoteWeightedResponse>): _29.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _29.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.MsgDeposit;
                fromPartial(object: Partial<_29.MsgDeposit>): _29.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _29.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.MsgDepositResponse;
                fromPartial(_: Partial<_29.MsgDepositResponse>): _29.MsgDepositResponse;
            };
            QueryProposalRequest: {
                encode(message: _28.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.QueryProposalRequest;
                fromPartial(object: Partial<_28.QueryProposalRequest>): _28.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _28.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.QueryProposalResponse;
                fromPartial(object: Partial<_28.QueryProposalResponse>): _28.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _28.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.QueryProposalsRequest;
                fromPartial(object: Partial<_28.QueryProposalsRequest>): _28.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _28.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.QueryProposalsResponse;
                fromPartial(object: Partial<_28.QueryProposalsResponse>): _28.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _28.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.QueryVoteRequest;
                fromPartial(object: Partial<_28.QueryVoteRequest>): _28.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _28.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.QueryVoteResponse;
                fromPartial(object: Partial<_28.QueryVoteResponse>): _28.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _28.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.QueryVotesRequest;
                fromPartial(object: Partial<_28.QueryVotesRequest>): _28.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _28.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.QueryVotesResponse;
                fromPartial(object: Partial<_28.QueryVotesResponse>): _28.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: _28.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.QueryParamsRequest;
                fromPartial(object: Partial<_28.QueryParamsRequest>): _28.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _28.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.QueryParamsResponse;
                fromPartial(object: Partial<_28.QueryParamsResponse>): _28.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: _28.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.QueryDepositRequest;
                fromPartial(object: Partial<_28.QueryDepositRequest>): _28.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _28.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.QueryDepositResponse;
                fromPartial(object: Partial<_28.QueryDepositResponse>): _28.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _28.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.QueryDepositsRequest;
                fromPartial(object: Partial<_28.QueryDepositsRequest>): _28.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _28.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.QueryDepositsResponse;
                fromPartial(object: Partial<_28.QueryDepositsResponse>): _28.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _28.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.QueryTallyResultRequest;
                fromPartial(object: Partial<_28.QueryTallyResultRequest>): _28.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _28.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.QueryTallyResultResponse;
                fromPartial(object: Partial<_28.QueryTallyResultResponse>): _28.QueryTallyResultResponse;
            };
            voteOptionFromJSON(object: any): _27.VoteOption;
            voteOptionToJSON(object: _27.VoteOption): string;
            proposalStatusFromJSON(object: any): _27.ProposalStatus;
            proposalStatusToJSON(object: _27.ProposalStatus): string;
            VoteOption: typeof _27.VoteOption;
            VoteOptionSDKType: typeof _27.VoteOptionSDKType;
            ProposalStatus: typeof _27.ProposalStatus;
            ProposalStatusSDKType: typeof _27.ProposalStatusSDKType;
            WeightedVoteOption: {
                encode(message: _27.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.WeightedVoteOption;
                fromPartial(object: Partial<_27.WeightedVoteOption>): _27.WeightedVoteOption;
            };
            TextProposal: {
                encode(message: _27.TextProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.TextProposal;
                fromPartial(object: Partial<_27.TextProposal>): _27.TextProposal;
            };
            Deposit: {
                encode(message: _27.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.Deposit;
                fromPartial(object: Partial<_27.Deposit>): _27.Deposit;
            };
            Proposal: {
                encode(message: _27.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.Proposal;
                fromPartial(object: Partial<_27.Proposal>): _27.Proposal;
            };
            TallyResult: {
                encode(message: _27.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.TallyResult;
                fromPartial(object: Partial<_27.TallyResult>): _27.TallyResult;
            };
            Vote: {
                encode(message: _27.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.Vote;
                fromPartial(object: Partial<_27.Vote>): _27.Vote;
            };
            DepositParams: {
                encode(message: _27.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.DepositParams;
                fromPartial(object: Partial<_27.DepositParams>): _27.DepositParams;
            };
            VotingParams: {
                encode(message: _27.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.VotingParams;
                fromPartial(object: Partial<_27.VotingParams>): _27.VotingParams;
            };
            TallyParams: {
                encode(message: _27.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.TallyParams;
                fromPartial(object: Partial<_27.TallyParams>): _27.TallyParams;
            };
            GenesisState: {
                encode(message: _26.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.GenesisState;
                fromPartial(object: Partial<_26.GenesisState>): _26.GenesisState;
            };
        };
    }
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _97.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _32.QueryParamsRequest): Promise<_32.QueryParamsResponse>;
                inflation(request?: _32.QueryInflationRequest): Promise<_32.QueryInflationResponse>;
                annualProvisions(request?: _32.QueryAnnualProvisionsRequest): Promise<_32.QueryAnnualProvisionsResponse>;
            };
            QueryParamsRequest: {
                encode(_: _32.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.QueryParamsRequest;
                fromPartial(_: Partial<_32.QueryParamsRequest>): _32.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _32.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.QueryParamsResponse;
                fromPartial(object: Partial<_32.QueryParamsResponse>): _32.QueryParamsResponse;
            };
            QueryInflationRequest: {
                encode(_: _32.QueryInflationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.QueryInflationRequest;
                fromPartial(_: Partial<_32.QueryInflationRequest>): _32.QueryInflationRequest;
            };
            QueryInflationResponse: {
                encode(message: _32.QueryInflationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.QueryInflationResponse;
                fromPartial(object: Partial<_32.QueryInflationResponse>): _32.QueryInflationResponse;
            };
            QueryAnnualProvisionsRequest: {
                encode(_: _32.QueryAnnualProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.QueryAnnualProvisionsRequest;
                fromPartial(_: Partial<_32.QueryAnnualProvisionsRequest>): _32.QueryAnnualProvisionsRequest;
            };
            QueryAnnualProvisionsResponse: {
                encode(message: _32.QueryAnnualProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.QueryAnnualProvisionsResponse;
                fromPartial(object: Partial<_32.QueryAnnualProvisionsResponse>): _32.QueryAnnualProvisionsResponse;
            };
            Minter: {
                encode(message: _31.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.Minter;
                fromPartial(object: Partial<_31.Minter>): _31.Minter;
            };
            Params: {
                encode(message: _31.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.Params;
                fromPartial(object: Partial<_31.Params>): _31.Params;
            };
            GenesisState: {
                encode(message: _30.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.GenesisState;
                fromPartial(object: Partial<_30.GenesisState>): _30.GenesisState;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            MsgClientImpl: typeof _104.MsgClientImpl;
            QueryClientImpl: typeof _98.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _35.QueryValidatorsRequest): Promise<_35.QueryValidatorsResponse>;
                validator(request: _35.QueryValidatorRequest): Promise<_35.QueryValidatorResponse>;
                validatorDelegations(request: _35.QueryValidatorDelegationsRequest): Promise<_35.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _35.QueryValidatorUnbondingDelegationsRequest): Promise<_35.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _35.QueryDelegationRequest): Promise<_35.QueryDelegationResponse>;
                unbondingDelegation(request: _35.QueryUnbondingDelegationRequest): Promise<_35.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _35.QueryDelegatorDelegationsRequest): Promise<_35.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _35.QueryDelegatorUnbondingDelegationsRequest): Promise<_35.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _35.QueryRedelegationsRequest): Promise<_35.QueryRedelegationsResponse>;
                delegatorValidators(request: _35.QueryDelegatorValidatorsRequest): Promise<_35.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _35.QueryDelegatorValidatorRequest): Promise<_35.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _35.QueryHistoricalInfoRequest): Promise<_35.QueryHistoricalInfoResponse>;
                pool(request?: _35.QueryPoolRequest): Promise<_35.QueryPoolResponse>;
                params(request?: _35.QueryParamsRequest): Promise<_35.QueryParamsResponse>;
            };
            MsgCreateValidator: {
                encode(message: _37.MsgCreateValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.MsgCreateValidator;
                fromPartial(object: Partial<_37.MsgCreateValidator>): _37.MsgCreateValidator;
            };
            MsgCreateValidatorResponse: {
                encode(_: _37.MsgCreateValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.MsgCreateValidatorResponse;
                fromPartial(_: Partial<_37.MsgCreateValidatorResponse>): _37.MsgCreateValidatorResponse;
            };
            MsgEditValidator: {
                encode(message: _37.MsgEditValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.MsgEditValidator;
                fromPartial(object: Partial<_37.MsgEditValidator>): _37.MsgEditValidator;
            };
            MsgEditValidatorResponse: {
                encode(_: _37.MsgEditValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.MsgEditValidatorResponse;
                fromPartial(_: Partial<_37.MsgEditValidatorResponse>): _37.MsgEditValidatorResponse;
            };
            MsgDelegate: {
                encode(message: _37.MsgDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.MsgDelegate;
                fromPartial(object: Partial<_37.MsgDelegate>): _37.MsgDelegate;
            };
            MsgDelegateResponse: {
                encode(_: _37.MsgDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.MsgDelegateResponse;
                fromPartial(_: Partial<_37.MsgDelegateResponse>): _37.MsgDelegateResponse;
            };
            MsgBeginRedelegate: {
                encode(message: _37.MsgBeginRedelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.MsgBeginRedelegate;
                fromPartial(object: Partial<_37.MsgBeginRedelegate>): _37.MsgBeginRedelegate;
            };
            MsgBeginRedelegateResponse: {
                encode(message: _37.MsgBeginRedelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.MsgBeginRedelegateResponse;
                fromPartial(object: Partial<_37.MsgBeginRedelegateResponse>): _37.MsgBeginRedelegateResponse;
            };
            MsgUndelegate: {
                encode(message: _37.MsgUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.MsgUndelegate;
                fromPartial(object: Partial<_37.MsgUndelegate>): _37.MsgUndelegate;
            };
            MsgUndelegateResponse: {
                encode(message: _37.MsgUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.MsgUndelegateResponse;
                fromPartial(object: Partial<_37.MsgUndelegateResponse>): _37.MsgUndelegateResponse;
            };
            bondStatusFromJSON(object: any): _36.BondStatus;
            bondStatusToJSON(object: _36.BondStatus): string;
            BondStatus: typeof _36.BondStatus;
            BondStatusSDKType: typeof _36.BondStatusSDKType;
            HistoricalInfo: {
                encode(message: _36.HistoricalInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.HistoricalInfo;
                fromPartial(object: Partial<_36.HistoricalInfo>): _36.HistoricalInfo;
            };
            CommissionRates: {
                encode(message: _36.CommissionRates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.CommissionRates;
                fromPartial(object: Partial<_36.CommissionRates>): _36.CommissionRates;
            };
            Commission: {
                encode(message: _36.Commission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.Commission;
                fromPartial(object: Partial<_36.Commission>): _36.Commission;
            };
            Description: {
                encode(message: _36.Description, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.Description;
                fromPartial(object: Partial<_36.Description>): _36.Description;
            };
            Validator: {
                encode(message: _36.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.Validator;
                fromPartial(object: Partial<_36.Validator>): _36.Validator;
            };
            ValAddresses: {
                encode(message: _36.ValAddresses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.ValAddresses;
                fromPartial(object: Partial<_36.ValAddresses>): _36.ValAddresses;
            };
            DVPair: {
                encode(message: _36.DVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.DVPair;
                fromPartial(object: Partial<_36.DVPair>): _36.DVPair;
            };
            DVPairs: {
                encode(message: _36.DVPairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.DVPairs;
                fromPartial(object: Partial<_36.DVPairs>): _36.DVPairs;
            };
            DVVTriplet: {
                encode(message: _36.DVVTriplet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.DVVTriplet;
                fromPartial(object: Partial<_36.DVVTriplet>): _36.DVVTriplet;
            };
            DVVTriplets: {
                encode(message: _36.DVVTriplets, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.DVVTriplets;
                fromPartial(object: Partial<_36.DVVTriplets>): _36.DVVTriplets;
            };
            Delegation: {
                encode(message: _36.Delegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.Delegation;
                fromPartial(object: Partial<_36.Delegation>): _36.Delegation;
            };
            UnbondingDelegation: {
                encode(message: _36.UnbondingDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.UnbondingDelegation;
                fromPartial(object: Partial<_36.UnbondingDelegation>): _36.UnbondingDelegation;
            };
            UnbondingDelegationEntry: {
                encode(message: _36.UnbondingDelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.UnbondingDelegationEntry;
                fromPartial(object: Partial<_36.UnbondingDelegationEntry>): _36.UnbondingDelegationEntry;
            };
            RedelegationEntry: {
                encode(message: _36.RedelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.RedelegationEntry;
                fromPartial(object: Partial<_36.RedelegationEntry>): _36.RedelegationEntry;
            };
            Redelegation: {
                encode(message: _36.Redelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.Redelegation;
                fromPartial(object: Partial<_36.Redelegation>): _36.Redelegation;
            };
            Params: {
                encode(message: _36.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.Params;
                fromPartial(object: Partial<_36.Params>): _36.Params;
            };
            DelegationResponse: {
                encode(message: _36.DelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.DelegationResponse;
                fromPartial(object: Partial<_36.DelegationResponse>): _36.DelegationResponse;
            };
            RedelegationEntryResponse: {
                encode(message: _36.RedelegationEntryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.RedelegationEntryResponse;
                fromPartial(object: Partial<_36.RedelegationEntryResponse>): _36.RedelegationEntryResponse;
            };
            RedelegationResponse: {
                encode(message: _36.RedelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.RedelegationResponse;
                fromPartial(object: Partial<_36.RedelegationResponse>): _36.RedelegationResponse;
            };
            Pool: {
                encode(message: _36.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.Pool;
                fromPartial(object: Partial<_36.Pool>): _36.Pool;
            };
            QueryValidatorsRequest: {
                encode(message: _35.QueryValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryValidatorsRequest;
                fromPartial(object: Partial<_35.QueryValidatorsRequest>): _35.QueryValidatorsRequest;
            };
            QueryValidatorsResponse: {
                encode(message: _35.QueryValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryValidatorsResponse;
                fromPartial(object: Partial<_35.QueryValidatorsResponse>): _35.QueryValidatorsResponse;
            };
            QueryValidatorRequest: {
                encode(message: _35.QueryValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryValidatorRequest;
                fromPartial(object: Partial<_35.QueryValidatorRequest>): _35.QueryValidatorRequest;
            };
            QueryValidatorResponse: {
                encode(message: _35.QueryValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryValidatorResponse;
                fromPartial(object: Partial<_35.QueryValidatorResponse>): _35.QueryValidatorResponse;
            };
            QueryValidatorDelegationsRequest: {
                encode(message: _35.QueryValidatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryValidatorDelegationsRequest;
                fromPartial(object: Partial<_35.QueryValidatorDelegationsRequest>): _35.QueryValidatorDelegationsRequest;
            };
            QueryValidatorDelegationsResponse: {
                encode(message: _35.QueryValidatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryValidatorDelegationsResponse;
                fromPartial(object: Partial<_35.QueryValidatorDelegationsResponse>): _35.QueryValidatorDelegationsResponse;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                encode(message: _35.QueryValidatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryValidatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_35.QueryValidatorUnbondingDelegationsRequest>): _35.QueryValidatorUnbondingDelegationsRequest;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                encode(message: _35.QueryValidatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryValidatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_35.QueryValidatorUnbondingDelegationsResponse>): _35.QueryValidatorUnbondingDelegationsResponse;
            };
            QueryDelegationRequest: {
                encode(message: _35.QueryDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryDelegationRequest;
                fromPartial(object: Partial<_35.QueryDelegationRequest>): _35.QueryDelegationRequest;
            };
            QueryDelegationResponse: {
                encode(message: _35.QueryDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryDelegationResponse;
                fromPartial(object: Partial<_35.QueryDelegationResponse>): _35.QueryDelegationResponse;
            };
            QueryUnbondingDelegationRequest: {
                encode(message: _35.QueryUnbondingDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryUnbondingDelegationRequest;
                fromPartial(object: Partial<_35.QueryUnbondingDelegationRequest>): _35.QueryUnbondingDelegationRequest;
            };
            QueryUnbondingDelegationResponse: {
                encode(message: _35.QueryUnbondingDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryUnbondingDelegationResponse;
                fromPartial(object: Partial<_35.QueryUnbondingDelegationResponse>): _35.QueryUnbondingDelegationResponse;
            };
            QueryDelegatorDelegationsRequest: {
                encode(message: _35.QueryDelegatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryDelegatorDelegationsRequest;
                fromPartial(object: Partial<_35.QueryDelegatorDelegationsRequest>): _35.QueryDelegatorDelegationsRequest;
            };
            QueryDelegatorDelegationsResponse: {
                encode(message: _35.QueryDelegatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryDelegatorDelegationsResponse;
                fromPartial(object: Partial<_35.QueryDelegatorDelegationsResponse>): _35.QueryDelegatorDelegationsResponse;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                encode(message: _35.QueryDelegatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryDelegatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_35.QueryDelegatorUnbondingDelegationsRequest>): _35.QueryDelegatorUnbondingDelegationsRequest;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                encode(message: _35.QueryDelegatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryDelegatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_35.QueryDelegatorUnbondingDelegationsResponse>): _35.QueryDelegatorUnbondingDelegationsResponse;
            };
            QueryRedelegationsRequest: {
                encode(message: _35.QueryRedelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryRedelegationsRequest;
                fromPartial(object: Partial<_35.QueryRedelegationsRequest>): _35.QueryRedelegationsRequest;
            };
            QueryRedelegationsResponse: {
                encode(message: _35.QueryRedelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryRedelegationsResponse;
                fromPartial(object: Partial<_35.QueryRedelegationsResponse>): _35.QueryRedelegationsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _35.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_35.QueryDelegatorValidatorsRequest>): _35.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _35.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_35.QueryDelegatorValidatorsResponse>): _35.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorValidatorRequest: {
                encode(message: _35.QueryDelegatorValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryDelegatorValidatorRequest;
                fromPartial(object: Partial<_35.QueryDelegatorValidatorRequest>): _35.QueryDelegatorValidatorRequest;
            };
            QueryDelegatorValidatorResponse: {
                encode(message: _35.QueryDelegatorValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryDelegatorValidatorResponse;
                fromPartial(object: Partial<_35.QueryDelegatorValidatorResponse>): _35.QueryDelegatorValidatorResponse;
            };
            QueryHistoricalInfoRequest: {
                encode(message: _35.QueryHistoricalInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryHistoricalInfoRequest;
                fromPartial(object: Partial<_35.QueryHistoricalInfoRequest>): _35.QueryHistoricalInfoRequest;
            };
            QueryHistoricalInfoResponse: {
                encode(message: _35.QueryHistoricalInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryHistoricalInfoResponse;
                fromPartial(object: Partial<_35.QueryHistoricalInfoResponse>): _35.QueryHistoricalInfoResponse;
            };
            QueryPoolRequest: {
                encode(_: _35.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryPoolRequest;
                fromPartial(_: Partial<_35.QueryPoolRequest>): _35.QueryPoolRequest;
            };
            QueryPoolResponse: {
                encode(message: _35.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryPoolResponse;
                fromPartial(object: Partial<_35.QueryPoolResponse>): _35.QueryPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _35.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryParamsRequest;
                fromPartial(_: Partial<_35.QueryParamsRequest>): _35.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _35.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryParamsResponse;
                fromPartial(object: Partial<_35.QueryParamsResponse>): _35.QueryParamsResponse;
            };
            GenesisState: {
                encode(message: _34.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.GenesisState;
                fromPartial(object: Partial<_34.GenesisState>): _34.GenesisState;
            };
            LastValidatorPower: {
                encode(message: _34.LastValidatorPower, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.LastValidatorPower;
                fromPartial(object: Partial<_34.LastValidatorPower>): _34.LastValidatorPower;
            };
            authorizationTypeFromJSON(object: any): _33.AuthorizationType;
            authorizationTypeToJSON(object: _33.AuthorizationType): string;
            AuthorizationType: typeof _33.AuthorizationType;
            AuthorizationTypeSDKType: typeof _33.AuthorizationTypeSDKType;
            StakeAuthorization: {
                encode(message: _33.StakeAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.StakeAuthorization;
                fromPartial(object: Partial<_33.StakeAuthorization>): _33.StakeAuthorization;
            };
            StakeAuthorization_Validators: {
                encode(message: _33.StakeAuthorization_Validators, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.StakeAuthorization_Validators;
                fromPartial(object: Partial<_33.StakeAuthorization_Validators>): _33.StakeAuthorization_Validators;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _38.SignMode;
                signModeToJSON(object: _38.SignMode): string;
                SignMode: typeof _38.SignMode;
                SignModeSDKType: typeof _38.SignModeSDKType;
                SignatureDescriptors: {
                    encode(message: _38.SignatureDescriptors, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.SignatureDescriptors;
                    fromPartial(object: Partial<_38.SignatureDescriptors>): _38.SignatureDescriptors;
                };
                SignatureDescriptor: {
                    encode(message: _38.SignatureDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.SignatureDescriptor;
                    fromPartial(object: Partial<_38.SignatureDescriptor>): _38.SignatureDescriptor;
                };
                SignatureDescriptor_Data: {
                    encode(message: _38.SignatureDescriptor_Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.SignatureDescriptor_Data;
                    fromPartial(object: Partial<_38.SignatureDescriptor_Data>): _38.SignatureDescriptor_Data;
                };
                SignatureDescriptor_Data_Single: {
                    encode(message: _38.SignatureDescriptor_Data_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.SignatureDescriptor_Data_Single;
                    fromPartial(object: Partial<_38.SignatureDescriptor_Data_Single>): _38.SignatureDescriptor_Data_Single;
                };
                SignatureDescriptor_Data_Multi: {
                    encode(message: _38.SignatureDescriptor_Data_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.SignatureDescriptor_Data_Multi;
                    fromPartial(object: Partial<_38.SignatureDescriptor_Data_Multi>): _38.SignatureDescriptor_Data_Multi;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _99.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _39.SimulateRequest): Promise<_39.SimulateResponse>;
                getTx(request: _39.GetTxRequest): Promise<_39.GetTxResponse>;
                broadcastTx(request: _39.BroadcastTxRequest): Promise<_39.BroadcastTxResponse>;
                getTxsEvent(request: _39.GetTxsEventRequest): Promise<_39.GetTxsEventResponse>;
                getBlockWithTxs(request: _39.GetBlockWithTxsRequest): Promise<_39.GetBlockWithTxsResponse>;
            };
            Tx: {
                encode(message: _40.Tx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.Tx;
                fromPartial(object: Partial<_40.Tx>): _40.Tx;
            };
            TxRaw: {
                encode(message: _40.TxRaw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.TxRaw;
                fromPartial(object: Partial<_40.TxRaw>): _40.TxRaw;
            };
            SignDoc: {
                encode(message: _40.SignDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.SignDoc;
                fromPartial(object: Partial<_40.SignDoc>): _40.SignDoc;
            };
            SignDocDirectAux: {
                encode(message: _40.SignDocDirectAux, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.SignDocDirectAux;
                fromPartial(object: Partial<_40.SignDocDirectAux>): _40.SignDocDirectAux;
            };
            TxBody: {
                encode(message: _40.TxBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.TxBody;
                fromPartial(object: Partial<_40.TxBody>): _40.TxBody;
            };
            AuthInfo: {
                encode(message: _40.AuthInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.AuthInfo;
                fromPartial(object: Partial<_40.AuthInfo>): _40.AuthInfo;
            };
            SignerInfo: {
                encode(message: _40.SignerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.SignerInfo;
                fromPartial(object: Partial<_40.SignerInfo>): _40.SignerInfo;
            };
            ModeInfo: {
                encode(message: _40.ModeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.ModeInfo;
                fromPartial(object: Partial<_40.ModeInfo>): _40.ModeInfo;
            };
            ModeInfo_Single: {
                encode(message: _40.ModeInfo_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.ModeInfo_Single;
                fromPartial(object: Partial<_40.ModeInfo_Single>): _40.ModeInfo_Single;
            };
            ModeInfo_Multi: {
                encode(message: _40.ModeInfo_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.ModeInfo_Multi;
                fromPartial(object: Partial<_40.ModeInfo_Multi>): _40.ModeInfo_Multi;
            };
            Fee: {
                encode(message: _40.Fee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.Fee;
                fromPartial(object: Partial<_40.Fee>): _40.Fee;
            };
            Tip: {
                encode(message: _40.Tip, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.Tip;
                fromPartial(object: Partial<_40.Tip>): _40.Tip;
            };
            AuxSignerData: {
                encode(message: _40.AuxSignerData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.AuxSignerData;
                fromPartial(object: Partial<_40.AuxSignerData>): _40.AuxSignerData;
            };
            orderByFromJSON(object: any): _39.OrderBy;
            orderByToJSON(object: _39.OrderBy): string;
            broadcastModeFromJSON(object: any): _39.BroadcastMode;
            broadcastModeToJSON(object: _39.BroadcastMode): string;
            OrderBy: typeof _39.OrderBy;
            OrderBySDKType: typeof _39.OrderBySDKType;
            BroadcastMode: typeof _39.BroadcastMode;
            BroadcastModeSDKType: typeof _39.BroadcastModeSDKType;
            GetTxsEventRequest: {
                encode(message: _39.GetTxsEventRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.GetTxsEventRequest;
                fromPartial(object: Partial<_39.GetTxsEventRequest>): _39.GetTxsEventRequest;
            };
            GetTxsEventResponse: {
                encode(message: _39.GetTxsEventResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.GetTxsEventResponse;
                fromPartial(object: Partial<_39.GetTxsEventResponse>): _39.GetTxsEventResponse;
            };
            BroadcastTxRequest: {
                encode(message: _39.BroadcastTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.BroadcastTxRequest;
                fromPartial(object: Partial<_39.BroadcastTxRequest>): _39.BroadcastTxRequest;
            };
            BroadcastTxResponse: {
                encode(message: _39.BroadcastTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.BroadcastTxResponse;
                fromPartial(object: Partial<_39.BroadcastTxResponse>): _39.BroadcastTxResponse;
            };
            SimulateRequest: {
                encode(message: _39.SimulateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.SimulateRequest;
                fromPartial(object: Partial<_39.SimulateRequest>): _39.SimulateRequest;
            };
            SimulateResponse: {
                encode(message: _39.SimulateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.SimulateResponse;
                fromPartial(object: Partial<_39.SimulateResponse>): _39.SimulateResponse;
            };
            GetTxRequest: {
                encode(message: _39.GetTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.GetTxRequest;
                fromPartial(object: Partial<_39.GetTxRequest>): _39.GetTxRequest;
            };
            GetTxResponse: {
                encode(message: _39.GetTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.GetTxResponse;
                fromPartial(object: Partial<_39.GetTxResponse>): _39.GetTxResponse;
            };
            GetBlockWithTxsRequest: {
                encode(message: _39.GetBlockWithTxsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.GetBlockWithTxsRequest;
                fromPartial(object: Partial<_39.GetBlockWithTxsRequest>): _39.GetBlockWithTxsRequest;
            };
            GetBlockWithTxsResponse: {
                encode(message: _39.GetBlockWithTxsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.GetBlockWithTxsResponse;
                fromPartial(object: Partial<_39.GetBlockWithTxsResponse>): _39.GetBlockWithTxsResponse;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                bank: {
                    v1beta1: _100.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _101.MsgClientImpl;
                };
                gov: {
                    v1: _102.MsgClientImpl;
                    v1beta1: _103.MsgClientImpl;
                };
                staking: {
                    v1beta1: _104.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string;
        }) => Promise<{
            cosmos: {
                bank: {
                    v1beta1: {
                        balance(request: _6.QueryBalanceRequest): Promise<_6.QueryBalanceResponse>;
                        allBalances(request: _6.QueryAllBalancesRequest): Promise<_6.QueryAllBalancesResponse>;
                        spendableBalances(request: _6.QuerySpendableBalancesRequest): Promise<_6.QuerySpendableBalancesResponse>;
                        totalSupply(request?: _6.QueryTotalSupplyRequest): Promise<_6.QueryTotalSupplyResponse>;
                        supplyOf(request: _6.QuerySupplyOfRequest): Promise<_6.QuerySupplyOfResponse>;
                        params(request?: _6.QueryParamsRequest): Promise<_6.QueryParamsResponse>;
                        denomMetadata(request: _6.QueryDenomMetadataRequest): Promise<_6.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _6.QueryDenomsMetadataRequest): Promise<_6.QueryDenomsMetadataResponse>;
                        denomOwners(request: _6.QueryDenomOwnersRequest): Promise<_6.QueryDenomOwnersResponse>;
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _20.QueryParamsRequest): Promise<_20.QueryParamsResponse>;
                        validatorOutstandingRewards(request: _20.QueryValidatorOutstandingRewardsRequest): Promise<_20.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _20.QueryValidatorCommissionRequest): Promise<_20.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _20.QueryValidatorSlashesRequest): Promise<_20.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _20.QueryDelegationRewardsRequest): Promise<_20.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _20.QueryDelegationTotalRewardsRequest): Promise<_20.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _20.QueryDelegatorValidatorsRequest): Promise<_20.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _20.QueryDelegatorWithdrawAddressRequest): Promise<_20.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _20.QueryCommunityPoolRequest): Promise<_20.QueryCommunityPoolResponse>;
                    };
                };
                gov: {
                    v1: {
                        proposal(request: _24.QueryProposalRequest): Promise<_24.QueryProposalResponse>;
                        proposals(request: _24.QueryProposalsRequest): Promise<_24.QueryProposalsResponse>;
                        vote(request: _24.QueryVoteRequest): Promise<_24.QueryVoteResponse>;
                        votes(request: _24.QueryVotesRequest): Promise<_24.QueryVotesResponse>;
                        params(request: _24.QueryParamsRequest): Promise<_24.QueryParamsResponse>;
                        deposit(request: _24.QueryDepositRequest): Promise<_24.QueryDepositResponse>;
                        deposits(request: _24.QueryDepositsRequest): Promise<_24.QueryDepositsResponse>;
                        tallyResult(request: _24.QueryTallyResultRequest): Promise<_24.QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: _28.QueryProposalRequest): Promise<_28.QueryProposalResponse>;
                        proposals(request: _28.QueryProposalsRequest): Promise<_28.QueryProposalsResponse>;
                        vote(request: _28.QueryVoteRequest): Promise<_28.QueryVoteResponse>;
                        votes(request: _28.QueryVotesRequest): Promise<_28.QueryVotesResponse>;
                        params(request: _28.QueryParamsRequest): Promise<_28.QueryParamsResponse>;
                        deposit(request: _28.QueryDepositRequest): Promise<_28.QueryDepositResponse>;
                        deposits(request: _28.QueryDepositsRequest): Promise<_28.QueryDepositsResponse>;
                        tallyResult(request: _28.QueryTallyResultRequest): Promise<_28.QueryTallyResultResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: _32.QueryParamsRequest): Promise<_32.QueryParamsResponse>;
                        inflation(request?: _32.QueryInflationRequest): Promise<_32.QueryInflationResponse>;
                        annualProvisions(request?: _32.QueryAnnualProvisionsRequest): Promise<_32.QueryAnnualProvisionsResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _35.QueryValidatorsRequest): Promise<_35.QueryValidatorsResponse>;
                        validator(request: _35.QueryValidatorRequest): Promise<_35.QueryValidatorResponse>;
                        validatorDelegations(request: _35.QueryValidatorDelegationsRequest): Promise<_35.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _35.QueryValidatorUnbondingDelegationsRequest): Promise<_35.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _35.QueryDelegationRequest): Promise<_35.QueryDelegationResponse>;
                        unbondingDelegation(request: _35.QueryUnbondingDelegationRequest): Promise<_35.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _35.QueryDelegatorDelegationsRequest): Promise<_35.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _35.QueryDelegatorUnbondingDelegationsRequest): Promise<_35.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _35.QueryRedelegationsRequest): Promise<_35.QueryRedelegationsResponse>;
                        delegatorValidators(request: _35.QueryDelegatorValidatorsRequest): Promise<_35.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _35.QueryDelegatorValidatorRequest): Promise<_35.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _35.QueryHistoricalInfoRequest): Promise<_35.QueryHistoricalInfoResponse>;
                        pool(request?: _35.QueryPoolRequest): Promise<_35.QueryPoolResponse>;
                        params(request?: _35.QueryParamsRequest): Promise<_35.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _39.SimulateRequest): Promise<_39.SimulateResponse>;
                        getTx(request: _39.GetTxRequest): Promise<_39.GetTxResponse>;
                        broadcastTx(request: _39.BroadcastTxRequest): Promise<_39.BroadcastTxResponse>;
                        getTxsEvent(request: _39.GetTxsEventRequest): Promise<_39.GetTxsEventResponse>;
                        getBlockWithTxs(request: _39.GetBlockWithTxsRequest): Promise<_39.GetBlockWithTxsResponse>;
                    };
                };
            };
        }>;
    };
}
