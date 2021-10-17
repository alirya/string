import AlphabetValidatable from "../validatable/alphabet";
export default function Alphabet(message) {
    return function (value) {
        return new AlphabetValidatable(value, message);
    };
}
//# sourceMappingURL=alphabet.js.map