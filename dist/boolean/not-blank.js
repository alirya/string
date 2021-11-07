import NotEmpty from "./not-empty";
/**
 * check if {@param string} contain non white space (space, tab, no-break space, etc.) and not empty string {@see NotEmpty}
 *
 * @param string
 */
export default function NotBlank(string) {
    return NotEmpty(string.trim());
}
//# sourceMappingURL=not-blank.js.map