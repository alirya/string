import Maximum from "./maximum";
import MaximumString from "../validatable/string/maximum";
export default function MaximumStandard(maximum, inclusive) {
    return Maximum(maximum, inclusive, MaximumString);
}
//# sourceMappingURL=maximum-standard.js.map