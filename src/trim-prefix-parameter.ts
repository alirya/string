import Prefix from './prefix/prefix';
import String from './string/string';
import TrimPrefixParameters from './trim-prefix-parameters';

export type TrimPrefixArgument = String & Partial<Prefix>;

export default function TrimPrefixParameter({value, prefix} : TrimPrefixArgument) {

    return TrimPrefixParameters(value, prefix);
}

