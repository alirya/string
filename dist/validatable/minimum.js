import MinimumObject from "./boolean/minimum";
import Callback from "@dikac/t-validator/validatable/callback";
export default function Minimum({ value, minimum, inclusive, message, converter }) {
    return Callback({ value, minimum, inclusive, converter }, MinimumObject, message);
}
//# sourceMappingURL=minimum.js.map