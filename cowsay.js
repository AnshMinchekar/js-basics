const cowsay = require("cowsay");
const Quote = require("inspirational-quotes");
const text = Quote.getRandomQuote();
console.log(
  cowsay.say({
    text: text,
    e: "xx",
    T: "U",
  })
);
