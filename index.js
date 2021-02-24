const { promiseTimeout } = require('@slack/interactive-messages/dist/util')

promiseTimeout(5000, Promise.resolve(42))
console.log('Running promiseTimeout(5000, Promise.resolve(42))')
console.log('Now wait 5 sec :)')
