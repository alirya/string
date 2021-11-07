import PadParameters from "./pad-parameters";
export default function PadParameter({ value, length, prefix, suffix, circumfix }) {
    return PadParameters(value, length, circumfix || prefix, circumfix || suffix);
}
//# sourceMappingURL=pad-parameter.js.map