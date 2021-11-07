import StringParameters from "./string-parameters";
export default function StringParameter({ valid, value, subject = 'type', conversion = value => typeof value }) {
    return StringParameters(value, valid, subject, conversion);
}
//# sourceMappingURL=string-parameter.js.map