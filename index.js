/*
    @function [getElement]
 *@param: selector [input: selector]
 * @return { ket qua cua document.querySelector()]}*/
function getElement(selector) {
    return document.querySelector(selector);
}

let btn = getElement(".submit");
let deleteBtn = getElement("#delete");
let arr = [];

// array danh cho bai tap so 9
let arr2 = [];

/*@function [render array ra 1 element nao do trong html]
 * @param [selector cua element, array]
 * * @return [] */
function renderArray(arr, selector) {
    getElement(selector).innerHTML = [...arr];
}
/*Update array sau do goi lai renderArray de hien thi ra man hinh
    * ko cho nguoi dung push vao mang cac gia tri khac Number*/
function addInputToArray() {
    let input = Number(getElement(".input1").value);
    if (isNaN(input)) {
        alert('nhap vao so thuc')
        return;
    }
    arr.push(input);

    renderArray(arr, ".array");
}

btn.addEventListener("click", addInputToArray);

function deleteFromArray() {
    arr.pop();
    renderArray(arr, ".array");
}

deleteBtn.addEventListener("click", deleteFromArray);

//bai 1
//
/*@function tong so duong 
    * input: mang gia tri, process: neu so nao duong + so do vao tong,output so tong
@return innerHTML of div result
    */

function totalPositiveNumber() {
    let totalPositiveNumber = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            totalPositiveNumber += arr[i];
        }
    }
    return (getElement(".result1").innerHTML = totalPositiveNumber);
}
//bai 2
/*@function[increment counter when arr[i] > 0]
@return {Number} counter innerHTML of div result*/

function countPositiveNumber() {
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            counter++;
        }
    }
    getElement(".result2").innerHTML = counter;
}
/*@function [input la 1 array; loop de tim ra so nho nhat]*/
function getMinNumber(arr) {
    let minNum = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < minNum) {
            minNum = arr[i];
        }
    }
    return minNum;
    //bai 3
}
/*@function find Min number in the array
@return {@function} change innerHTML of div result*/
function findMinNumber() {
    let minEx3 = getMinNumber(arr);
    let resultEx3 = getElement(".result3");
    resultEx3.innerHTML = minEx3;
}
//bai 4
/*input: array
    * process: loop toan bo array tim ra so duong push het vao positiveArr
        * dung function getMinNumber lay ra so nho nhat trong mang positiveArr
    * output: so nho nhat trong mang positiveArr neu mang ko co so duong nao thi 
    * thong bao*/

function findMinPositiveNumber() {
    let positiveArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            positiveArray.push(arr[i]);
        }
    }
    if (positiveArray.length !== 0) {
        let minPositiveNum = getMinNumber(positiveArray);
        let resultEx4 = getElement(".result4");
        resultEx4.innerHTML = minPositiveNum;
    } else {
        alert("Mang ko co so duong");
    }
}
//bai 5
/*input = arr ng dung nhap
    * process: loop toi cuoi arr
    * tra ve so chia het cho 2 cuoi cung*/

function findLastEvenNum() {
    let lastEvenNum = -1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            lastEvenNum = arr[i];
        }
    }
    getElement(".result5").innerHTML = lastEvenNum;
}
//bai 6
/*input: 2 vi tri ng dung muon doi (bat dau tu 0 va phai nho hon length cua arr)
    * process: doi cho 2 gia tri o vi tri 
    * return function in ra man hinh mang moi cap nhap*/
function swapItems() {
    let num1 = Number(getElement(".num1").value);
    let num2 = Number(getElement(".num2").value);
    if (num1 > arr.length || num2 > arr.length) {
        return alert('vi tri ko dc lon hon chieu dai mang')
    }
    let foo = arr[num1];
    arr[num1] = arr[num2];
    arr[num2] = foo;
    return renderArray(arr, ".array");
}

//bai 7
/*input:  arr
    * process: bubble sort, loop moi phan tu thu i trong mang 
    * j < arr.lenght -i vi moi lan loop i se day phan tu lon nhat toi cuoi arr
    * doi cho phan tu j va phan tu ke ben neu phan tu j + 1 nho hon
    * return function in ra man hinh mang moi cap nhap*/

function sortArray() {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let foo = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = foo;
            }
        }
    }
    renderArray(arr, ".array");
}
//bai 8
//@function [ tim so nguyen to, phai la dau tien trong mang]
/*neu ko co so nguyen to thi tra ra ket qua resultNum = -1
    * su dung bien isPrime de kiem tra phan tu do co phai la so nguyen to ko
    * isPrime se dc gan bang true
    * bo qua nhung value < 2, vi isPrime == true nhung ko lam thay doi resultNum 
    * neu roi vao 1 trong nhung truong hop sau isPrime se bang false:
    * phan tu thu i chia het cho 1 so j nam tu 2 -> can bac 2 cua phan tu i
    * neu phan tu i == 2 ==3 hoac isPrime == true thi gan resultNum = no va break vong lap i*/
function findFirstPrimeNum() {
    let resultNum = -1;
    for (let i = 0; i < arr.length; i++) {
        let isPrime = true;
        if (arr[i] < 2) {
            continue;
        }
        for (let j = 2; j <= Math.sqrt(arr[i]); j++) {
            if (arr[i] % j == 0) {
                isPrime = false;
                break;
            }
        }
        if (arr[i] == 2 || arr[i] == 3 || isPrime) {
            resultNum = arr[i];
            break;
        }
    }
    getElement(".result8").innerHTML = resultNum;
}
// bai 9
//e muon lam function factory dung cho 2 mang rieng nhung ko duoc nen danh lam function rieng render cho mang so 2
//
    //
    //
    //
    //
    //
function addInputToArray2() {
    let input = Number(getElement(".input2").value);
    if(isNaN(input)){
        return alert('nhap vao so nguyen')
    }
    arr2.push(input);

    renderArray(arr2, ".array2");
}
function deleteFromArray2() {
    arr2.pop();
    renderArray(arr2, ".array2");
}
getElement(".submit2").addEventListener("click", addInputToArray2);
getElement(".delete2").addEventListener("click", deleteFromArray2);

/*counter +1 khi gia tri isInt tra ve true*/
function countInterger() {
    let counter = 0;
    for (let i = 0; i < arr2.length; i++) {
        if (Number.isInteger(arr2[i])) {
            counter++;
        }
    }
    return (getElement(".result9").innerHTML = counter);
}

//bai 10
//@function[dem so luong so am va so duong cua mang arr2 sau do so sanh 2 so luong]
//@param [counterPos: so luong so duong, counterNeg: so luong so am]
//output: render truc tiep ra html
function comparePositiveAndNegative() {
    let counterPos = 0;
    let counterNeg = 0;
    for (let i = 0; i < arr2.length; i++) {
        if (arr2[i] > 0) {
            counterPos++;
        } else if (arr2[i] == 0) {
            continue;
        } else {
            counterNeg++;
        }
    }
    if (counterPos == counterNeg) {
        getElement(".result10").innerHTML = `so am va duong bang nhau`;
    } else if (counterNeg > counterPos) {
        getElement(".result10").innerHTML = `So am nhieu hon`;
    } else {
        getElement(".result10").innerHTML = `So duong nhieu hon`;
    }
}
//Click event
//@function [click button de goi funcion cua bai do]
//@param [seletor, event, function]

function addEvent(selector, event, callback) {
    return getElement(selector).addEventListener(event, callback);
}

//bai 1
addEvent(".title-ex1", "click", totalPositiveNumber);

//bai 2
addEvent(".title-ex2", "click", countPositiveNumber);

//bai 3
addEvent(".title-ex3", "click", findMinNumber);
//bai 4
addEvent(".title-ex4", "click", findMinPositiveNumber);
//bai 5
addEvent(".title-ex5", "click", findLastEvenNum);
//bai 6
//
addEvent(".title-ex6", "click", swapItems);
//bai 7
addEvent(".title-ex7", "click", sortArray);
//bai 8
addEvent(".title-ex8", "click", findFirstPrimeNum);

// bai 9

addEvent(".title-ex9", "click", countInterger);

//bai 10
addEvent(".title-ex10", "click", comparePositiveAndNegative);
