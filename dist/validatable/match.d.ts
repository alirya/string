import MatchParameter, { MatchArgument } from "./match-parameter";
import MatchParameters from "./match-parameters";
declare namespace Match {
    const Parameter: typeof MatchParameter;
    const Parameters: typeof MatchParameters;
    type Argument<ValueType extends string, MessageType> = MatchArgument<ValueType, MessageType>;
}
export default Match;
