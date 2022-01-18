import Truncate from "../../../dist/truncate-parameters";
import Template from "../../../dist/function/template-parameters";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

it("single", function() {

  expect(Template('data {a} and {a} and {c}')({
    a : 'first',
    b : 'second',
    c : 'third',
  })).toBe(
      'data first and first and third'
  );

});

it("multi", function() {

  const template = Template('data {a} and {a} and {c}');

  expect(template({
    a : 'first',
    b : 'second',
    c : 'third',
  })).toBe(
      'data first and first and third'
  );

  expect(template({
    a : 'A',
    b : 'B',
    c : 'C',
  })).toBe(
      'data A and A and C'
  );


  expect(template({
    a : 'and',
    b : 'and',
    c : 'and',
  })).toBe(
      'data and and and and and'
  );

});
