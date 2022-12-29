import * as _82 from "./abci/types";
import * as _83 from "./crypto/keys";
import * as _84 from "./crypto/proof";
import * as _85 from "./libs/bits/types";
import * as _86 from "./p2p/types";
import * as _87 from "./types/block";
import * as _88 from "./types/evidence";
import * as _89 from "./types/params";
import * as _90 from "./types/types";
import * as _91 from "./types/validator";
import * as _92 from "./version/types";
export declare namespace tendermint {
    const abci: {
        checkTxTypeFromJSON(object: any): _82.CheckTxType;
        checkTxTypeToJSON(object: _82.CheckTxType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _82.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _82.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _82.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _82.ResponseApplySnapshotChunk_Result): string;
        evidenceTypeFromJSON(object: any): _82.EvidenceType;
        evidenceTypeToJSON(object: _82.EvidenceType): string;
        CheckTxType: typeof _82.CheckTxType;
        CheckTxTypeSDKType: typeof _82.CheckTxTypeSDKType;
        ResponseOfferSnapshot_Result: typeof _82.ResponseOfferSnapshot_Result;
        ResponseOfferSnapshot_ResultSDKType: typeof _82.ResponseOfferSnapshot_ResultSDKType;
        ResponseApplySnapshotChunk_Result: typeof _82.ResponseApplySnapshotChunk_Result;
        ResponseApplySnapshotChunk_ResultSDKType: typeof _82.ResponseApplySnapshotChunk_ResultSDKType;
        EvidenceType: typeof _82.EvidenceType;
        EvidenceTypeSDKType: typeof _82.EvidenceTypeSDKType;
        Request: {
            encode(message: _82.Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.Request;
            fromPartial(object: Partial<_82.Request>): _82.Request;
        };
        RequestEcho: {
            encode(message: _82.RequestEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.RequestEcho;
            fromPartial(object: Partial<_82.RequestEcho>): _82.RequestEcho;
        };
        RequestFlush: {
            encode(_: _82.RequestFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.RequestFlush;
            fromPartial(_: Partial<_82.RequestFlush>): _82.RequestFlush;
        };
        RequestInfo: {
            encode(message: _82.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.RequestInfo;
            fromPartial(object: Partial<_82.RequestInfo>): _82.RequestInfo;
        };
        RequestSetOption: {
            encode(message: _82.RequestSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.RequestSetOption;
            fromPartial(object: Partial<_82.RequestSetOption>): _82.RequestSetOption;
        };
        RequestInitChain: {
            encode(message: _82.RequestInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.RequestInitChain;
            fromPartial(object: Partial<_82.RequestInitChain>): _82.RequestInitChain;
        };
        RequestQuery: {
            encode(message: _82.RequestQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.RequestQuery;
            fromPartial(object: Partial<_82.RequestQuery>): _82.RequestQuery;
        };
        RequestBeginBlock: {
            encode(message: _82.RequestBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.RequestBeginBlock;
            fromPartial(object: Partial<_82.RequestBeginBlock>): _82.RequestBeginBlock;
        };
        RequestCheckTx: {
            encode(message: _82.RequestCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.RequestCheckTx;
            fromPartial(object: Partial<_82.RequestCheckTx>): _82.RequestCheckTx;
        };
        RequestDeliverTx: {
            encode(message: _82.RequestDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.RequestDeliverTx;
            fromPartial(object: Partial<_82.RequestDeliverTx>): _82.RequestDeliverTx;
        };
        RequestEndBlock: {
            encode(message: _82.RequestEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.RequestEndBlock;
            fromPartial(object: Partial<_82.RequestEndBlock>): _82.RequestEndBlock;
        };
        RequestCommit: {
            encode(_: _82.RequestCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.RequestCommit;
            fromPartial(_: Partial<_82.RequestCommit>): _82.RequestCommit;
        };
        RequestListSnapshots: {
            encode(_: _82.RequestListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.RequestListSnapshots;
            fromPartial(_: Partial<_82.RequestListSnapshots>): _82.RequestListSnapshots;
        };
        RequestOfferSnapshot: {
            encode(message: _82.RequestOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.RequestOfferSnapshot;
            fromPartial(object: Partial<_82.RequestOfferSnapshot>): _82.RequestOfferSnapshot;
        };
        RequestLoadSnapshotChunk: {
            encode(message: _82.RequestLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.RequestLoadSnapshotChunk;
            fromPartial(object: Partial<_82.RequestLoadSnapshotChunk>): _82.RequestLoadSnapshotChunk;
        };
        RequestApplySnapshotChunk: {
            encode(message: _82.RequestApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.RequestApplySnapshotChunk;
            fromPartial(object: Partial<_82.RequestApplySnapshotChunk>): _82.RequestApplySnapshotChunk;
        };
        Response: {
            encode(message: _82.Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.Response;
            fromPartial(object: Partial<_82.Response>): _82.Response;
        };
        ResponseException: {
            encode(message: _82.ResponseException, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.ResponseException;
            fromPartial(object: Partial<_82.ResponseException>): _82.ResponseException;
        };
        ResponseEcho: {
            encode(message: _82.ResponseEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.ResponseEcho;
            fromPartial(object: Partial<_82.ResponseEcho>): _82.ResponseEcho;
        };
        ResponseFlush: {
            encode(_: _82.ResponseFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.ResponseFlush;
            fromPartial(_: Partial<_82.ResponseFlush>): _82.ResponseFlush;
        };
        ResponseInfo: {
            encode(message: _82.ResponseInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.ResponseInfo;
            fromPartial(object: Partial<_82.ResponseInfo>): _82.ResponseInfo;
        };
        ResponseSetOption: {
            encode(message: _82.ResponseSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.ResponseSetOption;
            fromPartial(object: Partial<_82.ResponseSetOption>): _82.ResponseSetOption;
        };
        ResponseInitChain: {
            encode(message: _82.ResponseInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.ResponseInitChain;
            fromPartial(object: Partial<_82.ResponseInitChain>): _82.ResponseInitChain;
        };
        ResponseQuery: {
            encode(message: _82.ResponseQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.ResponseQuery;
            fromPartial(object: Partial<_82.ResponseQuery>): _82.ResponseQuery;
        };
        ResponseBeginBlock: {
            encode(message: _82.ResponseBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.ResponseBeginBlock;
            fromPartial(object: Partial<_82.ResponseBeginBlock>): _82.ResponseBeginBlock;
        };
        ResponseCheckTx: {
            encode(message: _82.ResponseCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.ResponseCheckTx;
            fromPartial(object: Partial<_82.ResponseCheckTx>): _82.ResponseCheckTx;
        };
        ResponseDeliverTx: {
            encode(message: _82.ResponseDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.ResponseDeliverTx;
            fromPartial(object: Partial<_82.ResponseDeliverTx>): _82.ResponseDeliverTx;
        };
        ResponseEndBlock: {
            encode(message: _82.ResponseEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.ResponseEndBlock;
            fromPartial(object: Partial<_82.ResponseEndBlock>): _82.ResponseEndBlock;
        };
        ResponseCommit: {
            encode(message: _82.ResponseCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.ResponseCommit;
            fromPartial(object: Partial<_82.ResponseCommit>): _82.ResponseCommit;
        };
        ResponseListSnapshots: {
            encode(message: _82.ResponseListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.ResponseListSnapshots;
            fromPartial(object: Partial<_82.ResponseListSnapshots>): _82.ResponseListSnapshots;
        };
        ResponseOfferSnapshot: {
            encode(message: _82.ResponseOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.ResponseOfferSnapshot;
            fromPartial(object: Partial<_82.ResponseOfferSnapshot>): _82.ResponseOfferSnapshot;
        };
        ResponseLoadSnapshotChunk: {
            encode(message: _82.ResponseLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.ResponseLoadSnapshotChunk;
            fromPartial(object: Partial<_82.ResponseLoadSnapshotChunk>): _82.ResponseLoadSnapshotChunk;
        };
        ResponseApplySnapshotChunk: {
            encode(message: _82.ResponseApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.ResponseApplySnapshotChunk;
            fromPartial(object: Partial<_82.ResponseApplySnapshotChunk>): _82.ResponseApplySnapshotChunk;
        };
        ConsensusParams: {
            encode(message: _82.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.ConsensusParams;
            fromPartial(object: Partial<_82.ConsensusParams>): _82.ConsensusParams;
        };
        BlockParams: {
            encode(message: _82.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.BlockParams;
            fromPartial(object: Partial<_82.BlockParams>): _82.BlockParams;
        };
        LastCommitInfo: {
            encode(message: _82.LastCommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.LastCommitInfo;
            fromPartial(object: Partial<_82.LastCommitInfo>): _82.LastCommitInfo;
        };
        Event: {
            encode(message: _82.Event, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.Event;
            fromPartial(object: Partial<_82.Event>): _82.Event;
        };
        EventAttribute: {
            encode(message: _82.EventAttribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.EventAttribute;
            fromPartial(object: Partial<_82.EventAttribute>): _82.EventAttribute;
        };
        TxResult: {
            encode(message: _82.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.TxResult;
            fromPartial(object: Partial<_82.TxResult>): _82.TxResult;
        };
        Validator: {
            encode(message: _82.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.Validator;
            fromPartial(object: Partial<_82.Validator>): _82.Validator;
        };
        ValidatorUpdate: {
            encode(message: _82.ValidatorUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.ValidatorUpdate;
            fromPartial(object: Partial<_82.ValidatorUpdate>): _82.ValidatorUpdate;
        };
        VoteInfo: {
            encode(message: _82.VoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.VoteInfo;
            fromPartial(object: Partial<_82.VoteInfo>): _82.VoteInfo;
        };
        Evidence: {
            encode(message: _82.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.Evidence;
            fromPartial(object: Partial<_82.Evidence>): _82.Evidence;
        };
        Snapshot: {
            encode(message: _82.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.Snapshot;
            fromPartial(object: Partial<_82.Snapshot>): _82.Snapshot;
        };
    };
    const crypto: {
        Proof: {
            encode(message: _84.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.Proof;
            fromPartial(object: Partial<_84.Proof>): _84.Proof;
        };
        ValueOp: {
            encode(message: _84.ValueOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.ValueOp;
            fromPartial(object: Partial<_84.ValueOp>): _84.ValueOp;
        };
        DominoOp: {
            encode(message: _84.DominoOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.DominoOp;
            fromPartial(object: Partial<_84.DominoOp>): _84.DominoOp;
        };
        ProofOp: {
            encode(message: _84.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.ProofOp;
            fromPartial(object: Partial<_84.ProofOp>): _84.ProofOp;
        };
        ProofOps: {
            encode(message: _84.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.ProofOps;
            fromPartial(object: Partial<_84.ProofOps>): _84.ProofOps;
        };
        PublicKey: {
            encode(message: _83.PublicKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.PublicKey;
            fromPartial(object: Partial<_83.PublicKey>): _83.PublicKey;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                encode(message: _85.BitArray, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.BitArray;
                fromPartial(object: Partial<_85.BitArray>): _85.BitArray;
            };
        };
    }
    const p2p: {
        ProtocolVersion: {
            encode(message: _86.ProtocolVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.ProtocolVersion;
            fromPartial(object: Partial<_86.ProtocolVersion>): _86.ProtocolVersion;
        };
        NodeInfo: {
            encode(message: _86.NodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.NodeInfo;
            fromPartial(object: Partial<_86.NodeInfo>): _86.NodeInfo;
        };
        NodeInfoOther: {
            encode(message: _86.NodeInfoOther, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.NodeInfoOther;
            fromPartial(object: Partial<_86.NodeInfoOther>): _86.NodeInfoOther;
        };
        PeerInfo: {
            encode(message: _86.PeerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.PeerInfo;
            fromPartial(object: Partial<_86.PeerInfo>): _86.PeerInfo;
        };
        PeerAddressInfo: {
            encode(message: _86.PeerAddressInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.PeerAddressInfo;
            fromPartial(object: Partial<_86.PeerAddressInfo>): _86.PeerAddressInfo;
        };
    };
    const types: {
        ValidatorSet: {
            encode(message: _91.ValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.ValidatorSet;
            fromPartial(object: Partial<_91.ValidatorSet>): _91.ValidatorSet;
        };
        Validator: {
            encode(message: _91.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.Validator;
            fromPartial(object: Partial<_91.Validator>): _91.Validator;
        };
        SimpleValidator: {
            encode(message: _91.SimpleValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.SimpleValidator;
            fromPartial(object: Partial<_91.SimpleValidator>): _91.SimpleValidator;
        };
        blockIDFlagFromJSON(object: any): _90.BlockIDFlag;
        blockIDFlagToJSON(object: _90.BlockIDFlag): string;
        signedMsgTypeFromJSON(object: any): _90.SignedMsgType;
        signedMsgTypeToJSON(object: _90.SignedMsgType): string;
        BlockIDFlag: typeof _90.BlockIDFlag;
        BlockIDFlagSDKType: typeof _90.BlockIDFlagSDKType;
        SignedMsgType: typeof _90.SignedMsgType;
        SignedMsgTypeSDKType: typeof _90.SignedMsgTypeSDKType;
        PartSetHeader: {
            encode(message: _90.PartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.PartSetHeader;
            fromPartial(object: Partial<_90.PartSetHeader>): _90.PartSetHeader;
        };
        Part: {
            encode(message: _90.Part, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.Part;
            fromPartial(object: Partial<_90.Part>): _90.Part;
        };
        BlockID: {
            encode(message: _90.BlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.BlockID;
            fromPartial(object: Partial<_90.BlockID>): _90.BlockID;
        };
        Header: {
            encode(message: _90.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.Header;
            fromPartial(object: Partial<_90.Header>): _90.Header;
        };
        Data: {
            encode(message: _90.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.Data;
            fromPartial(object: Partial<_90.Data>): _90.Data;
        };
        Vote: {
            encode(message: _90.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.Vote;
            fromPartial(object: Partial<_90.Vote>): _90.Vote;
        };
        Commit: {
            encode(message: _90.Commit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.Commit;
            fromPartial(object: Partial<_90.Commit>): _90.Commit;
        };
        CommitSig: {
            encode(message: _90.CommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.CommitSig;
            fromPartial(object: Partial<_90.CommitSig>): _90.CommitSig;
        };
        Proposal: {
            encode(message: _90.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.Proposal;
            fromPartial(object: Partial<_90.Proposal>): _90.Proposal;
        };
        SignedHeader: {
            encode(message: _90.SignedHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.SignedHeader;
            fromPartial(object: Partial<_90.SignedHeader>): _90.SignedHeader;
        };
        LightBlock: {
            encode(message: _90.LightBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.LightBlock;
            fromPartial(object: Partial<_90.LightBlock>): _90.LightBlock;
        };
        BlockMeta: {
            encode(message: _90.BlockMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.BlockMeta;
            fromPartial(object: Partial<_90.BlockMeta>): _90.BlockMeta;
        };
        TxProof: {
            encode(message: _90.TxProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.TxProof;
            fromPartial(object: Partial<_90.TxProof>): _90.TxProof;
        };
        ConsensusParams: {
            encode(message: _89.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.ConsensusParams;
            fromPartial(object: Partial<_89.ConsensusParams>): _89.ConsensusParams;
        };
        BlockParams: {
            encode(message: _89.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.BlockParams;
            fromPartial(object: Partial<_89.BlockParams>): _89.BlockParams;
        };
        EvidenceParams: {
            encode(message: _89.EvidenceParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.EvidenceParams;
            fromPartial(object: Partial<_89.EvidenceParams>): _89.EvidenceParams;
        };
        ValidatorParams: {
            encode(message: _89.ValidatorParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.ValidatorParams;
            fromPartial(object: Partial<_89.ValidatorParams>): _89.ValidatorParams;
        };
        VersionParams: {
            encode(message: _89.VersionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.VersionParams;
            fromPartial(object: Partial<_89.VersionParams>): _89.VersionParams;
        };
        HashedParams: {
            encode(message: _89.HashedParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.HashedParams;
            fromPartial(object: Partial<_89.HashedParams>): _89.HashedParams;
        };
        Evidence: {
            encode(message: _88.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.Evidence;
            fromPartial(object: Partial<_88.Evidence>): _88.Evidence;
        };
        DuplicateVoteEvidence: {
            encode(message: _88.DuplicateVoteEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.DuplicateVoteEvidence;
            fromPartial(object: Partial<_88.DuplicateVoteEvidence>): _88.DuplicateVoteEvidence;
        };
        LightClientAttackEvidence: {
            encode(message: _88.LightClientAttackEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.LightClientAttackEvidence;
            fromPartial(object: Partial<_88.LightClientAttackEvidence>): _88.LightClientAttackEvidence;
        };
        EvidenceList: {
            encode(message: _88.EvidenceList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.EvidenceList;
            fromPartial(object: Partial<_88.EvidenceList>): _88.EvidenceList;
        };
        Block: {
            encode(message: _87.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.Block;
            fromPartial(object: Partial<_87.Block>): _87.Block;
        };
    };
    const version: {
        App: {
            encode(message: _92.App, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.App;
            fromPartial(object: Partial<_92.App>): _92.App;
        };
        Consensus: {
            encode(message: _92.Consensus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.Consensus;
            fromPartial(object: Partial<_92.Consensus>): _92.Consensus;
        };
    };
}
