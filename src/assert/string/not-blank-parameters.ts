
export default function NotBlankParameters(
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

    strings.push('blank string');

    return strings.join(' ') + '.';
}
