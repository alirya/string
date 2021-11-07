import {pad} from "lodash";
import String from "./string/string";
import Circumfix from "./circumfix/circumfix";

export type PadCircumfixArgument = String & Circumfix & {length:number};

export default function PadCircumfixObject({value, length , circumfix} : PadCircumfixArgument) {

    return pad(value, length, circumfix)
}



