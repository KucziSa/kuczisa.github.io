var cyaty = [
"Schau niemals von oben auf jemanden herab, es sei denn, du hilfst ihm aufzustehen.",
"Eile ist ein schlechter Berater, aber oft der einzige.",
"Das Risiko in die Augen zu schauen ist furchterregend. Besonders, wenn sie schön sind.",
"Frau sollte wissen, wie weit sie gehen kann, ohne zu weit zu gehen.",
"Das Leben gewinnt erst in der Vorstellungskraft an Bedeutung.",
"Manchmal muss man alles ändern, um es wieder so zu machen wie früher.",
"Je schlechter es ist, desto größer ist die Chance, dass es besser wird.",
"Männer altern, werden aber nie besser.",
"Wenn dich niemand hasst, bedeutet das, dass mit dir etwas nicht stimmt.",
"Weh die Künstlern, auf die niemand spuckt.",
"Aufgrund des Mangels an eigenen Erfolgen sind die Niederlagen anderer nicht zu verachten."
];

function generateRandomQuote() {
    var randomNumber = Math.floor(Math.random() * cytaty.length);
    var randomQuote = cytaty[randomNumber];
    return randomQuote;
}

var quoteContainer = document.getElementById("quoteContainer");
quoteContainer.innerHTML = generateRandomQuote();