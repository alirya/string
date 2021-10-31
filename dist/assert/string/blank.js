import Truncate from "../../truncate";
import SentencesMust from "../../message/sentences-must";
export default Blank;
var Blank;
(function (Blank) {
    Blank.Parameter = BlankParameter;
    Blank.Object = BlankObject;
})(Blank || (Blank = {}));
export function BlankParameter(valid, value, subject = 'string') {
    let sentence = SentencesMust(valid);
    sentence.expect.push('blank', 'string');
    sentence.subject.push(subject);
    sentence.comma.push('expect');
    if (!valid && value.length) {
        sentence.actual.push('actual', `"${Truncate(value, 8)}"`);
    }
    return sentence.message;
}
export function BlankObject({ valid, value, subject = 'string', }) {
    return BlankParameter(valid, value, subject);
}
//# sourceMappingURL=blank.js.map