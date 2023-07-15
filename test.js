const antiLeak = require('./index')
const content = 'example@example.com';
const isLeak = antiLeak.email.test(content)

if (isLeak) {
  console.log('Potentially sensitive content detected. Please take appropriate action.');
} else {
  console.log('The content is safe.');
}
