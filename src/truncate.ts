import {truncate} from "lodash";
import Separator from "./separator/separator";
import String from "./string/string";

export type Argument = String & {length:number} & Partial<Separator> & {omission?: string};

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


export default function Truncate ({string, length, omission = "...", separator} : Argument)  : string {

    return truncate(string, {
        length : length,
        omission : omission,
        separator : separator
    })
}


