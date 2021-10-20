import Sentence from "../../message/sentence";
export default function NotBlank({ valid, value, subject = 'string', }) {
    let sentence = new Sentence(valid);
    sentence.reject = 'must not';
    sentence.accept = 'is not';
    sentence.subject = subject;
    sentence.expect = 'blank string';
    return sentence.message;
}
//# sourceMappingURL=not-blank.js.map