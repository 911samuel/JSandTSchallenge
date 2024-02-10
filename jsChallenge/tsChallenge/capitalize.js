"use strict";
function capitalizeWordsInSentence(sentence) {
    return sentence.replace(/\b\w/g, char => char.toUpperCase());
}
