import Unclosed from '../../dist/remove-prefix-parameters';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

it('basic', function() {

    expect(Unclosed('12345',  '[')).toBe('12345');
    expect(Unclosed('[12345]',  '[')).toBe('12345]');
    expect(Unclosed('[[12345]]',  '[')).toBe('[12345]]');
});

