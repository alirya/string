import AlphabetValidatable from "../validatable/alphabet";
import AlphabetString from "../assert/string/alphabet";
export default function AlphabetParameter(message = AlphabetString.Parameter) {
    return function (value) {
        return AlphabetValidatable.Parameter({ value, message });
    };
}
//# sourceMappingURL=alphabet-parameter.js.map