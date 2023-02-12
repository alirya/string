import {TemplateParameters} from '../../../dist/function/template.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

it('clean', function() {

  expect(TemplateParameters('data {{a}} and {{b}} and {{c}}')({
    a : 'first',
    b : 'second',
    c : 'third',
  })).toBe(
      'data {a} and {b} and {c}'
  );

});

it('parsed with curly', function() {

  const template = TemplateParameters('data {{{a}}} and {{{b}}} and {{{c}}}');

  expect(template({
    a : 'first',
    b : 'second',
    c : 'third',
  })).toBe(
      'data {first} and {second} and {third}'
  );

});
