import PickAlnum from "../../dist/pick-alnum";

it("enable console log", () => { spyOn(console, 'log').and.callThrough()});



describe('basic', function () {

    const data = '<>?,./abcdefghijklmnopqrstuvwxyz1234567890-=!@#$%^&*()_+``'

    it('test', function () {

        expect(PickAlnum(data)).toBe('abcdefghijklmnopqrstuvwxyz1234567890');
    })
})