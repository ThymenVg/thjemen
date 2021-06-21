const id = "text";
repeat(0, ["You just became unclean!"], [0, 128, 4096, 64]) // delays: [textDelay, typeDelay, beforeEraseDelay, eraseDelay]


async function repeat(repeatDelay = 0, texts, delays) { // delays: [textDelay, typeDelay, beforeEraseDelay, eraseDelay]
    if (!Array.isArray(texts) || texts.length == 0) return console.error("not an array!");
    await typeMultiple(texts, delays ? delays[0] : [], delays ? delays.slice(1, delays.length) : []);
    setTimeout(() => repeat(repeatDelay, texts, delays), repeatDelay);
}

async function typeMultiple(texts, textDelay = 0, delays) {
    return new Promise((resolve, reject) => {
        let counter = 0;
        (async function startTyping() {
            await type(texts[counter++], delays);
            if (counter < texts.length) setTimeout(startTyping, textDelay);
            else resolve();
        })();
    });
}

async function type(text, delays) {
    const div = document.getElementById(id);
    return new Promise((resolve, reject) => {
        let counter = 0;
        (function addLetter(index) {
            div.textContent += text[counter++];
            if (counter < text.length) setTimeout(addLetter, (delays[0] ? delays[0] : 100) + Math.round(-10 + Math.random() * 20));
            else setTimeout(removeLetter, (delays[1] ? delays[1] : 1000));
        })();
    });
}