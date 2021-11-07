/**
 * match string {@param value} against {@param pattern}
 *
 * @param value
 * @param pattern
 */
export function MatchParameter(value, pattern) {
    return value.match(pattern) !== null;
}
export function MatchObject({ value, pattern }) {
    return MatchParameter(value, pattern);
}
var Match;
(function (Match) {
    Match.Parameter = MatchParameter;
    Match.Object = MatchObject;
})(Match || (Match = {}));
export default Match;
//# sourceMappingURL=match.js.map