import Validator from '@alirya/validator/validator';
import MinimumValidatable, {MinimumParametersReturn} from '../validatable/minimum-parameters';
import Count from '../number/count';
import MinimumString from '../assert/string/minimum-parameters';

export type MinimumParametersArgumentMessage<MessageType> =
    (value:string, valid : boolean, minimum : number, inclusive : boolean)=>MessageType;


export default function MinimumParameters(
    minimum : number,
    inclusive : boolean,
) : Validator<string, string, boolean, boolean, MinimumParametersReturn<string, string>>;

export default function MinimumParameters<MessageType>(
    minimum : number,
    inclusive : boolean,
    message : MinimumParametersArgumentMessage<MessageType>,
) : Validator<string, string, boolean, boolean, MinimumParametersReturn<string, MessageType>>;

export default function MinimumParameters<MessageType>(
    minimum : number,
    inclusive : boolean,
    message : MinimumParametersArgumentMessage<MessageType>,
    converter : (value:string)=>number,
) : Validator<string, string, boolean, boolean, MinimumParametersReturn<string, MessageType>>;

export default function MinimumParameters<MessageType>(
    minimum : number,
    inclusive : boolean,
    message : MinimumParametersArgumentMessage<MessageType|string> = MinimumString,
    converter : (value:string)=>number = Count,
) : Validator<string, string, boolean, boolean, MinimumParametersReturn<string, MessageType>> {

    return function (value) {

        return MinimumValidatable(value, minimum, inclusive, message, converter);

    } as Validator<string, string, boolean, boolean, MinimumParametersReturn<string, MessageType>>;
}
