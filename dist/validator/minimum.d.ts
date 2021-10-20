import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import { Return } from "../validatable/minimum";
import Inclusive from "@dikac/t-number/inclusive/inclusive";
import MinimumNumber from "@dikac/t-number/minimum/minimum";
import StrictOmit from "@dikac/t-object/strict-omit";
export declare type Argument<MessageType> = MinimumNumber & Inclusive & Validatable & {
    converter?: (value: string) => number;
} & Message<(result: Readonly<Value<string> & Inclusive & MinimumNumber & Validatable>) => MessageType>;
export default function Minimum({ minimum, inclusive, converter }: StrictOmit<Argument<any>, 'message'>): Validator<string, string, boolean, boolean, Return<string, string>>;
export default function Minimum<MessageType>({ minimum, inclusive, message, converter }: Argument<MessageType>): Validator<string, string, boolean, boolean, Return<string, MessageType>>;
