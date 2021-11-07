import Count from "../../number/count";

export default function MaximumParameters(
    value : string,
    valid : boolean,
    maximum : number,
    inclusive : boolean,
    converter : (value:string)=>number = Count,
    criteria : string = 'length',
    subject : string = 'string',
) : string {

    const strings : string[] = [];

    strings.push(subject, criteria)


    if(valid) {

        strings.push('is lower')

    } else {

        strings.push('must lower')
    }

    if(inclusive) {

        strings.push('or equal');
    }

    strings.push('than', maximum.toString() + (valid ? '' : ','));

    if(!valid) {

        strings.push(`actual`, criteria, converter(value).toString())

    }

    return strings.join(' ') + '.';
}
