import PrefixCharacter from "./prefix";
import SuffixCharacter from "./suffix";

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

    string = PrefixCharacter.Parameters(string, prefix);
    string = SuffixCharacter.Parameters(string, suffix || prefix);

    return string;
}
