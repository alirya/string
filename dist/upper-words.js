import UpperFirst from './upper-first';
var UpperWords;
(function (UpperWords) {
    UpperWords.Parameter = UpperWordsParameter;
    UpperWords.Object = UpperWordsObject;
})(UpperWords || (UpperWords = {}));
export function UpperWordsObject({ value, separator }) {
    return UpperWordsParameter(value, separator);
}
export function UpperWordsParameter(value, separator) {
    for (const split of value.match(separator) || []) {
        value = value.split(split).map(UpperFirst).join(split);
    }
    return UpperFirst(value);
}
export default UpperWords;
//# sourceMappingURL=upper-words.js.map