import AlphabetValidatable from "../validatable/alphabet";
import AlphabetString from "../assert/string/alphabet";
export default function Alphabet(message = AlphabetString.Parameters) {
    return function (value) {
        return AlphabetValidatable.Parameters(value, message);
    };
}
//# sourceMappingURL=alphabet-parameters.js.map