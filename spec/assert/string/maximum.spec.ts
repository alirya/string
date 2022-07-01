import {MaximumParameters} from '../../../dist/assert/string/maximum';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

describe('true valid', ()=>{

    it('inclusive', ()=>{

        expect(MaximumParameters( 'abcde', true, 5, true,undefined, undefined, 'value')).toBe(
            'value length is lower or equal than 5.'
        );

    });

    it('exclusive', ()=>{

        expect(MaximumParameters( 'abcd', true, 5, false,undefined, undefined, 'value')).toBe(
            'value length is lower than 5.'
        );

    });
});



describe('true invalid', ()=>{

    it('inclusive', ()=>{

        expect(MaximumParameters( '123456789', true, 5, true,undefined, undefined, 'value')).toBe(
            'value length is lower or equal than 5.'
        );

    });

    it('exlusive', ()=>{

        expect(MaximumParameters( '123456789', true, 5, false,undefined, undefined, 'value')).toBe(
            'value length is lower than 5.'
        );

    });
});



describe('false valid', ()=>{

    it('inclusive', ()=>{

        expect(MaximumParameters( 'abcde', false, 5, true,undefined, undefined, 'value')).toBe(
            'value length must lower or equal than 5, actual length 5.'
        );

    });

    it('exclusive', ()=>{

        expect(MaximumParameters( 'abcd', false, 5, false,undefined, undefined, 'value')).toBe(
            'value length must lower than 5, actual length 4.'
        );

    });
});


describe('false invalid', ()=>{

    it('inclusive', ()=>{

        expect(MaximumParameters( '123456789', false, 5, true,undefined, undefined, 'value')).toBe(
            'value length must lower or equal than 5, actual length 9.'
        );

    });

    it('exclusive', ()=>{

        expect(MaximumParameters( '123456789', false, 5, false,undefined, undefined, 'value')).toBe(
            'value length must lower than 5, actual length 9.'
        );

    });
});
