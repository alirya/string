import escapeRegExp from 'lodash/escapeRegExp.js';

const Escape : (string : string) => string = escapeRegExp;
export default Escape;
