import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
import Instance from "@dikac/t-validator/validatable/validatable";
export default function Alphabet(): Validator<string, string, boolean, boolean, Readonly<Instance<string, string>>>;
export default function Alphabet<MessageType>(message: (result: Readonly<Value<string> & Validatable>) => MessageType): Validator<string, string, boolean, boolean, Readonly<Instance<string, MessageType>>>;
