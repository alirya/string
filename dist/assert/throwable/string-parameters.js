import StringType from "../string/string";
export default function StringParameter(value, subject = 'type', conversion = value => typeof value) {
    return new TypeError(StringType.Parameters(value, false, subject, conversion));
}
//# sourceMappingURL=string-parameters.js.map