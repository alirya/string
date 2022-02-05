import Truncate from '../../../dist/truncate-parameters';
import Template from '../../../dist/function/template-parameters';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

it('clean', function() {

  expect(Template('data {{a}} and {{b}} and {{c}}')({
    a : 'first',
    b : 'second',
    c : 'third',
  })).toBe(
      'data {a} and {b} and {c}'
  );

});

it('parsed with curly', function() {

  const template = Template('data {{{a}}} and {{{b}}} and {{{c}}}');

  expect(template({
    a : 'first',
    b : 'second',
    c : 'third',
  })).toBe(
      'data {first} and {second} and {third}'
  );

});
