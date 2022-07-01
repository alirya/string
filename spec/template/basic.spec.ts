import {TemplateParameters} from '../../dist/template';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

it('single', function() {

  expect(TemplateParameters('data {a} and {b} and {c}', {
    a : 'first',
    b : 'second',
    c : 'third',
  })).toBe(
      'data first and second and third'
  );

});

