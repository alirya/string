import MinimumParameter from "./minimum-parameter";
import MinimumParameters from "./minimum-parameters";
/**
 * check if {@param string} length/size is greater than {@param minimum} or equal if {@param inclusive} is "true"
 *
 * {@param converter} is use to calculate length/size of {@param string}
 */
declare namespace Minimum {
    const Parameter: typeof MinimumParameter;
    const Parameters: typeof MinimumParameters;
}
export default Minimum;
