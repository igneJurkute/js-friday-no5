console.log('1 uzduotis');

function addition(num) {
 return num + 1;  
}

console.log(addition(0));
console.log(addition(9));
console.log(addition(-3));

console.log('-------------------------------');
console.log('2 uzduotis');

function howManySeconds(h) {
    return h * 3600;
}

console.log(howManySeconds(2));
console.log(howManySeconds(10));
console.log(howManySeconds(24));

console.log('-------------------------------');
console.log('3 uzduotis');

function basketballPoints(baudos, dvitaskiai, tritaskiai) {
    return baudos + (dvitaskiai * 2) + (tritaskiai * 3);
}

console.log(basketballPoints(5, 25, 10));
console.log(basketballPoints(1, 1, 1));
console.log(basketballPoints(10, 20, 5));

console.log('-------------------------------');
console.log('4 uzduotis');

function lessThan100(num1, num2) {
    if ((num1 + num2) <= 100) {
        return true;
    } else {
        return false;
    }
}

console.log(lessThan100(22, 15));
console.log(lessThan100(83, 34));
console.log(lessThan100(3, 77));

console.log('-------------------------------');
console.log('5 uzduotis');

function isSameNum(arg1, arg2) {
    if (arg1 === arg2) {
        return true;
    } else {
        return false;
    }
}

console.log(isSameNum(4, 8));
console.log(isSameNum(2, 2));
console.log(isSameNum(2, '2'));

console.log('-------------------------------');
console.log('6 uzduotis');

function comparisonNum(n1, n2) {
    if (n1 > n2) {
        return `${n1} yra didesnis skaičius`;
    } 
    if (n2 > n1) {
        return `${n2} yra didesnis skaičius`;
    }
    if (n1 === n2) {
        return `abu skaičiai lygūs`;
    }
}

console.log(comparisonNum(10, 20));
console.log(comparisonNum(2, -1));
console.log(comparisonNum(10, 10));

console.log('-------------------------------');
console.log('7 uzduotis');

function multiplication(s) {
   let rez = '';
   for (let i = 1; i <= 10; i++){
    rez = rez + i + ' * ' + s + ' = ' + (i * s) + ' \n \r';
   }
   return rez;
}

console.log(multiplication(3));

