import MatchValidatable from "../validatable/match";
export default function Match(pattern, message) {
    return function (value) {
        return new MatchValidatable(value, pattern, message);
    };
}
//# sourceMappingURL=match.js.map