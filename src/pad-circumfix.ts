import pad from 'lodash/pad';
import String from './string/string';
import Circumfix from './circumfix/circumfix';

export function PadCircumfixParameters(value : string, length : number, circumfix : string) {

    return pad(value, length, circumfix);
}

export type PadCircumfixArgument = String & Circumfix & {length:number};

export function PadCircumfixParameter({string, length , circumfix} : PadCircumfixArgument) {

    return pad(string, length, circumfix);
}

namespace PadCircumfix {
    export const Parameters = PadCircumfixParameters;
    export const Parameter = PadCircumfixParameter;
    export type Argument = PadCircumfixArgument;
}
export default PadCircumfix;
