import PrefixCharacter from "./prefix";
import SuffixCharacter from "./suffix";
export default function EncloseParameters(string, prefix, suffix) {
    string = PrefixCharacter.Parameters(string, prefix);
    string = SuffixCharacter.Parameters(string, suffix || prefix);
    return string;
}
//# sourceMappingURL=enclose-parameters.js.map