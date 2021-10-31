import Match from "../../validatable/match";
import SentencesMust from "../../message/sentences-must";
export default Numeric;
var Numeric;
(function (Numeric) {
    Numeric.Parameter = NumericParameter;
    Numeric.Object = NumericObject;
})(Numeric || (Numeric = {}));
export function NumericParameter(value, valid, subject = 'string') {
    let sentence = SentencesMust(valid);
    sentence.expect.push('numeric');
    sentence.subject.push(subject);
    sentence.comma.push('expect');
    if (!valid) {
        let match = new Match(value, /[^0-9]{1,5}/);
        if (match.valid) {
            sentence.actual.push('contain', `"${match.match[0]}"`);
        }
    }
    return sentence.message;
}
export function NumericObject({ valid, value, subject }) {
    return NumericParameter(value, valid, subject);
}
//# sourceMappingURL=numeric.js.map