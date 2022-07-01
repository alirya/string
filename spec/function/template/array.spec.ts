import {TemplateParameters} from '../../../dist/function/template';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

it('single', function() {

  expect(TemplateParameters('data {0} and {1} and {2}')([
    'first',
    'second',
    'third'
  ])).toBe(
      'data first and second and third'
  );

});

