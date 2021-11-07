import AlphanumericType from "../string/alphanumeric";
export default function AlphanumericParameter(value, subject = 'string') {
    return new Error(AlphanumericType.Parameters(value, false, subject));
}
//# sourceMappingURL=alphanumeric-parameters.js.map