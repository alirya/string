// import Message from "@dikac/t-message/message";
// import ConditionBuilder from "../condition-builder";
// import ToString from "../to-string";
//
//
// export default abstract class AbstractBuilder<Condition, ToStringOption extends unknown[]>
//     extends Array<ConditionBuilder.ArgumentList<Condition>>
//     implements Readonly<Message<string>>, ToString<ToStringOption>
// {
//
//     constructor(
//         public condition : Condition,
//         public separator : string = ' ',
//
//     ) {
//         super();
//     }
//
//     get message() : string {
//
//         return this.toString();
//     }
//
//     abstract toString(...argument: ToStringOption|[]): string;
//
// }
//
//# sourceMappingURL=abstract-builder.js.map