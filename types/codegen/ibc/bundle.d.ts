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
export declare namespace ibc {
    namespace applications {
        namespace fee {
            const v1: {
                MsgClientImpl: typeof _111.MsgClientImpl;
                QueryClientImpl: typeof _105.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    incentivizedPackets(request: _51.QueryIncentivizedPacketsRequest): Promise<_51.QueryIncentivizedPacketsResponse>;
                    incentivizedPacket(request: _51.QueryIncentivizedPacketRequest): Promise<_51.QueryIncentivizedPacketResponse>;
                    incentivizedPacketsForChannel(request: _51.QueryIncentivizedPacketsForChannelRequest): Promise<_51.QueryIncentivizedPacketsForChannelResponse>;
                    totalRecvFees(request: _51.QueryTotalRecvFeesRequest): Promise<_51.QueryTotalRecvFeesResponse>;
                    totalAckFees(request: _51.QueryTotalAckFeesRequest): Promise<_51.QueryTotalAckFeesResponse>;
                    totalTimeoutFees(request: _51.QueryTotalTimeoutFeesRequest): Promise<_51.QueryTotalTimeoutFeesResponse>;
                    payee(request: _51.QueryPayeeRequest): Promise<_51.QueryPayeeResponse>;
                    counterpartyPayee(request: _51.QueryCounterpartyPayeeRequest): Promise<_51.QueryCounterpartyPayeeResponse>;
                    feeEnabledChannels(request: _51.QueryFeeEnabledChannelsRequest): Promise<_51.QueryFeeEnabledChannelsResponse>;
                    feeEnabledChannel(request: _51.QueryFeeEnabledChannelRequest): Promise<_51.QueryFeeEnabledChannelResponse>;
                };
                MsgRegisterPayee: {
                    encode(message: _52.MsgRegisterPayee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.MsgRegisterPayee;
                    fromPartial(object: Partial<_52.MsgRegisterPayee>): _52.MsgRegisterPayee;
                };
                MsgRegisterPayeeResponse: {
                    encode(_: _52.MsgRegisterPayeeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.MsgRegisterPayeeResponse;
                    fromPartial(_: Partial<_52.MsgRegisterPayeeResponse>): _52.MsgRegisterPayeeResponse;
                };
                MsgRegisterCounterpartyPayee: {
                    encode(message: _52.MsgRegisterCounterpartyPayee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.MsgRegisterCounterpartyPayee;
                    fromPartial(object: Partial<_52.MsgRegisterCounterpartyPayee>): _52.MsgRegisterCounterpartyPayee;
                };
                MsgRegisterCounterpartyPayeeResponse: {
                    encode(_: _52.MsgRegisterCounterpartyPayeeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.MsgRegisterCounterpartyPayeeResponse;
                    fromPartial(_: Partial<_52.MsgRegisterCounterpartyPayeeResponse>): _52.MsgRegisterCounterpartyPayeeResponse;
                };
                MsgPayPacketFee: {
                    encode(message: _52.MsgPayPacketFee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.MsgPayPacketFee;
                    fromPartial(object: Partial<_52.MsgPayPacketFee>): _52.MsgPayPacketFee;
                };
                MsgPayPacketFeeResponse: {
                    encode(_: _52.MsgPayPacketFeeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.MsgPayPacketFeeResponse;
                    fromPartial(_: Partial<_52.MsgPayPacketFeeResponse>): _52.MsgPayPacketFeeResponse;
                };
                MsgPayPacketFeeAsync: {
                    encode(message: _52.MsgPayPacketFeeAsync, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.MsgPayPacketFeeAsync;
                    fromPartial(object: Partial<_52.MsgPayPacketFeeAsync>): _52.MsgPayPacketFeeAsync;
                };
                MsgPayPacketFeeAsyncResponse: {
                    encode(_: _52.MsgPayPacketFeeAsyncResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.MsgPayPacketFeeAsyncResponse;
                    fromPartial(_: Partial<_52.MsgPayPacketFeeAsyncResponse>): _52.MsgPayPacketFeeAsyncResponse;
                };
                QueryIncentivizedPacketsRequest: {
                    encode(message: _51.QueryIncentivizedPacketsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.QueryIncentivizedPacketsRequest;
                    fromPartial(object: Partial<_51.QueryIncentivizedPacketsRequest>): _51.QueryIncentivizedPacketsRequest;
                };
                QueryIncentivizedPacketsResponse: {
                    encode(message: _51.QueryIncentivizedPacketsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.QueryIncentivizedPacketsResponse;
                    fromPartial(object: Partial<_51.QueryIncentivizedPacketsResponse>): _51.QueryIncentivizedPacketsResponse;
                };
                QueryIncentivizedPacketRequest: {
                    encode(message: _51.QueryIncentivizedPacketRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.QueryIncentivizedPacketRequest;
                    fromPartial(object: Partial<_51.QueryIncentivizedPacketRequest>): _51.QueryIncentivizedPacketRequest;
                };
                QueryIncentivizedPacketResponse: {
                    encode(message: _51.QueryIncentivizedPacketResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.QueryIncentivizedPacketResponse;
                    fromPartial(object: Partial<_51.QueryIncentivizedPacketResponse>): _51.QueryIncentivizedPacketResponse;
                };
                QueryIncentivizedPacketsForChannelRequest: {
                    encode(message: _51.QueryIncentivizedPacketsForChannelRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.QueryIncentivizedPacketsForChannelRequest;
                    fromPartial(object: Partial<_51.QueryIncentivizedPacketsForChannelRequest>): _51.QueryIncentivizedPacketsForChannelRequest;
                };
                QueryIncentivizedPacketsForChannelResponse: {
                    encode(message: _51.QueryIncentivizedPacketsForChannelResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.QueryIncentivizedPacketsForChannelResponse;
                    fromPartial(object: Partial<_51.QueryIncentivizedPacketsForChannelResponse>): _51.QueryIncentivizedPacketsForChannelResponse;
                };
                QueryTotalRecvFeesRequest: {
                    encode(message: _51.QueryTotalRecvFeesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.QueryTotalRecvFeesRequest;
                    fromPartial(object: Partial<_51.QueryTotalRecvFeesRequest>): _51.QueryTotalRecvFeesRequest;
                };
                QueryTotalRecvFeesResponse: {
                    encode(message: _51.QueryTotalRecvFeesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.QueryTotalRecvFeesResponse;
                    fromPartial(object: Partial<_51.QueryTotalRecvFeesResponse>): _51.QueryTotalRecvFeesResponse;
                };
                QueryTotalAckFeesRequest: {
                    encode(message: _51.QueryTotalAckFeesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.QueryTotalAckFeesRequest;
                    fromPartial(object: Partial<_51.QueryTotalAckFeesRequest>): _51.QueryTotalAckFeesRequest;
                };
                QueryTotalAckFeesResponse: {
                    encode(message: _51.QueryTotalAckFeesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.QueryTotalAckFeesResponse;
                    fromPartial(object: Partial<_51.QueryTotalAckFeesResponse>): _51.QueryTotalAckFeesResponse;
                };
                QueryTotalTimeoutFeesRequest: {
                    encode(message: _51.QueryTotalTimeoutFeesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.QueryTotalTimeoutFeesRequest;
                    fromPartial(object: Partial<_51.QueryTotalTimeoutFeesRequest>): _51.QueryTotalTimeoutFeesRequest;
                };
                QueryTotalTimeoutFeesResponse: {
                    encode(message: _51.QueryTotalTimeoutFeesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.QueryTotalTimeoutFeesResponse;
                    fromPartial(object: Partial<_51.QueryTotalTimeoutFeesResponse>): _51.QueryTotalTimeoutFeesResponse;
                };
                QueryPayeeRequest: {
                    encode(message: _51.QueryPayeeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.QueryPayeeRequest;
                    fromPartial(object: Partial<_51.QueryPayeeRequest>): _51.QueryPayeeRequest;
                };
                QueryPayeeResponse: {
                    encode(message: _51.QueryPayeeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.QueryPayeeResponse;
                    fromPartial(object: Partial<_51.QueryPayeeResponse>): _51.QueryPayeeResponse;
                };
                QueryCounterpartyPayeeRequest: {
                    encode(message: _51.QueryCounterpartyPayeeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.QueryCounterpartyPayeeRequest;
                    fromPartial(object: Partial<_51.QueryCounterpartyPayeeRequest>): _51.QueryCounterpartyPayeeRequest;
                };
                QueryCounterpartyPayeeResponse: {
                    encode(message: _51.QueryCounterpartyPayeeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.QueryCounterpartyPayeeResponse;
                    fromPartial(object: Partial<_51.QueryCounterpartyPayeeResponse>): _51.QueryCounterpartyPayeeResponse;
                };
                QueryFeeEnabledChannelsRequest: {
                    encode(message: _51.QueryFeeEnabledChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.QueryFeeEnabledChannelsRequest;
                    fromPartial(object: Partial<_51.QueryFeeEnabledChannelsRequest>): _51.QueryFeeEnabledChannelsRequest;
                };
                QueryFeeEnabledChannelsResponse: {
                    encode(message: _51.QueryFeeEnabledChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.QueryFeeEnabledChannelsResponse;
                    fromPartial(object: Partial<_51.QueryFeeEnabledChannelsResponse>): _51.QueryFeeEnabledChannelsResponse;
                };
                QueryFeeEnabledChannelRequest: {
                    encode(message: _51.QueryFeeEnabledChannelRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.QueryFeeEnabledChannelRequest;
                    fromPartial(object: Partial<_51.QueryFeeEnabledChannelRequest>): _51.QueryFeeEnabledChannelRequest;
                };
                QueryFeeEnabledChannelResponse: {
                    encode(message: _51.QueryFeeEnabledChannelResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.QueryFeeEnabledChannelResponse;
                    fromPartial(object: Partial<_51.QueryFeeEnabledChannelResponse>): _51.QueryFeeEnabledChannelResponse;
                };
                Metadata: {
                    encode(message: _50.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.Metadata;
                    fromPartial(object: Partial<_50.Metadata>): _50.Metadata;
                };
                GenesisState: {
                    encode(message: _49.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.GenesisState;
                    fromPartial(object: Partial<_49.GenesisState>): _49.GenesisState;
                };
                FeeEnabledChannel: {
                    encode(message: _49.FeeEnabledChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.FeeEnabledChannel;
                    fromPartial(object: Partial<_49.FeeEnabledChannel>): _49.FeeEnabledChannel;
                };
                RegisteredPayee: {
                    encode(message: _49.RegisteredPayee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.RegisteredPayee;
                    fromPartial(object: Partial<_49.RegisteredPayee>): _49.RegisteredPayee;
                };
                RegisteredCounterpartyPayee: {
                    encode(message: _49.RegisteredCounterpartyPayee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.RegisteredCounterpartyPayee;
                    fromPartial(object: Partial<_49.RegisteredCounterpartyPayee>): _49.RegisteredCounterpartyPayee;
                };
                ForwardRelayerAddress: {
                    encode(message: _49.ForwardRelayerAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.ForwardRelayerAddress;
                    fromPartial(object: Partial<_49.ForwardRelayerAddress>): _49.ForwardRelayerAddress;
                };
                Fee: {
                    encode(message: _48.Fee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.Fee;
                    fromPartial(object: Partial<_48.Fee>): _48.Fee;
                };
                PacketFee: {
                    encode(message: _48.PacketFee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.PacketFee;
                    fromPartial(object: Partial<_48.PacketFee>): _48.PacketFee;
                };
                PacketFees: {
                    encode(message: _48.PacketFees, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.PacketFees;
                    fromPartial(object: Partial<_48.PacketFees>): _48.PacketFees;
                };
                IdentifiedPacketFees: {
                    encode(message: _48.IdentifiedPacketFees, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.IdentifiedPacketFees;
                    fromPartial(object: Partial<_48.IdentifiedPacketFees>): _48.IdentifiedPacketFees;
                };
                IncentivizedAcknowledgement: {
                    encode(message: _47.IncentivizedAcknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.IncentivizedAcknowledgement;
                    fromPartial(object: Partial<_47.IncentivizedAcknowledgement>): _47.IncentivizedAcknowledgement;
                };
            };
        }
        namespace interchain_accounts {
            namespace controller {
                const v1: {
                    MsgClientImpl: typeof _112.MsgClientImpl;
                    QueryClientImpl: typeof _106.QueryClientImpl;
                    createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                        interchainAccount(request: _54.QueryInterchainAccountRequest): Promise<_54.QueryInterchainAccountResponse>;
                        params(request?: _54.QueryParamsRequest): Promise<_54.QueryParamsResponse>;
                    };
                    MsgRegisterInterchainAccount: {
                        encode(message: _55.MsgRegisterInterchainAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.MsgRegisterInterchainAccount;
                        fromPartial(object: Partial<_55.MsgRegisterInterchainAccount>): _55.MsgRegisterInterchainAccount;
                    };
                    MsgRegisterInterchainAccountResponse: {
                        encode(message: _55.MsgRegisterInterchainAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.MsgRegisterInterchainAccountResponse;
                        fromPartial(object: Partial<_55.MsgRegisterInterchainAccountResponse>): _55.MsgRegisterInterchainAccountResponse;
                    };
                    MsgSendTx: {
                        encode(message: _55.MsgSendTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.MsgSendTx;
                        fromPartial(object: Partial<_55.MsgSendTx>): _55.MsgSendTx;
                    };
                    MsgSendTxResponse: {
                        encode(message: _55.MsgSendTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.MsgSendTxResponse;
                        fromPartial(object: Partial<_55.MsgSendTxResponse>): _55.MsgSendTxResponse;
                    };
                    QueryInterchainAccountRequest: {
                        encode(message: _54.QueryInterchainAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.QueryInterchainAccountRequest;
                        fromPartial(object: Partial<_54.QueryInterchainAccountRequest>): _54.QueryInterchainAccountRequest;
                    };
                    QueryInterchainAccountResponse: {
                        encode(message: _54.QueryInterchainAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.QueryInterchainAccountResponse;
                        fromPartial(object: Partial<_54.QueryInterchainAccountResponse>): _54.QueryInterchainAccountResponse;
                    };
                    QueryParamsRequest: {
                        encode(_: _54.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.QueryParamsRequest;
                        fromPartial(_: Partial<_54.QueryParamsRequest>): _54.QueryParamsRequest;
                    };
                    QueryParamsResponse: {
                        encode(message: _54.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.QueryParamsResponse;
                        fromPartial(object: Partial<_54.QueryParamsResponse>): _54.QueryParamsResponse;
                    };
                    Params: {
                        encode(message: _53.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.Params;
                        fromPartial(object: Partial<_53.Params>): _53.Params;
                    };
                };
            }
            namespace genesis {
                const v1: {
                    GenesisState: {
                        encode(message: _56.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.GenesisState;
                        fromPartial(object: Partial<_56.GenesisState>): _56.GenesisState;
                    };
                    ControllerGenesisState: {
                        encode(message: _56.ControllerGenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.ControllerGenesisState;
                        fromPartial(object: Partial<_56.ControllerGenesisState>): _56.ControllerGenesisState;
                    };
                    HostGenesisState: {
                        encode(message: _56.HostGenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.HostGenesisState;
                        fromPartial(object: Partial<_56.HostGenesisState>): _56.HostGenesisState;
                    };
                    ActiveChannel: {
                        encode(message: _56.ActiveChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.ActiveChannel;
                        fromPartial(object: Partial<_56.ActiveChannel>): _56.ActiveChannel;
                    };
                    RegisteredInterchainAccount: {
                        encode(message: _56.RegisteredInterchainAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.RegisteredInterchainAccount;
                        fromPartial(object: Partial<_56.RegisteredInterchainAccount>): _56.RegisteredInterchainAccount;
                    };
                };
            }
            namespace host {
                const v1: {
                    QueryClientImpl: typeof _107.QueryClientImpl;
                    createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                        params(request?: _58.QueryParamsRequest): Promise<_58.QueryParamsResponse>;
                    };
                    QueryParamsRequest: {
                        encode(_: _58.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.QueryParamsRequest;
                        fromPartial(_: Partial<_58.QueryParamsRequest>): _58.QueryParamsRequest;
                    };
                    QueryParamsResponse: {
                        encode(message: _58.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.QueryParamsResponse;
                        fromPartial(object: Partial<_58.QueryParamsResponse>): _58.QueryParamsResponse;
                    };
                    Params: {
                        encode(message: _57.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.Params;
                        fromPartial(object: Partial<_57.Params>): _57.Params;
                    };
                };
            }
            const v1: {
                typeFromJSON(object: any): _61.Type;
                typeToJSON(object: _61.Type): string;
                Type: typeof _61.Type;
                TypeSDKType: typeof _61.TypeSDKType;
                InterchainAccountPacketData: {
                    encode(message: _61.InterchainAccountPacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.InterchainAccountPacketData;
                    fromPartial(object: Partial<_61.InterchainAccountPacketData>): _61.InterchainAccountPacketData;
                };
                CosmosTx: {
                    encode(message: _61.CosmosTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.CosmosTx;
                    fromPartial(object: Partial<_61.CosmosTx>): _61.CosmosTx;
                };
                Metadata: {
                    encode(message: _60.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.Metadata;
                    fromPartial(object: Partial<_60.Metadata>): _60.Metadata;
                };
                InterchainAccount: {
                    encode(message: _59.InterchainAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.InterchainAccount;
                    fromPartial(object: Partial<_59.InterchainAccount>): _59.InterchainAccount;
                };
            };
        }
        namespace transfer {
            const v1: {
                MsgClientImpl: typeof _113.MsgClientImpl;
                QueryClientImpl: typeof _108.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    denomTrace(request: _63.QueryDenomTraceRequest): Promise<_63.QueryDenomTraceResponse>;
                    denomTraces(request?: _63.QueryDenomTracesRequest): Promise<_63.QueryDenomTracesResponse>;
                    params(request?: _63.QueryParamsRequest): Promise<_63.QueryParamsResponse>;
                    denomHash(request: _63.QueryDenomHashRequest): Promise<_63.QueryDenomHashResponse>;
                    escrowAddress(request: _63.QueryEscrowAddressRequest): Promise<_63.QueryEscrowAddressResponse>;
                };
                MsgTransfer: {
                    encode(message: _65.MsgTransfer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.MsgTransfer;
                    fromPartial(object: Partial<_65.MsgTransfer>): _65.MsgTransfer;
                };
                MsgTransferResponse: {
                    encode(message: _65.MsgTransferResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.MsgTransferResponse;
                    fromPartial(object: Partial<_65.MsgTransferResponse>): _65.MsgTransferResponse;
                };
                DenomTrace: {
                    encode(message: _64.DenomTrace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.DenomTrace;
                    fromPartial(object: Partial<_64.DenomTrace>): _64.DenomTrace;
                };
                Params: {
                    encode(message: _64.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.Params;
                    fromPartial(object: Partial<_64.Params>): _64.Params;
                };
                QueryDenomTraceRequest: {
                    encode(message: _63.QueryDenomTraceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryDenomTraceRequest;
                    fromPartial(object: Partial<_63.QueryDenomTraceRequest>): _63.QueryDenomTraceRequest;
                };
                QueryDenomTraceResponse: {
                    encode(message: _63.QueryDenomTraceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryDenomTraceResponse;
                    fromPartial(object: Partial<_63.QueryDenomTraceResponse>): _63.QueryDenomTraceResponse;
                };
                QueryDenomTracesRequest: {
                    encode(message: _63.QueryDenomTracesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryDenomTracesRequest;
                    fromPartial(object: Partial<_63.QueryDenomTracesRequest>): _63.QueryDenomTracesRequest;
                };
                QueryDenomTracesResponse: {
                    encode(message: _63.QueryDenomTracesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryDenomTracesResponse;
                    fromPartial(object: Partial<_63.QueryDenomTracesResponse>): _63.QueryDenomTracesResponse;
                };
                QueryParamsRequest: {
                    encode(_: _63.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryParamsRequest;
                    fromPartial(_: Partial<_63.QueryParamsRequest>): _63.QueryParamsRequest;
                };
                QueryParamsResponse: {
                    encode(message: _63.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryParamsResponse;
                    fromPartial(object: Partial<_63.QueryParamsResponse>): _63.QueryParamsResponse;
                };
                QueryDenomHashRequest: {
                    encode(message: _63.QueryDenomHashRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryDenomHashRequest;
                    fromPartial(object: Partial<_63.QueryDenomHashRequest>): _63.QueryDenomHashRequest;
                };
                QueryDenomHashResponse: {
                    encode(message: _63.QueryDenomHashResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryDenomHashResponse;
                    fromPartial(object: Partial<_63.QueryDenomHashResponse>): _63.QueryDenomHashResponse;
                };
                QueryEscrowAddressRequest: {
                    encode(message: _63.QueryEscrowAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryEscrowAddressRequest;
                    fromPartial(object: Partial<_63.QueryEscrowAddressRequest>): _63.QueryEscrowAddressRequest;
                };
                QueryEscrowAddressResponse: {
                    encode(message: _63.QueryEscrowAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryEscrowAddressResponse;
                    fromPartial(object: Partial<_63.QueryEscrowAddressResponse>): _63.QueryEscrowAddressResponse;
                };
                GenesisState: {
                    encode(message: _62.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.GenesisState;
                    fromPartial(object: Partial<_62.GenesisState>): _62.GenesisState;
                };
            };
            const v2: {
                FungibleTokenPacketData: {
                    encode(message: _66.FungibleTokenPacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.FungibleTokenPacketData;
                    fromPartial(object: Partial<_66.FungibleTokenPacketData>): _66.FungibleTokenPacketData;
                };
            };
        }
    }
    namespace core {
        namespace channel {
            const v1: {
                MsgClientImpl: typeof _114.MsgClientImpl;
                QueryClientImpl: typeof _109.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    channel(request: _69.QueryChannelRequest): Promise<_69.QueryChannelResponse>;
                    channels(request?: _69.QueryChannelsRequest): Promise<_69.QueryChannelsResponse>;
                    connectionChannels(request: _69.QueryConnectionChannelsRequest): Promise<_69.QueryConnectionChannelsResponse>;
                    channelClientState(request: _69.QueryChannelClientStateRequest): Promise<_69.QueryChannelClientStateResponse>;
                    channelConsensusState(request: _69.QueryChannelConsensusStateRequest): Promise<_69.QueryChannelConsensusStateResponse>;
                    packetCommitment(request: _69.QueryPacketCommitmentRequest): Promise<_69.QueryPacketCommitmentResponse>;
                    packetCommitments(request: _69.QueryPacketCommitmentsRequest): Promise<_69.QueryPacketCommitmentsResponse>;
                    packetReceipt(request: _69.QueryPacketReceiptRequest): Promise<_69.QueryPacketReceiptResponse>;
                    packetAcknowledgement(request: _69.QueryPacketAcknowledgementRequest): Promise<_69.QueryPacketAcknowledgementResponse>;
                    packetAcknowledgements(request: _69.QueryPacketAcknowledgementsRequest): Promise<_69.QueryPacketAcknowledgementsResponse>;
                    unreceivedPackets(request: _69.QueryUnreceivedPacketsRequest): Promise<_69.QueryUnreceivedPacketsResponse>;
                    unreceivedAcks(request: _69.QueryUnreceivedAcksRequest): Promise<_69.QueryUnreceivedAcksResponse>;
                    nextSequenceReceive(request: _69.QueryNextSequenceReceiveRequest): Promise<_69.QueryNextSequenceReceiveResponse>;
                };
                responseResultTypeFromJSON(object: any): _70.ResponseResultType;
                responseResultTypeToJSON(object: _70.ResponseResultType): string;
                ResponseResultType: typeof _70.ResponseResultType;
                ResponseResultTypeSDKType: typeof _70.ResponseResultTypeSDKType;
                MsgChannelOpenInit: {
                    encode(message: _70.MsgChannelOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgChannelOpenInit;
                    fromPartial(object: Partial<_70.MsgChannelOpenInit>): _70.MsgChannelOpenInit;
                };
                MsgChannelOpenInitResponse: {
                    encode(message: _70.MsgChannelOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgChannelOpenInitResponse;
                    fromPartial(object: Partial<_70.MsgChannelOpenInitResponse>): _70.MsgChannelOpenInitResponse;
                };
                MsgChannelOpenTry: {
                    encode(message: _70.MsgChannelOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgChannelOpenTry;
                    fromPartial(object: Partial<_70.MsgChannelOpenTry>): _70.MsgChannelOpenTry;
                };
                MsgChannelOpenTryResponse: {
                    encode(message: _70.MsgChannelOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgChannelOpenTryResponse;
                    fromPartial(object: Partial<_70.MsgChannelOpenTryResponse>): _70.MsgChannelOpenTryResponse;
                };
                MsgChannelOpenAck: {
                    encode(message: _70.MsgChannelOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgChannelOpenAck;
                    fromPartial(object: Partial<_70.MsgChannelOpenAck>): _70.MsgChannelOpenAck;
                };
                MsgChannelOpenAckResponse: {
                    encode(_: _70.MsgChannelOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgChannelOpenAckResponse;
                    fromPartial(_: Partial<_70.MsgChannelOpenAckResponse>): _70.MsgChannelOpenAckResponse;
                };
                MsgChannelOpenConfirm: {
                    encode(message: _70.MsgChannelOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgChannelOpenConfirm;
                    fromPartial(object: Partial<_70.MsgChannelOpenConfirm>): _70.MsgChannelOpenConfirm;
                };
                MsgChannelOpenConfirmResponse: {
                    encode(_: _70.MsgChannelOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgChannelOpenConfirmResponse;
                    fromPartial(_: Partial<_70.MsgChannelOpenConfirmResponse>): _70.MsgChannelOpenConfirmResponse;
                };
                MsgChannelCloseInit: {
                    encode(message: _70.MsgChannelCloseInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgChannelCloseInit;
                    fromPartial(object: Partial<_70.MsgChannelCloseInit>): _70.MsgChannelCloseInit;
                };
                MsgChannelCloseInitResponse: {
                    encode(_: _70.MsgChannelCloseInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgChannelCloseInitResponse;
                    fromPartial(_: Partial<_70.MsgChannelCloseInitResponse>): _70.MsgChannelCloseInitResponse;
                };
                MsgChannelCloseConfirm: {
                    encode(message: _70.MsgChannelCloseConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgChannelCloseConfirm;
                    fromPartial(object: Partial<_70.MsgChannelCloseConfirm>): _70.MsgChannelCloseConfirm;
                };
                MsgChannelCloseConfirmResponse: {
                    encode(_: _70.MsgChannelCloseConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgChannelCloseConfirmResponse;
                    fromPartial(_: Partial<_70.MsgChannelCloseConfirmResponse>): _70.MsgChannelCloseConfirmResponse;
                };
                MsgRecvPacket: {
                    encode(message: _70.MsgRecvPacket, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgRecvPacket;
                    fromPartial(object: Partial<_70.MsgRecvPacket>): _70.MsgRecvPacket;
                };
                MsgRecvPacketResponse: {
                    encode(message: _70.MsgRecvPacketResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgRecvPacketResponse;
                    fromPartial(object: Partial<_70.MsgRecvPacketResponse>): _70.MsgRecvPacketResponse;
                };
                MsgTimeout: {
                    encode(message: _70.MsgTimeout, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgTimeout;
                    fromPartial(object: Partial<_70.MsgTimeout>): _70.MsgTimeout;
                };
                MsgTimeoutResponse: {
                    encode(message: _70.MsgTimeoutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgTimeoutResponse;
                    fromPartial(object: Partial<_70.MsgTimeoutResponse>): _70.MsgTimeoutResponse;
                };
                MsgTimeoutOnClose: {
                    encode(message: _70.MsgTimeoutOnClose, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgTimeoutOnClose;
                    fromPartial(object: Partial<_70.MsgTimeoutOnClose>): _70.MsgTimeoutOnClose;
                };
                MsgTimeoutOnCloseResponse: {
                    encode(message: _70.MsgTimeoutOnCloseResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgTimeoutOnCloseResponse;
                    fromPartial(object: Partial<_70.MsgTimeoutOnCloseResponse>): _70.MsgTimeoutOnCloseResponse;
                };
                MsgAcknowledgement: {
                    encode(message: _70.MsgAcknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgAcknowledgement;
                    fromPartial(object: Partial<_70.MsgAcknowledgement>): _70.MsgAcknowledgement;
                };
                MsgAcknowledgementResponse: {
                    encode(message: _70.MsgAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgAcknowledgementResponse;
                    fromPartial(object: Partial<_70.MsgAcknowledgementResponse>): _70.MsgAcknowledgementResponse;
                };
                QueryChannelRequest: {
                    encode(message: _69.QueryChannelRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryChannelRequest;
                    fromPartial(object: Partial<_69.QueryChannelRequest>): _69.QueryChannelRequest;
                };
                QueryChannelResponse: {
                    encode(message: _69.QueryChannelResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryChannelResponse;
                    fromPartial(object: Partial<_69.QueryChannelResponse>): _69.QueryChannelResponse;
                };
                QueryChannelsRequest: {
                    encode(message: _69.QueryChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryChannelsRequest;
                    fromPartial(object: Partial<_69.QueryChannelsRequest>): _69.QueryChannelsRequest;
                };
                QueryChannelsResponse: {
                    encode(message: _69.QueryChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryChannelsResponse;
                    fromPartial(object: Partial<_69.QueryChannelsResponse>): _69.QueryChannelsResponse;
                };
                QueryConnectionChannelsRequest: {
                    encode(message: _69.QueryConnectionChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryConnectionChannelsRequest;
                    fromPartial(object: Partial<_69.QueryConnectionChannelsRequest>): _69.QueryConnectionChannelsRequest;
                };
                QueryConnectionChannelsResponse: {
                    encode(message: _69.QueryConnectionChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryConnectionChannelsResponse;
                    fromPartial(object: Partial<_69.QueryConnectionChannelsResponse>): _69.QueryConnectionChannelsResponse;
                };
                QueryChannelClientStateRequest: {
                    encode(message: _69.QueryChannelClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryChannelClientStateRequest;
                    fromPartial(object: Partial<_69.QueryChannelClientStateRequest>): _69.QueryChannelClientStateRequest;
                };
                QueryChannelClientStateResponse: {
                    encode(message: _69.QueryChannelClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryChannelClientStateResponse;
                    fromPartial(object: Partial<_69.QueryChannelClientStateResponse>): _69.QueryChannelClientStateResponse;
                };
                QueryChannelConsensusStateRequest: {
                    encode(message: _69.QueryChannelConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryChannelConsensusStateRequest;
                    fromPartial(object: Partial<_69.QueryChannelConsensusStateRequest>): _69.QueryChannelConsensusStateRequest;
                };
                QueryChannelConsensusStateResponse: {
                    encode(message: _69.QueryChannelConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryChannelConsensusStateResponse;
                    fromPartial(object: Partial<_69.QueryChannelConsensusStateResponse>): _69.QueryChannelConsensusStateResponse;
                };
                QueryPacketCommitmentRequest: {
                    encode(message: _69.QueryPacketCommitmentRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryPacketCommitmentRequest;
                    fromPartial(object: Partial<_69.QueryPacketCommitmentRequest>): _69.QueryPacketCommitmentRequest;
                };
                QueryPacketCommitmentResponse: {
                    encode(message: _69.QueryPacketCommitmentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryPacketCommitmentResponse;
                    fromPartial(object: Partial<_69.QueryPacketCommitmentResponse>): _69.QueryPacketCommitmentResponse;
                };
                QueryPacketCommitmentsRequest: {
                    encode(message: _69.QueryPacketCommitmentsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryPacketCommitmentsRequest;
                    fromPartial(object: Partial<_69.QueryPacketCommitmentsRequest>): _69.QueryPacketCommitmentsRequest;
                };
                QueryPacketCommitmentsResponse: {
                    encode(message: _69.QueryPacketCommitmentsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryPacketCommitmentsResponse;
                    fromPartial(object: Partial<_69.QueryPacketCommitmentsResponse>): _69.QueryPacketCommitmentsResponse;
                };
                QueryPacketReceiptRequest: {
                    encode(message: _69.QueryPacketReceiptRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryPacketReceiptRequest;
                    fromPartial(object: Partial<_69.QueryPacketReceiptRequest>): _69.QueryPacketReceiptRequest;
                };
                QueryPacketReceiptResponse: {
                    encode(message: _69.QueryPacketReceiptResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryPacketReceiptResponse;
                    fromPartial(object: Partial<_69.QueryPacketReceiptResponse>): _69.QueryPacketReceiptResponse;
                };
                QueryPacketAcknowledgementRequest: {
                    encode(message: _69.QueryPacketAcknowledgementRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryPacketAcknowledgementRequest;
                    fromPartial(object: Partial<_69.QueryPacketAcknowledgementRequest>): _69.QueryPacketAcknowledgementRequest;
                };
                QueryPacketAcknowledgementResponse: {
                    encode(message: _69.QueryPacketAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryPacketAcknowledgementResponse;
                    fromPartial(object: Partial<_69.QueryPacketAcknowledgementResponse>): _69.QueryPacketAcknowledgementResponse;
                };
                QueryPacketAcknowledgementsRequest: {
                    encode(message: _69.QueryPacketAcknowledgementsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryPacketAcknowledgementsRequest;
                    fromPartial(object: Partial<_69.QueryPacketAcknowledgementsRequest>): _69.QueryPacketAcknowledgementsRequest;
                };
                QueryPacketAcknowledgementsResponse: {
                    encode(message: _69.QueryPacketAcknowledgementsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryPacketAcknowledgementsResponse;
                    fromPartial(object: Partial<_69.QueryPacketAcknowledgementsResponse>): _69.QueryPacketAcknowledgementsResponse;
                };
                QueryUnreceivedPacketsRequest: {
                    encode(message: _69.QueryUnreceivedPacketsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryUnreceivedPacketsRequest;
                    fromPartial(object: Partial<_69.QueryUnreceivedPacketsRequest>): _69.QueryUnreceivedPacketsRequest;
                };
                QueryUnreceivedPacketsResponse: {
                    encode(message: _69.QueryUnreceivedPacketsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryUnreceivedPacketsResponse;
                    fromPartial(object: Partial<_69.QueryUnreceivedPacketsResponse>): _69.QueryUnreceivedPacketsResponse;
                };
                QueryUnreceivedAcksRequest: {
                    encode(message: _69.QueryUnreceivedAcksRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryUnreceivedAcksRequest;
                    fromPartial(object: Partial<_69.QueryUnreceivedAcksRequest>): _69.QueryUnreceivedAcksRequest;
                };
                QueryUnreceivedAcksResponse: {
                    encode(message: _69.QueryUnreceivedAcksResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryUnreceivedAcksResponse;
                    fromPartial(object: Partial<_69.QueryUnreceivedAcksResponse>): _69.QueryUnreceivedAcksResponse;
                };
                QueryNextSequenceReceiveRequest: {
                    encode(message: _69.QueryNextSequenceReceiveRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryNextSequenceReceiveRequest;
                    fromPartial(object: Partial<_69.QueryNextSequenceReceiveRequest>): _69.QueryNextSequenceReceiveRequest;
                };
                QueryNextSequenceReceiveResponse: {
                    encode(message: _69.QueryNextSequenceReceiveResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryNextSequenceReceiveResponse;
                    fromPartial(object: Partial<_69.QueryNextSequenceReceiveResponse>): _69.QueryNextSequenceReceiveResponse;
                };
                GenesisState: {
                    encode(message: _68.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.GenesisState;
                    fromPartial(object: Partial<_68.GenesisState>): _68.GenesisState;
                };
                PacketSequence: {
                    encode(message: _68.PacketSequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.PacketSequence;
                    fromPartial(object: Partial<_68.PacketSequence>): _68.PacketSequence;
                };
                stateFromJSON(object: any): _67.State;
                stateToJSON(object: _67.State): string;
                orderFromJSON(object: any): _67.Order;
                orderToJSON(object: _67.Order): string;
                State: typeof _67.State;
                StateSDKType: typeof _67.StateSDKType;
                Order: typeof _67.Order;
                OrderSDKType: typeof _67.OrderSDKType;
                Channel: {
                    encode(message: _67.Channel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.Channel;
                    fromPartial(object: Partial<_67.Channel>): _67.Channel;
                };
                IdentifiedChannel: {
                    encode(message: _67.IdentifiedChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.IdentifiedChannel;
                    fromPartial(object: Partial<_67.IdentifiedChannel>): _67.IdentifiedChannel;
                };
                Counterparty: {
                    encode(message: _67.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.Counterparty;
                    fromPartial(object: Partial<_67.Counterparty>): _67.Counterparty;
                };
                Packet: {
                    encode(message: _67.Packet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.Packet;
                    fromPartial(object: Partial<_67.Packet>): _67.Packet;
                };
                PacketState: {
                    encode(message: _67.PacketState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.PacketState;
                    fromPartial(object: Partial<_67.PacketState>): _67.PacketState;
                };
                PacketId: {
                    encode(message: _67.PacketId, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.PacketId;
                    fromPartial(object: Partial<_67.PacketId>): _67.PacketId;
                };
                Acknowledgement: {
                    encode(message: _67.Acknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.Acknowledgement;
                    fromPartial(object: Partial<_67.Acknowledgement>): _67.Acknowledgement;
                };
            };
        }
        namespace client {
            const v1: {
                MsgClientImpl: typeof _115.MsgClientImpl;
                QueryClientImpl: typeof _110.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    clientState(request: _73.QueryClientStateRequest): Promise<_73.QueryClientStateResponse>;
                    clientStates(request?: _73.QueryClientStatesRequest): Promise<_73.QueryClientStatesResponse>;
                    consensusState(request: _73.QueryConsensusStateRequest): Promise<_73.QueryConsensusStateResponse>;
                    consensusStates(request: _73.QueryConsensusStatesRequest): Promise<_73.QueryConsensusStatesResponse>;
                    consensusStateHeights(request: _73.QueryConsensusStateHeightsRequest): Promise<_73.QueryConsensusStateHeightsResponse>;
                    clientStatus(request: _73.QueryClientStatusRequest): Promise<_73.QueryClientStatusResponse>;
                    clientParams(request?: _73.QueryClientParamsRequest): Promise<_73.QueryClientParamsResponse>;
                    upgradedClientState(request?: _73.QueryUpgradedClientStateRequest): Promise<_73.QueryUpgradedClientStateResponse>;
                    upgradedConsensusState(request?: _73.QueryUpgradedConsensusStateRequest): Promise<_73.QueryUpgradedConsensusStateResponse>;
                };
                MsgCreateClient: {
                    encode(message: _74.MsgCreateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.MsgCreateClient;
                    fromPartial(object: Partial<_74.MsgCreateClient>): _74.MsgCreateClient;
                };
                MsgCreateClientResponse: {
                    encode(_: _74.MsgCreateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.MsgCreateClientResponse;
                    fromPartial(_: Partial<_74.MsgCreateClientResponse>): _74.MsgCreateClientResponse;
                };
                MsgUpdateClient: {
                    encode(message: _74.MsgUpdateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.MsgUpdateClient;
                    fromPartial(object: Partial<_74.MsgUpdateClient>): _74.MsgUpdateClient;
                };
                MsgUpdateClientResponse: {
                    encode(_: _74.MsgUpdateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.MsgUpdateClientResponse;
                    fromPartial(_: Partial<_74.MsgUpdateClientResponse>): _74.MsgUpdateClientResponse;
                };
                MsgUpgradeClient: {
                    encode(message: _74.MsgUpgradeClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.MsgUpgradeClient;
                    fromPartial(object: Partial<_74.MsgUpgradeClient>): _74.MsgUpgradeClient;
                };
                MsgUpgradeClientResponse: {
                    encode(_: _74.MsgUpgradeClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.MsgUpgradeClientResponse;
                    fromPartial(_: Partial<_74.MsgUpgradeClientResponse>): _74.MsgUpgradeClientResponse;
                };
                MsgSubmitMisbehaviour: {
                    encode(message: _74.MsgSubmitMisbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.MsgSubmitMisbehaviour;
                    fromPartial(object: Partial<_74.MsgSubmitMisbehaviour>): _74.MsgSubmitMisbehaviour;
                };
                MsgSubmitMisbehaviourResponse: {
                    encode(_: _74.MsgSubmitMisbehaviourResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.MsgSubmitMisbehaviourResponse;
                    fromPartial(_: Partial<_74.MsgSubmitMisbehaviourResponse>): _74.MsgSubmitMisbehaviourResponse;
                };
                QueryClientStateRequest: {
                    encode(message: _73.QueryClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QueryClientStateRequest;
                    fromPartial(object: Partial<_73.QueryClientStateRequest>): _73.QueryClientStateRequest;
                };
                QueryClientStateResponse: {
                    encode(message: _73.QueryClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QueryClientStateResponse;
                    fromPartial(object: Partial<_73.QueryClientStateResponse>): _73.QueryClientStateResponse;
                };
                QueryClientStatesRequest: {
                    encode(message: _73.QueryClientStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QueryClientStatesRequest;
                    fromPartial(object: Partial<_73.QueryClientStatesRequest>): _73.QueryClientStatesRequest;
                };
                QueryClientStatesResponse: {
                    encode(message: _73.QueryClientStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QueryClientStatesResponse;
                    fromPartial(object: Partial<_73.QueryClientStatesResponse>): _73.QueryClientStatesResponse;
                };
                QueryConsensusStateRequest: {
                    encode(message: _73.QueryConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QueryConsensusStateRequest;
                    fromPartial(object: Partial<_73.QueryConsensusStateRequest>): _73.QueryConsensusStateRequest;
                };
                QueryConsensusStateResponse: {
                    encode(message: _73.QueryConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QueryConsensusStateResponse;
                    fromPartial(object: Partial<_73.QueryConsensusStateResponse>): _73.QueryConsensusStateResponse;
                };
                QueryConsensusStatesRequest: {
                    encode(message: _73.QueryConsensusStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QueryConsensusStatesRequest;
                    fromPartial(object: Partial<_73.QueryConsensusStatesRequest>): _73.QueryConsensusStatesRequest;
                };
                QueryConsensusStatesResponse: {
                    encode(message: _73.QueryConsensusStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QueryConsensusStatesResponse;
                    fromPartial(object: Partial<_73.QueryConsensusStatesResponse>): _73.QueryConsensusStatesResponse;
                };
                QueryConsensusStateHeightsRequest: {
                    encode(message: _73.QueryConsensusStateHeightsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QueryConsensusStateHeightsRequest;
                    fromPartial(object: Partial<_73.QueryConsensusStateHeightsRequest>): _73.QueryConsensusStateHeightsRequest;
                };
                QueryConsensusStateHeightsResponse: {
                    encode(message: _73.QueryConsensusStateHeightsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QueryConsensusStateHeightsResponse;
                    fromPartial(object: Partial<_73.QueryConsensusStateHeightsResponse>): _73.QueryConsensusStateHeightsResponse;
                };
                QueryClientStatusRequest: {
                    encode(message: _73.QueryClientStatusRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QueryClientStatusRequest;
                    fromPartial(object: Partial<_73.QueryClientStatusRequest>): _73.QueryClientStatusRequest;
                };
                QueryClientStatusResponse: {
                    encode(message: _73.QueryClientStatusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QueryClientStatusResponse;
                    fromPartial(object: Partial<_73.QueryClientStatusResponse>): _73.QueryClientStatusResponse;
                };
                QueryClientParamsRequest: {
                    encode(_: _73.QueryClientParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QueryClientParamsRequest;
                    fromPartial(_: Partial<_73.QueryClientParamsRequest>): _73.QueryClientParamsRequest;
                };
                QueryClientParamsResponse: {
                    encode(message: _73.QueryClientParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QueryClientParamsResponse;
                    fromPartial(object: Partial<_73.QueryClientParamsResponse>): _73.QueryClientParamsResponse;
                };
                QueryUpgradedClientStateRequest: {
                    encode(_: _73.QueryUpgradedClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QueryUpgradedClientStateRequest;
                    fromPartial(_: Partial<_73.QueryUpgradedClientStateRequest>): _73.QueryUpgradedClientStateRequest;
                };
                QueryUpgradedClientStateResponse: {
                    encode(message: _73.QueryUpgradedClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QueryUpgradedClientStateResponse;
                    fromPartial(object: Partial<_73.QueryUpgradedClientStateResponse>): _73.QueryUpgradedClientStateResponse;
                };
                QueryUpgradedConsensusStateRequest: {
                    encode(_: _73.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QueryUpgradedConsensusStateRequest;
                    fromPartial(_: Partial<_73.QueryUpgradedConsensusStateRequest>): _73.QueryUpgradedConsensusStateRequest;
                };
                QueryUpgradedConsensusStateResponse: {
                    encode(message: _73.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QueryUpgradedConsensusStateResponse;
                    fromPartial(object: Partial<_73.QueryUpgradedConsensusStateResponse>): _73.QueryUpgradedConsensusStateResponse;
                };
                GenesisState: {
                    encode(message: _72.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.GenesisState;
                    fromPartial(object: Partial<_72.GenesisState>): _72.GenesisState;
                };
                GenesisMetadata: {
                    encode(message: _72.GenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.GenesisMetadata;
                    fromPartial(object: Partial<_72.GenesisMetadata>): _72.GenesisMetadata;
                };
                IdentifiedGenesisMetadata: {
                    encode(message: _72.IdentifiedGenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.IdentifiedGenesisMetadata;
                    fromPartial(object: Partial<_72.IdentifiedGenesisMetadata>): _72.IdentifiedGenesisMetadata;
                };
                IdentifiedClientState: {
                    encode(message: _71.IdentifiedClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.IdentifiedClientState;
                    fromPartial(object: Partial<_71.IdentifiedClientState>): _71.IdentifiedClientState;
                };
                ConsensusStateWithHeight: {
                    encode(message: _71.ConsensusStateWithHeight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.ConsensusStateWithHeight;
                    fromPartial(object: Partial<_71.ConsensusStateWithHeight>): _71.ConsensusStateWithHeight;
                };
                ClientConsensusStates: {
                    encode(message: _71.ClientConsensusStates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.ClientConsensusStates;
                    fromPartial(object: Partial<_71.ClientConsensusStates>): _71.ClientConsensusStates;
                };
                ClientUpdateProposal: {
                    encode(message: _71.ClientUpdateProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.ClientUpdateProposal;
                    fromPartial(object: Partial<_71.ClientUpdateProposal>): _71.ClientUpdateProposal;
                };
                UpgradeProposal: {
                    encode(message: _71.UpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.UpgradeProposal;
                    fromPartial(object: Partial<_71.UpgradeProposal>): _71.UpgradeProposal;
                };
                Height: {
                    encode(message: _71.Height, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.Height;
                    fromPartial(object: Partial<_71.Height>): _71.Height;
                };
                Params: {
                    encode(message: _71.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.Params;
                    fromPartial(object: Partial<_71.Params>): _71.Params;
                };
            };
        }
        namespace commitment {
            const v1: {
                MerkleRoot: {
                    encode(message: _75.MerkleRoot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.MerkleRoot;
                    fromPartial(object: Partial<_75.MerkleRoot>): _75.MerkleRoot;
                };
                MerklePrefix: {
                    encode(message: _75.MerklePrefix, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.MerklePrefix;
                    fromPartial(object: Partial<_75.MerklePrefix>): _75.MerklePrefix;
                };
                MerklePath: {
                    encode(message: _75.MerklePath, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.MerklePath;
                    fromPartial(object: Partial<_75.MerklePath>): _75.MerklePath;
                };
                MerkleProof: {
                    encode(message: _75.MerkleProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.MerkleProof;
                    fromPartial(object: Partial<_75.MerkleProof>): _75.MerkleProof;
                };
            };
        }
    }
    namespace lightclients {
        namespace solomachine {
            const v2: {
                dataTypeFromJSON(object: any): _76.DataType;
                dataTypeToJSON(object: _76.DataType): string;
                DataType: typeof _76.DataType;
                DataTypeSDKType: typeof _76.DataTypeSDKType;
                ClientState: {
                    encode(message: _76.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.ClientState;
                    fromPartial(object: Partial<_76.ClientState>): _76.ClientState;
                };
                ConsensusState: {
                    encode(message: _76.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.ConsensusState;
                    fromPartial(object: Partial<_76.ConsensusState>): _76.ConsensusState;
                };
                Header: {
                    encode(message: _76.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.Header;
                    fromPartial(object: Partial<_76.Header>): _76.Header;
                };
                Misbehaviour: {
                    encode(message: _76.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.Misbehaviour;
                    fromPartial(object: Partial<_76.Misbehaviour>): _76.Misbehaviour;
                };
                SignatureAndData: {
                    encode(message: _76.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.SignatureAndData;
                    fromPartial(object: Partial<_76.SignatureAndData>): _76.SignatureAndData;
                };
                TimestampedSignatureData: {
                    encode(message: _76.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.TimestampedSignatureData;
                    fromPartial(object: Partial<_76.TimestampedSignatureData>): _76.TimestampedSignatureData;
                };
                SignBytes: {
                    encode(message: _76.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.SignBytes;
                    fromPartial(object: Partial<_76.SignBytes>): _76.SignBytes;
                };
                HeaderData: {
                    encode(message: _76.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.HeaderData;
                    fromPartial(object: Partial<_76.HeaderData>): _76.HeaderData;
                };
                ClientStateData: {
                    encode(message: _76.ClientStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.ClientStateData;
                    fromPartial(object: Partial<_76.ClientStateData>): _76.ClientStateData;
                };
                ConsensusStateData: {
                    encode(message: _76.ConsensusStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.ConsensusStateData;
                    fromPartial(object: Partial<_76.ConsensusStateData>): _76.ConsensusStateData;
                };
                ConnectionStateData: {
                    encode(message: _76.ConnectionStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.ConnectionStateData;
                    fromPartial(object: Partial<_76.ConnectionStateData>): _76.ConnectionStateData;
                };
                ChannelStateData: {
                    encode(message: _76.ChannelStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.ChannelStateData;
                    fromPartial(object: Partial<_76.ChannelStateData>): _76.ChannelStateData;
                };
                PacketCommitmentData: {
                    encode(message: _76.PacketCommitmentData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.PacketCommitmentData;
                    fromPartial(object: Partial<_76.PacketCommitmentData>): _76.PacketCommitmentData;
                };
                PacketAcknowledgementData: {
                    encode(message: _76.PacketAcknowledgementData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.PacketAcknowledgementData;
                    fromPartial(object: Partial<_76.PacketAcknowledgementData>): _76.PacketAcknowledgementData;
                };
                PacketReceiptAbsenceData: {
                    encode(message: _76.PacketReceiptAbsenceData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.PacketReceiptAbsenceData;
                    fromPartial(object: Partial<_76.PacketReceiptAbsenceData>): _76.PacketReceiptAbsenceData;
                };
                NextSequenceRecvData: {
                    encode(message: _76.NextSequenceRecvData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.NextSequenceRecvData;
                    fromPartial(object: Partial<_76.NextSequenceRecvData>): _76.NextSequenceRecvData;
                };
            };
            const v3: {
                ClientState: {
                    encode(message: _77.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.ClientState;
                    fromPartial(object: Partial<_77.ClientState>): _77.ClientState;
                };
                ConsensusState: {
                    encode(message: _77.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.ConsensusState;
                    fromPartial(object: Partial<_77.ConsensusState>): _77.ConsensusState;
                };
                Header: {
                    encode(message: _77.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.Header;
                    fromPartial(object: Partial<_77.Header>): _77.Header;
                };
                Misbehaviour: {
                    encode(message: _77.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.Misbehaviour;
                    fromPartial(object: Partial<_77.Misbehaviour>): _77.Misbehaviour;
                };
                SignatureAndData: {
                    encode(message: _77.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.SignatureAndData;
                    fromPartial(object: Partial<_77.SignatureAndData>): _77.SignatureAndData;
                };
                TimestampedSignatureData: {
                    encode(message: _77.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.TimestampedSignatureData;
                    fromPartial(object: Partial<_77.TimestampedSignatureData>): _77.TimestampedSignatureData;
                };
                SignBytes: {
                    encode(message: _77.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.SignBytes;
                    fromPartial(object: Partial<_77.SignBytes>): _77.SignBytes;
                };
                HeaderData: {
                    encode(message: _77.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.HeaderData;
                    fromPartial(object: Partial<_77.HeaderData>): _77.HeaderData;
                };
            };
        }
        namespace tendermint {
            const v1: {
                ClientState: {
                    encode(message: _78.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.ClientState;
                    fromPartial(object: Partial<_78.ClientState>): _78.ClientState;
                };
                ConsensusState: {
                    encode(message: _78.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.ConsensusState;
                    fromPartial(object: Partial<_78.ConsensusState>): _78.ConsensusState;
                };
                Misbehaviour: {
                    encode(message: _78.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.Misbehaviour;
                    fromPartial(object: Partial<_78.Misbehaviour>): _78.Misbehaviour;
                };
                Header: {
                    encode(message: _78.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.Header;
                    fromPartial(object: Partial<_78.Header>): _78.Header;
                };
                Fraction: {
                    encode(message: _78.Fraction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.Fraction;
                    fromPartial(object: Partial<_78.Fraction>): _78.Fraction;
                };
            };
        }
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                gov: {
                    v1: import("../cosmos/gov/v1/tx.rpc.msg").MsgClientImpl;
                    v1beta1: import("../cosmos/gov/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
            };
            ibc: {
                applications: {
                    fee: {
                        v1: _111.MsgClientImpl;
                    };
                    interchain_accounts: {
                        controller: {
                            v1: _112.MsgClientImpl;
                        };
                    };
                    transfer: {
                        v1: _113.MsgClientImpl;
                    };
                };
                core: {
                    channel: {
                        v1: _114.MsgClientImpl;
                    };
                    client: {
                        v1: _115.MsgClientImpl;
                    };
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string;
        }) => Promise<{
            cosmos: {
                bank: {
                    v1beta1: {
                        balance(request: import("../cosmos/bank/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryBalanceResponse>;
                        allBalances(request: import("../cosmos/bank/v1beta1/query").QueryAllBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryAllBalancesResponse>;
                        spendableBalances(request: import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesResponse>;
                        totalSupply(request?: import("../cosmos/bank/v1beta1/query").QueryTotalSupplyRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryTotalSupplyResponse>;
                        supplyOf(request: import("../cosmos/bank/v1beta1/query").QuerySupplyOfRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySupplyOfResponse>;
                        params(request?: import("../cosmos/bank/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryParamsResponse>;
                        denomMetadata(request: import("../cosmos/bank/v1beta1/query").QueryDenomMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomMetadataResponse>;
                        denomsMetadata(request?: import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataResponse>;
                        denomOwners(request: import("../cosmos/bank/v1beta1/query").QueryDenomOwnersRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomOwnersResponse>;
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: import("../cosmos/distribution/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryParamsResponse>;
                        validatorOutstandingRewards(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionResponse>;
                        validatorSlashes(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesResponse>;
                        delegationRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolResponse>;
                    };
                };
                gov: {
                    v1: {
                        proposal(request: import("../cosmos/gov/v1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1/query").QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: import("../cosmos/gov/v1beta1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1beta1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1beta1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1beta1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1beta1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1beta1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1beta1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryTallyResultResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: import("../cosmos/mint/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryParamsResponse>;
                        inflation(request?: import("../cosmos/mint/v1beta1/query").QueryInflationRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryInflationResponse>;
                        annualProvisions(request?: import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: import("../cosmos/staking/v1beta1/query").QueryValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorsResponse>;
                        validator(request: import("../cosmos/staking/v1beta1/query").QueryValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorResponse>;
                        validatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: import("../cosmos/staking/v1beta1/query").QueryDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegationResponse>;
                        unbondingDelegation(request: import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: import("../cosmos/staking/v1beta1/query").QueryRedelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryRedelegationsResponse>;
                        delegatorValidators(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorResponse>;
                        historicalInfo(request: import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoResponse>;
                        pool(request?: import("../cosmos/staking/v1beta1/query").QueryPoolRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryPoolResponse>;
                        params(request?: import("../cosmos/staking/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: import("../cosmos/tx/v1beta1/service").SimulateRequest): Promise<import("../cosmos/tx/v1beta1/service").SimulateResponse>;
                        getTx(request: import("../cosmos/tx/v1beta1/service").GetTxRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxResponse>;
                        broadcastTx(request: import("../cosmos/tx/v1beta1/service").BroadcastTxRequest): Promise<import("../cosmos/tx/v1beta1/service").BroadcastTxResponse>;
                        getTxsEvent(request: import("../cosmos/tx/v1beta1/service").GetTxsEventRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxsEventResponse>;
                        getBlockWithTxs(request: import("../cosmos/tx/v1beta1/service").GetBlockWithTxsRequest): Promise<import("../cosmos/tx/v1beta1/service").GetBlockWithTxsResponse>;
                    };
                };
            };
            ibc: {
                applications: {
                    fee: {
                        v1: {
                            incentivizedPackets(request: _51.QueryIncentivizedPacketsRequest): Promise<_51.QueryIncentivizedPacketsResponse>;
                            incentivizedPacket(request: _51.QueryIncentivizedPacketRequest): Promise<_51.QueryIncentivizedPacketResponse>;
                            incentivizedPacketsForChannel(request: _51.QueryIncentivizedPacketsForChannelRequest): Promise<_51.QueryIncentivizedPacketsForChannelResponse>;
                            totalRecvFees(request: _51.QueryTotalRecvFeesRequest): Promise<_51.QueryTotalRecvFeesResponse>;
                            totalAckFees(request: _51.QueryTotalAckFeesRequest): Promise<_51.QueryTotalAckFeesResponse>;
                            totalTimeoutFees(request: _51.QueryTotalTimeoutFeesRequest): Promise<_51.QueryTotalTimeoutFeesResponse>;
                            payee(request: _51.QueryPayeeRequest): Promise<_51.QueryPayeeResponse>;
                            counterpartyPayee(request: _51.QueryCounterpartyPayeeRequest): Promise<_51.QueryCounterpartyPayeeResponse>;
                            feeEnabledChannels(request: _51.QueryFeeEnabledChannelsRequest): Promise<_51.QueryFeeEnabledChannelsResponse>;
                            feeEnabledChannel(request: _51.QueryFeeEnabledChannelRequest): Promise<_51.QueryFeeEnabledChannelResponse>;
                        };
                    };
                    interchain_accounts: {
                        controller: {
                            v1: {
                                interchainAccount(request: _54.QueryInterchainAccountRequest): Promise<_54.QueryInterchainAccountResponse>;
                                params(request?: _54.QueryParamsRequest): Promise<_54.QueryParamsResponse>;
                            };
                        };
                        host: {
                            v1: {
                                params(request?: _58.QueryParamsRequest): Promise<_58.QueryParamsResponse>;
                            };
                        };
                    };
                    transfer: {
                        v1: {
                            denomTrace(request: _63.QueryDenomTraceRequest): Promise<_63.QueryDenomTraceResponse>;
                            denomTraces(request?: _63.QueryDenomTracesRequest): Promise<_63.QueryDenomTracesResponse>;
                            params(request?: _63.QueryParamsRequest): Promise<_63.QueryParamsResponse>;
                            denomHash(request: _63.QueryDenomHashRequest): Promise<_63.QueryDenomHashResponse>;
                            escrowAddress(request: _63.QueryEscrowAddressRequest): Promise<_63.QueryEscrowAddressResponse>;
                        };
                    };
                };
                core: {
                    channel: {
                        v1: {
                            channel(request: _69.QueryChannelRequest): Promise<_69.QueryChannelResponse>;
                            channels(request?: _69.QueryChannelsRequest): Promise<_69.QueryChannelsResponse>;
                            connectionChannels(request: _69.QueryConnectionChannelsRequest): Promise<_69.QueryConnectionChannelsResponse>;
                            channelClientState(request: _69.QueryChannelClientStateRequest): Promise<_69.QueryChannelClientStateResponse>;
                            channelConsensusState(request: _69.QueryChannelConsensusStateRequest): Promise<_69.QueryChannelConsensusStateResponse>;
                            packetCommitment(request: _69.QueryPacketCommitmentRequest): Promise<_69.QueryPacketCommitmentResponse>;
                            packetCommitments(request: _69.QueryPacketCommitmentsRequest): Promise<_69.QueryPacketCommitmentsResponse>;
                            packetReceipt(request: _69.QueryPacketReceiptRequest): Promise<_69.QueryPacketReceiptResponse>;
                            packetAcknowledgement(request: _69.QueryPacketAcknowledgementRequest): Promise<_69.QueryPacketAcknowledgementResponse>;
                            packetAcknowledgements(request: _69.QueryPacketAcknowledgementsRequest): Promise<_69.QueryPacketAcknowledgementsResponse>;
                            unreceivedPackets(request: _69.QueryUnreceivedPacketsRequest): Promise<_69.QueryUnreceivedPacketsResponse>;
                            unreceivedAcks(request: _69.QueryUnreceivedAcksRequest): Promise<_69.QueryUnreceivedAcksResponse>;
                            nextSequenceReceive(request: _69.QueryNextSequenceReceiveRequest): Promise<_69.QueryNextSequenceReceiveResponse>;
                        };
                    };
                    client: {
                        v1: {
                            clientState(request: _73.QueryClientStateRequest): Promise<_73.QueryClientStateResponse>;
                            clientStates(request?: _73.QueryClientStatesRequest): Promise<_73.QueryClientStatesResponse>;
                            consensusState(request: _73.QueryConsensusStateRequest): Promise<_73.QueryConsensusStateResponse>;
                            consensusStates(request: _73.QueryConsensusStatesRequest): Promise<_73.QueryConsensusStatesResponse>;
                            consensusStateHeights(request: _73.QueryConsensusStateHeightsRequest): Promise<_73.QueryConsensusStateHeightsResponse>;
                            clientStatus(request: _73.QueryClientStatusRequest): Promise<_73.QueryClientStatusResponse>;
                            clientParams(request?: _73.QueryClientParamsRequest): Promise<_73.QueryClientParamsResponse>;
                            upgradedClientState(request?: _73.QueryUpgradedClientStateRequest): Promise<_73.QueryUpgradedClientStateResponse>;
                            upgradedConsensusState(request?: _73.QueryUpgradedConsensusStateRequest): Promise<_73.QueryUpgradedConsensusStateResponse>;
                        };
                    };
                };
            };
        }>;
    };
}
