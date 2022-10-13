import * as _48 from "./abci/types";
import * as _49 from "./crypto/keys";
import * as _50 from "./crypto/proof";
import * as _51 from "./libs/bits/types";
import * as _52 from "./p2p/types";
import * as _53 from "./types/block";
import * as _54 from "./types/evidence";
import * as _55 from "./types/params";
import * as _56 from "./types/types";
import * as _57 from "./types/validator";
import * as _58 from "./version/types";
export declare namespace tendermint {
    const abci: {
        checkTxTypeFromJSON(object: any): _48.CheckTxType;
        checkTxTypeToJSON(object: _48.CheckTxType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _48.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _48.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _48.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _48.ResponseApplySnapshotChunk_Result): string;
        evidenceTypeFromJSON(object: any): _48.EvidenceType;
        evidenceTypeToJSON(object: _48.EvidenceType): string;
        CheckTxType: typeof _48.CheckTxType;
        CheckTxTypeSDKType: typeof _48.CheckTxTypeSDKType;
        ResponseOfferSnapshot_Result: typeof _48.ResponseOfferSnapshot_Result;
        ResponseOfferSnapshot_ResultSDKType: typeof _48.ResponseOfferSnapshot_ResultSDKType;
        ResponseApplySnapshotChunk_Result: typeof _48.ResponseApplySnapshotChunk_Result;
        ResponseApplySnapshotChunk_ResultSDKType: typeof _48.ResponseApplySnapshotChunk_ResultSDKType;
        EvidenceType: typeof _48.EvidenceType;
        EvidenceTypeSDKType: typeof _48.EvidenceTypeSDKType;
        Request: {
            encode(message: _48.Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.Request;
            fromPartial(object: Partial<_48.Request>): _48.Request;
        };
        RequestEcho: {
            encode(message: _48.RequestEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.RequestEcho;
            fromPartial(object: Partial<_48.RequestEcho>): _48.RequestEcho;
        };
        RequestFlush: {
            encode(_: _48.RequestFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.RequestFlush;
            fromPartial(_: Partial<_48.RequestFlush>): _48.RequestFlush;
        };
        RequestInfo: {
            encode(message: _48.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.RequestInfo;
            fromPartial(object: Partial<_48.RequestInfo>): _48.RequestInfo;
        };
        RequestSetOption: {
            encode(message: _48.RequestSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.RequestSetOption;
            fromPartial(object: Partial<_48.RequestSetOption>): _48.RequestSetOption;
        };
        RequestInitChain: {
            encode(message: _48.RequestInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.RequestInitChain;
            fromPartial(object: Partial<_48.RequestInitChain>): _48.RequestInitChain;
        };
        RequestQuery: {
            encode(message: _48.RequestQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.RequestQuery;
            fromPartial(object: Partial<_48.RequestQuery>): _48.RequestQuery;
        };
        RequestBeginBlock: {
            encode(message: _48.RequestBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.RequestBeginBlock;
            fromPartial(object: Partial<_48.RequestBeginBlock>): _48.RequestBeginBlock;
        };
        RequestCheckTx: {
            encode(message: _48.RequestCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.RequestCheckTx;
            fromPartial(object: Partial<_48.RequestCheckTx>): _48.RequestCheckTx;
        };
        RequestDeliverTx: {
            encode(message: _48.RequestDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.RequestDeliverTx;
            fromPartial(object: Partial<_48.RequestDeliverTx>): _48.RequestDeliverTx;
        };
        RequestEndBlock: {
            encode(message: _48.RequestEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.RequestEndBlock;
            fromPartial(object: Partial<_48.RequestEndBlock>): _48.RequestEndBlock;
        };
        RequestCommit: {
            encode(_: _48.RequestCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.RequestCommit;
            fromPartial(_: Partial<_48.RequestCommit>): _48.RequestCommit;
        };
        RequestListSnapshots: {
            encode(_: _48.RequestListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.RequestListSnapshots;
            fromPartial(_: Partial<_48.RequestListSnapshots>): _48.RequestListSnapshots;
        };
        RequestOfferSnapshot: {
            encode(message: _48.RequestOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.RequestOfferSnapshot;
            fromPartial(object: Partial<_48.RequestOfferSnapshot>): _48.RequestOfferSnapshot;
        };
        RequestLoadSnapshotChunk: {
            encode(message: _48.RequestLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.RequestLoadSnapshotChunk;
            fromPartial(object: Partial<_48.RequestLoadSnapshotChunk>): _48.RequestLoadSnapshotChunk;
        };
        RequestApplySnapshotChunk: {
            encode(message: _48.RequestApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.RequestApplySnapshotChunk;
            fromPartial(object: Partial<_48.RequestApplySnapshotChunk>): _48.RequestApplySnapshotChunk;
        };
        Response: {
            encode(message: _48.Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.Response;
            fromPartial(object: Partial<_48.Response>): _48.Response;
        };
        ResponseException: {
            encode(message: _48.ResponseException, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.ResponseException;
            fromPartial(object: Partial<_48.ResponseException>): _48.ResponseException;
        };
        ResponseEcho: {
            encode(message: _48.ResponseEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.ResponseEcho;
            fromPartial(object: Partial<_48.ResponseEcho>): _48.ResponseEcho;
        };
        ResponseFlush: {
            encode(_: _48.ResponseFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.ResponseFlush;
            fromPartial(_: Partial<_48.ResponseFlush>): _48.ResponseFlush;
        };
        ResponseInfo: {
            encode(message: _48.ResponseInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.ResponseInfo;
            fromPartial(object: Partial<_48.ResponseInfo>): _48.ResponseInfo;
        };
        ResponseSetOption: {
            encode(message: _48.ResponseSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.ResponseSetOption;
            fromPartial(object: Partial<_48.ResponseSetOption>): _48.ResponseSetOption;
        };
        ResponseInitChain: {
            encode(message: _48.ResponseInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.ResponseInitChain;
            fromPartial(object: Partial<_48.ResponseInitChain>): _48.ResponseInitChain;
        };
        ResponseQuery: {
            encode(message: _48.ResponseQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.ResponseQuery;
            fromPartial(object: Partial<_48.ResponseQuery>): _48.ResponseQuery;
        };
        ResponseBeginBlock: {
            encode(message: _48.ResponseBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.ResponseBeginBlock;
            fromPartial(object: Partial<_48.ResponseBeginBlock>): _48.ResponseBeginBlock;
        };
        ResponseCheckTx: {
            encode(message: _48.ResponseCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.ResponseCheckTx;
            fromPartial(object: Partial<_48.ResponseCheckTx>): _48.ResponseCheckTx;
        };
        ResponseDeliverTx: {
            encode(message: _48.ResponseDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.ResponseDeliverTx;
            fromPartial(object: Partial<_48.ResponseDeliverTx>): _48.ResponseDeliverTx;
        };
        ResponseEndBlock: {
            encode(message: _48.ResponseEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.ResponseEndBlock;
            fromPartial(object: Partial<_48.ResponseEndBlock>): _48.ResponseEndBlock;
        };
        ResponseCommit: {
            encode(message: _48.ResponseCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.ResponseCommit;
            fromPartial(object: Partial<_48.ResponseCommit>): _48.ResponseCommit;
        };
        ResponseListSnapshots: {
            encode(message: _48.ResponseListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.ResponseListSnapshots;
            fromPartial(object: Partial<_48.ResponseListSnapshots>): _48.ResponseListSnapshots;
        };
        ResponseOfferSnapshot: {
            encode(message: _48.ResponseOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.ResponseOfferSnapshot;
            fromPartial(object: Partial<_48.ResponseOfferSnapshot>): _48.ResponseOfferSnapshot;
        };
        ResponseLoadSnapshotChunk: {
            encode(message: _48.ResponseLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.ResponseLoadSnapshotChunk;
            fromPartial(object: Partial<_48.ResponseLoadSnapshotChunk>): _48.ResponseLoadSnapshotChunk;
        };
        ResponseApplySnapshotChunk: {
            encode(message: _48.ResponseApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.ResponseApplySnapshotChunk;
            fromPartial(object: Partial<_48.ResponseApplySnapshotChunk>): _48.ResponseApplySnapshotChunk;
        };
        ConsensusParams: {
            encode(message: _48.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.ConsensusParams;
            fromPartial(object: Partial<_48.ConsensusParams>): _48.ConsensusParams;
        };
        BlockParams: {
            encode(message: _48.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.BlockParams;
            fromPartial(object: Partial<_48.BlockParams>): _48.BlockParams;
        };
        LastCommitInfo: {
            encode(message: _48.LastCommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.LastCommitInfo;
            fromPartial(object: Partial<_48.LastCommitInfo>): _48.LastCommitInfo;
        };
        Event: {
            encode(message: _48.Event, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.Event;
            fromPartial(object: Partial<_48.Event>): _48.Event;
        };
        EventAttribute: {
            encode(message: _48.EventAttribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.EventAttribute;
            fromPartial(object: Partial<_48.EventAttribute>): _48.EventAttribute;
        };
        TxResult: {
            encode(message: _48.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.TxResult;
            fromPartial(object: Partial<_48.TxResult>): _48.TxResult;
        };
        Validator: {
            encode(message: _48.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.Validator;
            fromPartial(object: Partial<_48.Validator>): _48.Validator;
        };
        ValidatorUpdate: {
            encode(message: _48.ValidatorUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.ValidatorUpdate;
            fromPartial(object: Partial<_48.ValidatorUpdate>): _48.ValidatorUpdate;
        };
        VoteInfo: {
            encode(message: _48.VoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.VoteInfo;
            fromPartial(object: Partial<_48.VoteInfo>): _48.VoteInfo;
        };
        Evidence: {
            encode(message: _48.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.Evidence;
            fromPartial(object: Partial<_48.Evidence>): _48.Evidence;
        };
        Snapshot: {
            encode(message: _48.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.Snapshot;
            fromPartial(object: Partial<_48.Snapshot>): _48.Snapshot;
        };
    };
    const crypto: {
        Proof: {
            encode(message: _50.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.Proof;
            fromPartial(object: Partial<_50.Proof>): _50.Proof;
        };
        ValueOp: {
            encode(message: _50.ValueOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.ValueOp;
            fromPartial(object: Partial<_50.ValueOp>): _50.ValueOp;
        };
        DominoOp: {
            encode(message: _50.DominoOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.DominoOp;
            fromPartial(object: Partial<_50.DominoOp>): _50.DominoOp;
        };
        ProofOp: {
            encode(message: _50.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.ProofOp;
            fromPartial(object: Partial<_50.ProofOp>): _50.ProofOp;
        };
        ProofOps: {
            encode(message: _50.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.ProofOps;
            fromPartial(object: Partial<_50.ProofOps>): _50.ProofOps;
        };
        PublicKey: {
            encode(message: _49.PublicKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.PublicKey;
            fromPartial(object: Partial<_49.PublicKey>): _49.PublicKey;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                encode(message: _51.BitArray, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.BitArray;
                fromPartial(object: Partial<_51.BitArray>): _51.BitArray;
            };
        };
    }
    const p2p: {
        ProtocolVersion: {
            encode(message: _52.ProtocolVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.ProtocolVersion;
            fromPartial(object: Partial<_52.ProtocolVersion>): _52.ProtocolVersion;
        };
        NodeInfo: {
            encode(message: _52.NodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.NodeInfo;
            fromPartial(object: Partial<_52.NodeInfo>): _52.NodeInfo;
        };
        NodeInfoOther: {
            encode(message: _52.NodeInfoOther, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.NodeInfoOther;
            fromPartial(object: Partial<_52.NodeInfoOther>): _52.NodeInfoOther;
        };
        PeerInfo: {
            encode(message: _52.PeerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.PeerInfo;
            fromPartial(object: Partial<_52.PeerInfo>): _52.PeerInfo;
        };
        PeerAddressInfo: {
            encode(message: _52.PeerAddressInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.PeerAddressInfo;
            fromPartial(object: Partial<_52.PeerAddressInfo>): _52.PeerAddressInfo;
        };
    };
    const types: {
        ValidatorSet: {
            encode(message: _57.ValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.ValidatorSet;
            fromPartial(object: Partial<_57.ValidatorSet>): _57.ValidatorSet;
        };
        Validator: {
            encode(message: _57.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.Validator;
            fromPartial(object: Partial<_57.Validator>): _57.Validator;
        };
        SimpleValidator: {
            encode(message: _57.SimpleValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.SimpleValidator;
            fromPartial(object: Partial<_57.SimpleValidator>): _57.SimpleValidator;
        };
        blockIDFlagFromJSON(object: any): _56.BlockIDFlag;
        blockIDFlagToJSON(object: _56.BlockIDFlag): string;
        signedMsgTypeFromJSON(object: any): _56.SignedMsgType;
        signedMsgTypeToJSON(object: _56.SignedMsgType): string;
        BlockIDFlag: typeof _56.BlockIDFlag;
        BlockIDFlagSDKType: typeof _56.BlockIDFlagSDKType;
        SignedMsgType: typeof _56.SignedMsgType;
        SignedMsgTypeSDKType: typeof _56.SignedMsgTypeSDKType;
        PartSetHeader: {
            encode(message: _56.PartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.PartSetHeader;
            fromPartial(object: Partial<_56.PartSetHeader>): _56.PartSetHeader;
        };
        Part: {
            encode(message: _56.Part, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.Part;
            fromPartial(object: Partial<_56.Part>): _56.Part;
        };
        BlockID: {
            encode(message: _56.BlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.BlockID;
            fromPartial(object: Partial<_56.BlockID>): _56.BlockID;
        };
        Header: {
            encode(message: _56.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.Header;
            fromPartial(object: Partial<_56.Header>): _56.Header;
        };
        Data: {
            encode(message: _56.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.Data;
            fromPartial(object: Partial<_56.Data>): _56.Data;
        };
        Vote: {
            encode(message: _56.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.Vote;
            fromPartial(object: Partial<_56.Vote>): _56.Vote;
        };
        Commit: {
            encode(message: _56.Commit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.Commit;
            fromPartial(object: Partial<_56.Commit>): _56.Commit;
        };
        CommitSig: {
            encode(message: _56.CommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.CommitSig;
            fromPartial(object: Partial<_56.CommitSig>): _56.CommitSig;
        };
        Proposal: {
            encode(message: _56.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.Proposal;
            fromPartial(object: Partial<_56.Proposal>): _56.Proposal;
        };
        SignedHeader: {
            encode(message: _56.SignedHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.SignedHeader;
            fromPartial(object: Partial<_56.SignedHeader>): _56.SignedHeader;
        };
        LightBlock: {
            encode(message: _56.LightBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.LightBlock;
            fromPartial(object: Partial<_56.LightBlock>): _56.LightBlock;
        };
        BlockMeta: {
            encode(message: _56.BlockMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.BlockMeta;
            fromPartial(object: Partial<_56.BlockMeta>): _56.BlockMeta;
        };
        TxProof: {
            encode(message: _56.TxProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.TxProof;
            fromPartial(object: Partial<_56.TxProof>): _56.TxProof;
        };
        ConsensusParams: {
            encode(message: _55.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.ConsensusParams;
            fromPartial(object: Partial<_55.ConsensusParams>): _55.ConsensusParams;
        };
        BlockParams: {
            encode(message: _55.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.BlockParams;
            fromPartial(object: Partial<_55.BlockParams>): _55.BlockParams;
        };
        EvidenceParams: {
            encode(message: _55.EvidenceParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.EvidenceParams;
            fromPartial(object: Partial<_55.EvidenceParams>): _55.EvidenceParams;
        };
        ValidatorParams: {
            encode(message: _55.ValidatorParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.ValidatorParams;
            fromPartial(object: Partial<_55.ValidatorParams>): _55.ValidatorParams;
        };
        VersionParams: {
            encode(message: _55.VersionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.VersionParams;
            fromPartial(object: Partial<_55.VersionParams>): _55.VersionParams;
        };
        HashedParams: {
            encode(message: _55.HashedParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.HashedParams;
            fromPartial(object: Partial<_55.HashedParams>): _55.HashedParams;
        };
        Evidence: {
            encode(message: _54.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.Evidence;
            fromPartial(object: Partial<_54.Evidence>): _54.Evidence;
        };
        DuplicateVoteEvidence: {
            encode(message: _54.DuplicateVoteEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.DuplicateVoteEvidence;
            fromPartial(object: Partial<_54.DuplicateVoteEvidence>): _54.DuplicateVoteEvidence;
        };
        LightClientAttackEvidence: {
            encode(message: _54.LightClientAttackEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.LightClientAttackEvidence;
            fromPartial(object: Partial<_54.LightClientAttackEvidence>): _54.LightClientAttackEvidence;
        };
        EvidenceList: {
            encode(message: _54.EvidenceList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.EvidenceList;
            fromPartial(object: Partial<_54.EvidenceList>): _54.EvidenceList;
        };
        Block: {
            encode(message: _53.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.Block;
            fromPartial(object: Partial<_53.Block>): _53.Block;
        };
    };
    const version: {
        App: {
            encode(message: _58.App, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.App;
            fromPartial(object: Partial<_58.App>): _58.App;
        };
        Consensus: {
            encode(message: _58.Consensus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.Consensus;
            fromPartial(object: Partial<_58.Consensus>): _58.Consensus;
        };
    };
}
