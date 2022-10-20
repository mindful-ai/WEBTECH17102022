function getindeces(mainstr, substr){

    var indeces = [];

    return indeces;
}

/*

mainstr = "mississippi"
substr  = "ss"

[[2,4], [5,7]]

other possibilities:
[] -> when the substring is not present in the mainstring


indeces.length -> number of ocurrences of the substring

*/

const text = "mississippi";
const searchstr = "ss";
const indeces = getindeces(text, searchstr);
console.log(text.slice[indeces[0][0], indeces[0][1]]); // --> ss
console.log(text.slice[indeces[1][0], indeces[1][1]]); // --> ss