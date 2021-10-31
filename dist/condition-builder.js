import Pad from "./pad";
export default ConditionBuilder;
var ConditionBuilder;
(function (ConditionBuilder) {
    ConditionBuilder.Parameter = ConditionBuilderParameter;
    ConditionBuilder.Object = ConditionBuilderObject;
})(ConditionBuilder || (ConditionBuilder = {}));
export function ConditionBuilderParameter(argument, condition, separator = ' ') {
    return argument
        .filter(builder => builder.condition === undefined || builder.condition === condition)
        .map(Pad.Object)
        .join(separator);
}
export function ConditionBuilderObject({ argument, condition, separator, }) {
    return ConditionBuilderParameter(argument, condition, separator);
}
//# sourceMappingURL=condition-builder.js.map