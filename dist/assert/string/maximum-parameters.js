import Count from "../../number/count";
export default function MaximumParameters(value, valid, maximum, inclusive, converter = Count, criteria = 'length', subject = 'string') {
    const strings = [];
    strings.push(subject, criteria);
    if (valid) {
        strings.push('is lower');
    }
    else {
        strings.push('must lower');
    }
    if (inclusive) {
        strings.push('or equal');
    }
    strings.push('than', maximum.toString() + (valid ? '' : ','));
    if (!valid) {
        strings.push(`actual`, criteria, converter(value).toString());
    }
    return strings.join(' ') + '.';
}
//# sourceMappingURL=maximum-parameters.js.map