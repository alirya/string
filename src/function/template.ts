import SafeCast from '../safe-cast.js';
import Escape from '../pattern/escape.js';
import Callback from '@alirya/function/callback/callback.js';
import Callable from '@alirya/function/callable.js';
import String from '../string/string.js';
import Prefix from '../prefix/prefix.js';
import Suffix from '../suffix/suffix.js';

/**
 * create a string template callback for key object or array
 *
 * @param string
 * template, key must be starting with {@param prefix} and ending with {@param suffix}
 *
 * @param prefix
 * @default '{'
 * prefix key template
 *
 * @param suffix
 * @default '}'
 * suffix key template
 *
 * @param callback
 * post process after string generated
 *
 * @example
 * Template('hello, {target}', '{', '}') => ({target:'world'}) => hello, world'
 */
export function TemplateParameters<Parameter extends object>(
    string : string,
    prefix  = '{',
    suffix  = '}',
    callback : (string) => string = (string)=>string
) : (parameter : Partial<Parameter>) => string {

    prefix = prefix[0];
    suffix = suffix[0];

    const prefixEscaped = Escape(prefix);
    const suffixEscaped = Escape(suffix);


    const prefixPattern = new RegExp(`^(${prefixEscaped})+`);
    const suffixPattern = new RegExp(`(${suffixEscaped})+$`);

    const regex = new RegExp(`${prefixEscaped}+[0-9a-zA-Z]+${suffixEscaped}+`, 'g');

    let current  = 0;

    const parts : string[] = [];
    const keys : number[] = [];

    string.replace(regex, (match : string, position : number, string : string) => {

        const previous = string.slice(current, position);

        parts.push(previous);

        const next = string.slice(position, position + match.length);

        const prefixLength = (match.match(prefixPattern) as RegExpMatchArray)[0].length;
        const suffixLength = (match.match(suffixPattern) as RegExpMatchArray)[0].length;

        if(prefixLength !== suffixLength) {

            throw new Error(`Mismatch opening and closing count at ${match}`);
        }

        const odd = prefixLength % 2;
        const repeat = Math.floor(prefixLength / 2);

        parts.push(prefix.repeat(repeat));

        const property = next.slice(prefixLength, match.length - suffixLength);

        if(odd) {

            keys.push(parts.length);
        }

        parts.push(property);

        parts.push(suffix.repeat(repeat));

        current = position + match.length;

        return '';
    });

    // push tail
    if(current !== string.length) {

        parts.push(string.slice(current));
    }

    return function (parameter : Parameter) : string {

        const copy = Array.from(parts);

        for (const key of keys) {

            copy[key] = SafeCast(parameter[copy[key]]);
        }

        return callback(copy.join(''));
    };
}




/**
 * Option version of {@see TemplateParameters}
 */
export function TemplateParameter<Parameter extends object>(
    {
        string,
        prefix,
        suffix,
        callback
    } : String & Partial<Prefix & Suffix & Callback<Callable<[string], string>>>
) : (parameter : Partial<Parameter>) => string {

    return TemplateParameters(string, prefix, suffix, callback);
}




namespace Template {
    export const Parameters = TemplateParameters;
    export const Parameter = TemplateParameter;
}
export default Template;
