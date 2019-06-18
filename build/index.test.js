"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require("./");
describe("Test", function () {
    test("does something", function () {
        var rules = [
            {
                data: { value: "atul.12788@gmail" },
                check: "email",
                message: "Please enter valid email."
            }
        ];
        expect(_1.default(rules)).toThrow(Error);
    });
});
//# sourceMappingURL=index.test.js.map