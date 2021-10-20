import NotBlankType from "../string/not-blank";
export default function NotBlank({ value, subject = 'string' }) {
    return new Error(NotBlankType(false, value, subject));
}
//# sourceMappingURL=not-blank.js.map