const _ = require("lodash");

const meeteek = input => {

  var res = [];

  _.map(input, people =>{
    res.push(JSON.parse('{'people.firstname : []'}'));
  })

  console.log(res)
  return JSON.stringify(res);
};

module.exports = {
  title: "Exercise 3",
  run: meeteek
};
