for (var i = 1; i < 13; i++) {
  document.getElementById("log").innerHTML += i + ": ";
  for (j = 1; j < 13; j++) {
    document.getElementById("log").innerHTML += i * j;
    document.getElementById("log").innerHTML += " ";
  }
  document.getElementById("log").innerHTML += "<br>";
}
