import MaximumObject from "./boolean/maximum";
import Callback from "@dikac/t-validator/validatable/callback";
export default function Minimum({ value, maximum, inclusive, message, converter }) {
    return Callback({ value, maximum, inclusive, converter }, MaximumObject, message);
}
//# sourceMappingURL=maximum.js.map