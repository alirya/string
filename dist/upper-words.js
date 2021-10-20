import UpperFirst from './upper-first';
export default function UpperWords({ string, separator }) {
    for (const split of string.match(separator) || []) {
        string = string.split(split).map(UpperFirst).join(split);
    }
    return UpperFirst(string);
}
//# sourceMappingURL=upper-words.js.map