import Separator from "./separator/separator";
import Argument from "@dikac/t-function/argument/argument";
import { ConditionBuilderArgumentList } from "./condition-builder-parameters";
export type { ConditionBuilderArgumentList };
export declare type ConditionBuilderArgument<Condition> = Argument<ConditionBuilderArgumentList<Condition>[]> & Partial<Separator> & {
    condition: Condition;
};
export default function ConditionBuilderParameter<Condition>({ argument, condition, separator, }: ConditionBuilderArgument<Condition>): string;
