// Part3: Feeling Loopy

// CSV string
let csvData = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,FryCook,19\n63,Blaine, Quiz Master,58\n98, Bill, Doctor’s Assistant,26"

// Temporary variables to store 
let cell = "";
let row = [];

//Loop through every character in string
// if the character is a comma finish current cell
// if the character is a newline finish current row
//if it is a normal character add to curent cell
//final row
for (let char of csvData) {
    if (char === ",") {
        row.push(cell);
        cell = "";

} else if (char === "\n") {
    row.push(cell);
    console.log(row[0], row[1], row[2], row[3]);
    row = [];
    cell  = "";

} else {
    cell += char;
}
}
if (cell.length > 0) {
    row.push(cell);
    console.log(row[0], row[1], row[2], row[3]);
}