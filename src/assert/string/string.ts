import SentencesMust from "../../message/sentences-must";
import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";


export type StringArgument = Validatable & Value & {subject ?:string} & {conversion ?: (value: unknown) => string };


export default String;
namespace String {

    export const Parameter = StringParameter;
    export const Object = StringObject;
    export type Argument = StringArgument;
}

export function StringParameter(
    value : unknown,
    valid : boolean,
    subject : string = 'type',
    conversion : (value:unknown)=>string = value=>typeof value
) : string {

    let sentence = SentencesMust(valid);
    sentence.expect.push('string');
    sentence.subject.push(subject);

    sentence.comma.push('expect');

    if(!valid) {

        sentence.actual.push('actual', conversion(value));
    }

    return sentence.message;
}


export function StringObject({
   valid,
   value,
   subject = 'type',
   conversion = value => typeof value
} : StringArgument) : string {

    return StringParameter(value, valid, subject, conversion);
}
