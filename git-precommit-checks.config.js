module.exports = {
  rules: [
    {
      message: 'Vous avez un `console.log()` restant',
      regex: /console\.log/,
    },
    {
      message: 'Vous avez un `alert()` restant',
      regex: /alert\(/,
    },
  ],
}