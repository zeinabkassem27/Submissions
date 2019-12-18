function myFunc() {
  var x = document.getElementById("name").value;
  if (x == "Bob" || x == "Alice" || x == "alice" || x == "bob") {
    alert("hello " + x);
  } else {
    alert("Hello stranger");
  }
}
