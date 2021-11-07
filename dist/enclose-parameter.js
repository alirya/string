import EncloseParameters from "./enclose-parameters";
export default function EncloseParameter({ value, prefix, circumfix, suffix, }) {
    return EncloseParameters(value, prefix || circumfix, suffix);
}
//# sourceMappingURL=enclose-parameter.js.map