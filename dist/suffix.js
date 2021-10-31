var Suffix;
(function (Suffix) {
    Suffix.Parameter = SuffixParameter;
    Suffix.Object = SuffixObject;
})(Suffix || (Suffix = {}));
/**
 * append {@param suffix} to {@param value} if not exist and {@param value} not empty
 *
 * @param value
 * @param suffix
 */
export function SuffixParameter(value, suffix) {
    if (!suffix) {
        return value;
    }
    if (!value) {
        return value;
    }
    suffix = suffix[0];
    if (value[value.length - 1] !== suffix) {
        return value + suffix;
    }
    return value;
}
export function SuffixObject({ value, suffix }) {
    return SuffixParameter(value, suffix);
}
export default Suffix;
//# sourceMappingURL=suffix.js.map