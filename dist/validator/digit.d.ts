import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
import Instance from "@dikac/t-validator/validatable/dynamic";
export default function Digit(): Validator<string, string, boolean, boolean, Readonly<Instance<string, string>>>;
export default function Digit<MessageType>(message: (result: Readonly<Value<string>> & Readonly<Validatable>) => MessageType): Validator<string, string, boolean, boolean, Readonly<Instance<string, MessageType>>>;
