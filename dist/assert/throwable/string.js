import StringType from "../string/string";
export default function String({ value, subject = 'type', conversion = value => typeof value }) {
    return new TypeError(StringType(false, value, subject, conversion));
}
//# sourceMappingURL=string.js.map