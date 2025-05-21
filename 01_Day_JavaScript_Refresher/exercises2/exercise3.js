/*
1. Write a program which tells the number of days in a month.

```sh
  Enter a month: January
  January has 31 days.

  Enter a month: JANUARY
  January has 31 day

  Enter a month: February
  February has 28 days.

  Enter a month: FEbruary
  February has 28 days.
```

1. Write a program which tells the number of days in a month, now consider leap year.
*/

let month = prompt("Enter a month: ");
switch(month.toLowerCase()) {
    case "january" :
    case "march" :
    case "may" :
    case "july" :
    case "august" :
    case "october" :
    case "december" :
        console.log("%s has 31 days", month);
        break;
    case "april":
    case "june" :
    case "september" :
    case "november" :
        console.log("%s has 30 days", month);
        break;
    case "february" :
        console.log("%s has 28 days", month);
        break;
    default: 
        console.log("Please enter a valid month");
        break;
}







