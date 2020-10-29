const slugify = require("slugify");

exports.createSlug = function(text){
   return slugify(text, {
    lower: true,
    remove: /[*+~.()'"!:@]/g,
  });
}
