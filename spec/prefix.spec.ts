import {PrefixParameters} from '../dist/prefix';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

it('basic', function() {

    expect(PrefixParameters('12345', 'ab')).toBe('a12345');
    expect(PrefixParameters('a12345', 'ab')).toBe('a12345');

});
