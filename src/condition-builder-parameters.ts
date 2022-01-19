import Prefix from "./prefix/prefix";
import Suffix from "./suffix/suffix";
import String from "./string/string";
import Circumfix from "./circumfix/circumfix";
import Pad from "./pad-parameter";
import Value from "@dikac/t-value/value";

export type ConditionBuilderArgumentList<Condition> =
    String<string> &
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
        .join(separator)
}
