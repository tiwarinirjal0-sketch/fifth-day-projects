const button = document.querySelector(".button");
const quotetext = document.querySelector("#quoteText")
const authorButton = document.querySelector("#showauthor")


let authorname = "";

const quotes = [
    { text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
    { text: "Stay hungry, stay foolish.", author: "Steve Jobs" },
    { text: "The journey of a thousand miles begins with one step.", author: "Lao Tzu" },
    { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" }
  ];



button.addEventListener("click", () =>{
    randomIndex = Math.floor(Math.random() * quotes.length);
    // console.log(randomIndex)
    let textShown = quotes[randomIndex].text;
    quotetext.innerHTML = textShown;
    authorname = quotes[randomIndex];
    
    
})

authorButton.addEventListener("click", () => {
    quotetext.innerHTML = authorname.author
})







