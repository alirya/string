import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
import MinimumValidatable from "../validatable/minimum";
import Inclusive from "@dikac/t-number/inclusive/inclusive";
import MinimumNumber from "@dikac/t-number/minimum/minimum";
export default function Minimum<MessageType>(minimum: number, inclusive: boolean, message: (result: Readonly<Value<string> & Inclusive & MinimumNumber & Validatable>) => MessageType, converter?: (value: string) => number): Validator<string, string, boolean, boolean, MinimumValidatable<string, MessageType>>;
