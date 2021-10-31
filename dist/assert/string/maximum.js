import Sentences from "../../message/sentences";
export default Maximum;
var Maximum;
(function (Maximum) {
    Maximum.Parameter = MaximumParameter;
    Maximum.Object = MaximumObject;
})(Maximum || (Maximum = {}));
export function MaximumParameter(value, valid, maximum, inclusive, subject = 'string') {
    let sentence = new Sentences(valid);
    sentence.subject.push(subject);
    sentence.subject.push('length');
    if (valid) {
        sentence.accept.push(`is lower`);
    }
    else {
        sentence.reject.push(`must lower`);
    }
    if (inclusive) {
        sentence.expect.push(`or equal`);
        //sentence.predicate.invalid.push(`or equal`);
    }
    sentence.expect.push('than', maximum.toString());
    return sentence.message;
}
export function MaximumObject({ valid, value, maximum, inclusive, subject = 'string', }) {
    return MaximumParameter(value, valid, maximum, inclusive, subject);
}
//# sourceMappingURL=maximum.js.map