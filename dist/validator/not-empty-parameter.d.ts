import Validator from "@dikac/t-validator/validator";
import Instance from "@dikac/t-validator/validatable/validatable";
import FunctionStatic from "@dikac/t-validator/message/function/static";
export default function NotEmptyParameter(): Validator<string, '', true, false, Readonly<Instance<string, string>>>;
export default function NotEmptyParameter<MessageType>(message: FunctionStatic.Parameter<'', string, false, true, MessageType>): Validator<string, '', true, false, Readonly<Instance<string, MessageType>>>;
