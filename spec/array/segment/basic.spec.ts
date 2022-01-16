import Segment from '../../../dist/array/segment-parameters';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

it('0 parts', function() {

    let result = Segment('', '.');
    expect(result).toEqual(['']);

});


it('1 parts', function() {

    let result = Segment('root', '.');
    expect(result).toEqual(['root']);

});


it('2 parts', function() {

    let result = Segment('root.parent', '.');
    expect(result).toEqual(['root', 'root.parent']);

});

it('3 parts', function() {

    let result = Segment('root.parent.child', '.');
    expect(result).toEqual(['root', 'root.parent', 'root.parent.child']);

});
