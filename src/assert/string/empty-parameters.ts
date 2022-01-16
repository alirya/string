import Truncate from '../../truncate-parameters';


export default function EmptyParameters(
    value : string,
    valid : boolean,
    subject : string = 'string',
) : string {

    const strings : string[] = [];
    strings.push(subject);


    if(valid) {

        strings.push('is');

    } else {

        strings.push('must');
    }

    strings.push('empty', 'string');

    if(!valid && value.length) {

        strings[3] = 'string,';

        strings.push('actual', `"${Truncate(value, 8)}"`);

    }

    return strings.join(' ') + '.';
}
