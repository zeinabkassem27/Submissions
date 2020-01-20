let list_task = ["php", "css", "react", "js"];
/**
 * Starts the application
 * This is the function that is run when the app starts
 *
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name) {
  process.stdin.resume();
  process.stdin.setEncoding("utf8");
  process.stdin.on("data", onDataReceived);
  console.log(`Welcome to ${name}'s application!`);
  console.log("--------------------");
}

/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 *
 * For example, if the user entered
 * ```
 * node tasks.js batata
 * ```
 *
 * The text received would be "batata"
 * This function  then directs to other functions
 *
 * @param  {string} text data typed by the user
 * @returns {void}
 */
function onDataReceived(text) {
  var stringArray = text.split(/(\s+)/);
  if (text === "quit\n" || text === "exit\n") {
    quit();
  } else if (stringArray[0] === "hello") {
    if (stringArray[2] != " ") hello(stringArray[2]);
    else hello("");
  } else if (text === "help\n") {
    help();
  } else if (text === "display\n") {
    display();
  } else if (stringArray[0] === "add") {
    if (stringArray[2] != "") add(stringArray[2]);
    else console.log("enter somthing to add to the list please");
  } else if (stringArray[0] === "remove") {
    remove(stringArray[2]);
  } else {
    unknownCommand(text);
  }
}

/**
 * prints "help command"
 * This function is supposed to show the user what command are available to use
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function help() {
  console.log('write "quit" or "exit" to exit');
  console.log('write "hello" to say hello! ');
  console.log(
    'write hello anything to say "hello anyhing" for example if you wrote "hello batata" the ouput will be "hello batata!"'
  );
  console.log('write "display" inorder to display the list');
  console.log('write "add something" inorder to add to the last ');
  console.log(
    'write "remove" inorder to remove last itemm in the list or write "remove number" to remove the index you specified'
  );
}
/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c) {
  console.log('unknown command: "' + c.trim() + '"');
}

/**
 * Says hello
 *
 * @returns {void}
 */
function hello(name) {
  if (name == "") console.log("hello!");
  else console.log("hello " + name + "!");
}
function remove(x) {
  console.log(list_task.length);
  if (parseInt(x) < list_task.length) list_task.splice(x, 1);
  else if (parseInt(x) >= list_task.length)
    console.log("you exceed the length if list");
  else if (x == "") list_task.splice(list_task.length - 1, 1);
  display();
}

/**
 * Exits the application
 *
 * @returns {void}
 */
function quit() {
  console.log("Quitting now, goodbye!");
  process.exit();
}
function display() {
  for (let i = 0; i < list_task.length; i++) {
    console.log(i + "- " + list_task[i]);
  }
}
function add(x) {
  list_task.push(x);
  display();
}

// The following line starts the application
startApp("Zeinab kassem");
