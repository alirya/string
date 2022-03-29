



export default function PickAlnum(value : string) : string {

    return value.replace(/[^a-zA-Z0-1]/g, '');
}