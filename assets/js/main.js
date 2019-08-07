$(".dice").click(function() {
  var modifier = document.getElementById("mod").value;
  var diceNum = document.getElementById('num').value;
  var die = $(this).val();
// Controlling for empty fields
  if (modifier == null || modifier == "")  {
    var result = d20.roll(`${diceNum}d${die}`);
    var display = document.getElementById("display")
    display.innerHTML = `${diceNum}d${die} = ${result}`;
    
  } else if (diceNum == null || diceNum == "" || diceNum == "1" ) {
    var result = d20.roll(`d${die}`);
    var display = document.getElementById("display")
    display.innerHTML = `1d ${die} + ${modifier} = ${result}`;
  } else {
    var result = d20.roll(`${diceNum}d${die}+${modifier}`);
    var display = document.getElementById("display")
    display.innerHTML = `${diceNum}d${die} + ${modifier} = ${result}`;
  }
  if (result <= 0 ) {
      display.innerHTML = "The result is 1!";
  }
});
