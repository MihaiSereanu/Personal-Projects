$(".dice").click(function() {
  var modifier = document.getElementById("mod").value;
  var diceNum = document.getElementById('num').value;
  var die = $(this).val();

// Controlling for empty fields

  // If no modifier:
  if (modifier == null || modifier == "")  {
    var result = d20.roll(`${diceNum}d${die}`);
    var display = document.getElementById("display")
    display.innerHTML = `${diceNum}d${die} = ${result}`;
    // If no multiple dice:
  } else if (diceNum == null || diceNum == "" || diceNum == "1" ) {
    var result = d20.roll(`d${die}`);
    var display = document.getElementById("display")
    display.innerHTML = `1d${die} + ${modifier} = ${result}`;
    if ( modifier.includes("-") ) {
      mod = modifier.replace("-", "")
      display.innerHTML = `1d${die} - ${mod} = ${result}`;
    }
  } else {
    // If all fields populated:
    var result = d20.roll(`${diceNum}d${die}+${modifier}`);
    var display = document.getElementById("display")
    display.innerHTML = `${diceNum}d${die} + ${modifier} = ${result}`;
    if ( modifier.includes("-") ) {
      mod = modifier.replace("-", "")
      display.innerHTML = `${diceNum}d${die} - ${mod} = ${result}`;
    }
  }
  // If your roll is a negative value, it's considered a 1.
  if (result <= 0 ) {
      display.innerHTML = "You rolled a 1.";
  }
});
