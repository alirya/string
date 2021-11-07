import Enclosed from "../dist/enclose";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

it("square", function() {

    expect(Enclosed.Parameters('12345', '[', ']')).toBe('[12345]');
    expect(Enclosed.Parameters('[12345]', '[', ']')).toBe('[12345]');
    expect(Enclosed.Parameters('[[12345]]', '[', ']')).toBe('[[12345]]');

});

