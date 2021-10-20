export default interface Separator<SeparatorType extends string|RegExp = string> {
    separator: SeparatorType;
}
