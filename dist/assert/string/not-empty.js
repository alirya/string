import Sentence from "../../message/sentence";
export default function NotEmpty({ valid, value, subject = 'string', }) {
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
//# sourceMappingURL=not-empty.js.map