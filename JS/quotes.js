const quotes =[
    {
        quote: "one",
        author: "one",
    },
    {
        quote: "two",
        author: "two",
    },
    {
        quote: "thr",
        author: "thr",
    },
    {
        quote: "fou",
        author: "fou",
    },
    {
        quote: "fiv",
        author: "fiv",
    },
    {
        quote: "six",
        author: "six",
    },
    {
        quote: "sev",
        author: "sev",
    },
    {
        quote: "eig",
        author: "eig",
    },
    {
        quote: "nin",
        author: "nin",
    },
    {
        quote: "ten",
        author: "ten",
    },
];

const quote = document.querySelector(".quote span:first-child");
const author = document.querySelector(".quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;