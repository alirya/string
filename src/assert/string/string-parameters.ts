export default function StringParameters(
    value : unknown,
    valid : boolean,
    subject : string = 'type',
    conversion : (value:unknown)=>string = value=>typeof value
) : string {

    const strings : string[] = [];

    strings.push(subject);

    if(valid) {

        strings.push('is');

    } else {

        strings.push('must');
    }

    strings.push('string');

    if(!valid) {

        strings[2] = 'string,';

        strings.push('actual', conversion(value));
    }

    return strings.join(' ') + '.';
}
