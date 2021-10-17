import AlphanumericValidatable from "../validatable/alphanumeric";
export default function Alphanumeric(message) {
    return function (value) {
        return new AlphanumericValidatable(value, message);
    };
}
//# sourceMappingURL=alphanumeric.js.map