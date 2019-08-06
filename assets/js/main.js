$(".dice").click(function() {
  var modifier = document.getElementById("mod").value;
  var diceNum = document.getElementById('num').value;
  var die = $(this).val();
// Controlling for empty fields
  if (modifier == null || modifier == "")  {
    var result = d20.roll(`${diceNum}d${die}`);
    var display = document.getElementById("display")
    display.innerHTML = `The result is ${result}!`;
  } else if (diceNum == null || diceNum == "") {
    var result = d20.roll(`d${die}`);
    var display = document.getElementById("display")
    display.innerHTML = `The result is ${result}!`;
  } else {
    var result = d20.roll(`${diceNum}d${die}+${modifier}`);
    var display = document.getElementById("display")
    display.innerHTML = `The result is ${result}!`;
  }
  if (result <= 0 ) {
      display.innerHTML = "The result is 1!";
  }
});
