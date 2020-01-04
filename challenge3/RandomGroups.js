var x, rest, random_group, member;
var listname = [];
var data = [];
var flag = 0;

function start() {
  do {
    x = prompt("enter the names in the class or enter 0 to exit");
    if (x != 0) {
      listname.push(x);
    }
  } while (x != 0);
  shuffle(listname);
  random_group = prompt("enter number of groups");
  rest = listname.length % random_group;
  member = parseInt(listname.length / random_group);
  random_lists_vertical();
}

function shuffle(arra1) {
  var ctr = arra1.length,
    temp,
    index;
  while (ctr > 0) {
    index = Math.floor(Math.random() * ctr);
    ctr--;
    temp = arra1[ctr];
    arra1[ctr] = arra1[index];
    arra1[index] = temp;
  }
  return arra1;
}

function random_lists_vertical() {
  document.getElementById("horizantal").style.visibility = "visible";
  document.getElementById("vertical").style.visibility = "visible";
  var j,
    z,
    c,
    table,
    num,
    counter_index = 0;
  for (j = 0, num = 1; j < random_group; j++, num++) {
    var x = document.createElement("TABLE");
    x.setAttribute("id", "myTable" + j);
    document.body.appendChild(x);
    document.getElementById("myTable" + j).style.visibility = "visible";

    table = document.getElementById("myTable" + j);

    document.getElementById("myTable" + j).width = 170 + "px";
    var rows = table.insertRow(0);
    var headerCell = document.createElement("TH");
    headerCell.innerHTML = "Group " + num;
    rows.appendChild(headerCell);

    for (z = 0; z < member; z++) {
      var row = table.insertRow(-1);
      var cell1 = row.insertCell(0);
      cell1.innerHTML = listname[counter_index];
      counter_index++;
    }
  }
  if (rest == 1) {
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    cell1.innerHTML = listname[counter_index];
  } else {
    if (rest != 0) {
      var x = document.createElement("TABLE");
      x.setAttribute("id", "myTable" + num);
      document.body.appendChild(x);
      document.getElementById("myTable" + num).style.visibility = "visible";
      document.getElementById("myTable" + num).width = 170 + "px";
      table = document.getElementById("myTable" + num);
      var rows = table.insertRow(0);
      var headerCell = document.createElement("TH");
      headerCell.innerHTML = "Group " + num;
      rows.appendChild(headerCell);
      while (counter_index < listname.length) {
        var row = table.insertRow(-1);
        var cell1 = row.insertCell(0);
        cell1.innerHTML = listname[counter_index];
        counter_index++;
      }
    }
  }

  document.getElementById("myButton").style.visibility = "hidden";
}

function random_lists() {
  var counter_indexes = 0,
    zz_index = 1;
  document.getElementById("horizantal").style.visibility = "visible";
  document.getElementById("vertical").style.visibility = "visible";
  var table = document.getElementById("myTable");
  for (var i = 0; i < random_group; i++) {
    data[i] = new Array();
    var newRow = table.insertRow(-1);
    var newCell1 = newRow.insertCell(0);
    newCell1.innerHTML = "Group " + (i + 1) + " : ";
    for (var j = 0, z = 1; j < member; j++, z++) {
      //data[i].push(listname[c]);
      var newCell2 = newRow.insertCell(z);
      newCell2.innerHTML = listname[counter_indexes];
      counter_indexes++;
    }
  }

  if (rest == 1) {
    var newCell2 = newRow.insertCell(counter_indexes);
    newCell2.innerHTML = listname[counter_indexes];
  } else {
    if (rest != 0) {
      var newRow = table.insertRow(-1);
      var newCell1 = newRow.insertCell(0);
      newCell1.innerHTML = "Group " + random_group + " : ";
      while (counter_indexes < listname.length) {
        var newCell2 = newRow.insertCell(zz_index);
        newCell2.innerHTML = listname[counter_indexes];
        counter_indexes++;
      }
    }
  }

  document.getElementById("myButton").style.visibility = "hidden";
}

function vertical_hidden() {
  var zz;
  document.getElementById("myTable").style.visibility = "hidden";
  for (zz = 0; zz < random_group; zz++) {
    document.getElementById("myTable" + zz).style.visibility = "visible";
  }
  if (rest > 1) {
    document.getElementById("myTable" + (zz + 1)).style.visibility = "visible";
  }
}

function vertical_visible() {
  var zz;
  if (flag == 0) {
    flag = 1;
    random_lists();
  }
  for (zz = 0; zz < random_group; zz++) {
    document.getElementById("myTable" + zz).style.visibility = "hidden";
  }
  if (rest > 1) {
    document.getElementById("myTable" + (zz + 1)).style.visibility = "hidden";
  }
  document.getElementById("myTable").style.visibility = "visible";
}
