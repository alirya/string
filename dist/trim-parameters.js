import { trim } from "lodash";
import TrimSuffix from "./trim-suffix";
import TrimPrefix from "./trim-prefix";
export default function TrimParameters(value, prefix, suffix) {
    if (suffix) {
        value = TrimPrefix.Parameters(value, prefix);
        value = TrimSuffix.Parameters(value, suffix);
    }
    else {
        value = trim(value, prefix);
    }
    return value;
}
//# sourceMappingURL=trim-parameters.js.map