import Match from "../../value/match";
export default function DigitParameters(value, valid, subject = 'string') {
    const strings = [];
    strings.push(subject);
    if (valid) {
        strings.push('is');
    }
    else {
        strings.push('must');
    }
    strings.push('digit');
    if (!valid) {
        let match = new Match(value, /[^0-9]{1,5}/);
        if (match.valid) {
            strings[2] = 'digit,';
            strings.push('contains', `"${match.match[0]}"`);
        }
    }
    return strings.join(' ') + '.';
}
//# sourceMappingURL=digit-parameters.js.map