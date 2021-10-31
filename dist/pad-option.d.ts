import AffixOption from "./affix/affix";
import Affix from "./affix/affix/affix";
import String from "./string/string";
import Padding from "./padding/padding";
declare namespace PadOption {
    const Parameter: typeof PadOptionParameter;
    const Object: typeof PadOptionObject;
    type Argument = PadOptionArgument;
}
/**
 * pad string depend on {@param mode}
 * {@see PadPrefix}
 * {@see PadSuffix}
 * {@see PadCircumfix}
 *
 * @param string
 * @param padding
 * @param length
 * @param mode
 */
export declare function PadOptionParameter(value: string, padding: string, length: number, affix: AffixOption): string;
export declare type PadOptionArgument = String & Padding & {
    length: number;
} & Affix;
export declare function PadOptionObject({ value, padding, length, affix }: PadOptionArgument): string;
export default PadOption;
