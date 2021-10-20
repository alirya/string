import Sentences from "../../message/sentences";
export default function Minimum({ valid, string, minimum, inclusive, subject = 'string', }) {
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
//# sourceMappingURL=minimum.js.map