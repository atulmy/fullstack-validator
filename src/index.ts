// Validation methods

interface Inputs {
  check: string;
  data: any;
  not?: boolean;
  message?: string;
}

interface Rules {
  [key: string]: any;
}

export const rules: Rules = {
  email: isEmail,
  empty: isEmpty,
  notEmpty: isNotEmpty,
  equal: isEqual,
  length: isLength,
  lengthMin: isLengthMin,
  lengthMax: isLengthMax
};

/**
 * @class Validator
 */
class Validator {
  private rules: Rules;

  /**
   * @constructor
   * @param {*} rules
   */
  constructor(rulesCustom: Rules) {
    this.rules = { rules, ...rulesCustom };
  }

  /**
   * validate
   * @param {*} inputs
   */
  validate(inputs: Inputs[] = []) {
    for (let v of inputs) {
      if (v.not ? this.rules[v.check](v.data) : !this.rules[v.check](v.data)) {
        throw new Error(v.message);
      }
    }
  }
}
