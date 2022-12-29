import * as _42 from "./protobuf/any";
import * as _43 from "./protobuf/descriptor";
import * as _44 from "./protobuf/duration";
import * as _45 from "./protobuf/empty";
import * as _46 from "./protobuf/timestamp";
export declare namespace google {
    const protobuf: {
        Timestamp: {
            encode(message: _46.Timestamp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.Timestamp;
            fromPartial(object: Partial<_46.Timestamp>): _46.Timestamp;
        };
        Empty: {
            encode(_: _45.Empty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.Empty;
            fromPartial(_: Partial<_45.Empty>): _45.Empty;
        };
        Duration: {
            encode(message: _44.Duration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.Duration;
            fromPartial(object: Partial<_44.Duration>): _44.Duration;
        };
        fieldDescriptorProto_TypeFromJSON(object: any): _43.FieldDescriptorProto_Type;
        fieldDescriptorProto_TypeToJSON(object: _43.FieldDescriptorProto_Type): string;
        fieldDescriptorProto_LabelFromJSON(object: any): _43.FieldDescriptorProto_Label;
        fieldDescriptorProto_LabelToJSON(object: _43.FieldDescriptorProto_Label): string;
        fileOptions_OptimizeModeFromJSON(object: any): _43.FileOptions_OptimizeMode;
        fileOptions_OptimizeModeToJSON(object: _43.FileOptions_OptimizeMode): string;
        fieldOptions_CTypeFromJSON(object: any): _43.FieldOptions_CType;
        fieldOptions_CTypeToJSON(object: _43.FieldOptions_CType): string;
        fieldOptions_JSTypeFromJSON(object: any): _43.FieldOptions_JSType;
        fieldOptions_JSTypeToJSON(object: _43.FieldOptions_JSType): string;
        methodOptions_IdempotencyLevelFromJSON(object: any): _43.MethodOptions_IdempotencyLevel;
        methodOptions_IdempotencyLevelToJSON(object: _43.MethodOptions_IdempotencyLevel): string;
        FieldDescriptorProto_Type: typeof _43.FieldDescriptorProto_Type;
        FieldDescriptorProto_TypeSDKType: typeof _43.FieldDescriptorProto_TypeSDKType;
        FieldDescriptorProto_Label: typeof _43.FieldDescriptorProto_Label;
        FieldDescriptorProto_LabelSDKType: typeof _43.FieldDescriptorProto_LabelSDKType;
        FileOptions_OptimizeMode: typeof _43.FileOptions_OptimizeMode;
        FileOptions_OptimizeModeSDKType: typeof _43.FileOptions_OptimizeModeSDKType;
        FieldOptions_CType: typeof _43.FieldOptions_CType;
        FieldOptions_CTypeSDKType: typeof _43.FieldOptions_CTypeSDKType;
        FieldOptions_JSType: typeof _43.FieldOptions_JSType;
        FieldOptions_JSTypeSDKType: typeof _43.FieldOptions_JSTypeSDKType;
        MethodOptions_IdempotencyLevel: typeof _43.MethodOptions_IdempotencyLevel;
        MethodOptions_IdempotencyLevelSDKType: typeof _43.MethodOptions_IdempotencyLevelSDKType;
        FileDescriptorSet: {
            encode(message: _43.FileDescriptorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.FileDescriptorSet;
            fromPartial(object: Partial<_43.FileDescriptorSet>): _43.FileDescriptorSet;
        };
        FileDescriptorProto: {
            encode(message: _43.FileDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.FileDescriptorProto;
            fromPartial(object: Partial<_43.FileDescriptorProto>): _43.FileDescriptorProto;
        };
        DescriptorProto: {
            encode(message: _43.DescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.DescriptorProto;
            fromPartial(object: Partial<_43.DescriptorProto>): _43.DescriptorProto;
        };
        DescriptorProto_ExtensionRange: {
            encode(message: _43.DescriptorProto_ExtensionRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.DescriptorProto_ExtensionRange;
            fromPartial(object: Partial<_43.DescriptorProto_ExtensionRange>): _43.DescriptorProto_ExtensionRange;
        };
        DescriptorProto_ReservedRange: {
            encode(message: _43.DescriptorProto_ReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.DescriptorProto_ReservedRange;
            fromPartial(object: Partial<_43.DescriptorProto_ReservedRange>): _43.DescriptorProto_ReservedRange;
        };
        ExtensionRangeOptions: {
            encode(message: _43.ExtensionRangeOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.ExtensionRangeOptions;
            fromPartial(object: Partial<_43.ExtensionRangeOptions>): _43.ExtensionRangeOptions;
        };
        FieldDescriptorProto: {
            encode(message: _43.FieldDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.FieldDescriptorProto;
            fromPartial(object: Partial<_43.FieldDescriptorProto>): _43.FieldDescriptorProto;
        };
        OneofDescriptorProto: {
            encode(message: _43.OneofDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.OneofDescriptorProto;
            fromPartial(object: Partial<_43.OneofDescriptorProto>): _43.OneofDescriptorProto;
        };
        EnumDescriptorProto: {
            encode(message: _43.EnumDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.EnumDescriptorProto;
            fromPartial(object: Partial<_43.EnumDescriptorProto>): _43.EnumDescriptorProto;
        };
        EnumDescriptorProto_EnumReservedRange: {
            encode(message: _43.EnumDescriptorProto_EnumReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.EnumDescriptorProto_EnumReservedRange;
            fromPartial(object: Partial<_43.EnumDescriptorProto_EnumReservedRange>): _43.EnumDescriptorProto_EnumReservedRange;
        };
        EnumValueDescriptorProto: {
            encode(message: _43.EnumValueDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.EnumValueDescriptorProto;
            fromPartial(object: Partial<_43.EnumValueDescriptorProto>): _43.EnumValueDescriptorProto;
        };
        ServiceDescriptorProto: {
            encode(message: _43.ServiceDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.ServiceDescriptorProto;
            fromPartial(object: Partial<_43.ServiceDescriptorProto>): _43.ServiceDescriptorProto;
        };
        MethodDescriptorProto: {
            encode(message: _43.MethodDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.MethodDescriptorProto;
            fromPartial(object: Partial<_43.MethodDescriptorProto>): _43.MethodDescriptorProto;
        };
        FileOptions: {
            encode(message: _43.FileOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.FileOptions;
            fromPartial(object: Partial<_43.FileOptions>): _43.FileOptions;
        };
        MessageOptions: {
            encode(message: _43.MessageOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.MessageOptions;
            fromPartial(object: Partial<_43.MessageOptions>): _43.MessageOptions;
        };
        FieldOptions: {
            encode(message: _43.FieldOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.FieldOptions;
            fromPartial(object: Partial<_43.FieldOptions>): _43.FieldOptions;
        };
        OneofOptions: {
            encode(message: _43.OneofOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.OneofOptions;
            fromPartial(object: Partial<_43.OneofOptions>): _43.OneofOptions;
        };
        EnumOptions: {
            encode(message: _43.EnumOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.EnumOptions;
            fromPartial(object: Partial<_43.EnumOptions>): _43.EnumOptions;
        };
        EnumValueOptions: {
            encode(message: _43.EnumValueOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.EnumValueOptions;
            fromPartial(object: Partial<_43.EnumValueOptions>): _43.EnumValueOptions;
        };
        ServiceOptions: {
            encode(message: _43.ServiceOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.ServiceOptions;
            fromPartial(object: Partial<_43.ServiceOptions>): _43.ServiceOptions;
        };
        MethodOptions: {
            encode(message: _43.MethodOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.MethodOptions;
            fromPartial(object: Partial<_43.MethodOptions>): _43.MethodOptions;
        };
        UninterpretedOption: {
            encode(message: _43.UninterpretedOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.UninterpretedOption;
            fromPartial(object: Partial<_43.UninterpretedOption>): _43.UninterpretedOption;
        };
        UninterpretedOption_NamePart: {
            encode(message: _43.UninterpretedOption_NamePart, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.UninterpretedOption_NamePart;
            fromPartial(object: Partial<_43.UninterpretedOption_NamePart>): _43.UninterpretedOption_NamePart;
        };
        SourceCodeInfo: {
            encode(message: _43.SourceCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.SourceCodeInfo;
            fromPartial(object: Partial<_43.SourceCodeInfo>): _43.SourceCodeInfo;
        };
        SourceCodeInfo_Location: {
            encode(message: _43.SourceCodeInfo_Location, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.SourceCodeInfo_Location;
            fromPartial(object: Partial<_43.SourceCodeInfo_Location>): _43.SourceCodeInfo_Location;
        };
        GeneratedCodeInfo: {
            encode(message: _43.GeneratedCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.GeneratedCodeInfo;
            fromPartial(object: Partial<_43.GeneratedCodeInfo>): _43.GeneratedCodeInfo;
        };
        GeneratedCodeInfo_Annotation: {
            encode(message: _43.GeneratedCodeInfo_Annotation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.GeneratedCodeInfo_Annotation;
            fromPartial(object: Partial<_43.GeneratedCodeInfo_Annotation>): _43.GeneratedCodeInfo_Annotation;
        };
        Any: {
            encode(message: _42.Any, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.Any;
            fromPartial(object: Partial<_42.Any>): _42.Any;
        };
    };
}
