import PadPrefix from "./pad-prefix";
import PadSuffix from "./pad-suffix";
export default function PadParameters(value, length, prefix, suffix) {
    value = PadPrefix.Parameters(value, length, prefix);
    value = PadSuffix.Parameters(value, length, suffix || prefix);
    return value;
}
//# sourceMappingURL=pad-parameters.js.map