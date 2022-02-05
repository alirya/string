import Callable from '../../function/dist/callable';
import Affix from './affix/affix';

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
export default function CircumfixParameters<Arguments extends unknown[]>(
    string: string,
    prefix: Callable<[string, ...Arguments], string>,
    suffix: Callable<[string, ...Arguments], string>,
    affix : Affix,
    argument: Arguments,
) : string;

export default function CircumfixParameters(
    string: string,
    prefix: Callable<[string], string>,
    suffix: Callable<[string], string>,
    affix ?: Affix
) : string;

export default function CircumfixParameters<Arguments extends unknown[]>(
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
