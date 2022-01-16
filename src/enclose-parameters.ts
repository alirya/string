import PrefixCharacter from './prefix-parameters';
import SuffixCharacter from './suffix-parameters';

export default function EncloseParameters (
    string : string,
    circumfix : string,
)  : string ;

export default function EncloseParameters (
    string : string,
    prefix : string,
    suffix : string,
)  : string;

export default function EncloseParameters (
    string : string,
    prefix : string,
    suffix ?: string,
) : string {

    string = PrefixCharacter(string, prefix);
    string = SuffixCharacter(string, suffix || prefix);

    return string;
}
