import Separator from "./separator/separator";
import Argument from "@alirya/function/argument/argument";
import ConditionBuilderParameters, {ConditionBuilderArgumentList} from "./condition-builder-parameters";

export type {ConditionBuilderArgumentList};

export type ConditionBuilderArgument<Condition> = Argument<ConditionBuilderArgumentList<Condition>[]> & Partial<Separator> & {condition : Condition};

export default function ConditionBuilderParameter<Condition>(
    {
        argument,
        condition,
        separator,
    } : ConditionBuilderArgument<Condition>
) : string {

    return ConditionBuilderParameters(argument, condition, separator)
}

