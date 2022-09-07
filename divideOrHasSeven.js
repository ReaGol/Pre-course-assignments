const divideOrHasSeven = (start, end) => {
    var counter = 0;
    for (let i = start; i <= end; i++) {
        if (i.toString().includes('7') || i % 7 === 0)
            counter++;
        console.log(i);
    } return counter;
}