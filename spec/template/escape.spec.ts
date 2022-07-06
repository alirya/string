import {TemplateParameters} from '../../dist/template.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

it('clean', function() {

  expect(TemplateParameters('data {{a}} and {{b}} and {{c}}',{
    a : 'first',
    b : 'second',
    c : 'third',
  })).toBe(
      'data {a} and {b} and {c}'
  );

});
