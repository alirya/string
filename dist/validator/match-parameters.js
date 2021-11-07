import MatchValidatable from "../validatable/match";
import MatchString from "../assert/string/match";
export default function MatchParameters(pattern, message = MatchString.Parameters) {
    return function (value) {
        return new MatchValidatable.Parameters(value, pattern, message);
    };
}
//# sourceMappingURL=match-parameters.js.map