import BlankType from "../string/blank";
export default function Blank({ value, subject = 'string' }) {
    return new Error(BlankType(false, value, subject));
}
//# sourceMappingURL=blank.js.map