import Template from '../../dist/template-parameters';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

it('clean', function() {

  expect(Template('data {{a}} and {{b}} and {{c}}',{
    a : 'first',
    b : 'second',
    c : 'third',
  })).toBe(
      'data {a} and {b} and {c}'
  );

});
