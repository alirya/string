import Template from "../../dist/template-parameters";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

it("single", function() {

  expect(Template('data {a} and {a} and {c}', {
    a : 'first',
    b : 'second',
    c : 'third',
  })).toBe(
      'data first and first and third'
  );

});

