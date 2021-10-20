import Lower from "@dikac/t-number/boolean/lower";
import Count from "../number/count";
/**
 * check if {@param string} length/size is lower than {@param maximum} or equal if {@param inclusive} is "true"
 *
 * {@param converter} is use to calculate length/size of {@param string}
 */
export default function Maximum({ value, maximum, inclusive, converter = Count }) {
    return Lower(converter(value), maximum, inclusive);
}
//# sourceMappingURL=maximum.js.map