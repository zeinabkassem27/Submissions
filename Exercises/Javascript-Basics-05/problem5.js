alert("enter number space * or number space +");
function myFunc() {
  var num = document.getElementById("ur_num").value;
  var output = 1;
  var i = 2;
  var num1 = parseInt(num.split(" ")[0]);
  var sign1 = num.split(" ")[1];
  sign1 = sign1.trim();
  if (num1 > 0) {
    if (sign1 === "*") {
      for (i = 2; i < num1 + 1; i++) {
        output *= i;
      }
    } else {
      if (sign1 === "+") {
        for (i = 2; i < num1 + 1; i++) {
          output += i;
        }
      }
    }
    alert("the output is :" + output);
  } else {
    alert("it is a negative number");
  }
}
