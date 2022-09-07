const biggestNumber = (a, b, c) => {
    
    var arr = [a, b, c];
    var biggest = arr[0];

    for (i = 0; i <= arr.length; i++) {
        if (arr[i] > biggest) {
            var biggest = arr[i];
        }
    }

    return biggest;
}