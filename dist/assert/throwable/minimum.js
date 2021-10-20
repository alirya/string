import MinimumType from "../string/minimum";
export default function Minimum({ value, minimum, inclusive, subject = 'string', }) {
    return new Error(MinimumType(false, value, minimum, inclusive, subject));
}
//# sourceMappingURL=minimum.js.map