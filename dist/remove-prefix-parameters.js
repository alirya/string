/**
 * remove {@param prefix} at the start of {@param value}
 */
export default function RemovePrefixParameters(value, prefix) {
    if (!value) {
        return value;
    }
    if (!prefix) {
        return value;
    }
    prefix = prefix[0];
    if (value.slice(0, prefix.length) === prefix) {
        return value.slice(prefix.length);
    }
    return value;
}
//# sourceMappingURL=remove-prefix-parameters.js.map