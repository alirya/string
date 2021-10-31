import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
export default Alphanumeric;
declare namespace Alphanumeric {
    const Parameter: typeof AlphanumericParameter;
    const Object: typeof AlphanumericObject;
    type Argument<ValueType extends string, MessageType> = AlphanumericArgument<ValueType, MessageType>;
}
export declare function AlphanumericParameter(valid: boolean, value: string, subject?: string): string;
export declare type AlphanumericArgument = Validatable & Value<string> & {
    subject?: string;
};
export declare function AlphanumericObject({ valid, value, subject }: AlphanumericArgument): string;
