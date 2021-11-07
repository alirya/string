import MaximumType from "../string/maximum";
import Count from "../../number/count";
export default function MaximumParameters(value, maximum, inclusive, converter = Count, criteria = 'length', subject = 'string') {
    return new Error(MaximumType.Parameters(value, false, maximum, inclusive, converter, criteria, subject));
}
//# sourceMappingURL=maximum-parameters.js.map