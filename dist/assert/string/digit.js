import Match from "../../value/match";
import SentencesMust from "../../message/sentences-must";
export default Digit;
var Digit;
(function (Digit) {
    Digit.Parameter = DigitParameter;
    Digit.Object = DigitObject;
})(Digit || (Digit = {}));
export function DigitParameter(valid, value, subject = 'string') {
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
export function DigitObject({ valid, value, subject = 'string' }) {
    return DigitParameter(valid, value, subject);
}
//# sourceMappingURL=digit.js.map