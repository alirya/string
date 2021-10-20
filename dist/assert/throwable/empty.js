import EmptyType from "../string/empty";
export default function Empty({ value, subject = 'string' }) {
    return new Error(EmptyType(false, value, subject));
}
//# sourceMappingURL=empty.js.map