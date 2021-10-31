import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import NumericValidatable from "../validatable/numeric";
import Instance from "@dikac/t-validator/validatable/dynamic";
import Return from "@dikac/t-validator/validatable/simple";
import NumericString from "../assert/string/numeric";

export function NumericObject() : Validator<string, string, boolean, boolean, Readonly<Instance<string, string>>>;

export function NumericObject<MessageType>(
    message : (result:Readonly<Value<string>> & Readonly<Validatable>)=>MessageType
) : Validator<string, string, boolean, boolean, Readonly<Instance<string, MessageType>>>;

export function NumericObject<MessageType>(
    message : (result:Readonly<Value<string>> & Readonly<Validatable>)=>MessageType|string = NumericString.Object
) : Validator<string, string, boolean, boolean, Readonly<Instance<string, MessageType>>> {

    return function (value) {

        return NumericValidatable.Object({value, message});

    } as Validator<string, string, boolean, boolean, Readonly<Instance<string, MessageType>>>
}

export function NumericVoid<MessageType>(

) : Validator<string, string, boolean, boolean, Readonly<Instance<string, string>>> {

    return NumericParameter();
}

export function NumericParameter() : Validator<string, string, boolean, boolean, Readonly<Instance<string, string>>>;

export function NumericParameter<MessageType>(
    message : (value:string, valid:boolean)=>MessageType
) : Validator<string, string, boolean, boolean, Readonly<Instance<string, MessageType>>>;

export function NumericParameter<MessageType>(
    message : (value:string, valid:boolean)=>MessageType|string = NumericString.Parameter
) : Validator<string, string, boolean, boolean, Readonly<Instance<string, MessageType>>> {

    return function (value) {

        return NumericValidatable.Parameter(value, message);

    } as Validator<string, string, boolean, boolean, Readonly<Instance<string, MessageType>>>
}
