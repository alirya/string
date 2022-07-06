import {RemoveSuffixParameters} from '../../dist/remove-suffix.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

it('basic', function() {

    expect(RemoveSuffixParameters('12345',  ']')).toBe('12345');
    expect(RemoveSuffixParameters('[12345]',  ']')).toBe('[12345');
    expect(RemoveSuffixParameters('[[12345]]',  ']')).toBe('[[12345]');
});

