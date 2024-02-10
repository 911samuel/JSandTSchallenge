function capitalizeWordsInSentence(sentence: string): string {
    return sentence.replace(/\b\w/g, char => char.toUpperCase());
}
