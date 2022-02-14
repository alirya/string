import AffixOption from './affix/affix';
import PadPrefix from './pad-prefix-parameters';
import PadSuffix from './pad-suffix-parameters';
import PadCircumfix from './pad-circumfix-parameters';

/**
 * pad string depend on {@param affix}
 *
 * {@see PadPrefix}
 * {@see PadSuffix}
 * {@see PadCircumfix}
 *
 * @param string
 * @param padding
 * @param length
 * @param affix
 */
export default function PadOptionParameters(
    string : string,
    padding : string,
    length : number,
    affix : AffixOption
) : string {

    switch (affix) {
        case AffixOption.PREFIX :
            return PadPrefix(string, length, padding);

        case AffixOption.SUFFIX :
            return PadSuffix(string, length, padding);

        case AffixOption.CIRCUMFIX :
            return PadCircumfix(string, length, padding);
    }

}
