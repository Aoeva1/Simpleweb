let Button = document.getElementById('container');
let quote = document.getElementById('quote'); // Get the quote element

function pickRandomString(strings) {
    const randomIndex = Math.floor(Math.random() * strings.length);
    return strings[randomIndex];
}

const quotes = [
    "Do not put off until tomorrow what can be done today - Sensei Wu",
    "The best time to plant a tree was 20 years ago. The second best time is now - Chinese Proverb",
    "Your limitation—it's only your imagination.",
    "Push yourself, because no one else is going to do it for you.",
    "Great things never come from comfort zones."
];

Button.onclick = function() {
    quote.innerHTML = pickRandomString(quotes); // Display a random quote
};