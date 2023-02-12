import {SegmentParameters} from '../../../dist/boolean/segment.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

it('empty', function() {

    expect(SegmentParameters('root', '', '.')).toBeFalse();
    expect(SegmentParameters('', 'root', '.')).toBeFalse();

});

it('1 part', function() {

    expect(SegmentParameters('root', 'roots', '.')).toBeFalse();
    expect(SegmentParameters('roots', 'root', '.')).toBeFalse();

});

it('2 parts', function() {

    expect(SegmentParameters('root.parent', 'root.parent2', '.')).toBeFalse();
    expect(SegmentParameters('root.parent2', 'root.parent', '.')).toBeFalse();

});


it('compare shorter', function() {

    expect(SegmentParameters('root.parent', 'root', '.')).toBeFalse();
    expect(SegmentParameters('root.parent.sub', 'root.parent', '.')).toBeFalse();

});

