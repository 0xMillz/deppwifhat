const quotes = [
    'The only creatures that are evolved enough to convey pure love are dogs and infants<span style="font-family: Arial; color: rgb(34, 62, 145)">&#46;</span>',
    'I think the thing to do is enjoy the ride while you are on it<span style="font-family: Arial; color: rgb(34, 62, 145)">&#46;</span>',
    'Tomorrow it will all be over<span style="font-family: Arial; color: rgb(34, 62, 145)">&#44; </span> then I will have to go back to selling pens again<span style="font-family: Arial; color: rgb(34, 62, 145)">&#46;</span>',
    'My favorite color is black<span style="font-family: Arial; color: rgb(34, 62, 145)">&#46;</span> And I like black because it is a modest and arrogant color<span style="font-family: Arial; color: rgb(34, 62, 145)">&#46;</span> Perhaps that is why I like it<span style="font-family: Arial; color: rgb(34, 62, 145)">&#46;</span>',
    'Escapism is survival to me<span style="font-family: Arial; color: rgb(34, 62, 145)">&#46;</span>',
    'I think everybody is nuts<span style="font-family: Arial; color: rgb(34, 62, 145)">&#46;</span>',
    'I am an old<span style="font-family: Arial; color: rgb(34, 62, 145)">&#45;</span>fashioned guy<span style="font-family: Arial, Helvetica, sans-serif; color: rgb(34, 62, 145)">&#44;</span> I want to be an old <span style="font-family: Arial; color: darkred">&#91;</span>wif<span style="font-family: Arial; color: darkred">&#93;</span>hat<span style="font-family: Arial; color: rgb(34, 62, 145)">&#46;</span>',
    'People say I make strange choices<span style="font-family: Arial; color: rgb(34, 62, 145)">&#44; </span>but they are not strange for me<span style="font-family: Arial; color: rgb(34, 62, 145)">&#46;</span> My sickness is that I am fascinated by human behavior by what is underneath the surface<span style="font-family: Arial, Helvetica, sans-serif; color: rgb(34, 62, 145)">&#44; </span>by the worlds inside people<span style="font-family: Arial; color: rgb(34, 62, 145)">&#46;</span>',
    'I do not pretend to be captain weird<span style="font-family: Arial; color: rgb(34, 62, 145)">&#46;</span> I just do what I do<span style="font-family: Arial; color: rgb(34, 62, 145)">&#46;</span>',
    'Life is pretty good<span style="font-family: Arial; color: rgb(34, 62, 145)">&#44; </span>and why would it not it be<span style="font-family: Arial; color: rgb(34, 62, 145)">&#63;</span> I am a pirate<span style="font-family: Arial; color: rgb(34, 62, 145)">&#44; </span>after all<span style="font-family: Arial; color: rgb(34, 62, 145)">&#46;</span>',
    'I am doing things that are true to me<span style="font-family: Arial; color: rgb(34, 62, 145)">&#46;</span> The only thing I have a problem with is being labeled<span style="font-family: Arial; color: rgb(34, 62, 145)">&#46;</span>',
    'The only creatures that are evolved enough to convey pure love are dogs and infants<span style="font-family: Arial; color: rgb(34, 62, 145)">&#46;</span>',
    'Puberty was very vague<span style="font-family: Arial; color: rgb(34, 62, 145)">&#44;</span> I literally locked myself in a room and played guitar<span style="font-family: Arial; color: rgb(34, 62, 145)">&#46;</span>',
    'As a teenager I was so insecure<span style="font-family: Arial; color: rgb(34, 62, 145)">&#46;</span> I was the type of guy that never fitted in because he never dared to choose<span style="font-family: Arial; color: rgb(34, 62, 145)">&#46;</span> I was convinced I had absolutely no talent at all<span style="font-family: Arial; color: rgb(34, 62, 145)">&#46;</span> For nothing<span style="font-family: Arial; color: rgb(34, 62, 145)">&#46;</span> And that thought took away all my ambition too<span style="font-family: Arial; color: rgb(34, 62, 145)">&#46;</span>',
    'I am doing things that are true to me<span style="font-family: Arial; color: rgb(34, 62, 145)">&#46;</span> The only thing I have a problem with is being labeled<span style="font-family: Arial; color: rgb(34, 62, 145)">&#46;</span>',
    'Me<span style="font-family: Arial; color: rgb(34, 62, 145)">&#44; </span>I am dishonest<span style="font-family: Arial; color: rgb(34, 62, 145)">&#44; </span>and you can always trust a dishonest man to be dishonest<span style="font-family: Arial; color: rgb(34, 62, 145)">&#46;</span> Honestly<span style="font-family: Arial; color: rgb(34, 62, 145)">&#44; </span>it is the honest ones you have to watch out for<span style="font-family: Arial; color: rgb(34, 62, 145)">&#46;</span>',
    'I have this fear of clowns<span style="font-family: Arial; color: rgb(34, 62, 145)">&#44; </span>so I think that if I surround myself with them<span style="font-family: Arial; color: rgb(34, 62, 145)">&#44; </span>it will ward off all evil<span style="font-family: Arial; color: rgb(34, 62, 145)">&#46;</span>',
]

let currentIndex = 0;

function showNextQuote(first = false) {
    const quoteElement = document.getElementById('quote');
    quoteElement.style.opacity = '0';
    if (first) {
        quoteElement.innerHTML = quotes[0] + '<br> <span style="font-family: Arial, Helvetica, sans-serif; color: rgb(34, 62, 145)">&#8722;</span>Johnny Depp';
        currentIndex++;
    }
    setTimeout(() => {
        quoteElement.innerHTML = quotes[currentIndex] + '<br> <span style="font-family: Arial, Helvetica, sans-serif; color: rgb(34, 62, 145)">&#8722;</span>J Depp';
        quoteElement.style.opacity = '1';
        currentIndex = (currentIndex + 1) % quotes.length;
    }, 1000); // Matches the CSS transition duration
}


function startQuoteRotation() {
    showNextQuote(true);
    setInterval(showNextQuote, 8000); // Change quote every 8 seconds
}

document.addEventListener('DOMContentLoaded', startQuoteRotation);

