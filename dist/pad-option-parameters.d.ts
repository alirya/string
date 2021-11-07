import AffixOption from "./affix/affix";
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
export default function PadOptionParameters(value: string, padding: string, length: number, affix: AffixOption): string;
