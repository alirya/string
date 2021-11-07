import Validator from "@dikac/t-validator/validator";
import NumericValidatable from "../validatable/numeric";
import Instance from "@dikac/t-validator/validatable/dynamic";
import NumericString from "../assert/string/numeric";
import Dynamic from "@dikac/t-validator/message/function/dynamic";

export default function NumericParameter() : Validator<string, string, boolean, boolean, Readonly<Instance<string, string>>>;

export default function NumericParameter<MessageType>(
    message : Dynamic.Parameters<string, MessageType|string>
) : Validator<string, string, boolean, boolean, Readonly<Instance<string, MessageType>>>;

export default function NumericParameter<MessageType>(
    message : Dynamic.Parameters<string, MessageType|string> = NumericString.Parameters
) : Validator<string, string, boolean, boolean, Readonly<Instance<string, MessageType>>> {

    return function (value) {

        return NumericValidatable.Parameters(value, message);

    } as Validator<string, string, boolean, boolean, Readonly<Instance<string, MessageType>>>
}
