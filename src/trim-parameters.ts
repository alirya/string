import {trim} from "lodash";
import TrimSuffix from "./trim-suffix";
import TrimPrefix from "./trim-prefix";

export default function TrimParameters(
    value: string,
    prefix: string,
    suffix: string,
) : string;

export default function TrimParameters(
    value: string,
    circumfix: string
) : string;

export default function TrimParameters(
    value: string,
    prefix: string,
    suffix?: string,
) : string {

    if(suffix) {

        value = TrimPrefix.Parameters(value, prefix);
        value = TrimSuffix.Parameters(value, suffix);

    } else {

        value = trim(value, prefix)
    }

    return value;
}

