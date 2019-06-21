import Validator from "./";

interface Input {
  value?: any;
  value1?: any;
  value2?: any;
  length?: number;
}

describe("validate", () => {
  test("email", () => {
    const inputs = [
      {
        data: { value: "atul.12788@gmail" },
        check: "email",
        message: "Please enter valid email."
      }
    ];

    const v = new Validator();

    function checkValidation() {
      v.validate(inputs);
    }

    expect(checkValidation).toThrowError("Please enter valid email.");
  });

  test("custom rule", () => {
    const inputs = [
      {
        data: { value1: 2, value2: 4 },
        check: "double",
        message: "Double value is incorrect."
      }
    ];

    const rules = {
      double: ({ value1, value2 }: Input): boolean => {
        return value1 * value1 === value2;
      }
    };

    const v = new Validator(rules);

    function checkValidation() {
      v.validate(inputs);
    }

    expect(checkValidation).toThrowError("Double value is incorrect.");
  });
});
