import Match from "./match";

/**
 * check if {@param source} is numeric
 *
 * @param source
 */
export default function Numeric(source : string) : boolean {

    return Match.Parameter(source, /^[-+]*\d*(\.\d*)?$/i);
}
