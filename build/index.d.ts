interface Input {
  value?: any;
  value1?: any;
  value2?: any;
  length?: number;
}
export declare function isEmail({ value }: Input): boolean;
export declare function isEmpty({ value }: Input): boolean;
export declare function isNotEmpty({ value }: Input): boolean;
export declare function isEqual({ value1, value2 }: Input): boolean;
export declare function isLength({ value, length }: Input): boolean;
export declare function isLengthMin({ value, length }: Input): boolean;
export declare function isLengthMax({ value, length }: Input): boolean;
interface Validations {
  check: string;
  data: any;
  not?: boolean;
  message?: string;
}
interface Checks {
  [key: string]: any;
}
export declare const checks: Checks;
export default function validate(validations?: Validations[]): void;
export {};
