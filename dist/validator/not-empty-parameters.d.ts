import Validator from "@dikac/t-validator/validator";
import Instance from "@dikac/t-validator/validatable/dynamic";
import FunctionStatic from "@dikac/t-validator/message/function/static";
export default function NotEmptyParameters(): Validator<string, '', true, false, Readonly<Instance<string, string>>>;
export default function NotEmptyParameters<MessageType>(message: FunctionStatic.Parameters<string, '', string, false, true, MessageType>): Validator<string, '', true, false, Readonly<Instance<string, MessageType>>>;
