import Related from "../../../dist/boolean/segment-parameters";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

it("equal empty", function() {

    expect(Related('', '', '.')).toBeTrue();
});


it("equal", function() {

    expect(Related('root', 'root', '.')).toBeTrue();
});

it("equal 2 parts", function() {

    expect(Related('root.parent', 'root.parent', '.')).toBeTrue();
});


it("value shorter", function() {

    expect(Related('root', 'root.parent', '.')).toBeTrue();
});

