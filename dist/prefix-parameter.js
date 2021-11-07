export default function PrefixParameter({ value, prefix }) {
    if (value.length !== 0) {
        prefix = prefix[0];
        if (value[0] !== prefix) {
            return prefix + value;
        }
    }
    return value;
}
//# sourceMappingURL=prefix-parameter.js.map