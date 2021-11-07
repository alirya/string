import SafeCast from "./safe-cast";
export default function JoinAffixParameters(value, separator, prefix, suffix) {
    return SafeCast(prefix) + value.join(separator) + SafeCast(suffix);
}
//# sourceMappingURL=join-affix-parameters.js.map