import EmptyValidatable from "../validatable/empty";
export default function Empty(message) {
    return function (value) {
        return new EmptyValidatable(value, message);
    };
}
//# sourceMappingURL=empty.js.map