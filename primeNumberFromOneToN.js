const primeNumberFromOneToN = (n) => {
    var isPrime;
    var counter = 0;
    for (let i = 2; i <= n; i++) {
        isPrime = 1;
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                isPrime = 0;
                break;
            }
        }
        if (isPrime === 1) {
            counter++;
        }
    } return counter;
}

