import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
import Instance from "@dikac/t-validator/validatable/validatable";
export default function Numeric(): Validator<string, string, boolean, boolean, Readonly<Instance<string, string>>>;
export default function Numeric<MessageType>(message: (result: Readonly<Value<string>> & Readonly<Validatable>) => MessageType): Validator<string, string, boolean, boolean, Readonly<Instance<string, MessageType>>>;
