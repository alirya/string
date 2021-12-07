import Validator from "@dikac/t-validator/simple";
import MaximumValidatable, {MaximumType} from "../validatable/maximum-parameters";
import Count from "../number/count";
import MaximumString from "../assert/string/maximum-parameters";
import Dynamic from "@dikac/t-validator/message/function/validatable";

export type MaximumArgumentMessage<MessageType> =
    Dynamic.Parameters<string,  MessageType, [maximum : number, inclusive: boolean, converter : (string:string)=>number]>

export default function MaximumParameters(
    maximum : number,
    inclusive : boolean,
) : Validator<string, string, MaximumType<string, string>>;

export default function MaximumParameters<MessageType>(
    maximum : number,
    inclusive : boolean,
    message : MaximumArgumentMessage<MessageType>,
    converter ?: (value:string)=>number,
) : Validator<string, string, MaximumType<string, MessageType>>;

export default function MaximumParameters<MessageType>(
    maximum : number,
    inclusive : boolean,
    message : MaximumArgumentMessage<MessageType>,
    converter : (value:string)=>number,
) : Validator<string, string, MaximumType<string, MessageType>>;

export default function MaximumParameters(
    maximum : number,
    inclusive : boolean,
    message : undefined,
    converter ?: (value:string)=>number,
) : Validator<string, string, MaximumType<string, string>>;


export default function MaximumParameters<MessageType>(
    maximum : number,
    inclusive : boolean,
    message : MaximumArgumentMessage<MessageType|string> = MaximumString,
    converter : (value:string)=>number = Count,
) : Validator<string, string, MaximumType<string, MessageType>> {

    return function (value) {

        return MaximumValidatable(value, maximum, inclusive, message, converter)

    } as Validator<string, string, MaximumType<string, MessageType>>
}
