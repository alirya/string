import {escapeRegExp} from 'lodash';

const Escape : (string : string) => string = escapeRegExp;
export default Escape;
