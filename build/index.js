"use strict";
// Validation methods
Object.defineProperty(exports, "__esModule", { value: true });
// Email
function isEmail(_a) {
    var value = _a.value;
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(value).toLowerCase());
}
exports.isEmail = isEmail;
function isEmpty(_a) {
    var value = _a.value;
    return !value;
}
exports.isEmpty = isEmpty;
function isNotEmpty(_a) {
    var value = _a.value;
    return !!value;
}
exports.isNotEmpty = isNotEmpty;
// Equal
function isEqual(_a) {
    var value1 = _a.value1, value2 = _a.value2;
    return value1 === value2;
}
exports.isEqual = isEqual;
// Length
function isLength(_a) {
    var value = _a.value, length = _a.length;
    return value.length === length;
}
exports.isLength = isLength;
// Length minimum
function isLengthMin(_a) {
    var value = _a.value, length = _a.length;
    return value.length >= length;
}
exports.isLengthMin = isLengthMin;
// Length maximum
function isLengthMax(_a) {
    var value = _a.value, length = _a.length;
    return value.length <= length;
}
exports.isLengthMax = isLengthMax;
// Validation
function validate(validations) {
    if (validations === void 0) { validations = []; }
    var checks = {
        email: isEmail,
        empty: isEmpty,
        notEmpty: isNotEmpty,
        equal: isEqual,
        length: isLength,
        lengthMin: isLengthMin,
        lengthMax: isLengthMax,
    };
    for (var _i = 0, validations_1 = validations; _i < validations_1.length; _i++) {
        var v = validations_1[_i];
        if (v.not ? checks[v.check](v.data) : !checks[v.check](v.data)) {
            throw new Error(v.message);
        }
    }
}
exports.default = validate;
//# sourceMappingURL=index.js.map