import EmptyType from "../string/empty";
export default function EmptyParameter(value, subject = 'string') {
    return new Error(EmptyType.Parameters(value, false, subject));
}
//# sourceMappingURL=empty-parameters.js.map