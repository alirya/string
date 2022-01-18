import Template from "../../dist/template-parameters";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

it("clean", function() {

  try {

    Template('data {a}} and {{b} and {c}}', {
      a : 'first',
      b : 'second',
      c : 'third',
    });

    fail('error should thrown');

  } catch (error) {

    expect(error).toBeInstanceOf(Error);
  }

});

