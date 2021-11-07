import Match from "./match";

export default function Alphabet(source : string) : boolean {

    return Match.Parameter(source, /^[a-z]*$/i)
}
