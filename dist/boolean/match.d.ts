import MatchParameter from "./match-parameter";
import MatchParameters from "./match-parameters";
/**
 * match string {@param value} against {@param pattern}
 *
 * @param value
 * @param pattern
 */
declare namespace Match {
    const Parameter: typeof MatchParameter;
    const Parameters: typeof MatchParameters;
}
export default Match;
