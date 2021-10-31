import SafeCast from "./safe-cast";
var JoinAffix;
(function (JoinAffix) {
    JoinAffix.Parameter = JoinAffixParameter;
    JoinAffix.Object = JoinAffixObject;
})(JoinAffix || (JoinAffix = {}));
export function JoinAffixParameter(value, separator, prefix, suffix) {
    return SafeCast(prefix) + value.join(separator) + SafeCast(suffix);
}
export function JoinAffixObject({ value, separator, prefix, suffix, }) {
    return JoinAffixParameter(value, separator, prefix, suffix);
}
export default JoinAffix;
//# sourceMappingURL=join-affix.js.map