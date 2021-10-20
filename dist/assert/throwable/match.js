import MatchType from "../string/match";
export default function Match({ value, pattern, subject = 'string', }) {
    return new Error(MatchType(false, value, pattern, subject));
}
//# sourceMappingURL=match.js.map