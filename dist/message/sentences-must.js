import Sentences from "./sentences";
/**
 * @deprecated
 * create {@see Sentences} with some populated data
 * {@see Sentences.reject} set to ['must']
 * {@see Sentences.accept} set to ['is']
 *
 * @param valid
 * @param subject
 * @param expect
 * @param actual
 */
export default function SentencesMust(valid, subject = [], expect = [], actual = []) {
    return new Sentences(valid, subject, expect, ['is'], ['must'], actual);
}
//# sourceMappingURL=sentences-must.js.map