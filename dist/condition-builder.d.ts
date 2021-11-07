import ConditionBuilderParameter, { ConditionBuilderArgument, ConditionBuilderArgumentList } from "./condition-builder-parameter";
import ConditionBuilderParameters from "./condition-builder-parameters";
declare namespace ConditionBuilder {
    const Parameter: typeof ConditionBuilderParameter;
    const Parameters: typeof ConditionBuilderParameters;
    type Argument<Condition> = ConditionBuilderArgument<Condition>;
    type ArgumentList<Condition> = ConditionBuilderArgumentList<Condition>;
}
export default ConditionBuilder;
