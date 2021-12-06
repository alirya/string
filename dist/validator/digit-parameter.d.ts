import Validator from "@dikac/t-validator/simple";
import Instance from "@dikac/t-validator/validatable/validatable";
import Dynamic from "@dikac/t-validator/message/function/validatable";
export default function DigitParameter(): Validator<string, string, Readonly<Instance<string, string>>>;
export default function DigitParameter<MessageType>(message: Dynamic.Parameter<string, MessageType>): Validator<string, string, Readonly<Instance<string, MessageType>>>;
