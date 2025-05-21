/*
1. Write a code which can give grades to students according to theirs scores:
   - 90-100, A
   - 80-89, B
   - 70-79, C
   - 60-69, D
   - 0-59, F
*/
let grade = Math.ceil(prompt("Enter student grade: "));    
switch(true) {
    case grade >= 90 :
        console.log("A");
        break;
    case grade >= 80 :
        console.log("B");
        break;
    case grade >= 70 :
        console.log("C");
        break;
    case grade >= 60 :
        console.log("D");
        break;
    case grade <= 59 :
        console.log("F");
        break;
    default : 
        console.log("Only enter numbers")
}

/*
1. Check if the season is Autumn, Winter, Spring or Summer.
   If the user input is :
   - September, October or November, the season is Autumn.
   - December, January or February, the season is Winter.
   - March, April or May, the season is Spring
   - June, July or August, the season is Summer
*/

let monthUserInput = prompt("Enter a month in the year: ");
let month = monthUserInput.toLowerCase();
switch(month) {
    case "september" :
    case "october" :
    case "november" : 
        console.log("The season is Autumn");
        break;
    case "december" :
    case "january" :
    case "february" :
        console.log("The season is Winter");
        break;
    case "march" :
    case "april" :
    case "may" :
        console.log("The season is Spring");
        break;
    case "june" :
    case "july" :
    case "august" :
        console.log("The season is Summer");
        break;
    default :
        console.log("Valid date not entered");
}

/*
1. Check if a day is weekend day or a working day. Your script will take day as an input.

```sh
    What is the day  today? Saturday
    Saturday is a weekend.

    What is the day today? saturDaY
    Saturday is a weekend.

    What is the day today? Friday
    Friday is a working day.

    What is the day today? FrIDAy
    Friday is a working day.
```
*/

let day = prompt("Enter the day of the week: ");

switch(day.toLowerCase()) {
    case "monday" :
    case "tuesday" :
    case "wednesday" :
    case "thursday" :
    case "friday" :
    console.log("Today is a weekday...");
    break;
    case "saturday" :
    case "sunday" :
    console.log("It's the weekend!");
    break;
    default:
    console.log("Enter a valid day of the week\nMonday - Sunday");
}



