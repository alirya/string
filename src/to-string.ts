export default interface ToString<Options extends unknown[] = unknown[]> {

    toString(...options : Options) : string;
}
