var quoteCycle = function() {
  var statements = [
    {
      author: "Officer Parsons",
      statement: "He put up a hell of a struggle, I'll tell you that."
    },
    {
      author: "Arnold Schwarzenegger",
      statement: "Who?"
    },
    {
      author: "James's Mother",
      statement: "He was such a nice boy until the accident"
    },
    {
      author: "Ex-Boss",
      statement: "Oh God, has he found me?!?"
    },
    {
      author: "Doctor Lewis",
      statement: "No, I don't think he's suitable for rehabilitation"
    },
    {
      author: "James's Neighbor",
      statement: "Yeah, guess he's alright"
    }
  ];
  var choice = statements[Math.floor(Math.random() * statements.length)];
  $("#quote").text(choice.statement);
  $("#quoteAuthor").text("- " + choice.author);
  $("#quoteBox").css({ opacity: 1 });
  setTimeout(function() {
    $("#quoteBox").css({ opacity: 0 });
  }, 6000);
};

$(document).ready(function() {
  quoteCycle();
  setInterval(quoteCycle, 8000);
});
