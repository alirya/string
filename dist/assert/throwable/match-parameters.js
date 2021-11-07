import MatchType from "../string/match";
export default function MatchParameters(value, pattern, subject = 'string') {
    return new Error(MatchType.Parameters(value, false, pattern, subject));
}
//# sourceMappingURL=match-parameters.js.map