import Validator from "@dikac/t-validator/validator";
import Instance from "@dikac/t-validator/validatable/dynamic";
export default function NumericVoid<MessageType>(): Validator<string, string, boolean, boolean, Readonly<Instance<string, string>>>;
