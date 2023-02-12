import PickAlpha from '../../dist/pick-alpha.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});



describe('basic', function () {

    const data = '<>?,./abcdefghijklmnopqrstuvwxyz1234567890-=!@#$%^&*()_+``';

    it('test', function () {

        expect(PickAlpha(data)).toBe('abcdefghijklmnopqrstuvwxyz');
    });
});