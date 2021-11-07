import MinimumValidatable from "../validatable/minimum";
export default function MinimumParameter({ minimum, inclusive, message, converter }) {
    return function (value) {
        return MinimumValidatable.Parameter({ value, minimum, inclusive, message, converter });
    };
}
//# sourceMappingURL=minimum-parameter.js.map