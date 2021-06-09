// Display current date
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do YYYY"));


console.log(today)

// Color code rows based on past present and future
var timeBlock = $(".hour");
var currentTime = parseInt(moment().format("H"));

$each(timeBlock, function (i, hour) {
    var hourId = parseInt($(this).attr("id"));
    if (hourId === currentTime) {
        $(this).next().addClass("present");
    } else if (hourId < currentTime) {
        $(this).next().addClass("past");
    } else if (hourId > currentTime) {
        $(this).next().addClass("future");
    }
});

