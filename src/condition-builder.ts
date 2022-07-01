import Prefix from './prefix/prefix';
import Suffix from './suffix/suffix';
import String from './string/string';
import Circumfix from './circumfix/circumfix';
import Separator from './separator/separator';
import Argument from '@alirya/function/argument/argument';
import Pad from './pad';

export type ConditionBuilderArgumentsList<Condition> =
    String<string> &
    Partial<Prefix> &
    Partial<Suffix> &
    Partial<Circumfix> &
    {condition?:Condition};

export function ConditionBuilderParameters<Condition>(
    argument : ConditionBuilderArgumentsList<Condition>[],
    condition : Condition,
    separator : string = ' '
) : string {

    return argument
        .filter(builder=>builder.condition === undefined || builder.condition === condition)
        .map(Pad.Parameter)
        .join(separator);
}


export type ConditionBuilderArgument<Condition> = Argument<ConditionBuilderArgumentsList<Condition>[]> & Partial<Separator> & {condition : Condition};

export function ConditionBuilderParameter<Condition>(
    {
        argument,
        condition,
        separator,
    } : ConditionBuilderArgument<Condition>
) : string {

    return ConditionBuilderParameters(argument, condition, separator);
}



namespace ConditionBuilder {
    export const Parameters = ConditionBuilderParameters;
    export const Parameter = ConditionBuilderParameter;
    export type ArgumentsList<Condition> = ConditionBuilderArgumentsList<Condition>;
    export type Argument<Condition> = ConditionBuilderArgument<Condition>;
}
export default ConditionBuilder;
