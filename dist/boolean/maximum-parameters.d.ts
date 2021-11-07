/**
 * check if {@param string} length/size is lower than {@param maximum} or equal if {@param inclusive} is "true"
 *
 * {@param converter} is use to calculate length/size of {@param string}
 */
export default function MaximumParameters(value: string, maximum: number, inclusive?: boolean, converter?: (value: string) => number): boolean;
