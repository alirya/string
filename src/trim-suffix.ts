import trimEnd from 'lodash/trimEnd';
import Suffix from './suffix/suffix';
import String from './string/string';

const TrimSuffixParameters : (string : string, suffix ?: string) => string = trimEnd;

export {TrimSuffixParameters};


export type TrimSuffixArgument = String & Partial<Suffix>;

export function TrimSuffixParameter({string, suffix} : TrimSuffixArgument) {

    return TrimSuffixParameters(string, suffix);
}

namespace TrimSuffix {
    export const Parameters = TrimSuffixParameters;
    export const Parameter = TrimSuffixParameter;
    export type Argument = TrimSuffixArgument;
}

export default TrimSuffix;
