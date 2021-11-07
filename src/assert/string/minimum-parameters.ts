import Count from "../../number/count";

export default function MinimumParameters(
    value : string,
    valid : boolean,
    minimum : number,
    inclusive : boolean,
    converter : (value:string)=>number = Count,
    criteria : string = 'length',
    subject : string = 'string',
) : string {

    const strings : string[] = [];

    strings.push(subject, 'length');

    if(valid) {

        strings.push(`is greater`);

    } else {

        strings.push(`must greater`);
    }

    if(inclusive) {

        strings.push(`or equal`);
    }

    strings.push('than', minimum.toString() + (valid ? '' : ','));

    if(!valid) {

        strings.push(`actual`, criteria, converter(value).toString())

    }

    return strings.join(' ') + '.';
}

