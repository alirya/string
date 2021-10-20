import AlphanumericType from "../string/alphanumeric";
export default function Alphanumeric({ value, subject = 'string' }) {
    return new Error(AlphanumericType(false, value, subject));
}
//# sourceMappingURL=alphanumeric.js.map