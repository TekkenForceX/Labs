let name1 = "Matthew"
let name2 = "Christina"
let name3 = "Lanar"

let length = text.length;

if (name1.length > name2.length && name1.length > name3.length) {
    console.log(name1 + " is the longest name.");
} else if (name2.length > name1.length && name2.length > name3.length) {
    console.log(name2 + " is the longest name.");
} else if (name3.length > name1.length && name3.length > name2.length) {
    console.log(name3 + " is the longest name.");
} else if (name1.length === name2.length) {
    console.log(name1 + "and" + name2 + "tie for the longest name.");
} else {
    console.log("There is a tie for the longest name.");
}

