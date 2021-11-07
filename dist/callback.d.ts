import Argument from "@dikac/t-function/argument/argument";
import ToString from "./to-string";
export default class Callback<Arguments extends unknown[] = unknown[]> implements Argument<Arguments>, ToString<Partial<Arguments>> {
    callback: (...argument: Arguments) => string;
    argument: Arguments;
    constructor(callback: () => string);
    constructor(callback: (...argument: Arguments) => string, argument: Arguments);
    toString(...options: Arguments): string;
}
