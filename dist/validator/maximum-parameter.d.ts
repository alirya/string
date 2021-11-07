import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import MaximumValidatable from "../validatable/maximum";
import Inclusive from "@dikac/t-number/inclusive/inclusive";
import MaximumNumber from "@dikac/t-number/maximum/maximum";
import StrictOmit from "@dikac/t-object/strict-omit";
import { Object } from "ts-toolbelt";
export declare type MaximumParameterArgument<MessageType> = MaximumNumber & Inclusive & Validatable & {
    converter?: (value: string) => number;
} & Partial<Message<(result: Readonly<Value<string> & Inclusive & MaximumNumber & Validatable>) => MessageType>>;
export default function MaximumParameter({ maximum, inclusive, }: StrictOmit<MaximumParameterArgument<unknown>, 'message' | 'converter'>): Validator<string, string, boolean, boolean, MaximumValidatable.Type<string, string>>;
export default function MaximumParameter({ maximum, inclusive, converter, }: Object.Required<MaximumParameterArgument<unknown>, 'converter'>): Validator<string, string, boolean, boolean, MaximumValidatable.Type<string, string>>;
export default function MaximumParameter<MessageType>({ maximum, inclusive, message, }: Object.Required<MaximumParameterArgument<unknown>, 'message'>): Validator<string, string, boolean, boolean, MaximumValidatable.Type<string, MessageType>>;
export default function MaximumParameter<MessageType>({ maximum, inclusive, message, converter, }: MaximumParameterArgument<MessageType | string>): Validator<string, string, boolean, boolean, MaximumValidatable.Type<string, MessageType>>;
