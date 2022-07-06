import Grapheme from '../../dist/number/grapheme.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});


it('test', ()=>{

    // plain latin alphabet - nothing spectacular
    expect(Grapheme('abcd')).toBe(4);

    // two-char emojis and six-char combined emoji
    expect(Grapheme('🌷🎁💩😜👍🏳️‍🌈')).toBe(6);

    // diacritics as combining marks, 10 JavaScript chars
    expect(Grapheme('Ĺo͂řȩm̅')).toBe(5);

    // individual Korean characters (Jamo), 4 JavaScript chars
    expect(Grapheme('뎌쉐')).toBe(2);

    // Hindi text with combining marks, 8 JavaScript chars
    expect(Grapheme('अनुच्छेद')).toBe(5);

    // demonic multiple combining marks, 75 JavaScript chars
    expect(Grapheme('Z͑ͫ̓ͪ̂ͫ̽͏̴̙̤̞͉͚̯̞̠͍A̴̵̜̰͔ͫ͗͢L̠ͨͧͩ͘G̴̻͈͍͔̹̑͗̎̅͛́Ǫ̵̹̻̝̳͂̌̌͘!͖̬̰̙̗̿̋ͥͥ̂ͣ̐́́͜͞')).toBe(6);

});
