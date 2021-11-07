/**
 * remove {@param suffix} at the end of {@param value}
 */
export default function RemoveSuffixParameters(value, suffix) {
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
//# sourceMappingURL=remove-suffix-parameters.js.map