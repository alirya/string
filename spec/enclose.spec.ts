import Enclosed from '../dist/enclose-parameters';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

it('square', function() {

    expect(Enclosed('12345', '[', ']')).toBe('[12345]');
    expect(Enclosed('[12345]', '[', ']')).toBe('[12345]');
    expect(Enclosed('[[12345]]', '[', ']')).toBe('[[12345]]');

});

