

export default function NotEmptyParameters(
    value : string,
    valid : boolean,
    subject : string = 'string',
) : string {

    const strings : string[] = [];

    strings.push(subject);

    if(valid) {

        strings.push('is not');

    } else {

        strings.push('must not');
    }

    strings.push('empty string');

    return strings.join(' ') + '.';
}
