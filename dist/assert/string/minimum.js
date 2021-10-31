import Sentences from "../../message/sentences";
export default Minimum;
var Minimum;
(function (Minimum) {
    Minimum.Parameter = MinimumParameter;
    Minimum.Object = MinimumObject;
})(Minimum || (Minimum = {}));
export function MinimumParameter(value, valid, minimum, inclusive, subject = 'string') {
    let sentence = new Sentences(valid);
    sentence.subject.push(subject);
    sentence.subject.push('length');
    if (valid) {
        sentence.accept.push(`is greater`);
    }
    else {
        sentence.reject.push(`must greater`);
    }
    if (inclusive) {
        sentence.expect.push(`or equal`);
    }
    sentence.expect.push('than', minimum.toString());
    return sentence.message;
}
export function MinimumObject({ value, valid, minimum, inclusive, subject = 'string', }) {
    return MinimumParameter(value, valid, minimum, inclusive, subject);
}
//# sourceMappingURL=minimum.js.map