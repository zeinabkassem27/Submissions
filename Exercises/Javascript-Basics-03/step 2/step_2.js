function myFunc(x) {
  let y = document.getElementById("texte");
  switch (x) {
    case "show":
      y.style.display = "block";
      break;
    case "hide":
      y.style.display = "none";
      break;
  }
}
