import Validator from "@dikac/t-validator/validator";
import Instance from "@dikac/t-validator/validatable/dynamic";
import Dynamic from "@dikac/t-validator/message/function/dynamic";
export default function DigitParameter(): Validator<string, string, boolean, boolean, Readonly<Instance<string, string>>>;
export default function DigitParameter<MessageType>(message: Dynamic.Parameter<string, MessageType>): Validator<string, string, boolean, boolean, Readonly<Instance<string, MessageType>>>;
