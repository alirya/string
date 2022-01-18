import SafeCast from "../safe-cast";
import String from "../string/string";
import Escape from "../pattern/escape";
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
    } : String & Prefix & Suffix
) : (parameter : Partial<Parameter>) => string {

    return TemplateParameters(string, prefix, suffix)
}


