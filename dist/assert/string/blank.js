import Truncate from "../../truncate";
import SentencesMust from "../../message/sentences-must";
export default function Blank({ valid, value, subject = 'string', }) {
    let sentence = SentencesMust(valid);
    sentence.expect.push('blank', 'string');
    sentence.subject.push(subject);
    sentence.comma.push('expect');
    if (!valid && value.length) {
        sentence.actual.push('actual', `"${Truncate(value, 8)}"`);
    }
    return sentence.message;
}
//# sourceMappingURL=blank.js.map