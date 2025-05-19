import { countries } from "./data/countries.js"

/*
1. The following is an array of 10 students ages:
   `js const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24] ` - Sort the array and find the min and max age - Find the median age(one middle item or two middle items divided by two) - Find the average age(all items divided by number of items) - Find the range of the ages(max minus min) - Compare the value of (min - average) and (max - average), use _abs()_ method

   1.Slice the first ten countries from the [countries array](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js)

1. Find the middle country(ies) in the [countries array](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js)
1. Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
*/

//Sort the array and find the min and max age 
function sortAndFindMinMax( arr ) {
    let result = [];

    let min;
    let max; 

    for( let i = 0; i < arr.length; i++ ) {
        for( let j = 0; j < arr.length; j++ ) {
            if( arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; 
            }
        }         
    }
    
    min = arr[0];
    max = arr[arr.length - 1];
    
    result.push(arr, min, max);
    return result;
}
//Find the median age(one middle item or two middle items divided by two) 

function findMedian( arr ) {
    let result = [];

    let middle = Math.floor(arr.length / 2);
    if( arr.length % 2 === 0 ) {
        result.push(arr[middle - 1], arr[middle]);
    }else{
        result.push(arr[middle]);
    }

    return result;
}
//Find the average age(all items divided by number of items)
function findAvg( arr ) {
    let avg = 0;
    for ( let elm of arr ) {
        avg += elm;
    }
    avg /= arr.length;
    return avg;
}
//Find the range of the ages(max minus min) 
function findRange( arr ) {
    const min = arr[0];
    const max = arr[arr.length - 1];
    
    return max - min;
}
//Compare the value of (min - average) and (max - average), use _abs()_ method
function compareAbsolute( arr ) {
    let result = [];

    const min = arr[0];
    const max = arr[arr.length - 1];
    const avg = findAvg( arr );

    result.push(Math.round(Math.abs(min - avg) * 100) / 100);
    result.push(Math.round(Math.abs(max - avg)  * 100) / 100);

    return result;
}

function findMiddleCountry( arr ) {
    const middleCountryPos = Math.floor(arr.length / 2);  
    if( middleCountryPos % 2 === 0 ) {
        return "(Question 3) -- middle countries: %s, %s", 
            arr[middleCountryPos - 1], arr[middleCountryPos];
    } else {
        return "(Question 3) -- middle country: %s", arr[middleCountryPos];
    }
}

function middleCountries( arr ) {
    const middle = Math.ceil(arr.length / 2);
    if(middle % 2 === 0) {
        let firstHalf = arr.slice(0, middle);
        let secondHalf = arr.slice(middle);
        return [firstHalf, secondHalf];
    } else {
        let firstHalf = arr.slice(0, middle);
        firstHalf.push("USA"); //new country...
        let secondHalf = arr.slice(middle);
        return [firstHalf, secondHalf];
    }  
}
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

//Question 1. Part 1. -- Sort the array and find min and max
const sortedMaxMin = sortAndFindMinMax(ages);
console.log( "(Pt 1.) -- Sorted array: %s\nMIN: %s\nMAX: %s", sortedMaxMin[0], sortedMaxMin[1], sortedMaxMin[2]);

//Part 2. -- find the median
console.log( "(Pt 2.) -- Median age(s): ", findMedian( ages ) );

//Part 3. -- find the average 
console.log( "(Pt 3.) -- Average age: ", findAvg( ages )); 

//Part 4. -- find the range
console.log("(Pt 4.) -- Range is: ", findRange( ages ));

//Part 5. -- compare absolute values
const absValuesMinMax = compareAbsolute( ages );
console.log("(Pt 5.) -- abs of min - avg: %s\nabs of max - avg: %s", absValuesMinMax[0], absValuesMinMax[1]);

/*
 * Slice the first ten countries from the 
 * [countries array](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js)
 * 
 * */

//Question 2 -- slice the first 10 elements of the countries array
console.log("(Question 2) -- first 10 elements: ", countries.slice(0, 10));

/*
 * Find the middle country(ies) in the 
 * [countries array](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js)
 *
 * */

//Question 3 -- find the middle of countries
console.log("(Question 3) -- middle country", findMiddleCountry( countries ));

/*
 * Divide the countries array into two equal arrays if it is even. If countries array is 
 * not even, one more country for the first half.
 *
 * */

//Question 4 -- find middle countries 
let midCountries = middleCountries( countries );
console.log("(Question 4) -- middle countries when odd adds USA to first half", 
    midCountries[0], midCountries[1]);

let newCountries = [...countries];
newCountries.pop();
midCountries = middleCountries( newCountries );
console.log("(Question 4) -- example where countries array is even...", 
    midCountries[0], midCountries[1]);




