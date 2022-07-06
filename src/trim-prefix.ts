import trimStart from 'lodash/trimStart.js';
import Prefix from './prefix/prefix.js';
import String from './string/string.js';

const TrimPrefixParameters : (string : string, prefix ?: string) => string = trimStart;

export {TrimPrefixParameters};


export type TrimPrefixArgument = String & Partial<Prefix>;

export function TrimPrefixParameter({string, prefix} : TrimPrefixArgument) {

    return TrimPrefixParameters(string, prefix);
}



namespace TrimPrefix {
    export const Parameters = TrimPrefixParameters;
    export const Parameter = TrimPrefixParameter;
}
export default TrimPrefix;
