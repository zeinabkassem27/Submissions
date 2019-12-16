fn();
function fn() {
  var first = prompt("Enter first number:"),
    second = prompt("Enter the second number");
  if (second != 0) {
    alert("the answer is: " + (first % second));
  } else {
    alert("please don't enter the second number zero!");
    fn();
  }
}
