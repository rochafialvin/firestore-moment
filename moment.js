const moment = require("moment");

let m = moment();

// console.log(m.toString());

// ISO 8601 //

// Sat Aug 03 2019 00:00:00 GMT+0700
m = moment("2019-08-03");
// Thu Aug 01 2019 00:00:00 GMT+0700
m = moment("2019-08");
// Sat Aug 03 2019 00:00:00 GMT+0700
m = moment("20190803");
// Fri Jun 25 2021 18:05:00 GMT+0700
m = moment("2021-06-25 18:05:00");

// STRING + FORMAT //
// If we know about the pattern of date given into moment()

// Mon Dec 25 1995 00:00:00 GMT+0700
m = moment("12-25-1995", "MM-DD-YYYY");
// Mon Dec 25 1995 00:00:00 GMT+0700
m = moment("12/25/1995", "MM-DD-YYYY");
// Mon Dec 25 1995 00:00:00 GMT+0700
m = moment("12/25/95", "MM-DD-YY");

// YEAR, MONTH, DAY //

// 02-05-2021, 20:57:06
m = moment().format("DD-MM-YYYY, HH:mm:ss");
// 2nd - May - 2021, 21:07:11 PM
m = moment().format("Do - MMM - YYYY, HH:mm:ss A");
// Sun / May / 2021, 09:07:50 pm
m = moment().format("ddd / MMM / YYYY, hh:mm:ss a");
// Minggu, 02 Mei 2021, 09:08:47 malam
m = moment().locale("id").format("dddd, DD MMM YYYY, hh:mm:ss a");

// LOCAL AWARE (MORE SIMPLE) //

// 05/02/2021
m = moment().format("L");
// May 2, 2021
m = moment().format("LL");
// May 2, 2021 9:17 PM
m = moment().format("LLL");
// Sunday, May 2, 2021 9:17 PM
m = moment().format("LLLL");

// 9:18 PM
m = moment().format("LT");
// 9:18:11 PM
m = moment().format("LTS");

// HOUR, MINUTE, SECOND, M SECOND, OFFSET //

// 09:24:24 pm
m = moment().format("hh:mm:ss a");
// 21:24:33 PM
m = moment().format("HH:mm:ss A");

// GET

// GET millisecond
m = moment().millisecond();
// SET millisecond
m = moment().millisecond(300);

// GET second
m = moment().second();
// SET second
m = moment().second(20);

// GET minute ( 0 to 59 )
m = moment().minute();
// SET minute ( 0 to 59 )
m = moment().minute(30);

// GET hour ( 0 to 23 )
m = moment().hour();
// SET hour ( 0 to 23 )
m = moment().hour(22);

// GET date ( 1 to 31 )
m = moment().date();
// SET date ( 1 to 31 )
m = moment().date(22);

// GET day ( 0 to 6 )
m = moment().day();
// SET day ( 0 to 6 )
m = moment().day(6);
// SET day ( Sunday to Saturday )
m = moment().day("Monday");

// GET month ( 0 to 11 )
m = moment().month();
// SET month ( 0 to 11 )
m = moment().month(1);
// SET month ( "January" to "December" )
m = moment().month("Oct");

// GET year ( -270,000 to 270,000 )
m = moment().year();
// SET year ( -270,000 to 270,000 )
m = moment().year(22);

console.log(m.toString());
