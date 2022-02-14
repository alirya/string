import trim from 'lodash/trim';
import TrimSuffix from './trim-suffix-parameters';
import TrimPrefix from './trim-prefix-parameters';

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
) : string;

export default function TrimParameters(
    value: string,
    prefix?: string,
    suffix?: string,
) : string {

    if(suffix) {

        value = TrimPrefix(value, prefix);
        value = TrimSuffix(value, suffix);

    } else {

        value = trim(value, prefix);
    }

    return value;
}

