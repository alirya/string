import String from './string/string';
import Prefix from './prefix/prefix';

export type PrefixArgument = String & Prefix;

export default function PrefixParameter({string, prefix} : PrefixArgument) : string {

    if(string.length !== 0) {

        prefix = prefix[0];

        if(string[0] !== prefix) {

            return prefix + string;
        }
    }

    return string;

}

