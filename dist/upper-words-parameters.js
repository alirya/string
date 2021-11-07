import UpperFirst from './upper-first';
export default function UpperWordsParameters(value, separator) {
    for (const split of value.match(separator) || []) {
        value = value.split(split).map(UpperFirst).join(split);
    }
    return UpperFirst(value);
}
//# sourceMappingURL=upper-words-parameters.js.map