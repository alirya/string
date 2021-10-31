var RemoveSuffix;
(function (RemoveSuffix) {
    RemoveSuffix.Parameter = RemoveSuffixParameter;
    RemoveSuffix.Object = RemoveSuffixObject;
})(RemoveSuffix || (RemoveSuffix = {}));
/**
 * remove {@param suffix} at the end of {@param value}
 */
export function RemoveSuffixParameter(value, suffix) {
    if (!value) {
        return value;
    }
    if (!suffix) {
        return value;
    }
    if (value.slice(-value.length) === suffix) {
        return value.slice(0, -value.length);
    }
    return value;
}
export function RemoveSuffixObject({ value, suffix }) {
    return RemoveSuffixParameter(value, suffix);
}
export default RemoveSuffix;
//# sourceMappingURL=remove-suffix.js.map