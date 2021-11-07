import Segment from "../../../dist/boolean/segment";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

it("empty", function() {

    expect(Segment.Parameters('root', '', '.')).toBeFalse();
    expect(Segment.Parameters('', 'root', '.')).toBeFalse();

});

it("1 part", function() {

    expect(Segment.Parameters('root', 'roots', '.')).toBeFalse();
    expect(Segment.Parameters('roots', 'root', '.')).toBeFalse();

});

it("2 parts", function() {

    expect(Segment.Parameters('root.parent', 'root.parent2', '.')).toBeFalse();
    expect(Segment.Parameters('root.parent2', 'root.parent', '.')).toBeFalse();

});


it("compare shorter", function() {

    expect(Segment.Parameters('root.parent', 'root', '.')).toBeFalse();
    expect(Segment.Parameters('root.parent.sub', 'root.parent', '.')).toBeFalse();

});

