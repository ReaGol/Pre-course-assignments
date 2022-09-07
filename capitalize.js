const capitalize = (word) => {
    var newWord = '';

    for (let i = 0; i < word.length; i++) {
        const finalLetter = helperFunc(word[i]);
        newWord = newWord.concat(finalLetter);
    }


    return newWord;
}

helperFunc = function (i) {
    var newLetter = '';
    var vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
    for (let j = 0; j < vowels.length; j++) {
        if (i === vowels[j]) {
            newLetter = i.toUpperCase();
            return newLetter;
        } else {
            newLetter = i;
        }

    } return newLetter;
}