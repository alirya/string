/**
 * check if {@param value} type is promitive string
 * @param value
 */
export default function String(value : unknown) : value is string {

    return typeof value === 'string';
}

export {String as IsString};
