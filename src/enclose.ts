import PrefixCharacter from "./prefix";
import SuffixCharacter from "./suffix";
import Prefix from "./prefix/prefix";
import Suffix from "./suffix/suffix";
import String from "./string/string";
import Circumfix from "./circumfix/circumfix";

export function EncloseParameter (
    string : string,
    circumfix : string,
)  : string ;

export function EncloseParameter (
    string : string,
    prefix : string,
    suffix : string,
)  : string;

export function EncloseParameter (
    string : string,
    prefix : string,
    suffix ?: string,
) : string {

    string = PrefixCharacter.Parameter(string, prefix);
    string = SuffixCharacter.Parameter(string, suffix || prefix);

    return string;
}

export type ArgumentPair = String & Prefix & Suffix;
export type ArgumentCircumfix = String & Circumfix;

/**
 * ensure {@param string} start with {@param prefix} and end with {@param suffix}, join them if not
 * exits
 *
 * @param string
 * @param prefix
 * @param suffix
 */
export function Enclose ({
    value,
    prefix,
    suffix,
} : ArgumentPair) : string ;

export function Enclose ({
    value,
    circumfix,
} : ArgumentCircumfix) : string ;

export function Enclose ({
    value,
    prefix,
    circumfix,
    suffix,
} : ArgumentCircumfix & ArgumentPair) : string {

    return EncloseParameter(value, prefix || circumfix, suffix);
}
