const moment = require("moment");

const sortProduct = input => {

  var res = input.filter(products => moment(products.dateAdded).year() > 2000);
  res.reduce(() =>{

  })
  console.log(res);
  res.sort();
};

module.exports = {
  title: "Exercise 1",
  run: sortProduct
};
