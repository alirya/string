import AlphabetType from "../string/alphabet";
export default function AlphabetParameter(value, subject = 'string') {
    return new Error(AlphabetType.Parameters(value, false, subject));
}
//# sourceMappingURL=alphabet-parameters.js.map