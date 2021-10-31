import PrefixCharacter from "./prefix";
import SuffixCharacter from "./suffix";
export function EncloseParameter(string, prefix, suffix) {
    string = PrefixCharacter.Parameter(string, prefix);
    string = SuffixCharacter.Parameter(string, suffix || prefix);
    return string;
}
export function Enclose({ value, prefix, circumfix, suffix, }) {
    return EncloseParameter(value, prefix || circumfix, suffix);
}
//# sourceMappingURL=enclose.js.map