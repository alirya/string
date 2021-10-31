import Prefix from "./prefix/prefix";
import Suffix from "./suffix/suffix";
import Circumfix from "./circumfix/circumfix";
import Value from "@dikac/t-value/value";
import Separator from "./separator/separator";
import Argument from "@dikac/t-function/argument/argument";
export default ConditionBuilder;
declare namespace ConditionBuilder {
    const Parameter: typeof ConditionBuilderParameter;
    const Object: typeof ConditionBuilderObject;
    type Argument<Condition> = ConditionBuilderArgument<Condition>;
    type ArgumentList<Condition> = ConditionBuilderArgumentList<Condition>;
}
export declare type ConditionBuilderArgumentList<Condition> = Value<string> & Partial<Prefix> & Partial<Suffix> & Partial<Circumfix> & {
    condition?: Condition;
};
export declare type ConditionBuilderArgument<Condition> = Argument<ConditionBuilderArgumentList<Condition>[]> & Partial<Separator> & {
    condition: Condition;
};
export declare function ConditionBuilderParameter<Condition>(argument: ConditionBuilderArgumentList<Condition>[], condition: Condition, separator?: string): string;
export declare function ConditionBuilderObject<Condition>({ argument, condition, separator, }: ConditionBuilderArgument<Condition>): string;
