import Match from "../../value/match";
import SentencesMust from "../../message/sentences-must";
export default function Alphabet({ valid, value, subject = 'string' }) {
    let sentence = SentencesMust(valid);
    sentence.expect.push('alphabet');
    sentence.subject.push(subject);
    sentence.comma.push('expect');
    if (!valid) {
        let match = new Match(value, /[^a-zA-Z]{1,5}/);
        if (match.valid) {
            sentence.actual.push('contains', `"${match.match[0]}"`);
        }
    }
    return sentence.message;
}
//# sourceMappingURL=alphabet.js.map