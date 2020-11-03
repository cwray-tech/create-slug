const slugify = require("slugify");

module.exports = function (text) {
  return slugify(text, {
    lower: true,
    remove: /[*+~.()'"!:@]/g,
    strict: true,
    locale: "en"
  })
}