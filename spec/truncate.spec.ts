import Truncate from "../dist/truncate";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

it("square", function() {

    expect(Truncate.Parameters('1234567890', 7)).toBe('1234...');

});

