import Argument from '@alirya/function/argument/argument.js';
import ToString from './to-string.js';

export default class Callback<
    Arguments extends unknown[] = unknown[]
> implements Argument<Arguments>, ToString<Partial<Arguments>> {

    public argument: Arguments;

    constructor(
        callback : () => string,
    );
    constructor(
        callback : (...argument : Arguments) => string,
        argument: Arguments
    );
    constructor(
        public callback : (...argument : Arguments) => string,
        argument ?: Arguments
    ) {

        this.argument = (argument ?? []) as Arguments;
    }

    toString(...options : Arguments): string {

        return this.callback(...this.argument);
    }

}
