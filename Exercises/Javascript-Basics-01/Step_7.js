fn();
function fn() {
  var size = prompt("Enter shoes size"),
    birthdate = prompt("Enter your birthyear");
  //or take it from html
  //var size=document.getElementById('shoe_size').value;
  //var birthdate=document.getElementById('year').value
  if (size != 0 && birthdate != 0) {
    var result = (size * 2 + 5) * 50 - birthdate + 1766;
    alert(result);
  } else {
    alert("please enter birthdate and shoes zero!");
    fn();
  }
}
