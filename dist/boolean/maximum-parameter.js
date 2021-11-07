import Count from "../number/count";
import MaximumParameters from "./maximum-parameters";
/**
 * check if {@param string} length/size is lower than {@param maximum} or equal if {@param inclusive} is "true"
 *
 * {@param converter} is use to calculate length/size of {@param string}
 */
export default function MaximumParameter({ value, maximum, inclusive, converter = Count }) {
    return MaximumParameters(value, maximum, inclusive, converter);
}
//# sourceMappingURL=maximum-parameter.js.map