import truncate from 'lodash/truncate';
import Separator from './separator/separator';
import String from './string/string';

export function TruncateParameters (
    value : string,
    length : number,
    omission : string = '...',
    separator ?: RegExp|string
)  : string {

    return truncate(value, {
        length : length,
        omission : omission,
        separator : separator
    });
}



export type TruncateArgument = String & {length:number} & Partial<Separator> & {omission?: string};

/**
 * wrapper for {@see truncate}
 *
 * @param string
 * @param length
 * @param omission
 * @default "..."
 *
 * @param separator
 */


export function TruncateParameter ({
    string,
    length,
    omission = '...',
    separator
} : TruncateArgument)  : string {

    return TruncateParameters(string, length, omission, separator);
}




namespace Truncate {
    export const Parameters = TruncateParameters;
    export const Parameter = TruncateParameter;
    export type Argument = TruncateArgument;
}
export default Truncate;
