import truncate from 'lodash/truncate';

export default function TruncateParameters (
    value : string,
    length : number,
    omission : string = '...',
    separator ?: RegExp|string
)  : string {

    return truncate(value, {
        length : length,
        omission : omission,
        separator : separator
    });
}

