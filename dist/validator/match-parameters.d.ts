import Validator from "@dikac/t-validator/validator";
import Instance from "@dikac/t-validator/validatable/dynamic";
import Dynamic from "@dikac/t-validator/message/function/dynamic";
export default function MatchParameters(pattern: RegExp): Validator<string, string, boolean, boolean, Readonly<Instance<string, string>>>;
export default function MatchParameters<MessageType>(pattern: RegExp, message: Dynamic.Parameters<string, MessageType, [pattern: RegExp]>): Validator<string, string, boolean, boolean, Readonly<Instance<string, MessageType>>>;
