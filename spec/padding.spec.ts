import Padding from "../dist/padding";
import PaddingOption from "../dist/padding/padding";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

it("left", function() {

    expect(Padding('12345', '.|', 10, PaddingOption.PREFIX)).toBe('.|.|.12345');

});

it("right", function() {

    expect(Padding('12345', '.|', 10, PaddingOption.SUFFIX)).toBe('12345.|.|.');

});

it("both", function() {

    expect(Padding('12345', '.|', 10, PaddingOption.AFFIX)).toBe('.|.12345.|');

});
