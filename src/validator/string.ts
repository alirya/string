import Validator from "@dikac/t-validator/simple";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import StringValidatable from "../validatable/string";
import Instance from "@dikac/t-validator/validatable/dynamic";
import Return from "@dikac/t-validator/validatable/simple";
import StringString from "../assert/string/string";

export function StringObject() : Validator<unknown, string, Readonly<Instance<unknown, string>>>;

export function StringObject<MessageType>(
    message : (result:Readonly<Value> & Readonly<Validatable>)=>MessageType
) : Validator<unknown, string, Readonly<Instance<unknown, MessageType>>>;

export function StringObject<MessageType>(
    message : (result:Readonly<Value> & Readonly<Validatable>)=>MessageType|string = StringString.Object
) : Validator<unknown, string, Readonly<Instance<unknown, MessageType>>> {

    return function (value) {

        return StringValidatable.Object({value, message});

    } as Validator<unknown, string, Readonly<Instance<unknown, MessageType>>>
}

export function StringVoid() : Validator<unknown, string, Readonly<Instance<unknown, string>>> {

    return StringObject(StringString.Object)
}

export function StringParameter(
) : Validator<unknown, string, Readonly<Instance<unknown, string>>>;

export function StringParameter<MessageType>(
    message : (value:unknown, valid: boolean)=>MessageType
) : Validator<unknown, string, Readonly<Instance<unknown, MessageType>>>;

export function StringParameter<MessageType>(
    message : (value:unknown, valid: boolean)=>MessageType|string = StringString.Parameter
) : Validator<unknown, string, Readonly<Instance<unknown, MessageType>>> {

    return function (value) {

        return StringValidatable.Parameter(value, message);

    } as Validator<unknown, string, Readonly<Instance<unknown, MessageType>>>
}

namespace String {

    export const Parameter = StringParameter;
    export const Object = StringObject;
    export const Void = StringVoid;
}

export default String;
