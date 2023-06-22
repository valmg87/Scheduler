// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var myDay = [

 {
  Id: "0",
  hour: "09",
  time: "09",
  meridiem: "am",
  reminder: ""

 },
 {
  id: "1",
  hour:"10",
  time: "10",
  meridiem:"am",
  reminder:""

 },
 {
  id:"3",
  hour:"12",
  time:"12",
  meridiem:"pm",
  reminder:""

 },
 {
  id:"4",
  hour: "01",
  time: "13",
  meridiem:"pm",
  reminder:""

 },
 {

  id:"5",
  hour:"02",
  time:"14",
  meridiem:"pm",
  reminder:""

 }
 {
  id:"6",
  hour:"03",
  time:"15",
  meridiem:"pm",
  reminder:""

 },
 {

 id:"7",
  hour:"04",
  time:"16",
  meridiem:"pm",
  reminder:""
},
{
  id:"8",
  hour:"05",
  time:"17",
  meridiem:"pm",
  reminder:""

},
{

  id:"9",
  hour:"06",
  time:"18",
  meridiem:"pm",
  reminder:""

},

]

//get data for the date
function getHeaderDate() {
  var currentHeaderDate= moment().format('dddd,MMMMM Do');
  $("#currentDay").text(currentHeaderDate);

}

//save data tp localstorage
function saveReminder(s)  {
    localStorage.setItem("myDay",JSON.stringify(myDay));

}

//sets data so you can view in localStorage
function displayReminders()  {
    myDay.forEach(function (_thisHour)  {
        $('#${_thisHour.id} ' ).val(_thisHour.reminder);
})

 
  
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  // TODO: Add code to get any user input that was saved in localStorage and set
  // TODO: Add code to display the current date in the header of the page.
