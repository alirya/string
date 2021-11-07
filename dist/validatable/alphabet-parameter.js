import AlphabetParameters from "./alphabet-parameters";
export default function AlphabetParameter({ value, message }) {
    return AlphabetParameters(value, (value, valid) => message({ value, valid }));
}
//# sourceMappingURL=alphabet-parameter.js.map