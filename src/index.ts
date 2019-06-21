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
  [key: string]: any;
}

interface Rules {
  [key: string]: any;
}

/**
 * Default rules
 */
export const rules: Rules = {
  empty: isEmpty,
  notEmpty: isNotEmpty,
  equal: isEqual,
  length: isLength,
  lengthMin: isLengthMin,
  lengthMax: isLengthMax,
  email: isEmail
};

/**
 * @class Validator
 */
class Validator {
  private readonly rules: Rules;

  /**
   * @constructor
   * @param {*} rulesCustom
   */
  constructor(rulesCustom: Rules = []) {
    this.rules = { ...rules, ...rulesCustom };
  }

  /**
   * validate
   * @param {*} inputs
   */
  public validate(inputs: Inputs[] = []) {
    console.log(inputs);

    for (const v of inputs) {
      if (v.not ? this.rules[v.check](v.data) : !this.rules[v.check](v.data)) {
        throw new Error(v.message);
      }
    }
  }
}

export default Validator;
