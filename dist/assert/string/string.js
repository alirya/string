import SentencesMust from "../../message/sentences-must";
export default function String({ valid, value, subject = 'type', conversion = value => typeof value }) {
    let sentence = SentencesMust(valid);
    sentence.expect.push('string');
    sentence.subject.push(subject);
    sentence.comma.push('expect');
    if (!valid) {
        sentence.actual.push('actual', conversion(value));
    }
    return sentence.message;
}
//# sourceMappingURL=string.js.map