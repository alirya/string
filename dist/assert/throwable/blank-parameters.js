import BlankType from "../string/blank";
export default function BlankParameters(value, subject) {
    return new Error(BlankType.Parameters(false, value, subject));
}
//# sourceMappingURL=blank-parameters.js.map