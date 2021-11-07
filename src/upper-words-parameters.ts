import UpperFirst from './upper-first';

export default function UpperWordsParameters (
    value : string,
    separator : string|RegExp
) : string {

    for (const split of value.match(separator) || []) {

        value = value.split(split).map(UpperFirst).join(split);
    }

    return UpperFirst(value);
}


