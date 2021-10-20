import MaximumType from "../string/maximum";
export default function Maximum({ value, maximum, inclusive, subject = 'string', }) {
    return new Error(MaximumType(false, value, maximum, inclusive, subject));
}
//# sourceMappingURL=maximum.js.map