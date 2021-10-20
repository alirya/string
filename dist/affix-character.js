import PrefixCharacter from "./prefix-character";
import SuffixCharacter from "./suffix-character";
import AffixOption from "./affix/affix";
/**
 * add {@param padding} to {@param string} if not exist and {@param string} not empty
 *
 * @param string
 * @param padding
 * @param affix
 */
export default function AffixCharacter({ string, padding, affix, }) {
    switch (affix) {
        case AffixOption.PREFIX:
            return PrefixCharacter({ string, prefix: padding });
        case AffixOption.SUFFIX:
            return SuffixCharacter({ string, suffix: padding });
        case AffixOption.CIRCUMFIX:
            string = PrefixCharacter({ string, prefix: padding });
            string = SuffixCharacter({ string, suffix: padding });
            return string;
    }
}
//# sourceMappingURL=affix-character.js.map