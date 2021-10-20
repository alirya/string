import Affix from "./affix/affix/affix";
import PrefixCharacter from "./prefix-character";
import SuffixCharacter from "./suffix-character";
import AffixOption from "./affix/affix";
import PadPrefix from "./pad-prefix";
import PadSuffix from "./pad-suffix";
import PadCircumfix from "./pad-circumfix";
import String from "./string/string";
import Padding from "./padding/padding";
/**
 * add {@param padding} to {@param string} if not exist and {@param string} not empty
 *
 * @param string
 * @param padding
 * @param affix
 */
export default function AffixCharacter({
    string,
    padding,
    affix,
} : String & Padding & Affix) : string {

    switch (affix) {
        case AffixOption.PREFIX:
            return PrefixCharacter({string, prefix: padding});

        case AffixOption.SUFFIX:
            return SuffixCharacter({string, suffix: padding});

        case AffixOption.CIRCUMFIX:
            string = PrefixCharacter({string, prefix: padding});
            string = SuffixCharacter({string, suffix: padding});
            return string;
    }
}
