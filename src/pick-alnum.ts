



export default function PickAlnum(value : string) : string {

    return value.replace(/[^a-zA-Z0-9]/g, '');
}