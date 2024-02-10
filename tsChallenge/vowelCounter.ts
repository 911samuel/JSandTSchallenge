function countVowelsInSentence(sentence: string): number {
    const vowels: string = 'aeiouAEIOU';
    let vowelCount: number = 0;

    for (let char of sentence) {
        if (vowels.includes(char)) {
            vowelCount++;
        }
    }

    return vowelCount;
}
