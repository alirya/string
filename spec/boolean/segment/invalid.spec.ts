import Segment from "../../../dist/boolean/segment-parameters";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

it("empty", function() {

    expect(Segment('root', '', '.')).toBeFalse();
    expect(Segment('', 'root', '.')).toBeFalse();

});

it("1 part", function() {

    expect(Segment('root', 'roots', '.')).toBeFalse();
    expect(Segment('roots', 'root', '.')).toBeFalse();

});

it("2 parts", function() {

    expect(Segment('root.parent', 'root.parent2', '.')).toBeFalse();
    expect(Segment('root.parent2', 'root.parent', '.')).toBeFalse();

});


it("compare shorter", function() {

    expect(Segment('root.parent', 'root', '.')).toBeFalse();
    expect(Segment('root.parent.sub', 'root.parent', '.')).toBeFalse();

});

