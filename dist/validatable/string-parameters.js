import Callback from "@dikac/t-validator/validatable/callback";
import StringGuard from "../boolean/string";
export default function StringParameters(value, message) {
    return Callback.Function.Parameters(value, StringGuard, message);
}
//# sourceMappingURL=string-parameters.js.map