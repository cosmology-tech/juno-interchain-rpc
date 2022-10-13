import * as _0 from "./cosmos";
export declare const cosmos_proto: {
    scalarTypeFromJSON(object: any): _0.ScalarType;
    scalarTypeToJSON(object: _0.ScalarType): string;
    ScalarType: typeof _0.ScalarType;
    ScalarTypeSDKType: typeof _0.ScalarTypeSDKType;
    InterfaceDescriptor: {
        encode(message: _0.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.InterfaceDescriptor;
        fromPartial(object: Partial<_0.InterfaceDescriptor>): _0.InterfaceDescriptor;
    };
    ScalarDescriptor: {
        encode(message: _0.ScalarDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.ScalarDescriptor;
        fromPartial(object: Partial<_0.ScalarDescriptor>): _0.ScalarDescriptor;
    };
};
