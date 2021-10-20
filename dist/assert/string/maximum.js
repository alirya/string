import Sentences from "../../message/sentences";
export default function Maximum({ valid, string, maximum, inclusive, subject = 'string', }) {
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
//# sourceMappingURL=maximum.js.map