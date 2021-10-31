var Prefix;
(function (Prefix) {
    Prefix.Parameter = PrefixParameter;
    Prefix.Object = PrefixObject;
})(Prefix || (Prefix = {}));
/**
 * prepend {@param prefix} to {@param value} if not exist and {@param value} not empty
 *
 * @param value
 * @param prefix
 */
export function PrefixParameter(value, prefix) {
    if (!value) {
        return value;
    }
    if (!prefix) {
        return value;
    }
    prefix = prefix[0];
    if (value[0] !== prefix) {
        return prefix + value;
    }
    return value;
}
export function PrefixObject({ value, prefix }) {
    if (value.length !== 0) {
        prefix = prefix[0];
        if (value[0] !== prefix) {
            return prefix + value;
        }
    }
    return value;
}
export default Prefix;
//# sourceMappingURL=prefix.js.map