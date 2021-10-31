import Truncate from "../../truncate";
import SentencesMust from "../../message/sentences-must";
export default Empty;
var Empty;
(function (Empty) {
    Empty.Parameter = EmptyParameter;
    Empty.Object = EmptyObject;
})(Empty || (Empty = {}));
export function EmptyParameter(value, valid, subject = 'string') {
    let sentence = SentencesMust(valid);
    sentence.expect.push('empty', 'string');
    sentence.subject.push(subject);
    sentence.comma.push('expect');
    if (!valid && value.length) {
        sentence.actual.push('actual', `"${Truncate(value, 8)}"`);
    }
    return sentence.message;
}
export function EmptyObject({ valid, value, subject = 'string', }) {
    return EmptyParameter(value, valid, subject);
}
//# sourceMappingURL=empty.js.map