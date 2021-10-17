import Match from "./match";
import MatchString from "../validatable/string/match";
import Validator from "@dikac/t-validator/validator";
import Instance from "@dikac/t-validator/validatable/validatable";

export default function MatchStandard(pattern : RegExp) : Validator<string, string, boolean, boolean, Readonly<Instance<string, string>>> {

    return Match(pattern, MatchString);
}
