import endsWith from 'lodash/endsWith';

export default function SuffixParameter(string : string, suffix : string) : boolean {

    return endsWith(string, suffix);
}
