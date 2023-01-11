function converToString (num, str){
    if (num < 10){
        str += num;
        return str;
    }

    return (converToString((num - (num% 10)) / 10, str) + + num % 10);
}

function func1 (num){
    if (num % 2 == 0){

        return num % 10;
    } else {

        return converToString(num,"")[0];
    }
}

//console.log(func1(106));

function func2 (num){
    let strNum = converToString(num,"");
    let i = 0;
    let j = strNum.length - 1;
    for (let i = 0, j = strNum.length - 1; !(i >= j); i++, j--){
        if (strNum[i] != strNum[j]){
            return false;
        }
    }

    return true;  
}

//console.log(func2(101));

function func3 (num){
    let strNum = String(num);
    let i = 0;
    let j = strNum.length - 1;
    for (let i = 0, j = strNum.length - 1; !(i >= j); i++, j--){
        if (strNum[i] != strNum[j]){
            return false;
        }
    }

    return true;  
}

function func4 (num1, num2){
    if (num2 == 1)
        return num1
    if (num2 == 0)
        return 1;

    return func4(num1, num2 - 1) * num1;
}

//console.log(func4(2, 5));

function func5 (numsArray){
    let sum = 0;
    for (let num of numsArray){
        sum += num;
    }

    return sum / numsArray.length;
}

//console.log(func5([1, 2, 3, 4, 5]));

function func6 (numsArray){
    for (let i = 0; i < numsArray.length - 1; i++){
        for (let j = 0; j < numsArray.length - i -1; j++){
            if (numsArray[j + 1] < numsArray [j]){

                let tempNum = numsArray[j];
                numsArray[j] = numsArray[ j + 1];
                numsArray[j + 1] = tempNum;
            }
        }
    }

    return numsArray;
}

//console.log(func6([5, 4, 3, 8, 10, 2, 1]));
