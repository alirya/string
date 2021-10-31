import Message from "@dikac/t-message/message";
import Prefix from "./prefix/prefix";
import Suffix from "./suffix/suffix";
import Circumfix from "./circumfix/circumfix";
import Pad from "./pad";
import Value from "@dikac/t-value/value";
import Separator from "./separator/separator";
import Argument from "@dikac/t-function/argument/argument";

export default ConditionBuilder;
namespace ConditionBuilder {

    export const Parameter = ConditionBuilderParameter;
    export const Object = ConditionBuilderObject;
    export type Argument<Condition> = ConditionBuilderArgument<Condition>;
    export type ArgumentList<Condition> = ConditionBuilderArgumentList<Condition>;
}


export type ConditionBuilderArgumentList<Condition> =
    Value<string> &
    Partial<Prefix> &
    Partial<Suffix> &
    Partial<Circumfix> &
    {condition?:Condition};


export type ConditionBuilderArgument<Condition> = Argument<ConditionBuilderArgumentList<Condition>[]> & Partial<Separator> & {condition : Condition};


export function ConditionBuilderParameter<Condition>(
    argument : ConditionBuilderArgumentList<Condition>[],
    condition : Condition,
    separator : string = ' '
) : string {

    return argument
        .filter(builder=>builder.condition === undefined || builder.condition === condition)
        .map(Pad.Object)
        .join(separator)
}

export function ConditionBuilderObject<Condition>(
    {
        argument,
        condition,
        separator,
    } : ConditionBuilderArgument<Condition>
) : string {

    return ConditionBuilderParameter(argument, condition, separator)
}
