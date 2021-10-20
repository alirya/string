import Affix from "./affix/affix/affix";
import String from "./string/string";
import Padding from "./padding/padding";
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
export default function Pad({ string, padding, length, affix }: String & Padding & {
    length: number;
} & Affix): string;
