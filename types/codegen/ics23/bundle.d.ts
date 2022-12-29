import * as _1 from "../proofs";
export declare const ics23: {
    hashOpFromJSON(object: any): _1.HashOp;
    hashOpToJSON(object: _1.HashOp): string;
    lengthOpFromJSON(object: any): _1.LengthOp;
    lengthOpToJSON(object: _1.LengthOp): string;
    HashOp: typeof _1.HashOp;
    HashOpSDKType: typeof _1.HashOpSDKType;
    LengthOp: typeof _1.LengthOp;
    LengthOpSDKType: typeof _1.LengthOpSDKType;
    ExistenceProof: {
        encode(message: _1.ExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.ExistenceProof;
        fromPartial(object: Partial<_1.ExistenceProof>): _1.ExistenceProof;
    };
    NonExistenceProof: {
        encode(message: _1.NonExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.NonExistenceProof;
        fromPartial(object: Partial<_1.NonExistenceProof>): _1.NonExistenceProof;
    };
    CommitmentProof: {
        encode(message: _1.CommitmentProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.CommitmentProof;
        fromPartial(object: Partial<_1.CommitmentProof>): _1.CommitmentProof;
    };
    LeafOp: {
        encode(message: _1.LeafOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.LeafOp;
        fromPartial(object: Partial<_1.LeafOp>): _1.LeafOp;
    };
    InnerOp: {
        encode(message: _1.InnerOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.InnerOp;
        fromPartial(object: Partial<_1.InnerOp>): _1.InnerOp;
    };
    ProofSpec: {
        encode(message: _1.ProofSpec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.ProofSpec;
        fromPartial(object: Partial<_1.ProofSpec>): _1.ProofSpec;
    };
    InnerSpec: {
        encode(message: _1.InnerSpec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.InnerSpec;
        fromPartial(object: Partial<_1.InnerSpec>): _1.InnerSpec;
    };
    BatchProof: {
        encode(message: _1.BatchProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.BatchProof;
        fromPartial(object: Partial<_1.BatchProof>): _1.BatchProof;
    };
    BatchEntry: {
        encode(message: _1.BatchEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.BatchEntry;
        fromPartial(object: Partial<_1.BatchEntry>): _1.BatchEntry;
    };
    CompressedBatchProof: {
        encode(message: _1.CompressedBatchProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.CompressedBatchProof;
        fromPartial(object: Partial<_1.CompressedBatchProof>): _1.CompressedBatchProof;
    };
    CompressedBatchEntry: {
        encode(message: _1.CompressedBatchEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.CompressedBatchEntry;
        fromPartial(object: Partial<_1.CompressedBatchEntry>): _1.CompressedBatchEntry;
    };
    CompressedExistenceProof: {
        encode(message: _1.CompressedExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.CompressedExistenceProof;
        fromPartial(object: Partial<_1.CompressedExistenceProof>): _1.CompressedExistenceProof;
    };
    CompressedNonExistenceProof: {
        encode(message: _1.CompressedNonExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.CompressedNonExistenceProof;
        fromPartial(object: Partial<_1.CompressedNonExistenceProof>): _1.CompressedNonExistenceProof;
    };
};
