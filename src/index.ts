// Imports
import * as rules from "./rules";

interface Inputs {
  [key: string]: any;
}

interface Rules {
  [key: string]: any;
}

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
    for (const v of inputs) {
      if (v.not ? this.rules[v.check](v.data) : !this.rules[v.check](v.data)) {
        throw new Error(v.message);
      }
    }
  }
}

export default Validator;
