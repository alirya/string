import endsWith from 'lodash/endsWith';


export default function SuffixParameters(string : string, suffix : string) : boolean {

    return endsWith(string, suffix);
}
