import StringParameters from "./string-parameters";
import StringParameter, {StringArgument} from "./string-parameter";

namespace String {

    export const Parameters = StringParameters;
    export const Parameter = StringParameter;
    export type Argument<ValueType, MessageType> = StringArgument<ValueType, MessageType>;
}
export default String;

