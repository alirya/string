import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
import MaximumValidatable from "../validatable/maximum";
import Inclusive from "@dikac/t-number/inclusive/inclusive";
import MaximumNumber from "@dikac/t-number/maximum/maximum";
export default function Maximum<MessageType>(maximum: number, inclusive: boolean, message: (result: Readonly<Value<string> & Inclusive & MaximumNumber & Validatable>) => MessageType, converter?: (value: string) => number): Validator<string, string, boolean, boolean, MaximumValidatable<string, MessageType>>;
