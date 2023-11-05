

export default function SplitNewLine(string: string) : string[] {

    return string.split(/[\n\r]+/g);
}
