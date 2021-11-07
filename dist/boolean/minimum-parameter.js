import Count from "../number/count";
import MinimumParameters from "./minimum-parameters";
/**
 * check if {@param string} length/size is greater than {@param minimum} or equal if {@param inclusive} is "true"
 *
 * {@param converter} is use to calculate length/size of {@param string}
 */
export default function MinimumParameter({ value, minimum, inclusive, converter = Count }) {
    return MinimumParameters(value, minimum, inclusive, converter);
}
//# sourceMappingURL=minimum-parameter.js.map