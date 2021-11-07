import Truncate from "../../truncate";

export default function MatchParameters(
    value : string,
    valid : boolean,
    pattern : RegExp,
    subject : string = 'string',
) : string {

    const strings : string[] = [];

    strings.push(subject, `"${Truncate.Parameters(value, 8)}"`);

    if(valid) {

        strings.push('match against');

    } else {

        strings.push('does not match against');
    }

    strings.push(pattern.source);

    return strings.join(' ') + '.';
}

