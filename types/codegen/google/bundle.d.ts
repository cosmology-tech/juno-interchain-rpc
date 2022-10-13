import * as _40 from "./protobuf/any";
import * as _41 from "./protobuf/descriptor";
import * as _42 from "./protobuf/duration";
import * as _43 from "./protobuf/empty";
import * as _44 from "./protobuf/timestamp";
export declare namespace google {
    const protobuf: {
        Timestamp: {
            encode(message: _44.Timestamp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.Timestamp;
            fromPartial(object: Partial<_44.Timestamp>): _44.Timestamp;
        };
        Empty: {
            encode(_: _43.Empty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.Empty;
            fromPartial(_: Partial<_43.Empty>): _43.Empty;
        };
        Duration: {
            encode(message: _42.Duration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.Duration;
            fromPartial(object: Partial<_42.Duration>): _42.Duration;
        };
        fieldDescriptorProto_TypeFromJSON(object: any): _41.FieldDescriptorProto_Type;
        fieldDescriptorProto_TypeToJSON(object: _41.FieldDescriptorProto_Type): string;
        fieldDescriptorProto_LabelFromJSON(object: any): _41.FieldDescriptorProto_Label;
        fieldDescriptorProto_LabelToJSON(object: _41.FieldDescriptorProto_Label): string;
        fileOptions_OptimizeModeFromJSON(object: any): _41.FileOptions_OptimizeMode;
        fileOptions_OptimizeModeToJSON(object: _41.FileOptions_OptimizeMode): string;
        fieldOptions_CTypeFromJSON(object: any): _41.FieldOptions_CType;
        fieldOptions_CTypeToJSON(object: _41.FieldOptions_CType): string;
        fieldOptions_JSTypeFromJSON(object: any): _41.FieldOptions_JSType;
        fieldOptions_JSTypeToJSON(object: _41.FieldOptions_JSType): string;
        methodOptions_IdempotencyLevelFromJSON(object: any): _41.MethodOptions_IdempotencyLevel;
        methodOptions_IdempotencyLevelToJSON(object: _41.MethodOptions_IdempotencyLevel): string;
        FieldDescriptorProto_Type: typeof _41.FieldDescriptorProto_Type;
        FieldDescriptorProto_TypeSDKType: typeof _41.FieldDescriptorProto_TypeSDKType;
        FieldDescriptorProto_Label: typeof _41.FieldDescriptorProto_Label;
        FieldDescriptorProto_LabelSDKType: typeof _41.FieldDescriptorProto_LabelSDKType;
        FileOptions_OptimizeMode: typeof _41.FileOptions_OptimizeMode;
        FileOptions_OptimizeModeSDKType: typeof _41.FileOptions_OptimizeModeSDKType;
        FieldOptions_CType: typeof _41.FieldOptions_CType;
        FieldOptions_CTypeSDKType: typeof _41.FieldOptions_CTypeSDKType;
        FieldOptions_JSType: typeof _41.FieldOptions_JSType;
        FieldOptions_JSTypeSDKType: typeof _41.FieldOptions_JSTypeSDKType;
        MethodOptions_IdempotencyLevel: typeof _41.MethodOptions_IdempotencyLevel;
        MethodOptions_IdempotencyLevelSDKType: typeof _41.MethodOptions_IdempotencyLevelSDKType;
        FileDescriptorSet: {
            encode(message: _41.FileDescriptorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.FileDescriptorSet;
            fromPartial(object: Partial<_41.FileDescriptorSet>): _41.FileDescriptorSet;
        };
        FileDescriptorProto: {
            encode(message: _41.FileDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.FileDescriptorProto;
            fromPartial(object: Partial<_41.FileDescriptorProto>): _41.FileDescriptorProto;
        };
        DescriptorProto: {
            encode(message: _41.DescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.DescriptorProto;
            fromPartial(object: Partial<_41.DescriptorProto>): _41.DescriptorProto;
        };
        DescriptorProto_ExtensionRange: {
            encode(message: _41.DescriptorProto_ExtensionRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.DescriptorProto_ExtensionRange;
            fromPartial(object: Partial<_41.DescriptorProto_ExtensionRange>): _41.DescriptorProto_ExtensionRange;
        };
        DescriptorProto_ReservedRange: {
            encode(message: _41.DescriptorProto_ReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.DescriptorProto_ReservedRange;
            fromPartial(object: Partial<_41.DescriptorProto_ReservedRange>): _41.DescriptorProto_ReservedRange;
        };
        ExtensionRangeOptions: {
            encode(message: _41.ExtensionRangeOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.ExtensionRangeOptions;
            fromPartial(object: Partial<_41.ExtensionRangeOptions>): _41.ExtensionRangeOptions;
        };
        FieldDescriptorProto: {
            encode(message: _41.FieldDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.FieldDescriptorProto;
            fromPartial(object: Partial<_41.FieldDescriptorProto>): _41.FieldDescriptorProto;
        };
        OneofDescriptorProto: {
            encode(message: _41.OneofDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.OneofDescriptorProto;
            fromPartial(object: Partial<_41.OneofDescriptorProto>): _41.OneofDescriptorProto;
        };
        EnumDescriptorProto: {
            encode(message: _41.EnumDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.EnumDescriptorProto;
            fromPartial(object: Partial<_41.EnumDescriptorProto>): _41.EnumDescriptorProto;
        };
        EnumDescriptorProto_EnumReservedRange: {
            encode(message: _41.EnumDescriptorProto_EnumReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.EnumDescriptorProto_EnumReservedRange;
            fromPartial(object: Partial<_41.EnumDescriptorProto_EnumReservedRange>): _41.EnumDescriptorProto_EnumReservedRange;
        };
        EnumValueDescriptorProto: {
            encode(message: _41.EnumValueDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.EnumValueDescriptorProto;
            fromPartial(object: Partial<_41.EnumValueDescriptorProto>): _41.EnumValueDescriptorProto;
        };
        ServiceDescriptorProto: {
            encode(message: _41.ServiceDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.ServiceDescriptorProto;
            fromPartial(object: Partial<_41.ServiceDescriptorProto>): _41.ServiceDescriptorProto;
        };
        MethodDescriptorProto: {
            encode(message: _41.MethodDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.MethodDescriptorProto;
            fromPartial(object: Partial<_41.MethodDescriptorProto>): _41.MethodDescriptorProto;
        };
        FileOptions: {
            encode(message: _41.FileOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.FileOptions;
            fromPartial(object: Partial<_41.FileOptions>): _41.FileOptions;
        };
        MessageOptions: {
            encode(message: _41.MessageOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.MessageOptions;
            fromPartial(object: Partial<_41.MessageOptions>): _41.MessageOptions;
        };
        FieldOptions: {
            encode(message: _41.FieldOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.FieldOptions;
            fromPartial(object: Partial<_41.FieldOptions>): _41.FieldOptions;
        };
        OneofOptions: {
            encode(message: _41.OneofOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.OneofOptions;
            fromPartial(object: Partial<_41.OneofOptions>): _41.OneofOptions;
        };
        EnumOptions: {
            encode(message: _41.EnumOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.EnumOptions;
            fromPartial(object: Partial<_41.EnumOptions>): _41.EnumOptions;
        };
        EnumValueOptions: {
            encode(message: _41.EnumValueOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.EnumValueOptions;
            fromPartial(object: Partial<_41.EnumValueOptions>): _41.EnumValueOptions;
        };
        ServiceOptions: {
            encode(message: _41.ServiceOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.ServiceOptions;
            fromPartial(object: Partial<_41.ServiceOptions>): _41.ServiceOptions;
        };
        MethodOptions: {
            encode(message: _41.MethodOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.MethodOptions;
            fromPartial(object: Partial<_41.MethodOptions>): _41.MethodOptions;
        };
        UninterpretedOption: {
            encode(message: _41.UninterpretedOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.UninterpretedOption;
            fromPartial(object: Partial<_41.UninterpretedOption>): _41.UninterpretedOption;
        };
        UninterpretedOption_NamePart: {
            encode(message: _41.UninterpretedOption_NamePart, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.UninterpretedOption_NamePart;
            fromPartial(object: Partial<_41.UninterpretedOption_NamePart>): _41.UninterpretedOption_NamePart;
        };
        SourceCodeInfo: {
            encode(message: _41.SourceCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.SourceCodeInfo;
            fromPartial(object: Partial<_41.SourceCodeInfo>): _41.SourceCodeInfo;
        };
        SourceCodeInfo_Location: {
            encode(message: _41.SourceCodeInfo_Location, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.SourceCodeInfo_Location;
            fromPartial(object: Partial<_41.SourceCodeInfo_Location>): _41.SourceCodeInfo_Location;
        };
        GeneratedCodeInfo: {
            encode(message: _41.GeneratedCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.GeneratedCodeInfo;
            fromPartial(object: Partial<_41.GeneratedCodeInfo>): _41.GeneratedCodeInfo;
        };
        GeneratedCodeInfo_Annotation: {
            encode(message: _41.GeneratedCodeInfo_Annotation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.GeneratedCodeInfo_Annotation;
            fromPartial(object: Partial<_41.GeneratedCodeInfo_Annotation>): _41.GeneratedCodeInfo_Annotation;
        };
        Any: {
            encode(message: _40.Any, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.Any;
            fromPartial(object: Partial<_40.Any>): _40.Any;
        };
    };
}
