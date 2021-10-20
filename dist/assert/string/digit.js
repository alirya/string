import Match from "../../value/match";
import SentencesMust from "../../message/sentences-must";
export default function Digit({ valid, value, subject = 'string' }) {
    let sentence = SentencesMust(valid);
    sentence.expect.push('digit');
    sentence.subject.push(subject);
    sentence.comma.push('expect');
    if (!valid) {
        let match = new Match(value, /[^0-9]{1,5}/);
        if (match.valid) {
            sentence.actual.push('contains', `"${match.match[0]}"`);
        }
    }
    return sentence.message;
}
//# sourceMappingURL=digit.js.map