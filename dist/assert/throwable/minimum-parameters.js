import MinimumType from "../string/minimum";
import Count from "../../number/count";
export default function MinimumParameters(value, minimum, inclusive, converter = Count, criteria = 'length', subject = 'string') {
    return new Error(MinimumType.Parameters(value, false, minimum, inclusive, converter, criteria, subject));
}
//# sourceMappingURL=minimum-parameters.js.map