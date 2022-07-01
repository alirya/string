import {TruncateParameters} from '../dist/truncate';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

it('square', function() {

    expect(TruncateParameters('1234567890', 7)).toBe('1234...');

});

