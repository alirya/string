import Callable from '@axiona/function/callable.js';
import Affix from './affix/affix.js';
import AffixContainer from './affix/affix/affix.js';
import String from './string/string.js';

/**
 * Combine {@param prefix} and {@param suffix} to process {@param string} depend on given {@param affix}
 *
 * @param string
 * @param prefix
 * @param suffix
 * @param affix
 * @param argument
 * extra argument for {@param prefix} and {@param suffix}
 * @constructor
 */
export function CircumfixParameters<Arguments extends unknown[]>(
    string: string,
    prefix: Callable<[string, ...Arguments], string>,
    suffix: Callable<[string, ...Arguments], string>,
    affix : Affix,
    argument: Arguments,
) : string;

export function CircumfixParameters(
    string: string,
    prefix: Callable<[string], string>,
    suffix: Callable<[string], string>,
    affix ?: Affix
) : string;

export function CircumfixParameters<Arguments extends unknown[]>(
    string: string,
    prefix: Callable<[string, ...Arguments], string>,
    suffix: Callable<[string, ...Arguments], string>,
    affix : Affix = Affix.CIRCUMFIX,
    argument: Arguments|[] = [],
) : string {

    if(affix === Affix.CIRCUMFIX || affix === Affix.PREFIX) {

        string = prefix(string, ...argument as Arguments);
    }

    if(affix === Affix.CIRCUMFIX || affix === Affix.SUFFIX) {

        string = suffix(string, ...argument as Arguments);
    }

    return string;
}



type CircumfixArgument<ExtraType extends {}> = String & Partial<AffixContainer> & ExtraType & {
    callback : {
        prefix: Callable<[Omit<CircumfixArgument<ExtraType>,  'callback'>], string>,
        suffix: Callable<[Omit<CircumfixArgument<ExtraType>,  'callback'>], string>,
    }
};

/**
 * Combine {@param argument.prefix} and {@param argument.suffix} to process {@param argument.string} depend on given {@param argument.affix}
 *
 * @param argument
 */
export function CircumfixParameter<ExtraType extends {}>(
    argument : CircumfixArgument<ExtraType>
) : string {

    const {prefix, suffix} = argument.callback;

    if(!argument.affix) {

        argument.affix = Affix.CIRCUMFIX;
    }

    const string = Object.assign({}, argument);

    if(argument.affix === Affix.CIRCUMFIX || argument.affix === Affix.PREFIX) {

        string.string = prefix(string);
    }

    if(argument.affix === Affix.CIRCUMFIX || argument.affix === Affix.SUFFIX) {

        string.string = suffix(string);
    }

    return string.string;
}


namespace Circumfix {
    export const Parameters = CircumfixParameters;
    export const Parameter = CircumfixParameter;
    export type Argument<ExtraType extends {}> = CircumfixArgument<ExtraType>;
}
export default Circumfix;
