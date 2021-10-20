import StringValidatable from "../validatable/string";
import StringString from "../validatable/string/string";
export default function String(message = StringString) {
    return function (value) {
        return StringValidatable({ value, message });
    };
}
//# sourceMappingURL=string.js.map