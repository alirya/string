import Truncate from "../../truncate";

export default function BlankParameters(
    valid : boolean,
    value : string,
    subject : string = 'string',
) : string {

    const strings : string[] = [];

    strings.push(subject);

    if(valid) {

        strings.push('is');

    } else {

        strings.push('expect');

    }

    strings.push('blank string');


    if(!valid) {

        strings.push(`, actual "${Truncate.Parameters(value, 8)}"`)
    }

    return strings.join(' ') + '.';

}

