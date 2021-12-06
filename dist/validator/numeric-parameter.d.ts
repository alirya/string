import Validator from "@dikac/t-validator/validator";
import Instance from "@dikac/t-validator/validatable/validatable";
import Dynamic from "@dikac/t-validator/message/function/validatable";
export default function NumericParameter(): Validator<string, string, boolean, boolean, Readonly<Instance<string, string>>>;
export default function NumericParameter<MessageType>(message: Dynamic.Parameters<string, MessageType | string>): Validator<string, string, boolean, boolean, Readonly<Instance<string, MessageType>>>;
