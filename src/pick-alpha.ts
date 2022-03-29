



export default function PickAlpha(value : string) : string {

    return value.replace(/[^a-zA-Z]/g, '');
}