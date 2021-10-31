import Truncate from "../../truncate";
import Sentences from "../../message/sentences";
export default Match;
var Match;
(function (Match) {
    Match.Parameter = MatchParameter;
    Match.Object = MatchObject;
})(Match || (Match = {}));
export function MatchParameter(value, valid, pattern, subject = 'string') {
    let sentence = new Sentences(valid);
    sentence.reject.push('does not match against');
    sentence.accept.push('match against');
    sentence.expect.push(pattern.source);
    sentence.subject.push(subject, `"${Truncate(value, 8)}"`);
    return sentence.message;
}
export function MatchObject({ valid, value, pattern, subject = 'string', }) {
    return MatchParameter(value, valid, pattern, subject);
}
//# sourceMappingURL=match.js.map