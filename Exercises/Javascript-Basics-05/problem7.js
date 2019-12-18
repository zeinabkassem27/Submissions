for (var i = 2; i < 30; i++) {
  var flag = 0;
  for (j = 2; j < i; j++) {
    if (i % j == 0) {
      flag = 1;
      break;
    }
  }
  if (flag == 0) {
    document.getElementById("log").innerHTML += j;
    document.getElementById("log").innerHTML += " ";
  }
}
