# Full-Stack Validator

A simple validation library for server and client side JavaScript applications.

### Features

- Light weight
- Universal (can be used in server and client side)
- Out of the box basic validation rules
- Extensible (add your own rules, example: [Lodash](https://github.com/lodash/lodash)'s `isEmpty`)

### Installation

```bash
npm install --save node-input-validator
```

### Usage

Simple Example

```javascript
import v from "fullstack-validator";

async function userCreate({ email, password }) {
  // Inputs to validate
  const inputs = [
    {
      data: { value: email },
      check: "email",
      message: "Please enter valid email."
    },
    {
      data: { value: password },
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
