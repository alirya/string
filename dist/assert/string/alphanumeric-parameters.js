import Match from "../../value/match";
export default function AlphanumericParameters(value, valid, subject = 'string') {
    const strings = [];
    strings.push(subject);
    if (valid) {
        strings.push('is');
    }
    else {
        strings.push('must');
    }
    strings.push('alphanumeric');
    if (!valid) {
        let match = new Match(value, /[^a-zA-Z0-9]{1,5}/);
        if (match.valid) {
            strings[2] = 'alphanumeric,';
            strings.push('contains', `"${match.match[0]}"`);
        }
    }
    return strings.join(' ') + '.';
}
//# sourceMappingURL=alphanumeric-parameters.js.map