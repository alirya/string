import Affix from "./affix/affix/affix";
import String from "./string/string";
import Padding from "./padding/padding";
export declare type PadOptionArgument = String & Padding & {
    length: number;
} & Affix;
export default function PadOptionParameter({ value, padding, length, affix }: PadOptionArgument): string;
