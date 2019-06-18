// Validation methods

interface Input {
  value?: any;
  value1?: any;
  value2?: any;
  length?: number;
}

// Email
export function isEmail({ value }: Input): boolean {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(value).toLowerCase());
}

export function isEmpty({ value }: Input): boolean {
  return !value;
}

export function isNotEmpty({ value }: Input): boolean {
  return !!value;
}

// Equal
export function isEqual({ value1, value2 }: Input): boolean {
  return value1 === value2;
}

// Length
export function isLength({ value, length }: Input): boolean {
  return value.length === length;
}

// Length minimum
export function isLengthMin({ value, length }: Input): boolean {
  return value.length >= length;
}

// Length maximum
export function isLengthMax({ value, length }: Input): boolean {
  return value.length <= length;
}

// Validation
export default function validate(validations: object[] = []) {
  const checks = {
    email: isEmail,
    empty: isEmpty,
    notEmpty: isNotEmpty,
    equal: isEqual,
    length: isLength,
    lengthMin: isLengthMin,
    lengthMax: isLengthMax
  };

  for (let v of validations) {
    if (v.not ? checks[v.check](v.data) : !checks[v.check](v.data)) {
      throw new Error(v.message);
    }
  }
}
