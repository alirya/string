export default function NotEmptyParameters(value, valid, subject = 'string') {
    const strings = [];
    strings.push(subject);
    if (valid) {
        strings.push('is not');
    }
    else {
        strings.push('must not');
    }
    strings.push('empty string');
    return strings.join(' ') + '.';
}
//# sourceMappingURL=not-empty-parameters.js.map