import Validator from "./";

describe("Test", () => {
  test("does something", () => {
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
});
