// Imports
import {
  isEmail,
  isEmpty,
  isEqual,
  isLength,
  isLengthMax,
  isLengthMin,
  isNotEmpty
} from "./rules";

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
   * @param {*} rulesCustom
   */
  constructor(rulesCustom: Rules = []) {
    this.rules = { rules, ...rulesCustom };
  }

  /**
   * validate
   * @param {*} inputs
   */
  public validate(inputs: Inputs[] = []) {
    for (const v of inputs) {
      if (v.not ? this.rules[v.check](v.data) : !this.rules[v.check](v.data)) {
        throw new Error(v.message);
      }
    }
  }
}

export default Validator;
