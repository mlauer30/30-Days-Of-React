//1.
console.log("question #1");
console.group();
const arr = Array();
console.log(arr);
console.groupEnd();


//2.
const stuff = ["thing 1", "thing 2", "thing 3", "thing 4", "thing 5"];
console.log("question #2");
console.group();
console.log(stuff.toString());
console.groupEnd();


//3.
console.log("question #3");
console.group();
console.log('length of array "%s" -> %d', "stuff", stuff.length);
console.groupEnd();


//4.
console.log("question #4");
console.group();
console.log("hello dad!");
console.log("first element -> %s", stuff[0]);
console.log("middle element -> %s", stuff[Math.floor(stuff.length / 2)]);
console.log("last element -> %s", stuff[stuff.length - 1]);
console.groupEnd();


//5.
const mixedDataTypes = [1, "two", 3.0, "4", 5, "six"];
console.log("question #5");
console.group();
console.log(mixedDataTypes.length);
console.groupEnd();


//6.
const itCompanies = [
    "Facebook",
    "Google",
    "MicroSoft",
    "Apple",
    "IBM",
    "Oracle",
    "Amazon",
    //"NVIDIA"
];
console.log("question #6 \n%smade new array called itCompanies", "  ");


//7.
console.log("question #7");
console.group();
console.log(itCompanies);
console.groupEnd();


//8.
console.log("question #8");
console.group();
console.log("number of companies -> %d", itCompanies.length);
console.groupEnd();


//9.
console.log("question #8");
console.group();
console.log("first company -> %s", itCompanies[0]);
console.log(
  "middle company -> %s",
  itCompanies[Math.floor(itCompanies.length / 2)]
);
console.log("last company -> %s", itCompanies[itCompanies.length - 1]);
console.groupEnd();


//10.
console.log("question #10");
console.group();
itCompanies.forEach(element => {
    console.log(element);
});
console.groupEnd();


//11.
//console.log("question #11");
//console.group();
//itCompanies.forEach(element => {
//    console.log(element.toUpperCase());
//});
//console.groupEnd();
//w map function
console.log("question #11");
console.group();
const companies = itCompanies.map(company => {
    return company.toUpperCase();
})
console.log(companies);
console.groupEnd();


//12. Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log("question #12");
console.group();
let sentence = "";
itCompanies.forEach(element => {
    if(element == itCompanies[itCompanies.length - 1])
        sentence += "and " + element;
    else
        sentence += element + ", ";
});
console.log("%s are big IT companies", sentence);
console.groupEnd();


//13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is _not found_
console.log("question #13");
console.group();
//let company = "Amazon"; 
let company = "NVIDIA";
if(itCompanies.includes(company))
    console.log("%s exists!", company);
else
    console.log("%s is not found!", company);
console.groupEnd();


//14. Filter out companies which have more than one 'o' without the filter method
console.log("question #14")
console.group();
function filter(arr, value) {
    const result = [];
    const newArr = arr.map(element => {
        let charCount = {}; // object where properties are key-value pairs
        
        for (let char of element) {
            if (charCount[char] && char.toLowerCase() === value) {
                charCount[char]++;
                return;
            }
            charCount[char] = 1;
        }
        return element; 
    });

    for (let element of newArr) {
        if (element !== undefined)
            result.push(element);
    }
    return result;
};
console.log(filter(itCompanies,"o"));
console.groupEnd();


//15. Sort the array using _sort()_ method
console.log("question #15");
console.group();
let sortComps = [...itCompanies];
console.log(sortComps.sort());
console.groupEnd();


//16. Reverse the array using _reverse()_ method
console.log("question #16");
console.group();
let reverseComps = [...itCompanies];
console.log(reverseComps.reverse());
console.groupEnd();


//17. Slice out the first 3 companies from the array
console.log("question #17");
console.group();
let lastComps = [...itCompanies];
console.log(itCompanies.slice(0, 3));
console.groupEnd();


//18. Slice out the last 3 companies from the array
console.log("question #18");
console.group();
let firstComps = [...itCompanies];
console.log(firstComps.slice(firstComps.length - 3));
console.groupEnd();


//19. Slice out the middle IT company or companies from the array
console.log("question #19");
console.group();
let middleComps = [...itCompanies];
console.log(middleComps.slice(1, middleComps.length - 1));
console.groupEnd();


//20. Remove the first IT company from the array
console.log("question #20");
console.group();
let removeFirst = [...itCompanies];
removeFirst.shift();
console.log(removeFirst);
console.groupEnd();


//21. Remove the middle IT company or companies from the array
console.log("question #21");
console.group();
let removeMiddle = [...itCompanies];
removeMiddle.splice(1, removeMiddle.length - 2);
console.log(removeMiddle);
console.groupEnd();


//22. Remove the last IT company from the array
console.log("question #22");
console.group();
let removeLast = [...itCompanies];
removeLast.splice(removeLast.length - 1, 1);
console.log(removeLast);
console.groupEnd();


//23. Remove all IT companies
console.log("question #23");
console.group();
let removeAll = [...itCompanies];
removeAll.splice(0, removeAll.length);
console.log(removeAll);
console.groupEnd();

//changes













