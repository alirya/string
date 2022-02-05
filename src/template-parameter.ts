import String from './string/string';
import Prefix from './prefix/prefix';
import Suffix from './suffix/suffix';
import Argument from '@alirya/function/argument/argument';
import TemplateParameters from './template-parameters';

/**
 * Option version of {@see TemplateParameters}
 */
export default function TemplateParameter<Parameter extends object>(
    {
        string,
        argument,
        prefix,
        suffix,
    } : String & Partial<Prefix & Suffix> & Argument<Parameter>
) : string {

    return TemplateParameters(string, argument, prefix, suffix);
}
