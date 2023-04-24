// scripts.js

const data = {
    lists: [
    ['first', [15, 11, 13, 7, 5]],
    ['second', [2, 6, 8, 4, 14, 12, 10]],
    ['third', [9, 3, 1]],
    ]
    }
    
    // Only edit below
    
    let [first] = data.lists[0][1].slice(-1)
    let [second] = data.lists[1][1].slice(-1)
    let [third] = data.lists[2][1].slice(-1)
    
    const result = []
    
    const extractBiggest = () => {
    if (first > second && first > third) {
    result.push(first)
    data.lists[0][1].pop()
    ;[first] = data.lists[0][1].slice(-1)
    } else if (second > third) {
    result.push(second)
    data.lists[1][1].pop()
    ;[second] = data.lists[1][1].slice(-1)
    } else {
    result.push(third)
    data.lists[2][1].pop()
    ;[third] = data.lists[2][1].slice(-1)
    }
    }
    
    // Only edit above
    
    extractBiggest()
    extractBiggest()
    extractBiggest()
    extractBiggest()
    extractBiggest()
    
    extractBiggest()
    extractBiggest()
    extractBiggest()
    extractBiggest()
    extractBiggest()
    
    extractBiggest()
    extractBiggest()
    extractBiggest()
    extractBiggest()
    extractBiggest()
    
    console.log(result)