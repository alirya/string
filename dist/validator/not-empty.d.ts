import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
import Instance from "@dikac/t-validator/validatable/dynamic";
export default function NotEmpty(): Validator<string, '', true, false, Readonly<Instance<string, string>>>;
export default function NotEmpty<MessageType>(message: (result: Readonly<Value<string> & Validatable>) => MessageType): Validator<string, '', true, false, Readonly<Instance<string, MessageType>>>;
