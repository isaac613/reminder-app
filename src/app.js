const command = process.argv[2];
const yargs = require("yargs");
const { addNote } = require("../utils/notes");
console.log(process.argv);
console.log(yargs.argv);

/* if (process.argv[2] == "Isaac") {
  console.log("hey that's my name");
} else {
  console.log("That's not my name");
}
*/

if (command == "add") {
  console.log(" adding a note");
  addNote(yargs.argv.note);
} else if (command == "remove") {
  console.log("deleting a note");
} else if (command == "list") {
  console.log("listing all notes");
} else {
  console.log("command not recognized");
}

console.log(command);
