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
    time = today.getHours() + ":" + today.getMinutes();
    if(today.getMinutes().toString().length >1) {
      time = today.getHours() + ":" +today.getMinutes();
    }
    if (today.getMinutes().toString().length == 1) {
      time = today.getHours() + ":" +'0'+today.getMinutes();
    }
    datenow.setTime(timenow);
    var hournow = datenow.getHours();
    var greeting = document.getElementById('botm');
    if (hournow >= 18)
    {
      greeting.innerHTML = "Good Evening!" + day();
      var time = today.getHours() -12+ ":" + today.getMinutes();
      return time + 'pm'+ da;
    }
    else if (hournow >= 12) {
      greeting.innerHTML = "Good Afternoon!" + day();
      return time + 'pm' + da;
    } else {
      greeting.innerHTML = "Good Morning!" + day();
      return time + 'am' + da;   
    }
  }

function sendMessage() {
  timer()
  let message = input.value;
  let element = document.querySelector('main');
  let userMessage = document.createElement("div");
  userMessage.innerHTML = "<user><div class='user'><div class='userimg'><img src='images/me.jpg'><t2>Abubakar</t2></div><p id='userm' style='padding: 8px'>" + message + "</p><p id='time'>" + timer() +"</p></div></user>";
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
 userMessage.innerHTML = "<h9><div class='bot'><div class='botimg'><img src='images/ai.jpg'><t2>Alex (Ai)</t2></div><p id='botm' style='padding: 8px'>" + generate() + "</p><p id='time'>" + timer() + "</p></div></h9>";
 userMessage.className = "main";
 user.appendChild(userMessage);
   var audi = new Audio('script/msg.mp3').play();
 scroll();
 input.value=''
}

function save() {
let div = document.querySelector('main')
  localStorage.setItem('div', div.innerHTML);
  console.log(localStorage.getItem('div', div.innerHTML))
}

function load() {
let div = document.querySelector('main')
let div1 = document.querySelector('main')
  localStorage.getItem('div', div.innerHTML);
  div1.innerHTML = localStorage.getItem('div', div.innerHTML);
console.log(localStorage.getItem('div', div.innerHTML))
return sendMessage()
}

function scroll() {
  let element = document.querySelector('main');
  element.scrollTop = element.scrollHeight;
}

function day(week) {
  const weekday =
[" Sunday"," Monday"," Tuesday"," Wednesday"," Thursday"," Friday"," Saturday"];
const d = new Date();
let day = '' +weekday[d.getDay()];

var rest = ["Today is<mark2>" +day+ "</mark2> it's the best day to have some rest."];
var reply2 = rest[Math.floor(Math.random() *
  rest.length)];
  
var text = ["Are you happy today is", 
             "I hope you are happy today is", 
             "My favorite day"];
var reply = text[Math.floor(Math.random() *
  text.length)];
  
  if (day == " Thursday" || " Friday") {
   return  '<br>' + reply2
  } else {
    return '<br>' + reply + day.toLocaleLowerCase();
  }
}
