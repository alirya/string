import Related from "../../../dist/boolean/segment";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

it("equal empty", function() {

    expect(Related.Parameters('', '', '.')).toBeTrue();
});


it("equal", function() {

    expect(Related.Parameters('root', 'root', '.')).toBeTrue();
});

it("equal 2 parts", function() {

    expect(Related.Parameters('root.parent', 'root.parent', '.')).toBeTrue();
});


it("value shorter", function() {

    expect(Related.Parameters('root', 'root.parent', '.')).toBeTrue();
});

