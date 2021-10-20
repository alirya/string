import Callback from "@dikac/t-validator/validatable/callback";
import StringGuard from "../boolean/string";
export default function String({ value, message }) {
    return Callback(value, StringGuard, message);
}
//# sourceMappingURL=string.js.map