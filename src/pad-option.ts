import AffixOption from './affix/affix';
import {PadPrefixParameters} from './pad-prefix';
import {PadSuffixParameters} from './pad-suffix';
import {PadCircumfixParameters} from './pad-circumfix';
import Affix from './affix/affix/affix';
import String from './string/string';
import Padding from './padding/padding';

/**
 * pad string depend on {@param affix}
 *
 * {@see PadPrefixParameters}
 * {@see PadSuffixParameters}
 * {@see PadCircumfix}
 *
 * @param string
 * @param padding
 * @param length
 * @param affix
 */
export function PadOptionParameters(
    string : string,
    padding : string,
    length : number,
    affix : AffixOption
) : string {

    switch (affix) {
        case AffixOption.PREFIX :
            return PadPrefixParameters(string, length, padding);

        case AffixOption.SUFFIX :
            return PadSuffixParameters(string, length, padding);

        case AffixOption.CIRCUMFIX :
            return PadCircumfixParameters(string, length, padding);
    }

}

export type PadOptionArgument = String & Padding & {length:number} & Affix;

export function PadOptionParameter({
    string,
    padding,
    length,
    affix
} : PadOptionArgument) : string {

    return PadOptionParameters(string, padding, length, affix);
}



namespace PadOption {
    export const Parameters = PadOptionParameters;
    export const Parameter = PadOptionParameter;
    export type Argument = PadOptionArgument;
}
export default PadOption;
