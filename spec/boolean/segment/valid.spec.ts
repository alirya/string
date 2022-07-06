import {SegmentParameters} from '../../../dist/boolean/segment.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

it('equal empty', function() {

    expect(SegmentParameters('', '', '.')).toBeTrue();
});


it('equal', function() {

    expect(SegmentParameters('root', 'root', '.')).toBeTrue();
});

it('equal 2 parts', function() {

    expect(SegmentParameters('root.parent', 'root.parent', '.')).toBeTrue();
});


it('value shorter', function() {

    expect(SegmentParameters('root', 'root.parent', '.')).toBeTrue();
});

