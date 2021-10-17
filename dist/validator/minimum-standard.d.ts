import Validator from "@dikac/t-validator/validator";
import MinimumValidatable from "../validatable/minimum";
export default function MinimumStandard(minimum: number, inclusive: boolean): Validator<string, string, boolean, boolean, MinimumValidatable<string, string>>;
