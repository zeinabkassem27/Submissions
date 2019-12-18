function myFunc() {
  var num = document.getElementById("ur_num").value;
  var output = 0;
  num = parseInt(num);
  if (num > 0) {
    for (var i = 0; i < num + 1; i++) {
      if (i % 3 == 0 || i % 5 == 0) {
        output += i;
      }
    }
    alert("the summation is: " + output);
  } else {
    alert("it is a negative number");
  }
}
