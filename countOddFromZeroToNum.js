const countOddFromZeroToNum = (num) => {
    
    let count = 0;

    for (let i = 0; i <= num; i++) {
        if (i % 2 !== 0) {
            count++;
        }
    }

    return count;
}

