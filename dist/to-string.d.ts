export default interface ToString<Options extends unknown[]> {
    toString(...options: Options): string;
}
