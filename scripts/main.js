//THIS IS NOT MY CODE THIS CODE IS MADE BY FLORNIAN!!!!
function main() {
    setTimeout(text_typing, 1000, ["thjemen", "Thymen", "pro cat thief"]);
}

function text_typing(texts) {
    let cursor_span = document.getElementsByClassName("cursor")[0];
    let typingTextSpan = document.getElementsByClassName("text_typing")[0];

    let typing_delay = 128;
    let erasing_delay = 64;
    let new_text_delay = 4096;
    let texts_index = 0;
    let char_index = 0;

    function erase() {
        if (char_index > 0) {
            if (!cursor_span.classList.contains("typing"))
                cursor_span.classList.add("typing");

            typingTextSpan.textContent = texts[texts_index].substring(0, char_index - 1);
            char_index--;
            setTimeout(erase, erasing_delay);
        } else {
            cursor_span.classList.remove("typing");
            texts_index++;

            if (texts_index >= texts.length)
                texts_index = 0;

            setTimeout(type, typing_delay);
        }
    }

    function type() {
        if (char_index < texts[texts_index].length) {
            if (!cursor_span.classList.contains("typing"))
                cursor_span.classList.add("typing");

            typingTextSpan.textContent += texts[texts_index].charAt(char_index);
            char_index++;
            setTimeout(type, typing_delay + (Math.random() * 25));
        } else {
            cursor_span.classList.remove("typing");
            setTimeout(erase, new_text_delay);
        }
    }

    type();
}