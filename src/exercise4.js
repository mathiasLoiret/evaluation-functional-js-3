const countSequence = (sequence, input) => {

  var compte = 0;
  var table = input.split('');

  table.reduce((acc,val) =>{

    console.log(acc);

    if(acc !== ""){
      if(val === acc){
        compte += 1;
        acc = "";
      }
      else{
        acc = val;
      }
    }
  }, "");

  return compte;
};

module.exports = {
  title: "Exercise 4",
  run: countSequence
};
