import Validator from "@dikac/t-validator/simple";
import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
import Instance from "@dikac/t-validator/validatable/dynamic";
export default function Empty(): Validator<string, '', Readonly<Instance<'', string>>>;
export default function Empty<MessageType>(message: (result: Readonly<Value<string> & Validatable>) => MessageType): Validator<string, '', Readonly<Instance<'', MessageType>>>;
