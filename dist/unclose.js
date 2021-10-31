// import RemovePrefixCharacter from "./remove-prefix-character";
// import RemoveSuffixCharacter from "./remove-suffix-character";
// import String from "./string/string";
// import Prefix from "./prefix/prefix";
// import Suffix from "./suffix/suffix";
// import Value from "@dikac/t-value/value";
//
// export default Unclose;
// namespace Unclose {
//
//     export const Parameter = UncloseParameter;
//     export const Object = UncloseObject;
//     export type Argument = UncloseArgument;
// }
// /**
//  * remove {@param prefix} from start and {@param suffix} from end of {@param string}
//  *
//  * @param string
//  * @param prefix
//  * @param suffix
//  */
// export function UncloseParameter (
//     string : string,
//     prefix ?: string,
//     suffix ?: string,
// ) {
//
//     string = RemovePrefixCharacter({value: string, prefix});
//     string = RemoveSuffixCharacter({value: string, suffix});
//
//     return string;
// }
//
// export type UncloseArgument = Value<string> & Partial<Prefix & Suffix>;
//
// export function UncloseObject (
//     {value, prefix, suffix}  : UncloseArgument
// ) {
//
//     return UncloseParameter(value, prefix, suffix);
// }
//# sourceMappingURL=unclose.js.map