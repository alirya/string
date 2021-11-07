import Separator from "./separator/separator";
import Argument from "@dikac/t-function/argument/argument";
import ConditionBuilderParameters, {ConditionBuilderArgumentList} from "./condition-builder-parameters";

export type {ConditionBuilderArgumentList};
// export type ConditionBuilderArgumentList<Condition> =
//     Value<string> &
//     Partial<Prefix> &
//     Partial<Suffix> &
//     Partial<Circumfix> &
//     {condition?:Condition};

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

