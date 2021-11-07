import NotEmptyType from "../string/not-empty";
export default function NotEmptyParameters(value, subject = 'string') {
    return new Error(NotEmptyType.Parameters(value, false, subject));
}
//# sourceMappingURL=not-empty-parameters.js.map