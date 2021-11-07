import Match from "./match";

export default function Alphanumeric(source : string) : boolean {

    return Match.Parameter(source, /^[0-9a-z]*$/i)
}
