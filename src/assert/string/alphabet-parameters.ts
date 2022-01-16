import Match from '../../value/match';

export default function AlphabetParameters(
    value : string,
    valid : boolean,
    subject : string = 'string'
) : string {

    const strings: string[] = [];

    strings.push(subject);

    if(valid) {

        strings.push('is');


    } else {

        strings.push('must');

    }

    strings.push('alphabet');

    if(!valid) {

        let match = new Match(value, /[^a-zA-Z]{1,5}/);

        if(match.valid) {

            strings[2] = 'alphabet,';

            strings.push('contains', `"${match.match[0]}"`);
        }
    }

    return strings.join(' ') + '.';
}

