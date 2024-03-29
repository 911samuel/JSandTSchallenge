"use strict";
function countVowelsInSentence(sentence) {
    const vowels = 'aeiouAEIOU';
    let vowelCount = 0;
    for (let char of sentence) {
        if (vowels.includes(char)) {
            vowelCount++;
        }
    }
    return vowelCount;
}
