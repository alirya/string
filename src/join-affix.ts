import Prefix from "./prefix/prefix";
import Suffix from "./suffix/suffix";
import Separator from "./separator/separator";
import {Object} from "ts-toolbelt";
import SafeCast from "./safe-cast";

export default function JoinAffix(
    strings : string[],
    option : Object.Optional<Prefix & Suffix> & Separator
) : string {

    return SafeCast(option.prefix) + strings.join(option.separator) + SafeCast(option.suffix);
}
