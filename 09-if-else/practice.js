const date = new Date();

let dayOfTheWeek = date.getDay(); // 0-sunday 6-saturday

/*if (dayOfTheWeek >= 1 && dayOfTheWeek <= 5) {
    console.log('WEEKDAY');
}
else {
    console.log('WEEKEND');
}
*/

switch (true) {
    case dayOfTheWeek >= 1 && dayOfTheWeek <= 5:
        console.log('WEEKDAY');
        break;
    default:
        console.log('WEEKEND');
}

let result = dayOfTheWeek >= 1 && dayOfTheWeek <= 5 ? 'WEEKDAY' : 'WEEKEND';
console.log(result);