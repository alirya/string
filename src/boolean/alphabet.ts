import Match from "./match-parameters";

export default function Alphabet(source : string) : boolean {

    return Match(source, /^[a-z]*$/i)
}
