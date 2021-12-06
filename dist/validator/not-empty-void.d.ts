import Validator from "@dikac/t-validator/validator";
import Instance from "@dikac/t-validator/validatable/validatable";
export default function NotEmptyVoid(): Validator<string, '', true, false, Readonly<Instance<string, string>>>;
