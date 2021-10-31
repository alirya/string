import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Pattern from "../pattern/pattern/pattern";
import { MatchArgument } from "./alphanumeric";
export default Match;
declare namespace Match {
    const Parameter: typeof import("./match").MatchParameter;
    const Object: typeof import("./match").MatchObject;
    type Argument<ValueType extends string, MessageType> = MatchArgument<ValueType, MessageType>;
}
export declare function MatchParameter<ValueType extends string, MessageType>(value: ValueType, pattern: RegExp, message: (result: Readonly<Value<ValueType> & Validatable>) => MessageType): any;
export declare type MatchArgument<ValueType, MessageType> = Message<(result: Readonly<Value<ValueType> & Validatable>) => MessageType> & Value<ValueType> & Pattern;
export declare function MatchObject<ValueType extends string, MessageType>({ value, // : ValueType,
pattern, // : RegExp,
message, }: MatchArgument<ValueType, MessageType>): any;
