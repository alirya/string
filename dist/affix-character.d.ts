import Affix from "./affix/affix/affix";
import String from "./string/string";
import Padding from "./padding/padding";
/**
 * add {@param padding} to {@param string} if not exist and {@param string} not empty
 *
 * @param string
 * @param padding
 * @param affix
 */
export default function AffixCharacter({ string, padding, affix, }: String & Padding & Affix): string;
