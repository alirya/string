import Sentence from "../../message/sentence";
export default NotEmpty;
var NotEmpty;
(function (NotEmpty) {
    NotEmpty.Parameter = NotEmptyParameter;
    NotEmpty.Object = NotEmptyObject;
})(NotEmpty || (NotEmpty = {}));
export function NotEmptyParameter(value, valid, subject = 'string') {
    let sentence = new Sentence(valid);
    sentence.reject = 'must not';
    sentence.accept = 'is not';
    // sentence.predicate = {
    //     invalid : 'is not',
    //     valid : 'is'
    // };
    sentence.subject = subject;
    sentence.expect = 'empty string';
    //
    // if(!valid) {
    //
    //     sentence.subject = [subject, Truncate(value, 5)].join(' ');
    // }
    return sentence.message;
}
export function NotEmptyObject({ valid, value, subject, }) {
    return NotEmptyParameter(value, valid, subject);
}
//# sourceMappingURL=not-empty.js.map