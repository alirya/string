import Match from "../../value/match";
import SentencesMust from "../../message/sentences-must";
export default Alphabet;
var Alphabet;
(function (Alphabet) {
    Alphabet.Parameter = AlphabetParameter;
    Alphabet.Object = AlphabetObject;
})(Alphabet || (Alphabet = {}));
export function AlphabetParameter(value, valid, subject = 'string') {
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
export function AlphabetObject({ valid, value, subject }) {
    return AlphabetParameter(value, valid, subject);
}
//# sourceMappingURL=alphabet.js.map