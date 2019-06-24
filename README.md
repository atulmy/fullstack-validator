# Full-Stack Validator

A simple validation library for server and client side applications.

### Features

- Tiny footprint _(2.27 kB / gzip: 931 B)_
- Universal _(can be used in server and client side)_
- Out of the box basic validation rules
- Extensible _(add your own rules)_

### Installation

```bash
npm install --save fullstack-validator
```

### Usage

Simple Example

```javascript
import Validator from "fullstack-validator";

const v = new Validator(/* pass custom rules here */);

async function userCreate({ email, password }) {
  // Inputs to validate
  const inputs = [
    {
      data: { value: email },
      check: "email",
      message: "Please enter valid email."
    },
    {
      data: { value: password, length: 6 },
      check: "lengthMin",
      message: "Password needs to be minimum 6 characters long"
    }
  ];

  // Validate
  try {
    v.validate(inputs);
  } catch (error) {
    throw new Error(error.message);
  }

  // Create user
  try {
    const user = await User.create({ email, password: hash(password) });

    if (user) {
      return {
        data: user,
        message: "User created successfully."
      };
    }
  } catch (error) {
    throw new Error(`An error occurred. ${error.message}`);
  }
}
```

Custom rules

```javascript
import Validator from "fullstack-validator";

const rules = {
  isValidCreditCard: ({ value }) => {
    const regexp = /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/;
    return regexp.test(value);
  }
};

const v = new Validator(rules);

async function paymentCreate({ creditCardNumber }) {
  // Inputs to validate
  const inputs = [
    {
      data: { value: creditCardNumber },
      check: "isValidCreditCard",
      message: "Please enter valid credit card."
    }
  ];

  // Validate
  try {
    v.validate(inputs);
  } catch (error) {
    throw new Error(error.message);
  }

  // Create payment
  try {
    const payment = await Payment.create({ creditCardNumber });

    if (payment) {
      return {
        data: payment,
        message: "User created successfully."
      };
    }
  } catch (error) {
    throw new Error(`An error occurred. ${error.message}`);
  }
}
```

### Author

- Atul Yadav - [GitHub](https://github.com/atulmy) · [Twitter](https://twitter.com/atulmy)

### Contributors

- [YOUR NAME HERE] - Feel free to contribute to the codebase by resolving any open issues, refactoring, adding new features, writing test cases or any other way to make the project better and helpful to the community. Feel free to fork and send pull requests.

### Donate

If you liked this project, you can donate to support it ❤️

[![Donate via PayPal](https://raw.githubusercontent.com/atulmy/atulmy.github.io/master/images/mix/paypal-me-smaller.png)](http://paypal.me/atulmy)

### License

Copyright (c) 2019 Atul Yadav <http://github.com/atulmy>

The MIT License (<http://www.opensource.org/licenses/mit-license.php>)
