import Prefix from "./prefix/prefix";
import Suffix from "./suffix/suffix";
import String from "./string/string";
import Circumfix from "./circumfix/circumfix";
export declare function EncloseParameter(string: string, circumfix: string): string;
export declare function EncloseParameter(string: string, prefix: string, suffix: string): string;
export declare type ArgumentPair = String & Prefix & Suffix;
export declare type ArgumentCircumfix = String & Circumfix;
/**
 * ensure {@param string} start with {@param prefix} and end with {@param suffix}, join them if not
 * exits
 *
 * @param string
 * @param prefix
 * @param suffix
 */
export declare function Enclose({ value, prefix, suffix, }: ArgumentPair): string;
export declare function Enclose({ value, circumfix, }: ArgumentCircumfix): string;
