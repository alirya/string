import ConditionBuilder from "../condition-builder";
import PickObject from "@dikac/t-object/pick";
export default Builder;
class BuilderBase extends Array {
    constructor(condition, separator = ' ') {
        super();
        this.condition = condition;
        this.separator = separator;
    }
    get message() {
        return this.toString();
    }
}
export class BuilderParameter extends BuilderBase {
    toString(condition, separator) {
        return ConditionBuilder.Parameter(this, condition || this.condition, separator || this.separator);
    }
}
export class BuilderObject extends BuilderBase {
    constructor({ condition, separator }) {
        super(condition, separator);
    }
    toString(argument = {}) {
        return ConditionBuilder.Object(Object.assign({ argument: this }, Object.assign(argument, PickObject(this, 'condition', 'separator'))));
    }
}
var Builder;
(function (Builder) {
    Builder.Parameter = BuilderParameter;
    Builder.Object = BuilderObject;
})(Builder || (Builder = {}));
//# sourceMappingURL=builder.js.map