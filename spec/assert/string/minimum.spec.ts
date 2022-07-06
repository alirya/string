import {MinimumParameters} from '../../../dist/assert/string/minimum.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

describe('true valid', ()=>{

    it('inclusive', ()=>{

        expect(MinimumParameters( 'abcde', true, 5, true,undefined, undefined, 'value')).toBe(
            'value length is greater or equal than 5.'
        );

    });

    it('exclusive', ()=>{

        expect(MinimumParameters( 'abcdde', true, 5, false,undefined, undefined, 'value')).toBe(
            'value length is greater than 5.'
        );

    });
});



describe('true invalid', ()=>{

    it('inclusive', ()=>{

        expect(MinimumParameters('abc', true,  5, true,undefined, undefined, 'value')).toBe(
            'value length is greater or equal than 5.'
        );

    });

    it('exlusive', ()=>{

        expect(MinimumParameters('abc', true,  5, false,undefined, undefined, 'value')).toBe(
            'value length is greater than 5.'
        );

    });
});



describe('false valid', ()=>{

    it('inclusive', ()=>{

        expect(MinimumParameters( 'abcdef', false, 5, true,undefined, undefined, 'value')).toBe(
            'value length must greater or equal than 5, actual length 6.'
        );

    });

    it('exclusive', ()=>{

        expect(MinimumParameters( 'abcde', false, 5, false,undefined, undefined, 'value')).toBe(
            'value length must greater than 5, actual length 5.'
        );

    });
});


describe('false invalid', ()=>{

    it('inclusive', ()=>{

        expect(MinimumParameters('123456789', false,  5, true,undefined, undefined,'value')).toBe(
            'value length must greater or equal than 5, actual length 9.'
        );

    });

    it('exclusive', ()=>{

        expect(MinimumParameters('123456789', false,  5, false,undefined, undefined,'value')).toBe(
            'value length must greater than 5, actual length 9.'
        );

    });
});
