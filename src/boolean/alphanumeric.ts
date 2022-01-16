import Match from './match-parameters';

export default function Alphanumeric(source : string) : boolean {

    return Match(source, /^[0-9a-z]*$/i);
}
