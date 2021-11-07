import Match from "../../value/match";
export default function NumericParameters(value, valid, subject = 'string') {
    const strings = [];
    strings.push(subject);
    if (valid) {
        strings.push('is');
    }
    else {
        strings.push('must');
    }
    strings.push('numeric');
    if (!valid) {
        let match = new Match(value, /[^0-9]{1,5}/);
        if (match.valid) {
            strings[2] = 'numeric,';
            strings.push(`contain`, `"${match.match[0]}"`);
        }
    }
    return strings.join(' ') + '.';
}
//# sourceMappingURL=numeric-parameters.js.map