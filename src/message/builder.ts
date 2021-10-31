import Message from "@dikac/t-message/message";
import Prefix from "../prefix/prefix";
import Suffix from "../suffix/suffix";
import ConditionBuilder, {ConditionBuilderArgument} from "../condition-builder";
import ToString from "../to-string";
import PickObject from "@dikac/t-object/pick";


export default Builder;



class BuilderBase<Condition> extends Array<ConditionBuilder.ArgumentList<Condition>> implements Readonly<Message<string>> {

    constructor(
        public condition : Condition,
        public separator : string = ' ',

    ) {
        super();
    }

    get message() : string {

        return this.toString();
    }

}


export class BuilderParameter<Condition> extends BuilderBase<Condition> implements ToString<[Condition|void, string|void]> {

    toString(condition ?: Condition, separator ?: string): string {

        return ConditionBuilder.Parameter(this, condition|| this.condition, separator || this.separator)
    }
}
export class BuilderObject<Condition> extends BuilderBase<Condition> implements ToString<[BuilderArgumentToString<Condition>]> {

    constructor({condition, separator} : BuilderArgument<Condition>) {
        super(condition, separator);
    }

    toString(argument : BuilderArgumentToString<Condition> = {}): string {

        return ConditionBuilder.Object({argument: this, ...Object.assign(argument, PickObject(this, 'condition', 'separator'))})
    }
}
namespace Builder {

    export const Parameter = BuilderParameter;
    export const Object = BuilderObject;
    export type Argument<Condition> = BuilderArgument<Condition>;
    export type ArgumentToString<Condition> = BuilderArgumentToString<Condition>;
}

export type BuilderArgument<Condition> = ConditionBuilder.Argument<Condition>;
export type BuilderArgumentToString<Condition> = Partial<Pick<ConditionBuilder.Argument<Condition>, 'condition'|'separator'>>;

