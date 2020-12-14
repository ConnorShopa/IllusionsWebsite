

var quotes = [
    ["Page One", "Perspective – Use it or lose it. If you turned to this page, you're forgetting that what is going on around you is not reality. Think about that. Remember where you came from, where you're going, and why you created the mess you got yourself into in the first place. You're going to die a horrible death, remember. Its all good training, and you’ll enjoy it more if you keep the facts in mind. "],
    ["Page Two", "Take your dying with some seriousness, however. Laughing on the way to your execution is not generally understood by less advanced-life-forms and they’ll call you crazy. "],
    ["Page Three", "Learning is finding out what you already know. Doing is demonstrating that you know it. Teaching is reminding others that they know just as well as you. You are all learners, doers, teachers. "],
    ["Page Four", "Your only obligation in any lifetime is to be true to yourself. Being true to anyone else or anything else is not only impossible, but the mark of a fake messiah."],
    ["Page Five", "The simplest equations are the most profound. Where were you born? Where is your home? Where are you going? What are you doing? Think about these once in a while, and watch your answers change."],
    ["Page Six","You teach best what you most need to learn." ],
    ["Page Seven", "Live never to be ashamed if anything you do or say is published around the world – even if what is published is not true."],
    ["Page Eight", "Your friend will know you better in the first minute you meet them than your acquaintances will know you in a thousand years."],
    ["Page Nine", "The best way to avoid responsibility is to say “I’ve got responsibilities.”"],
    ["Page Ten", "You are led through your lifetime by the inner creature, the playful spiritual being that is your real self. Don’t turn away from possible futures before you’re certain you don’t have anything to learn from the, You’re always free to change your mind and choose a different future, or a different past."],
    ["Page Eleven", "There is no such thing as a problem without a fight for you in its hands. You seek problems because you need their gifts. "],
    ["Page Twelve", "The bond that links your true family is not one of blood, but of respect and jot in each other’s life. Rarely do members of one family grow up under the same roof."],
    ["Page Thirteen", "Argue for your limitation and sure enough, they’re yours."],
    ["Page Fourteen", "Imagine the universe beautiful and just and perfect. Then be sure of one thing. The is has imagine it quite a bit better than you have. " ],
    ["Page Fifteen", "You are never given a wish without also being given the power to make it true. You may have to work for it however. "],
    ["Page Sixteen", "The world is your excercise-book, the pages on which you do your sums. It is not reality, although you can express reality there if you wish. You are also free to write nonsense, or lies, or to tear the pages. "],
    ["Page Seventeen", "The original sin to limit the is. Don't." ],
    ["Page Eighteen", " If you will practice being fictional for a while, you will understand that fictional characters are sometimes more real than people with bodies and heartbeats."],
    ["Page Nineteen", "Your conscience is the measure of the honesty of your selfishness. Listen to it carefully."],
    ["Page Twenty","Every person, all the events of your life are there because you have drawn them there. What you choose to do with them is up to you." ],
    ["Page Twenty One", "The truth you speak has no past and no future. It is and thats all it needs to be." ],
    ["Page Twenty Two","Here is a test to find whether your mission on earth is finished. If you’re alive, it isn’t." ],
    ["Page Twenty Three","In order to live free and happily you must sacrifice boredom. It is not always an easy sacrifice." ],
    ["Page Twenty Four", " Don’t be dismayed at good-byes. A farewell is necessary before you can meet again. And meeting again, after moments or lifetimes, is certain for those who are friends."],
    ["Page Twenty Five", "The mark of your ignorance is the depth of your belief in injustice and tragedy. What the caterpillar calls the end of the world, the master calls a butterfly. "],
    ["Page Twenty Six", "Everything in this book may be wrong. "]

  ];

    
  function selectRandomQuoteAndTitle() {

    var idNumber = 1
    var quoteTitle = ""
    var quoteItself = ""
    var i;

    for (i = 0; i < 26; i++) { 
        console.log(idNumber)
        quoteTitle = quotes[Math.floor(Math.random() * quotes.length)][0];
        quoteItself = quotes[Math.floor(Math.random() * quotes.length)][1];

        console.log(quoteTitle);
        titleChild = document.getElementById(idNumber).childNodes;

        console.log(titleChild)

        titleChild[1].innerHTML = quoteTitle
        titleChild[3].innerHTML = quoteItself
        idNumber ++
        

    }

  }