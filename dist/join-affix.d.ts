import JoinAffixParameter, { JoinAffixArgument } from "./join-affix-parameter";
import JoinAffixParameters from "./join-affix-parameters";
declare namespace JoinAffix {
    const Parameter: typeof JoinAffixParameter;
    const Parameters: typeof JoinAffixParameters;
    type Argument = JoinAffixArgument;
}
export default JoinAffix;
