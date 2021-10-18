import IsDigit from "../boolean/digit";
export default class Digit {
    constructor(value, message) {
        this.value = value;
        this.messageFactory = message;
        this.valid = IsDigit(value);
    }
    toString() {
        return this.value;
    }
    get message() {
        return this.messageFactory(this);
    }
    valueOf() {
        return this.value;
    }
}
//# sourceMappingURL=digit.js.map