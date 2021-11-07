import Prefix from "./prefix/prefix";
import Suffix from "./suffix/suffix";
import Circumfix from "./circumfix/circumfix";
import Value from "@dikac/t-value/value";
export declare type ConditionBuilderArgumentList<Condition> = Value<string> & Partial<Prefix> & Partial<Suffix> & Partial<Circumfix> & {
    condition?: Condition;
};
export default function ConditionBuilderParameters<Condition>(argument: ConditionBuilderArgumentList<Condition>[], condition: Condition, separator?: string): string;
