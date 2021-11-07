export default class Callback {
    constructor(callback, argument) {
        this.callback = callback;
        this.argument = (argument !== null && argument !== void 0 ? argument : []);
    }
    toString(...options) {
        return this.callback(...this.argument);
    }
}
//# sourceMappingURL=callback.js.map