let qoutes = [`A friend is someone who knows all about you and still loves you. <br> <br> -- Elbert Hubbard`,
 `Always forgive your enemies; nothing annoys them so much. <br> <br> -- Oscar Wilde`,
 `Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind. <br> <br> -- Bernard M. Baruch`,
 `Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.<br><br> -- Albert Einstein`,
 `So many books, so little time. <br> <br> -- Frank Zappa`,
 `Everything ends, and it's always sad. But everything begins again too, and that's always happy. Be happy. <br> <br> --Peter Capaldi`,
 `“Because every time you see them happy you remember how sad they’re going to be. And it breaks your heart. Because what’s the point in them being happy if they’re going to be sad later? The answer is, of course, because they are going to be sad later“ <br> <br> -- Osama Gamal`,
 `Friendship dies and true love lies
  Night will fall and the dark will rise
  When a good man goes to war Demons run, but count the cost
  The battle's won, but the child is lost” <br> <br> -- Eslam Shreef`];

 


function generateQuote(){
    let randomNumber = Math.floor((Math.random() * qoutes.length));
    document.getElementById("quoteOutput").innerHTML = qoutes[randomNumber];
}
