import validate from "./";

describe("Test", () => {
  test("does something", () => {
    const rules = [
      {
        data: { value: "atul.12788@gmail" },
        check: "email",
        message: "Please enter valid email."
      }
    ];

    function checkValidation() {
      validate(rules);
    }

    expect(checkValidation).toThrowError("Please enter valid email.");
  });
});
