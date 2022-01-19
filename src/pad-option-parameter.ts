import Affix from "./affix/affix/affix";
import String from "./string/string";
import Padding from "./padding/padding";
import PadOptionParameters from "./pad-option-parameters";

export type PadOptionArgument = String & Padding & {length:number} & Affix;

export default function PadOptionParameter({
    string,
    padding,
    length,
    affix
} : PadOptionArgument) : string {

    return PadOptionParameters(string, padding, length, affix);
}

