import EmptyParameter from "./empty-parameters";
import { EmptyArgument } from "./empty-parameter";
declare namespace Empty {
    const Parameter: typeof EmptyParameter;
    const Object: typeof EmptyParameter;
    type Argument = EmptyArgument;
}
export default Empty;
