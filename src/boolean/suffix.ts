import endsWith from 'lodash/endsWith.js';


export function SuffixParameters(string : string, suffix : string) : boolean {

    return endsWith(string, suffix);
}


export function SuffixParameter({
    string,
    suffix
} : {string: string, suffix: string}) : boolean {

    return SuffixParameters(string, suffix);
}


namespace Suffix {
    export const Parameters = SuffixParameters;
    export const Parameter = SuffixParameter;
}
export default Suffix;
