import AffixOption from "./affix/affix";
import Affix from "./affix/affix/affix";
import PadPrefix from "./pad-prefix";
import PadSuffix from "./pad-suffix";
import PadCircumfix, {PadCircumfixArgument, PadCircumfixObject, PadCircumfixParameter} from "./pad-circumfix";
import String from "./string/string";
import Padding from "./padding/padding";

namespace PadOption {

    export const Parameter = PadOptionParameter;
    export const Object = PadOptionObject;
    export type Argument = PadOptionArgument;
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
export function PadOptionParameter(
    value : string,
    padding : string,
    length : number,
    affix : AffixOption
) : string {

    switch (affix) {
        case AffixOption.PREFIX :
            return PadPrefix.Parameter(value, length, padding);

        case AffixOption.SUFFIX :
            return PadSuffix.Parameter(value, length, padding);

        case AffixOption.CIRCUMFIX :
            return PadCircumfix.Parameter(value, length, padding);
    }

}

export type PadOptionArgument = String & Padding & {length:number} & Affix;

export function PadOptionObject({
    value,
    padding,
    length,
    affix
} : PadOptionArgument) : string {

    return PadOptionParameter(value, padding, length, affix);
}

export default PadOption;
