import Validator from '@alirya/validator/simple';
import StringValidatable from '../validatable/string';
import Instance from '@alirya/validator/validatable/validatable';
import StringString from '../assert/string/string';
import {SimpleParameters} from '@alirya/validator/message/function/simple';
import Validatable from '@alirya/validatable/validatable';
import Value from '@alirya/value/value';

export type StringParametersReturn<MessageType> = Validator<unknown, string, Readonly<Instance<unknown, MessageType>>>;

export function StringParameters() : StringParametersReturn<string>;

export function StringParameters<MessageType>(
    message : SimpleParameters<unknown, string, MessageType>
) : StringParametersReturn<MessageType>;

export function StringParameters<MessageType>(
    message : SimpleParameters<unknown, string, MessageType|string> = StringString.Parameters
) : StringParametersReturn<MessageType> {

    return function (value) {

        return StringValidatable.Parameters(value, message);

    } as StringParametersReturn<MessageType>;
}


export function StringParameter() : Validator<unknown, string, Readonly<Instance<unknown, string>>>;

export function StringParameter<MessageType>(
    message : (result:Readonly<Value> & Readonly<Validatable>)=>MessageType
) : Validator<unknown, string, Readonly<Instance<unknown, MessageType>>>;

export function StringParameter<MessageType>(
    message : (result:Readonly<Value> & Readonly<Validatable>)=>MessageType|string = StringString.Parameter
) : Validator<unknown, string, Readonly<Instance<unknown, MessageType>>> {

    return StringParameters(
        (value, valid)=>message({value, valid})
    ) as Validator<unknown, string, Readonly<Instance<unknown, MessageType>>>;
}



namespace String {
    export const Parameters = StringParameters;
    export const Parameter = StringParameter;
    export type Return<MessageType> = StringParametersReturn<MessageType>;
}
export default String;
