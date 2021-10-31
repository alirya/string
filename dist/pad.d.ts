import String from "./string/string";
import Suffix from "./suffix/suffix";
import Prefix from "./prefix/prefix";
import Circumfix from "./circumfix/circumfix";
declare namespace Pad {
    const Parameter: typeof PadParameter;
    const Object: typeof PadObject;
    type ArgumentCircumfix = PadArgumentCircumfix;
    type ArgumentPair = PadArgumentPair;
}
/**
 * @see padStart
 */
export declare function PadParameter(value: string, length: number, circumfix: string): string;
export declare function PadParameter(value: string, length: number, prefix: string, suffix: string): string;
export declare type PadArgumentPair = String & Prefix & Suffix & {
    length: number;
};
export declare type PadArgumentCircumfix = String & Circumfix & {
    length: number;
};
export declare function PadObject({ value, length, prefix, suffix }: PadArgumentPair): string;
export declare function PadObject({ value, length, circumfix }: PadArgumentCircumfix): string;
export default Pad;
