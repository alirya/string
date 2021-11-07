export default function NotBlankParameters(value, valid, subject = 'string') {
    const strings = [];
    strings.push(subject);
    if (valid) {
        strings.push('is not');
    }
    else {
        strings.push('must not');
    }
    strings.push('blank string');
    return strings.join(' ') + '.';
}
//# sourceMappingURL=not-blank-parameters.js.map