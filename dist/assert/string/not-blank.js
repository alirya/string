import Sentence from "../../message/sentence";
export default NotBlank;
var NotBlank;
(function (NotBlank) {
    NotBlank.Parameter = NotBlankParameter;
    NotBlank.Object = NotBlankObject;
})(NotBlank || (NotBlank = {}));
export function NotBlankParameter(value, valid, subject = 'string') {
    let sentence = new Sentence(valid);
    sentence.reject = 'must not';
    sentence.accept = 'is not';
    sentence.subject = subject;
    sentence.expect = 'blank string';
    return sentence.message;
}
export function NotBlankObject({ valid, value, subject, }) {
    return NotBlankParameter(value, valid, subject);
}
//# sourceMappingURL=not-blank.js.map