import Validator from "@dikac/t-validator/validator";
import Instance from "@dikac/t-validator/validatable/dynamic";
import Dynamic from "@dikac/t-validator/message/function/dynamic";
export default function AlphanumericParameters(): Validator<string, string, boolean, boolean, Readonly<Instance<string, string>>>;
export default function AlphanumericParameters<MessageType>(message: Dynamic.Parameters<string, MessageType>): Validator<string, string, boolean, boolean, Readonly<Instance<string, MessageType>>>;
