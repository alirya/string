import Pad from "./pad";
export default function ConditionBuilderParameters(argument, condition, separator = ' ') {
    return argument
        .filter(builder => builder.condition === undefined || builder.condition === condition)
        .map(Pad.Parameter)
        .join(separator);
}
//# sourceMappingURL=condition-builder-parameters.js.map