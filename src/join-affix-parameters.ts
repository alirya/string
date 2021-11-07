import SafeCast from "./safe-cast";

export default function JoinAffixParameters(
    value : string[],
    separator : string,
    prefix ?: string,
    suffix ?: string,
) : string {

    return SafeCast(prefix) + value.join(separator) + SafeCast(suffix);
}

