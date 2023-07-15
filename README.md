# Anti-Leak

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

Anti-Leak is a lightweight module that provides regular expressions for detecting potentially sensitive information in text content. It includes patterns for validating IP addresses (IPv4 and IPv6), email addresses, tokens, and phone numbers (European and North American formats).

## Installation

Install the module using npm:
```
npm install anti-leak
```

## Usage

Require the `anti-leak` module in your Node.js project:

```javascript
const antiLeak = require('anti-leak');
```
The antiLeak object contains the following regular expressions as properties:

antiLeak.ipv4: Regular expression for validating IPv4 addresses.

antiLeak.ipv6: Regular expression for validating IPv6 addresses.

antiLeak.email: Regular expression for validating email addresses.

antiLeak.token: Regular expression for validating tokens.

antiLeak.EUPhone: Regular expression for validating European phone numbers.

antiLeak.NAPhone: Regular expression for validating North American phone numbers.

To check if a content contains sensitive information, you can use the regular expression's .test method. Here's an example:

```javascript
const content = 'example@example.com';
const isLeak = antiLeak.email.test(content);

if (isLeak) {
  console.log('Potentially sensitive content detected. Please take appropriate action.');
} else {
  console.log('The content is safe.');
}
```

## License
This project is licensed under the Apache License 2.0.


Be sure to update the license badge and license link with the correct information.

If you have any other questions, don't hesitate to ask!