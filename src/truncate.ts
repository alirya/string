import {truncate} from "lodash";
import Separator from "./separator/separator";
import String from "./string/string";



namespace Truncate {

    export const Parameter = TruncateParameter;
    export const Object = TruncateObject;
    export type Argument = TruncateArgument;
}

export function TruncateParameter (
    value : string,
    length : number,
    omission : string = '...',
    separator ?: RegExp|string
)  : string {

    return truncate(value, {
        length : length,
        omission : omission,
        separator : separator
    })
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


export function TruncateObject ({
        value,
        length,
        omission = "...",
        separator
    } : TruncateArgument)  : string {

    return TruncateParameter(value, length, omission, separator)
}



export default Truncate;
