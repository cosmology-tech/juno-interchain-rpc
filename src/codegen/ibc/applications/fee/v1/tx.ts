import { Fee, FeeSDKType, PacketFee, PacketFeeSDKType } from "./fee";
import { PacketId, PacketIdSDKType } from "../../../core/channel/v1/channel";
import * as _m0 from "protobufjs/minimal";
/** MsgRegisterPayee defines the request type for the RegisterPayee rpc */

export interface MsgRegisterPayee {
  /** unique port identifier */
  portId: string;
  /** unique channel identifier */

  channelId: string;
  /** the relayer address */

  relayer: string;
  /** the payee address */

  payee: string;
}
/** MsgRegisterPayee defines the request type for the RegisterPayee rpc */

export interface MsgRegisterPayeeSDKType {
  /** unique port identifier */
  port_id: string;
  /** unique channel identifier */

  channel_id: string;
  /** the relayer address */

  relayer: string;
  /** the payee address */

  payee: string;
}
/** MsgRegisterPayeeResponse defines the response type for the RegisterPayee rpc */

export interface MsgRegisterPayeeResponse {}
/** MsgRegisterPayeeResponse defines the response type for the RegisterPayee rpc */

export interface MsgRegisterPayeeResponseSDKType {}
/** MsgRegisterCounterpartyPayee defines the request type for the RegisterCounterpartyPayee rpc */

export interface MsgRegisterCounterpartyPayee {
  /** unique port identifier */
  portId: string;
  /** unique channel identifier */

  channelId: string;
  /** the relayer address */

  relayer: string;
  /** the counterparty payee address */

  counterpartyPayee: string;
}
/** MsgRegisterCounterpartyPayee defines the request type for the RegisterCounterpartyPayee rpc */

export interface MsgRegisterCounterpartyPayeeSDKType {
  /** unique port identifier */
  port_id: string;
  /** unique channel identifier */

  channel_id: string;
  /** the relayer address */

  relayer: string;
  /** the counterparty payee address */

  counterparty_payee: string;
}
/** MsgRegisterCounterpartyPayeeResponse defines the response type for the RegisterCounterpartyPayee rpc */

export interface MsgRegisterCounterpartyPayeeResponse {}
/** MsgRegisterCounterpartyPayeeResponse defines the response type for the RegisterCounterpartyPayee rpc */

export interface MsgRegisterCounterpartyPayeeResponseSDKType {}
/**
 * MsgPayPacketFee defines the request type for the PayPacketFee rpc
 * This Msg can be used to pay for a packet at the next sequence send & should be combined with the Msg that will be
 * paid for
 */

export interface MsgPayPacketFee {
  /** fee encapsulates the recv, ack and timeout fees associated with an IBC packet */
  fee?: Fee;
  /** the source port unique identifier */

  sourcePortId: string;
  /** the source channel unique identifer */

  sourceChannelId: string;
  /** account address to refund fee if necessary */

  signer: string;
  /** optional list of relayers permitted to the receive packet fees */

  relayers: string[];
}
/**
 * MsgPayPacketFee defines the request type for the PayPacketFee rpc
 * This Msg can be used to pay for a packet at the next sequence send & should be combined with the Msg that will be
 * paid for
 */

export interface MsgPayPacketFeeSDKType {
  /** fee encapsulates the recv, ack and timeout fees associated with an IBC packet */
  fee?: FeeSDKType;
  /** the source port unique identifier */

  source_port_id: string;
  /** the source channel unique identifer */

  source_channel_id: string;
  /** account address to refund fee if necessary */

  signer: string;
  /** optional list of relayers permitted to the receive packet fees */

  relayers: string[];
}
/** MsgPayPacketFeeResponse defines the response type for the PayPacketFee rpc */

export interface MsgPayPacketFeeResponse {}
/** MsgPayPacketFeeResponse defines the response type for the PayPacketFee rpc */

export interface MsgPayPacketFeeResponseSDKType {}
/**
 * MsgPayPacketFeeAsync defines the request type for the PayPacketFeeAsync rpc
 * This Msg can be used to pay for a packet at a specified sequence (instead of the next sequence send)
 */

export interface MsgPayPacketFeeAsync {
  /** unique packet identifier comprised of the channel ID, port ID and sequence */
  packetId?: PacketId;
  /** the packet fee associated with a particular IBC packet */

  packetFee?: PacketFee;
}
/**
 * MsgPayPacketFeeAsync defines the request type for the PayPacketFeeAsync rpc
 * This Msg can be used to pay for a packet at a specified sequence (instead of the next sequence send)
 */

export interface MsgPayPacketFeeAsyncSDKType {
  /** unique packet identifier comprised of the channel ID, port ID and sequence */
  packet_id?: PacketIdSDKType;
  /** the packet fee associated with a particular IBC packet */

  packet_fee?: PacketFeeSDKType;
}
/** MsgPayPacketFeeAsyncResponse defines the response type for the PayPacketFeeAsync rpc */

export interface MsgPayPacketFeeAsyncResponse {}
/** MsgPayPacketFeeAsyncResponse defines the response type for the PayPacketFeeAsync rpc */

export interface MsgPayPacketFeeAsyncResponseSDKType {}

function createBaseMsgRegisterPayee(): MsgRegisterPayee {
  return {
    portId: "",
    channelId: "",
    relayer: "",
    payee: ""
  };
}

export const MsgRegisterPayee = {
  encode(message: MsgRegisterPayee, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }

    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }

    if (message.relayer !== "") {
      writer.uint32(26).string(message.relayer);
    }

    if (message.payee !== "") {
      writer.uint32(34).string(message.payee);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterPayee {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterPayee();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;

        case 2:
          message.channelId = reader.string();
          break;

        case 3:
          message.relayer = reader.string();
          break;

        case 4:
          message.payee = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: Partial<MsgRegisterPayee>): MsgRegisterPayee {
    const message = createBaseMsgRegisterPayee();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.relayer = object.relayer ?? "";
    message.payee = object.payee ?? "";
    return message;
  }

};

function createBaseMsgRegisterPayeeResponse(): MsgRegisterPayeeResponse {
  return {};
}

export const MsgRegisterPayeeResponse = {
  encode(_: MsgRegisterPayeeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterPayeeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterPayeeResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: Partial<MsgRegisterPayeeResponse>): MsgRegisterPayeeResponse {
    const message = createBaseMsgRegisterPayeeResponse();
    return message;
  }

};

function createBaseMsgRegisterCounterpartyPayee(): MsgRegisterCounterpartyPayee {
  return {
    portId: "",
    channelId: "",
    relayer: "",
    counterpartyPayee: ""
  };
}

export const MsgRegisterCounterpartyPayee = {
  encode(message: MsgRegisterCounterpartyPayee, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }

    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }

    if (message.relayer !== "") {
      writer.uint32(26).string(message.relayer);
    }

    if (message.counterpartyPayee !== "") {
      writer.uint32(34).string(message.counterpartyPayee);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterCounterpartyPayee {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterCounterpartyPayee();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;

        case 2:
          message.channelId = reader.string();
          break;

        case 3:
          message.relayer = reader.string();
          break;

        case 4:
          message.counterpartyPayee = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: Partial<MsgRegisterCounterpartyPayee>): MsgRegisterCounterpartyPayee {
    const message = createBaseMsgRegisterCounterpartyPayee();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.relayer = object.relayer ?? "";
    message.counterpartyPayee = object.counterpartyPayee ?? "";
    return message;
  }

};

function createBaseMsgRegisterCounterpartyPayeeResponse(): MsgRegisterCounterpartyPayeeResponse {
  return {};
}

export const MsgRegisterCounterpartyPayeeResponse = {
  encode(_: MsgRegisterCounterpartyPayeeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterCounterpartyPayeeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterCounterpartyPayeeResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: Partial<MsgRegisterCounterpartyPayeeResponse>): MsgRegisterCounterpartyPayeeResponse {
    const message = createBaseMsgRegisterCounterpartyPayeeResponse();
    return message;
  }

};

function createBaseMsgPayPacketFee(): MsgPayPacketFee {
  return {
    fee: undefined,
    sourcePortId: "",
    sourceChannelId: "",
    signer: "",
    relayers: []
  };
}

export const MsgPayPacketFee = {
  encode(message: MsgPayPacketFee, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fee !== undefined) {
      Fee.encode(message.fee, writer.uint32(10).fork()).ldelim();
    }

    if (message.sourcePortId !== "") {
      writer.uint32(18).string(message.sourcePortId);
    }

    if (message.sourceChannelId !== "") {
      writer.uint32(26).string(message.sourceChannelId);
    }

    if (message.signer !== "") {
      writer.uint32(34).string(message.signer);
    }

    for (const v of message.relayers) {
      writer.uint32(42).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPayPacketFee {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPayPacketFee();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.fee = Fee.decode(reader, reader.uint32());
          break;

        case 2:
          message.sourcePortId = reader.string();
          break;

        case 3:
          message.sourceChannelId = reader.string();
          break;

        case 4:
          message.signer = reader.string();
          break;

        case 5:
          message.relayers.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: Partial<MsgPayPacketFee>): MsgPayPacketFee {
    const message = createBaseMsgPayPacketFee();
    message.fee = object.fee !== undefined && object.fee !== null ? Fee.fromPartial(object.fee) : undefined;
    message.sourcePortId = object.sourcePortId ?? "";
    message.sourceChannelId = object.sourceChannelId ?? "";
    message.signer = object.signer ?? "";
    message.relayers = object.relayers?.map(e => e) || [];
    return message;
  }

};

function createBaseMsgPayPacketFeeResponse(): MsgPayPacketFeeResponse {
  return {};
}

export const MsgPayPacketFeeResponse = {
  encode(_: MsgPayPacketFeeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPayPacketFeeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPayPacketFeeResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: Partial<MsgPayPacketFeeResponse>): MsgPayPacketFeeResponse {
    const message = createBaseMsgPayPacketFeeResponse();
    return message;
  }

};

function createBaseMsgPayPacketFeeAsync(): MsgPayPacketFeeAsync {
  return {
    packetId: undefined,
    packetFee: undefined
  };
}

export const MsgPayPacketFeeAsync = {
  encode(message: MsgPayPacketFeeAsync, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.packetId !== undefined) {
      PacketId.encode(message.packetId, writer.uint32(10).fork()).ldelim();
    }

    if (message.packetFee !== undefined) {
      PacketFee.encode(message.packetFee, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPayPacketFeeAsync {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPayPacketFeeAsync();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.packetId = PacketId.decode(reader, reader.uint32());
          break;

        case 2:
          message.packetFee = PacketFee.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: Partial<MsgPayPacketFeeAsync>): MsgPayPacketFeeAsync {
    const message = createBaseMsgPayPacketFeeAsync();
    message.packetId = object.packetId !== undefined && object.packetId !== null ? PacketId.fromPartial(object.packetId) : undefined;
    message.packetFee = object.packetFee !== undefined && object.packetFee !== null ? PacketFee.fromPartial(object.packetFee) : undefined;
    return message;
  }

};

function createBaseMsgPayPacketFeeAsyncResponse(): MsgPayPacketFeeAsyncResponse {
  return {};
}

export const MsgPayPacketFeeAsyncResponse = {
  encode(_: MsgPayPacketFeeAsyncResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPayPacketFeeAsyncResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPayPacketFeeAsyncResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: Partial<MsgPayPacketFeeAsyncResponse>): MsgPayPacketFeeAsyncResponse {
    const message = createBaseMsgPayPacketFeeAsyncResponse();
    return message;
  }

};