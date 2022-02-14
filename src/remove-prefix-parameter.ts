import String from './string/string';
import Prefix from './prefix/prefix';
import RemovePrefixParameters from './remove-prefix-parameters';

export type RemovePrefixParameterArgument = String & Partial<Prefix>;

/**
 * remove {@param prefix} at the start of {@param value}
 */
export default function RemovePrefixParameter(
    {
        string,
        prefix
    } : RemovePrefixParameterArgument
) : string {

    return RemovePrefixParameters(string, prefix);
}

