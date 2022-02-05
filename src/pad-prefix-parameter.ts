import String from './string/string';
import Prefix from './prefix/prefix';
import PadPrefixParameters from './pad-prefix-parameters';

export type PadPrefixArgument = String & Prefix & {length:number};

export default function PadPrefixParameter({string, length , prefix} : PadPrefixArgument) {

    return PadPrefixParameters(string, length, prefix);
}

