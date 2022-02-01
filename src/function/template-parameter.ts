import Callback from '@alirya/function/callback/callback';
import Callable from '@alirya/function/callable';
import String from "../string/string";
import Prefix from "../prefix/prefix";
import Suffix from "../suffix/suffix";
import TemplateParameters from "./template-parameters";

/**
 * Option version of {@see TemplateParameters}
 */
export default function TemplateParameter<Parameter extends object>(
    {
        string,
        prefix,
        suffix,
        callback
    } : String & Partial<Prefix & Suffix & Callback<Callable<[string], string>>>
) : (parameter : Partial<Parameter>) => string {

    return TemplateParameters(string, prefix, suffix, callback);
}


