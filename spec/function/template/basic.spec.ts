import {TemplateParameters} from '../../../dist/function/template';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

it('single', function() {

  expect(TemplateParameters('data {a} and {b} and {c}.')({
    a : 'first',
    b : 'second',
    c : 'third',
  })).toBe(
      'data first and second and third.'
  );

});

it('multi', function() {

  const template = TemplateParameters('data {a} and {b} and {c}.');

  expect(template({
    a : 'first',
    b : 'second',
    c : 'third',
  })).toBe(
      'data first and second and third.'
  );

  expect(template({
    a : 'A',
    b : 'B',
    c : 'C',
  })).toBe(
      'data A and B and C.'
  );


  expect(template({
    a : 'and',
    b : 'and',
    c : 'and',
  })).toBe(
      'data and and and and and.'
  );

});
