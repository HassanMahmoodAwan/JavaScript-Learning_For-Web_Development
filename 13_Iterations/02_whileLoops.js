const count = 0
while(true){
    if (count === 4){
        break
    }
    count += 1
    continue
}

const score = 3
do {
    console.log(score)
} while (score > 3);



// Creating Custom do-While Loop
let index = 10;
let flag = false
while(true){
    if(index > 5)
        break
    else
        console.log('Its now a Do-while loop example')

    
    (index <= 14) ? index++ : flag = true

    if (flag == true){
        break
    }
}