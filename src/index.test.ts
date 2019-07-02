import { Validator, rules } from "./";

interface Inputs {
  [key: string]: any;
}

describe("validate", () => {
  test("correct email", () => {
    const inputs = [
      {
        data: { value: "user@example.com" },
        check: rules.isValidEmail,
        message: "Please enter valid email."
      }
    ];

    const v = new Validator();

    function checkValidation() {
      v.validate(inputs);
    }

    expect(checkValidation).not.toThrowError("Please enter valid email.");
  });

  test("incorrect email", () => {
    const inputs = [
      {
        data: { value: "user!example.com" },
        check: rules.isValidEmail,
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

    const customRules = {
      sum: ({ value, computed }: Inputs): boolean => {
        return value + value === computed;
      }
    };

    const inputs = [
      {
        data: { value: 2, computed: 5 },
        check: customRules.sum,
        message: "Sum value is incorrect."
      }
    ];

    const v = new Validator(customRules);

    function checkValidation() {
      v.validate(inputs);
    }

    expect(checkValidation).toThrowError("Sum value is incorrect.");
  });
});
