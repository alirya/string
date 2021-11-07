import ConditionBuilderParameter, {
    ConditionBuilderArgument,
    ConditionBuilderArgumentList
} from "./condition-builder-parameter";
import ConditionBuilderParameters from "./condition-builder-parameters";

namespace ConditionBuilder {

    export const Parameter = ConditionBuilderParameter;
    export const Parameters = ConditionBuilderParameters;
    export type Argument<Condition> = ConditionBuilderArgument<Condition>;
    export type ArgumentList<Condition> = ConditionBuilderArgumentList<Condition>;
}

export default ConditionBuilder;
