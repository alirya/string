import Validatable from "@alirya/validatable/validatable";
import Value from "@alirya/value/value";
import StringParameters from "./string-parameters";


export type StringArgument = Validatable & Value & {subject ?:string} & {conversion ?: (value: unknown) => string };

export default function StringParameter({
   valid,
   value,
   subject = 'type',
   conversion = value => typeof value
} : StringArgument) : string {

    return StringParameters(value, valid, subject, conversion);
}
