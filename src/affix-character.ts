// import Affix from "./affix/affix/affix";
// import PrefixCharacter from "./prefix-character";
// import SuffixCharacter from "./suffix-character";
// import AffixOption from "./affix/affix";
// import PadPrefix from "./pad-prefix";
// import PadSuffix from "./pad-suffix";
// import PadCircumfix from "./pad-circumfix";
// import String from "./string/string";
// import Padding from "./padding/padding";
// /**
//  * add {@param padding} to {@param string} if not exist and {@param string} not empty
//  *
//  * @param string
//  * @param padding
//  * @param affix
//  */
// export default function AffixCharacter({
//     value,
//     padding,
//     affix,
// } : String & Padding & Affix) : string {
//
//     switch (affix) {
//         case AffixOption.PREFIX:
//             return PrefixCharacter({value: value, prefix: padding});
//
//         case AffixOption.SUFFIX:
//             return SuffixCharacter({value: value, suffix: padding});
//
//         case AffixOption.CIRCUMFIX:
//             value = PrefixCharacter({value: value, prefix: padding});
//             value = SuffixCharacter({value: value, suffix: padding});
//             return value;
//     }
// }
