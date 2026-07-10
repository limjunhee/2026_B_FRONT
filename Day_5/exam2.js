// 반복문 : for (초기값; 조건식; 증감식) {실행문}
// 배열과 반복문의 관계 : 배열의 인덱스는 항상 0부터 요소/자료가 저장되는 순서 규칙이 있음
// 즉, 인덱스는 0부터 마지막 인덱스까지 1씩 증가함

// [1] 배열의 데이터를 하나씩 출력하기
// let fruitArray = ['사과', '포도', '딸기']

// for (let index = 0; index <= fruitArray.length - 1; index++) { // 배열의 마지막 인덱스 = (배열.length - 1)
//     console.log(fruitArray[index])
// }



// [생각해보기] 3개의 이름을 입력받아 배열에 저장하고 HTML에 출력하기.
// let nameArray = [ ]

// for (let i = 0; i <= 2; i++){
//     let name = prompt("사람 이름 입력하기")
//     nameArray.push(name)
// }

// let html = ''
// for (let 인덱스 = 0; 인덱스 <= nameArray.length -1; 인덱스++){
//     html += `<li> ${nameArray[인덱스]}</li>`
// }
// document.querySelector('ol').innerHTML = html




// 실습문제 1
console.log("실습문제 1 시작")

/*문제 1: 1부터 10까지 출력하기
for 반복문을 사용하여 1부터 10까지의 숫자를 콘솔에 순서대로 
출력하는 프로그램을 작성하시오.*/

for (let i = 1; i <= 10; i++){
    console.log(i)
}

/*문제 2: 배열의 모든 요소 출력하기
다음과 같은 과일 배열이 있습니다. for 반복문을 사용하여 
배열의 모든 요소를 하나씩 콘솔에 출력하시오.
let fruits = ['사과', '바나나', '포도', '딸기'];*/

let fruits = ['사과', '바나나', '포도', '딸기'];
for (let index = 0; index <= fruits.length - 1; index++){
    console.log(fruits[index])
}

/*문제 3: 배열 역순으로 출력하기
주어진 배열을 for 반복문을 사용하여 
역순으로 (마지막 요소부터 첫 요소 순서로) 출력하는 프로그램을 작성하시오.
let numbers = [1, 2, 3, 4, 5];  출력 예시: 5 4 3 2 1  */
let numbers = [1, 2, 3, 4, 5];
for (let n = numbers.length - 1; n >= 0; n--) {
    console.log(numbers[n])
}

/*문제 4: 1부터 50까지의 합계 구하기
for 반복문을 사용하여 1부터 50까지 모든 정수의 합을 구하여 콘솔에 출력하시오.*/
let sum = 0
for (let i = 1; i <= 50; i++) {
    sum += i
}
console.log(sum)

/*문제 5: 짝수만 출력하기
for 반복문과 if 조건문을 사용하여, 1부터 20까지의 숫자 중 짝수만 콘솔에 출력하시오.*/
for (let i = 1; i <= 20; i++) {
    if ( i % 2 == 0) {console.log(i)}
}