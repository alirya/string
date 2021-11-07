import Minimum from "../../../dist/assert/string/minimum";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

describe('true valid', ()=>{

    it('inclusive', ()=>{

        expect(Minimum.Parameters( 'abcde', true, 5, true,undefined, undefined, 'value')).toBe(
            'value length is greater or equal than 5.'
        );

    });

    it('exclusive', ()=>{

        expect(Minimum.Parameters( 'abcdde', true, 5, false,undefined, undefined, 'value')).toBe(
            'value length is greater than 5.'
        );

    });
});



describe('true invalid', ()=>{

    it('inclusive', ()=>{

        expect(Minimum.Parameters('abc', true,  5, true,undefined, undefined, 'value')).toBe(
            'value length is greater or equal than 5.'
        );

    });

    it('exlusive', ()=>{

        expect(Minimum.Parameters('abc', true,  5, false,undefined, undefined, 'value')).toBe(
            'value length is greater than 5.'
        );

    });
});



describe('false valid', ()=>{

    it('inclusive', ()=>{

        expect(Minimum.Parameters( 'abcdef', false, 5, true,undefined, undefined, 'value')).toBe(
            'value length must greater or equal than 5, actual length 6.'
        );

    });

    it('exclusive', ()=>{

        expect(Minimum.Parameters( 'abcde', false, 5, false,undefined, undefined, 'value')).toBe(
            'value length must greater than 5, actual length 5.'
        );

    });
});


describe('false invalid', ()=>{

    it('inclusive', ()=>{

        expect(Minimum.Parameters('123456789', false,  5, true,undefined, undefined,'value')).toBe(
            'value length must greater or equal than 5, actual length 9.'
        );

    });

    it('exclusive', ()=>{

        expect(Minimum.Parameters('123456789', false,  5, false,undefined, undefined,'value')).toBe(
            'value length must greater than 5, actual length 9.'
        );

    });
});
