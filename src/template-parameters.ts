import CompiledTemplate from "./function/template-parameters";

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
export default function TemplateParameters<Parameter extends object>(
    string : string,
    argument : Partial<Parameter>,
    prefix ?: string,
    suffix ?: string
) : string {

    return CompiledTemplate(string, prefix, suffix)(argument)
}
