import NotEmptyType from "../string/not-empty";
export default function NotEmpty({ value, subject = 'string' }) {
    return new Error(NotEmptyType(false, value, subject));
}
//# sourceMappingURL=not-empty.js.map