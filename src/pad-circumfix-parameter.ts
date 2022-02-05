import pad from "lodash/pad";
import String from "./string/string";
import Circumfix from "./circumfix/circumfix";

export type PadCircumfixArgument = String & Circumfix & {length:number};

export default function PadCircumfixObject({string, length , circumfix} : PadCircumfixArgument) {

    return pad(string, length, circumfix)
}



