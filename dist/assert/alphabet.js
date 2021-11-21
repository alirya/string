import Guard from "../boolean/alphabet";
import Callback from "@dikac/t-function/assert/callback-parameters";
import AlphabetError from "./throwable/alphabet";
export default function Alphabet(value, error = AlphabetError.Parameter) {
    Callback(value, Guard, error);
}
//# sourceMappingURL=alphabet.js.map