const minNumberInArr = (arr) => {
    min = Infinity;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}