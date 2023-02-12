import {RemovePrefixParameters} from '../../dist/remove-prefix.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

it('basic', function() {

    expect(RemovePrefixParameters('12345',  '[')).toBe('12345');
    expect(RemovePrefixParameters('[12345]',  '[')).toBe('12345]');
    expect(RemovePrefixParameters('[[12345]]',  '[')).toBe('[12345]]');
});

