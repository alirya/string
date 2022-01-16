import Prefix from './prefix/prefix';
import Suffix from './suffix/suffix';
import Circumfix from './circumfix/circumfix';
import Pad from './pad-parameter';
import Value from '@alirya/value/value';

export type ConditionBuilderArgumentList<Condition> =
    Value<string> &
    Partial<Prefix> &
    Partial<Suffix> &
    Partial<Circumfix> &
    {condition?:Condition};

export default function ConditionBuilderParameters<Condition>(
    argument : ConditionBuilderArgumentList<Condition>[],
    condition : Condition,
    separator : string = ' '
) : string {

    return argument
        .filter(builder=>builder.condition === undefined || builder.condition === condition)
        .map(Pad)
        .join(separator);
}
