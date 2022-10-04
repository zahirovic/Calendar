/*added current day*/
var currentTime = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").text(currentTime);

/*added save on refresh*/
$('.saveBtn').on('click', function (event) {
    var scheduleItem =
    event.target.parentElement.previousElementSibling.children[0].value;
  localStorage.setItem(event.target.attributes[0].value, scheduleItem);
});