import {StringParameters} from '../../../dist/assert/string/string.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

const data = new Map<[any, boolean, string?], string>();

data.set(['string', true], 'type is string.');
data.set(['string', true, 'value'], 'value is string.');
data.set([[], true], 'type is string.');
data.set([{}, true], 'type is string.');

data.set(['string', false], 'type must string, actual string.');
data.set(['string', false, 'value'], 'value must string, actual string.');
data.set([[], false], 'type must string, actual object.');
data.set([{}, false], 'type must string, actual object.');


let i = 0;
for(const [args, message] of data) {

    it(`test data[${i}]`, ()=>{

        expect(StringParameters(...args)).toBe(message);

    });

    i++;
}
