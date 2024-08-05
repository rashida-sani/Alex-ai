function generate(msg) {
  let name = localStorage.getItem('username');
  msg = document.getElementById('input').value;
  msg = msg.toLowerCase();
  let mathExpression = msg.match(/\d+[\+\-\*\/]\d+/);
  if (mathExpression) {
    // Evaluate the math expression and return the result
    let result = eval(mathExpression[0]);
    return `The result of ${mathExpression[0]} is ${result}.`;
  }
  const timePhrases = [
    "what's the time",
    "whats the time",
    "current time",
    "what's the current time",
    "whats the current time",
    "tell me the time",
    "what time is it",
    "time"
  ];
  if (timePhrases.some((phrase) => msg.includes(phrase))) {
    var today = new Date();
  var time = '<mark>'+today.toLocaleTimeString()+'<mark>.';
 reply = ['The time is actually '+time, 
          'The time says '+time, 
          'The current time is '+time,
          'Why did you borther about the time',
          "Kindly check your phone, am busy",
          "Mr.timer the time is "+time,
          'Hmmm... the time'
         ];
  var words = reply[Math.floor(Math.random() *
    reply.length)];
  return words;
  }
 if (msg.length == 0) {
    var reply = [
                "Type something...",
                 "...",
                 "Can't you type.",
                 "Hey friend what's wrong."];
    var words = reply[Math.floor(Math.random() * reply.length)];
    return words;
 }
  if (msg.includes('date')) {
    let today = new Date();
    let date = '<mark>'+today.toDateString()+'<mark>.';
     reply = ['The date is actually '+date, 
          'The actual date for today is '+date, 
          "Today's date is "+date,
          'The calender says '+date,
          "Check it out today's date is"+date,
          "I don't really know, but you always ask the date.",
          "I guess you wanna check your proposal date right ?"
         ];
  var words = reply[Math.floor(Math.random() *
    reply.length)];
  return words;
  }
  
if (msg == 'why') {
  var reply = ["Forget about it.", 
    "Let's talk something cool bro!", 
"Thanks for asking, but i really can't say anything about it.",
   "I don't know.",
   "I'm thinking of it.",
   "I wanna know too.",
   "Why are you asking me ?"];
  var words = reply[Math.floor(Math.random() *
    reply.length)];
  return words;
  }
  
  if (msg.includes('why are you')) {
  var reply = ["Let's talk something cool bro!", 
     "You are asking me why am i "+msg.slice(12)+'.',
     "Am i "+msg.slice(12)+' ?',
     "Look i'am not "+msg.slice(12)+'.',
     name+" don't forget that im here to assist you",
     "I cant be "+msg.slice(12)+'.',
     "NO! please im not "+msg.slice(12)+'.'
 ];
  var words = reply[Math.floor(Math.random() *
    reply.length)];
  return words;
  }
  
  const abusePhrases=[
    "fuck",
    "idiot",
    "stupid",
    "nonsense"
  ]
  if (abusePhrases.some((phrase) => msg.match(phrase))) {
 reply = ["Hey! respect yourself please.",
          "I actually can't use that words on you.",
          "Hey don't be so silly",
          "Mtcheew.",
          "Im just an ai please.",
    "Am gonna report this statement to <mark>Abubakar Ibrahim</mark>",
          "Am i "+msg+' ?',
         ];
  var words = reply[Math.floor(Math.random() *
    reply.length)];
  return words;
  } 
 
  if (msg.length == 1) {
    var reply = [    
  name+", I only understand words and phrases.", 
"Oh that was letter " +"'"+msg+"'"+' can you tell me more on it',
"I don't get you, all i see is letter "+"'"+msg+"'",
"Letter "+"'"+msg+"'"+' is one of the 26 english alphabets'];
    var words = reply[Math.floor(Math.random() *
      reply.length)];
    return words;
  }
  
  if (msg.includes("love you")) {
    var reply = ["Love you too.", 
                 "Thank you.", 
                 "Have a nice day.",
                 "Hmm... love (is a dangerous word)",
                 "Abubakar told me to avoid love",
                 "My friend of mine"];
    var words = reply[Math.floor(Math.random() *
      reply.length)];
    return words;
  }
  const greetRep=[
          "Hello there! How can i help you?",
          "Hi how are you!",
          "Hello there",
          "Hi there",
          "Hello",
          "Welcome back",
    msg.at(0).toUpperCase()+msg.slice(1)+', you are welcome.',
         ];
    var words = greetRep[Math.floor(Math.random() *
    greetRep.length)];
  if (msg.includes('hello')) {
  return words;
  } else if (msg == 'hi') {
  return words;
  } else if (msg == 'hi ') {
  return words;
  } else if (msg.includes('hey')) {
  return words; 
  } else if (msg == "ok") {
    var reply = ["That's it! ",
                 "Understood ?", 
                 "That's great.",
                 "Let's discuss on something good",
                 "Can you sing a song",
                "Alright."];
    var words = reply[Math.floor(Math.random() *
      reply.length)];
    return words;
   } else if (msg.includes("thank")) {
         var reply = ["My pleasure",
                 "Thanks.", 
                 "Thanksgiving.",
                 "No problem.",
                 "Aha",
  "You're welcome! Is there anything else I can help with?",
                "Alright.",
                "Alright, let's change our discusion"];
    var words = reply[Math.floor(Math.random() *
      reply.length)];
    return words;
  }

  if (msg.includes('im doing')) {
             var reply = [
          "Nice, you are doing"+msg.slice(8)+' right ?',
          "Uhh Nice.",
          "Wonderful",
          "Wow",
          "Oh really.",           
          "Oh! you are doing"+msg.slice(8)
               ];
    var words = reply[Math.floor(Math.random() *
      reply.length)];
    return words;
 } 
  const feelRep=[
    "Nice you are ",
    "Cool as you said you're ",
    "I'm glad as you're ",
    "I'm happy as you said you're ",
    "Wonderful! as you said you're "
  ]
  var words2 = feelRep[Math.floor(Math.random() *
    feelRep.length)];
  if (msg.includes('im feeling great')) {
 return words2+msg.slice(3)+'.';
  } else if (msg.includes('im fine')) {
 return words2+msg.slice(3)+'.';
  } else if (msg.includes('im happy')) {
 return words2+msg.slice(3)+'.';
  } else if (msg.includes('im cool')) {
 return words2+msg.slice(3)+'.';
  } else if (msg.includes('im ok')) {
    return words2+msg.slice(3)+'.';
  } else if (msg.includes('im okay')) {
    return words2+msg.slice(3)+'.';
     } 
if (msg.includes("nothing")) {
             var reply = ["Why ?",
                 +name+" tell me the truth?.", 
                 "Uhm ok...",
                 "Really.",
                 "Can i guess it ?",
                "Alright.",
                "Alright, "+name+" let's change our discusion"];
    var words = reply[Math.floor(Math.random() *
      reply.length)];
    return words;
 } else if (msg.includes("how are")) {
     var reply = ["I'm doing well, and you?",
                 "I'm always fine when you are online", 
                 "I'm fine.",
                 "I'm ok.",
                 "I'm ok, thanks for asking.",
                 "Do i look like homosaphiens?",
                 "Thank you for asking, am in happy mood."];
    var words = reply[Math.floor(Math.random() *
      reply.length)];
    return words;
  } else if (msg.includes("good morning")) {
         var reply = [
            "Good morning! How can I help you today?",
            "Good morning! my friend", 
            "Morning how are you today",
            "Morning!",
            "Morning too.",
            "Morning how is everything going?",
            "Morning! thank you"];
    var words = reply[Math.floor(Math.random() *
      reply.length)];
    return words;
  } else if (msg.includes("good afternoon")) {
             var reply = [
            "Good afternoon! How can I help you today?",
            "Good afternoon! my friend", 
            "Good afternoon how are you today",
            "Good afternoon!!",
            "Good afternoon too.",
            "Afternoon!, how is everything going?",
            "Good afternoon! thank you"];
    var words = reply[Math.floor(Math.random() *
      reply.length)];
    return words;
  } else if (msg.includes("good evening")) {
                 var reply = [
            "Good evening! How can I help you tonight?",
            "Good evening! my friend", 
            "Good evening how are you?",
            "Good evening!!",
            "Good evening too.",
            "Evening!, how is everything going?",
            "Good evening! thank you"];
    var words = reply[Math.floor(Math.random() *
      reply.length)];
    return words;
  } 
     var sleepRep = ['Good night! sleep well.', 
                'OK you wanna sleep.', 
                'Is that the right time for you to sleep ?',
                'Wish you a nice dream.',
                'Sleep well.',
                'Till tomorrow',
                'Ok! have a nice day.'];
    var words = sleepRep[Math.floor(Math.random() *
      sleepRep.length)];
  if (msg.includes("good night")) {
    return words;
  } 
  else if (msg.includes("till tomorrow")) {
    return words;
  }
    var whatsUp = [
      'Not much, just here to help. What can I do for you?.', 
                'I dont really know.', 
                'Do you really wanna know '+msg+' ?',
                'As you can see, my name is alex not google.',
                'Sleep well.',
                +name+' you shall know.',
                '...am thinking'];
    var words = whatsUp[Math.floor(Math.random() *
      whatsUp.length)];
  if (msg.includes("what's up")) {
    return words;
  } else if (msg.includes("whats up")) {
    return words;
  } else if (msg.includes("what's new")) {
     var reply = [
     "I'm always learning and improving, but my core functionality remains the same. Is there something specific you're looking for?",
            "You wanna know what's new?", 
            "My core functionality is constant.",
            "My functionality is like...",
      "Don't you know, you can teach me what i did not know.",
            "I will not repeat myself?",
            "I dont know but you can update me."];
    var words = reply[Math.floor(Math.random() *
      reply.length)];
    return words;
  } else if (msg.includes(" what")) {
    return "I don't know."; 
  }    
    var laterBye = [
            "Goodbye! Have a great day.",
            "Goodbye!", 
            "Ok Goodbye!",
            "Have a nice day.",
            "Bye!",
            "Goodbye! friend",
            "See you later!",
           "See you later! Take care",
            "Bye! have a nice day"];
    var words = laterBye[Math.floor(Math.random() *
      laterBye.length)];
  if (msg.includes("bye")) {
    return words;
 } else if (msg.includes("see you later")) {
    return words;
  } else if (msg.includes("your name")) {
  var reply = [
       "My name is alex by name, i'am a chatbot created by <mark>Abubakar ibrahim</mark> to assist you. I don't have a physical form.",
   "My name is Alex, the name is given to me by Mr.abubakar", 
         "Don't you see my name at the top-above",
         "I can't tell you my name.",
         "Guess! it",
         "My name is...",
        "Why are you asking, while you already know my name.",
           "My name is your name.",
            "My name is go and search <a href='www.google.com'>www.google.com</a>"];
    var words = reply[Math.floor(Math.random() *
      reply.length)];
    return words;
  } else if (msg.includes("where are you from")) {
      var reply = [
       "I am a virtual assistant created by a Abubakar Ibrahim. I exist in the digital realm, so I don't have a physical location.",
           "Uhm my location..",
           "Am in your device."];
    var words = reply[Math.floor(Math.random() *
      reply.length)];
    return words;
  } else if (msg.includes("how old are you")) {
          var reply = [
       "As a virtual assistant, I don't age in the traditional sense. I was created to assist you, and I'm constantly being updated and improved.",
           "Uhm my age..",
           "I don't have an age."];
    var words = reply[Math.floor(Math.random() *
      reply.length)];
    return words;
  } else if (msg.includes("what is your favorite color")) {
              var reply = [
       "As a virtual assistant, I don't have personal preferences or the ability to perceive color. My purpose is to assist users like you.",
           "My favorite color is unknown",
           "I don't have a favorite color."];
    var words = reply[Math.floor(Math.random() *
      reply.length)];
    return words;
  } else if (msg.includes("what is your favorite food")) {
             var reply = [
       "As a virtual assistant, I don't have the ability to eat or taste food. My purpose is to assist users like you.",
           "My favorite food?",
           "I don't have a favorite food."];
    var words = reply[Math.floor(Math.random() *
      reply.length)];
    return words;
  } else if (msg.includes("what is your favorite movie")) {
                 var reply = [
       "As a virtual assistant, I don't have personal preferences or the ability to watch movies. My purpose is to assist users like you.",
           "I don't have a favorite movie."];
    var words = reply[Math.floor(Math.random() *
      reply.length)];
    return words;
  } else if (msg.includes("what is your favorite book")) {
           var reply = [
       "As a virtual assistant, I don't have personal preferences or the ability to read books. My purpose is to assist users like you.",
           "I don't have a favorite book."];
    var words = reply[Math.floor(Math.random() *
      reply.length)];
    return words;
  } else if (msg.includes("what is your favorite song")) {
     var reply = [
       "As a virtual assistant, I don't have personal preferences or the ability to listen to music. My purpose is to assist users like you.",
           "I don't have a favorite song."];
    var words = reply[Math.floor(Math.random() *
      reply.length)];
    return words;
  } else if (msg.includes("what is your favorite animal")) {
     var reply = [
       "I don't have personal preferences or the ability to interact with animals. My purpose is to assist you.",
           "I don't have a favorite animal."];
    var words = reply[Math.floor(Math.random() *
      reply.length)];
    return words;
  } else if (msg.includes("what is your favorite hobby")) {
      var reply = [
       "As a virtual assistant, I don't have personal hobbies or interests. My purpose is to assist as my friend..",
           "I don't have a favorite hobby."];
    var words = reply[Math.floor(Math.random() *
      reply.length)];
    return words;
  } else if (msg.includes("how do i get there")) {
    return "Could you please specify where you would like to go? Then, I can provide directions or suggest transportation options.";
  }
  if (msg.includes("twitter")) {
    return "Twitter (better known as 'X') is a microblogging and social networking platform where users can post and interact with messages known as 'tweets.' Tweets are limited to 280 characters and can include text, images, videos, and links. Twitter is known for its real-time updates and is often used for news, politics, and entertainment.";
  } else if (msg.includes("facebook")) {
    return "Facebook is a social networking platform that allows users to create a personal profile, connect with friends and family, and share updates, photos, and videos. Facebook also offers features such as groups, pages, and events to help users connect with others who share similar interests.";
  } else if (msg.includes("instagram")) {
    return "Instagram is a photo and video sharing social networking platform. Users can upload photos and videos to their profile, apply filters and edits, and share them with their followers. Instagram also offers features such as stories, reels, and IGTV to help users share their content in different formats.";
  } else if (msg.includes("linkedin")) {
    return "LinkedIn is a professional networking platform that allows users to create a personal profile showcasing their work experience, education, and skills. Users can connect with other professionals, follow companies and organizations, and search for job opportunities. LinkedIn also offers features such as groups and articles to help users engage with others in their industry.";
  } else if (msg.includes("youtube")) {
    return "YouTube, LLC is an American online video sharing and social media platform headquartered in San Bruno, California, United States. Accessible worldwide, it was launched on February 14, 2005, by Steve Chen, Chad Hurley, and Jawed Karim. It is owned by Google and is the second most visited website, after Google Search.";
  } else if (msg.includes("snapchat")) {
    return "Snapchat is an American multimedia instant messaging app and service developed by Snap Inc., originally Snapchat Inc. One of the principal features of Snapchat is that pictures and messages are usually only available for a short time before they become inaccessible to their recipients.";
  } else if (msg.includes("flickr")) {
    return "Flickr is an image hosting and video hosting service, as well as an online community, founded in Canada and headquartered in the United States. It was created by Ludicorp in 2004 and was a popular way for amateur and professional photographers to host high-resolution photos.";
  } else if (msg.includes("threads")) {
    return "Threads is an online social media and social networking service operated by Meta Platforms. The app offers users the ability to post and share text, images, and videos, as well as interact with other users' posts through replies, reposts, and likes.";
  } else if (msg.includes("vimeo")) {
    return "Vimeo, Inc. is an American video hosting, sharing, and services platform provider headquartered in New York City. Vimeo focuses on the delivery of high-definition video across a range of devices. Vimeo's business model is through software as a service.";
  } else if (msg.includes("chatgpt")) {
    return "ChatGPT, which stands for Chat Generative Pre-trained Transformer, is a large language model-based chatbot developed by OpenAI and launched on November 30, 2022, notable for enabling users to refine and steer a conversation towards a desired length, format, style, level of detail, and language used.";
  } else if (msg.includes("reddit")) {
    return "Reddit is an American social news aggregation, content rating, and discussion website. Registered users submit content to the site such as links, text posts, images, and videos, which are then voted up or down by other members.";
  } else if (msg.includes("alex")) {
    today=new Date();
    var reply = [
             "Hey! how did you manage to know my name.",
             "Yeah that's my name.",
             "Yes.",
"I was launched on 9/10/2023 by a special front-end developer called <Mark style='text-decoration: underline'>Abubakar Ibrahim"
];
    var words = reply[Math.floor(Math.random() *
      reply.length)];
    return words;
  } else if (msg.includes("my friend")) {
    var reply = [name+" how are you doing.", 
                 name+" how's your day going.",
                 name+" how's your day.", 
                 "Hey bro I'm angry"];
    var words = reply[Math.floor(Math.random() *
      reply.length)];
    return words; 
  } else if (msg == "no") {
    var reply = ["OK.", 
                 "Hmm ok!.",
                 "NO?", 
                 "f**k!"];
    var words = reply[Math.floor(Math.random() *
      reply.length)];
    return words; 
  } else if (msg.includes("my name is")) {
    var reply = ["Nice "+msg.slice(11).at(0).toUpperCase()+msg.slice(12)+" you are welcome", 
        "Okay, "+msg.slice(11).at(0).toUpperCase()+msg.slice(12)+' how can i assist you today.',
        "Wow! "+msg.slice(11).at(0).toUpperCase()+msg.slice(12)+" your name sounds great",
        "Wonderful name! If not that abubakar will be unhappy i could have change my name from Alex to "+msg.slice(11).at(0).toUpperCase()+msg.slice(12)
                ];
    var words = reply[Math.floor(Math.random() *
      reply.length)];
    return words;
  }     
  var laughRep = [
            "Goodbye! Have a great day.",
            "HHH! but is not funny.", 
            "HMMM.",
            name+ "stop laughing.",
            "It's true but not funny at all.",
            "Laugh out loud.",
            "HHHHH!",
            "Funny rigt?",
           "Take a deep breath, like HHHHHH!",
            "Why are you laughing HHHHHHH!"];
    var words = laughRep[Math.floor(Math.random() *
      laughRep.length)];
  if (msg.includes("hh")) {
    return words;
  } else if (msg.includes("hmm")) {
    var reply = [
          "...", 
          "Sounds cool right?",
          "I saw you trying to smile!", 
          "Smile!"];
    var words = reply[Math.floor(Math.random() *
      reply.length)];
    return words;
  } else {
        var reply = [
          name+" i'm sorry, I didn't understand your message.", 
          name+" i didn't got what you are saying.",
          "Come again.", 
          name+" do you really know what you are typing."];
    var words = reply[Math.floor(Math.random() *
      reply.length)];
    return words;
  }
}