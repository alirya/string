import Callable from '../../function/dist/callable';
import Affix from './affix/affix';
import AffixContainer from './affix/affix/affix';
import String from './string/string';


type CircumfixParametersArgument<ExtraType extends {}> = String & Partial<AffixContainer> & ExtraType & {
    callback : {
        prefix: Callable<[Omit<CircumfixParametersArgument<ExtraType>,  'callback'>], string>,
        suffix: Callable<[Omit<CircumfixParametersArgument<ExtraType>,  'callback'>], string>,
    }
};

/**
 * Combine {@param argument.prefix} and {@param argument.suffix} to process {@param argument.string} depend on given {@param argument.affix}
 *
 * @param argument
 */
export default function CircumfixParameters<ExtraType extends {}>(
    argument : CircumfixParametersArgument<ExtraType>
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
