const getWordByNumber = (num) => {
    const array = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    if (typeof num === 'number' && num >= 0 && num <= 9)
        return (array[num]);
    else
        return 'invalid';

}