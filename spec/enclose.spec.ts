import {EncloseParameters} from '../dist/enclose.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

it('square', function() {

    expect(EncloseParameters('12345', '[', ']')).toBe('[12345]');
    expect(EncloseParameters('[12345]', '[', ']')).toBe('[12345]');
    expect(EncloseParameters('[[12345]]', '[', ']')).toBe('[[12345]]');

});

