import String from "./string/string";
import Prefix from "./prefix/prefix";

export type PrefixArgument = String & Prefix;

export default function PrefixParameter({value, prefix} : PrefixArgument) : string {

    if(value.length !== 0) {

        prefix = prefix[0];

        if(value[0] !== prefix) {

            return prefix + value;
        }
    }

    return value;

}

