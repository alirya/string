import StringValidatable from "../validatable/string";
export default function String(message) {
    return function (value) {
        return StringValidatable(value, message);
    };
}
//# sourceMappingURL=string.js.map