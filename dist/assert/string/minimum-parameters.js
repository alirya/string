import Count from "../../number/count";
export default function MinimumParameters(value, valid, minimum, inclusive, converter = Count, criteria = 'length', subject = 'string') {
    const strings = [];
    strings.push(subject, 'length');
    if (valid) {
        strings.push(`is greater`);
    }
    else {
        strings.push(`must greater`);
    }
    if (inclusive) {
        strings.push(`or equal`);
    }
    strings.push('than', minimum.toString() + (valid ? '' : ','));
    if (!valid) {
        strings.push(`actual`, criteria, converter(value).toString());
    }
    return strings.join(' ') + '.';
}
//# sourceMappingURL=minimum-parameters.js.map