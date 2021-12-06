import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import Instance from "@dikac/t-validator/validatable/validatable";
import Pattern from "../pattern/pattern/pattern";
export default function MatchParameter({ pattern }: Pattern): Validator<string, string, boolean, boolean, Readonly<Instance<string, string>>>;
export default function MatchParameter<MessageType>({ pattern, message }: Message<(result: Readonly<Value<string> & Validatable & Pattern>) => MessageType> & Pattern): Validator<string, string, boolean, boolean, Readonly<Instance<string, MessageType>>>;
