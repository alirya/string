import NotBlankType from "../string/not-empty";
export default function NotBlankParameters(value, subject = 'string') {
    return new Error(NotBlankType.Parameters(value, false, subject));
}
//# sourceMappingURL=not-blank-parameters.js.map