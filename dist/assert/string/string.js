import SentencesMust from "../../message/sentences-must";
export default String;
var String;
(function (String) {
    String.Parameter = StringParameter;
    String.Object = StringObject;
})(String || (String = {}));
export function StringParameter(value, valid, subject = 'type', conversion = value => typeof value) {
    let sentence = SentencesMust(valid);
    sentence.expect.push('string');
    sentence.subject.push(subject);
    sentence.comma.push('expect');
    if (!valid) {
        sentence.actual.push('actual', conversion(value));
    }
    return sentence.message;
}
export function StringObject({ valid, value, subject = 'type', conversion = value => typeof value }) {
    return StringParameter(value, valid, subject, conversion);
}
//# sourceMappingURL=string.js.map