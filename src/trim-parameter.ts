import String from './string/string';
import Suffix from './suffix/suffix';
import Circumfix from './circumfix/circumfix';
import Prefix from './prefix/prefix';
import TrimParameters from './trim-parameters';

export type TrimParameterArgumentCircumfix = String & Circumfix;
export type TrimParameterArgumentPair = String & Prefix & Suffix;

export default function TrimParameter({string} : String);
export default function TrimParameter({string, circumfix} : TrimParameterArgumentCircumfix);
export default function TrimParameter({string, prefix, suffix} : TrimParameterArgumentPair);
export default function TrimParameter({string, circumfix, prefix, suffix} : TrimParameterArgumentPair & TrimParameterArgumentCircumfix) {

    return TrimParameters(string, circumfix || prefix, suffix);
}

