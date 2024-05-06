(function () {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  
  var helloSpeaker = {};
  helloSpeaker.speak = function (name) {
    console.log("Hello " + name);
  };
  
  var byeSpeaker = {};
  byeSpeaker.speak = function (name) {
    console.log("Good Bye " + name);
  };
  
  for (var i = 0; i < names.length; i++) {
    var firstLetter = names[i].charAt(0).toLowerCase();
    if (firstLetter === 'j') {
      byeSpeaker.speak(names[i]);
    } else {
      helloSpeaker.speak(names[i]);
    }
  }
})();
