import Truncate from "../../truncate";
import SentencesMust from "../../message/sentences-must";
import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";

export default function Empty({
    valid,
    value,
    subject = 'string',
} : Validatable & Value<string> & {subject?:string}) : string {

    let message = [subject];

    if(valid) {

        message.push('is not')

    } else {

        message.push('must not')
    }

    message.push('empty', 'string');


    if(!valid && value.length) {

        message.push('actual', `"${Truncate({string:value, length:8})}"`);

    }

    // if(!valid && value.length) {
    //
    //     sentence.actual.push('actual', `"${Truncate(value, 8)}"`);
    //
    // }
    //
    // let sentence = SentencesMust(valid);
    // sentence.expect.push('empty', 'string');
    // sentence.subject.push(subject);
    //
    // sentence.comma.push('expect');
    //
    // if(!valid && value.length) {
    //
    //     sentence.actual.push('actual', `"${Truncate(value, 8)}"`);
    //
    // }

    return message.join(' ');
}
