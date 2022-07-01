import CompiledTemplate from './function/template';
import String from './string/string';
import Prefix from './prefix/prefix';
import Suffix from './suffix/suffix';
import Argument from '@alirya/function/argument/argument';

/**
 * string template for key object or array
 *
 * direct call {@see CompiledTemplate} callback
 * for better performance and reusable temple {@see CompiledTemplate}
 *
 * @param string
 * {@see CompiledTemplate}
 *
 * @param argument
 * object or array for replacement source, if not found will be substituted by empty string
 *
 * @param prefix
 * {@see CompiledTemplate}
 *
 * @param suffix
 * {@see CompiledTemplate}
 *
 * @example
 * Template('hello, {target}', {target:'world'}, '{', '}') => hello, world'
 *
 */
export function TemplateParameters<Parameter extends object>(
    string : string,
    argument : Partial<Parameter>,
    prefix ?: string,
    suffix ?: string
) : string {

    return CompiledTemplate.Parameters(string, prefix, suffix)(argument);
}


/**
 * Option version of {@see TemplateParameters}
 */
export function TemplateParameter<Parameter extends object>(
    {
        string,
        argument,
        prefix,
        suffix,
    } : String & Partial<Prefix & Suffix> & Argument<Parameter>
) : string {

    return TemplateParameters(string, argument, prefix, suffix);
}


namespace Template {
    export const Parameters = TemplateParameters;
    export const Parameter = TemplateParameter;
}
export default Template;
