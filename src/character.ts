import NotEmpty from "./ensure/not-empty";

export default function Character(value : string) : string {

    return value[0] || '';
}
