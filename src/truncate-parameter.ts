import {truncate} from "lodash";
import Separator from "./separator/separator";
import String from "./string/string";
import TruncateParameters from "./truncate-parameters";

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


export default function TruncateParameter ({
    string,
    length,
    omission = "...",
    separator
} : TruncateArgument)  : string {

    return TruncateParameters(string, length, omission, separator)
}


