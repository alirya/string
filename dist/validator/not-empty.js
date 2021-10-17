import NotEmptyValidatable from "../validatable/not-empty";
export default function NotEmpty(message) {
    return function (value) {
        return new NotEmptyValidatable(value, message);
    };
}
//# sourceMappingURL=not-empty.js.map