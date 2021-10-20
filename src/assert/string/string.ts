import SentencesMust from "../../message/sentences-must";
import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";


export type Argument = Validatable & Value & {subject ?:string} & {conversion ?: (value: unknown) => string };

export default function String({
   valid,
   value,
   subject = 'type',
   conversion = value => typeof value
} : Argument) : string {

    let sentence = SentencesMust(valid);
    sentence.expect.push('string');
    sentence.subject.push(subject);

    sentence.comma.push('expect');

    if(!valid) {

        sentence.actual.push('actual', conversion(value));
    }

    return sentence.message;
}
