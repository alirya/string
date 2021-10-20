import AlphabetValidatable from "../validatable/alphabet";
import AlphabetString from "../validatable/string/alphabet";
export default function Alphabet(message = AlphabetString) {
    return function (value) {
        return AlphabetValidatable({ value, message });
    };
}
//# sourceMappingURL=alphabet.js.map