import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
import Instance from "@dikac/t-validator/validatable/validatable";
export default function Match(pattern: RegExp): Validator<string, string, boolean, boolean, Readonly<Instance<string, string>>>;
export default function Match<MessageType>(pattern: RegExp, message: (result: Readonly<Value<string> & Validatable>) => MessageType): Validator<string, string, boolean, boolean, Readonly<Instance<string, MessageType>>>;
