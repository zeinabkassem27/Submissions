function my_func() {
  if (confirm("Are you sure")) {
    document.getElementById("name").value = "";
    document.getElementById("surname").value = "";
    document.getElementById("city").value = "";
  } else {
    alert("no");
  }
}
