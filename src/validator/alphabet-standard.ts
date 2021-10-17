import Alphabet from "./alphabet";
import AlphabetString from "../validatable/string/alphabet";
import Validator from "@dikac/t-validator/validator";
import Instance from "@dikac/t-validator/validatable/validatable";

export default function AlphabetStandard() : Validator<string, string, boolean, boolean, Readonly<Instance<string, string>>> {

    return Alphabet(AlphabetString);
}
