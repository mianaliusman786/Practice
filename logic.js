function getData(dataid, getNextdata) {  // Line 1
    setTimeout(() => {                   // Line 2
        console.log("data", dataid);      // Line 3
        if (getNextdata) {                // Line 4
            getNextdata();                // Line 5 (Call callback once)
        }
    }, 2000);                             // Line 6
}

getData(1, () => {                        // Line 7
    getData(2);                           // Line 8
    getData(7);                           // Line 9 (Call getData with dataid 7)
});
