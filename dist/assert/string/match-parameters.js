import Truncate from "../../truncate";
export default function MatchParameters(value, valid, pattern, subject = 'string') {
    const strings = [];
    strings.push(subject, `"${Truncate.Parameters(value, 8)}"`);
    if (valid) {
        strings.push('match against');
    }
    else {
        strings.push('does not match against');
    }
    strings.push(pattern.source);
    return strings.join(' ') + '.';
}
//# sourceMappingURL=match-parameters.js.map