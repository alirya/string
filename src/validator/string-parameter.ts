import Validator from "@dikac/t-validator/simple";
import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
import StringValidatable from "../validatable/string-parameter";
import Instance from "@dikac/t-validator/validatable/validatable";
import StringString from "../assert/string/string-parameter";

export default function StringParameter() : Validator<unknown, string, Readonly<Instance<unknown, string>>>;

export default function StringParameter<MessageType>(
    message : (result:Readonly<Value> & Readonly<Validatable>)=>MessageType
) : Validator<unknown, string, Readonly<Instance<unknown, MessageType>>>;

export default function StringParameter<MessageType>(
    message : (result:Readonly<Value> & Readonly<Validatable>)=>MessageType|string = StringString
) : Validator<unknown, string, Readonly<Instance<unknown, MessageType>>> {

    return function (value) {

        return StringValidatable({value, message});

    } as Validator<unknown, string, Readonly<Instance<unknown, MessageType>>>
}

