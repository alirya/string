import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import NumericFromObject from "../boolean/numeric";
import ValueOf from "@dikac/t-value/value-of/value-of";
import Callback from "@dikac/t-validator/validatable/callback";
import StringGuard from "../boolean/string";


export default Numeric;
namespace Numeric {

    export const Parameter = NumericParameter;
    export const Object = NumericObject;
    export type Argument<ValueType extends string, MessageType> = NumericArgument<ValueType, MessageType>;
}

export function NumericParameter<ValueType extends string, MessageType>(
    value : ValueType,
    message : (result:Readonly<Value<ValueType> & Validatable>)=>MessageType
) : Readonly<Value<ValueType> & Message<MessageType> & Validatable> {

    return Callback(value, NumericFromObject, message) as Readonly<Value<ValueType> & Message<MessageType> & Validatable>;
}

export type NumericArgument<ValueType extends string, MessageType>
    = Message<(result:Readonly<Value<ValueType> & Validatable>)=>MessageType> & Value<ValueType>;

export function NumericObject<ValueType extends string, MessageType>({
        value,
        message
    } : NumericArgument<ValueType, MessageType>
) : Readonly<Value<ValueType> & Message<MessageType> & Validatable> {

    return NumericParameter(value, message);
}
