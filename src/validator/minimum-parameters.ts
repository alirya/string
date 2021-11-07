import Validator from "@dikac/t-validator/validator";
import MinimumValidatable from "../validatable/minimum";
import Count from "../number/count";
import MinimumString from "../assert/string/minimum";

export type MinimumParametersArgumentMessage<MessageType> =
    (value:string, valid : boolean, minimum : number, inclusive : boolean)=>MessageType


export default function MinimumParameters(
    minimum : number,
    inclusive : boolean,
) : Validator<string, string, boolean, boolean, MinimumValidatable.Type<string, string>>;

export default function MinimumParameters<MessageType>(
    minimum : number,
    inclusive : boolean,
    message : MinimumParametersArgumentMessage<MessageType>,
) : Validator<string, string, boolean, boolean, MinimumValidatable.Type<string, MessageType>>;

export default function MinimumParameters<MessageType>(
    minimum : number,
    inclusive : boolean,
    message : MinimumParametersArgumentMessage<MessageType>,
    converter : (value:string)=>number,
) : Validator<string, string, boolean, boolean, MinimumValidatable.Type<string, MessageType>>;

export default function MinimumParameters<MessageType>(
    minimum : number,
    inclusive : boolean,
    message : MinimumParametersArgumentMessage<MessageType|string> = MinimumString.Parameters,
    converter : (value:string)=>number = Count,
) : Validator<string, string, boolean, boolean, MinimumValidatable.Type<string, MessageType>> {

    return function (value) {

        return MinimumValidatable.Parameters(value, minimum, inclusive, message, converter)

    } as Validator<string, string, boolean, boolean, MinimumValidatable.Type<string, MessageType>>
}
