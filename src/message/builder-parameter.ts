// import ConditionBuilder from "../condition-builder";
// import PickObject from "@dikac/t-object/pick";
// import AbstractBuilder from "./abstract-builder";
//
// export type BuilderArgumentToString<Condition> = Partial<Pick<ConditionBuilder.Argument<Condition>, 'condition'|'separator'>>;
// export type BuilderArgument<Condition> = ConditionBuilder.Argument<Condition>;
//
// export default class BuilderParameter<Condition> extends AbstractBuilder<Condition, [BuilderArgumentToString<Condition>]> {
//
//     constructor({condition, separator} : BuilderArgument<Condition>) {
//         super(condition, separator);
//     }
//
//     toString(argument : BuilderArgumentToString<Condition> = {}): string {
//
//         return ConditionBuilder.Parameter({argument: this, ...Object.assign(argument, PickObject(this, 'condition', 'separator'))})
//     }
// }
