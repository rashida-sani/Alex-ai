document.getElementById('time').innerHTML = timer();
let user = document.querySelector("user");
let body = document.querySelector('body');
  	    document.addEventListener("DOMContentLoaded", () => {
  body.addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
      sendMessage()
    }
  });
});
  function timer() {
    day()
    const weekS =
    [" Sun"," Mon"," Tue"," Wed"," Thu"," Fri"," Sat"];
const d = new Date();
let da = "<code>" + weekS[d.getDay()];
var datenow = new Date();
    var timenow = datenow.getTime();
    var today = new Date();
   time = new Date().toLocaleTimeString().slice(0,5)+' ';
    datenow.setTime(timenow);
    var hournow = datenow.getHours();
    var greeting = document.getElementById('botm');
    if (hournow >= 18)
    {
      greeting.innerHTML = "Good Evening!" + day();
      var time = today.getHours() -12+ ":" + today.getMinutes();
      return time + 'pm';
    }
    else if (hournow >= 12) {
      greeting.innerHTML = "Good Afternoon!" + day();
      return time + 'pm';
    } else {
      greeting.innerHTML = "Good Morning!" + day();
      return time + 'am';   
    }
  }

  function time() {
var datenow = new Date();
    var timenow = datenow.getTime();
    var today = new Date();
   time = new Date().toLocaleTimeString().slice(0,5)+' ';
    var hournow = datenow.getHours();
     if (hournow >= 18)
    {
      var time = today.getHours() -12+ ":" + today.getMinutes();
      return time + 'pm';
    }
    else if (hournow >= 12) {
      return time + 'pm';
    } else {
      return time + 'am';   
    }
  }
function sendMessage() {
  let name = localStorage.getItem('username');
  let Ppic = JSON.parse(localStorage.getItem("Ppic"));
  let message = input.value;
  let element = document.querySelector('main');
  let userMessage = document.createElement("div");
  userMessage.innerHTML = "<user><div class='user'><div class='userimg'><img src='"+Ppic+"'><t2>"+name+"</t2></div><p id='userm' style='padding: 8px'>" + message + "</p><p id='time'>" + time() +"</p></div></user>";
  userMessage.className = "main";
  user.appendChild(userMessage);
  var audi = new Audio('script/msg.mp3').play();
  let a = document.getElementById('status').innerText = "Typing...";
scroll();
setTimeout(ai, 1500);
}
function ai() {
 let a = document.getElementById('status').innerText = "Online";
 let userMessage = document.createElement("div");
 userMessage.innerHTML = "<h9><div class='bot'><div class='botimg'><img src='images/ai.jpg'><t2>Alex (Ai)</t2></div><p id='botm' style='padding: 8px'>" + generate() + "</p><p id='time'>" + time() + "</p></div></h9>";
 userMessage.className = "main";
 user.appendChild(userMessage);
   var audi = new Audio('script/msg.mp3').play();
 scroll();
 input.value='';
}
function save() {
let div = document.querySelector('main')
  localStorage.setItem('div', div.innerHTML);
}

function scroll() {
  let element = document.querySelector('main');
  element.scrollTop = element.scrollHeight;
}

function day(week) {
  let name = localStorage.getItem('username');
  const weekday =
[" Sunday"," Monday"," Tuesday"," Wednesday"," Thursday"," Friday"," Saturday"];
const d = new Date();
let day = '' +weekday[d.getDay()];

var rest = ["Today is " +day+ " i advice you to use this day to have some rest.",
            name+" you are welome how can i assist you today.",
            name+" do you know that today is "+day
];
var reply1 = rest[Math.floor(Math.random() *
  rest.length)];
  
var text = [name+" are you happy today is", 
            name+" i hope you are happy today is",
            name+" welcome the special day again"];
var reply2 = text[Math.floor(Math.random() *
  text.length)];
  if (day == " Thursday" || " Friday") {
   return  '<br>' + reply1
  } else {
    return '<br>' + reply2 + day.toLocaleLowerCase();
  }
}
