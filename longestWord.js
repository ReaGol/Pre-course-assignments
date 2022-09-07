
const longestWord = (sentence) => {
    var words = sentence.split(' ');
    var tempLongestWord = '';
    let longestWordLetterCount = 0;
    let finalLongestWord = '';
    for (let word of words) {
        let lettersCounter = 0;
        for (let character of word) {

            if (character.match(/[a-z]/i)) {
                lettersCounter += 1;

            }
        }
        if (longestWordLetterCount < lettersCounter) {
            longestWordLetterCount = lettersCounter;
            tempLongestWord = word;
        }
    }
    return finalLongestWord = tempLongestWord.replace(/\d/g, "");
}