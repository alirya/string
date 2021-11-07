import NotEmptyBoolean from "../boolean/not-empty";
import Callback from "@dikac/t-validator/validatable/callback";
export default function NotEmptyParameters(value, message) {
    return Callback.Function.Parameters(value, NotEmptyBoolean, message);
}
//# sourceMappingURL=not-empty-parameters.js.map