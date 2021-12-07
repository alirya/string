import Validator from "@dikac/t-validator/validator";
import NumericValidatable from "../validatable/numeric-parameters";
import Instance from "@dikac/t-validator/validatable/validatable";
import NumericString from "../assert/string/numeric-parameters";
import Dynamic from "@dikac/t-validator/message/function/validatable-parameters";

export default function NumericParameter() : Validator<string, string, boolean, boolean, Readonly<Instance<string, string>>>;

export default function NumericParameter<MessageType>(
    message : Dynamic<string, MessageType|string>
) : Validator<string, string, boolean, boolean, Readonly<Instance<string, MessageType>>>;

export default function NumericParameter<MessageType>(
    message : Dynamic<string, MessageType|string> = NumericString
) : Validator<string, string, boolean, boolean, Readonly<Instance<string, MessageType>>> {

    return function (value) {

        return NumericValidatable(value, message);

    } as Validator<string, string, boolean, boolean, Readonly<Instance<string, MessageType>>>
}
