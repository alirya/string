import {SegmentParameters} from '../../../dist/array/segment.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

it('0 parts', function() {

    const result = SegmentParameters('', '.');
    expect(result).toEqual(['']);

});


it('1 parts', function() {

    const result = SegmentParameters('root', '.');
    expect(result).toEqual(['root']);

});


it('2 parts', function() {

    const result = SegmentParameters('root.parent', '.');
    expect(result).toEqual(['root', 'root.parent']);

});

it('3 parts', function() {

    const result = SegmentParameters('root.parent.child', '.');
    expect(result).toEqual(['root', 'root.parent', 'root.parent.child']);

});
