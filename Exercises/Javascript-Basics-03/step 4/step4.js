function myFunc() {
  if (
    document.getElementById("password").value !=
    document.getElementById("confirmation").value
  ) {
    document.getElementById("confirmation").style.border = "thick solid red ";
  } else {
    document.getElementById("confirmation").style.border = "thin solid black";
    alert("Done");
  }
}
