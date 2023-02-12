import {escapeRegExp} from 'lodash-es';

const Escape : (string : string) => string = escapeRegExp;
export default Escape;
