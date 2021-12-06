import Validator from "@dikac/t-validator/simple";
import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
import Instance from "@dikac/t-validator/validatable/validatable";
export default function StringParameter(): Validator<unknown, string, Readonly<Instance<unknown, string>>>;
export default function StringParameter<MessageType>(message: (result: Readonly<Value> & Readonly<Validatable>) => MessageType): Validator<unknown, string, Readonly<Instance<unknown, MessageType>>>;
