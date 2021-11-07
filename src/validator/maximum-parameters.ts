import Validator from "@dikac/t-validator/validator";
import MaximumValidatable from "../validatable/maximum";
import Count from "../number/count";
import MaximumString from "../assert/string/maximum";

export type MaximumArgumentMessage<MessageType> =
    (value:string, valid : boolean, maximum : number, inclusive : boolean)=>MessageType


export default function MaximumParameters(
    maximum : number,
    inclusive : boolean,
) : Validator<string, string, boolean, boolean, MaximumValidatable.Type<string, string>>;

export default function MaximumParameters<MessageType>(
    maximum : number,
    inclusive : boolean,
    message : MaximumArgumentMessage<MessageType>,
    converter ?: (value:string)=>number,
) : Validator<string, string, boolean, boolean, MaximumValidatable.Type<string, MessageType>>;

export default function MaximumParameters<MessageType>(
    maximum : number,
    inclusive : boolean,
    message : MaximumArgumentMessage<MessageType>,
    converter : (value:string)=>number,
) : Validator<string, string, boolean, boolean, MaximumValidatable.Type<string, MessageType>>;

export default function MaximumParameters(
    maximum : number,
    inclusive : boolean,
    message : undefined,
    converter ?: (value:string)=>number,
) : Validator<string, string, boolean, boolean, MaximumValidatable.Type<string, string>>;


export default function MaximumParameters<MessageType>(
    maximum : number,
    inclusive : boolean,
    message : MaximumArgumentMessage<MessageType|string> = MaximumString.Parameters,
    converter : (value:string)=>number = Count,
) : Validator<string, string, boolean, boolean, MaximumValidatable.Type<string, MessageType>> {

    return function (value) {

        return MaximumValidatable.Parameters(value, maximum, inclusive, message, converter)

    } as Validator<string, string, boolean, boolean, MaximumValidatable.Type<string, MessageType>>
}
