import UpperFirst from './upper-first';
import Separator from "./separator/separator";
import String from "./string/string";

export default function UpperWords ({string, separator} : String & Separator) : string {

    for (const split of string.match(separator) || []) {

        string = string.split(split).map(UpperFirst).join(split);
    }

    return UpperFirst(string);

}
