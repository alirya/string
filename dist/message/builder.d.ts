import Message from "@dikac/t-message/message";
import ConditionBuilder from "../condition-builder";
import ToString from "../to-string";
export default Builder;
declare class BuilderBase<Condition> extends Array<ConditionBuilder.ArgumentList<Condition>> implements Readonly<Message<string>> {
    condition: Condition;
    separator: string;
    constructor(condition: Condition, separator?: string);
    get message(): string;
}
export declare class BuilderParameter<Condition> extends BuilderBase<Condition> implements ToString<[Condition | void, string | void]> {
    toString(condition?: Condition, separator?: string): string;
}
export declare class BuilderObject<Condition> extends BuilderBase<Condition> implements ToString<[BuilderArgumentToString<Condition>]> {
    constructor({ condition, separator }: BuilderArgument<Condition>);
    toString(argument?: BuilderArgumentToString<Condition>): string;
}
declare namespace Builder {
    const Parameter: typeof BuilderParameter;
    const Object: typeof BuilderObject;
    type Argument<Condition> = BuilderArgument<Condition>;
    type ArgumentToString<Condition> = BuilderArgumentToString<Condition>;
}
export declare type BuilderArgument<Condition> = ConditionBuilder.Argument<Condition>;
export declare type BuilderArgumentToString<Condition> = Partial<Pick<ConditionBuilder.Argument<Condition>, 'condition' | 'separator'>>;
