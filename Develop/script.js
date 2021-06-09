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

// Saves text to local storage
$(".saveBtn").on("click", function() {
    var value = $(this).siblings("text-area").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, value);
});

$("#9 .row time-block").val(localStorage.getItem("9"));

$("#10 .row time-block").val(localStorage.getItem("10"));

$("#11 .row time-block").val(localStorage.getItem("11"));

$("#12 .row time-block").val(localStorage.getItem("12"));

$("#1 .row time-block").val(localStorage.getItem("13"));

$("#9 .row time-block").val(localStorage.getItem("14"));

$("#9 .row time-block").val(localStorage.getItem("15"));

$("#9 .row time-block").val(localStorage.getItem("16"));

$("#9 .row time-block").val(localStorage.getItem("17"));