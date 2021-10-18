import MatchValidatable from "../validatable/match";
import MatchString from "../validatable/string/match";
export default function Match(pattern, message = MatchString) {
    return function (value) {
        return new MatchValidatable(value, pattern, message);
    };
}
//# sourceMappingURL=match.js.map