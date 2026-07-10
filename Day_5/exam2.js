// 반복문 : for (초기값; 조건식; 증감식) {실행문}
// 배열과 반복문의 관계 : 배열의 인덱스는 항상 0부터 요소/자료가 저장되는 순서 규칙이 있음
// 즉, 인덱스는 0부터 마지막 인덱스까지 1씩 증가함

// [1] 배열의 데이터를 하나씩 출력하기
// let fruitArray = ['사과', '포도', '딸기']

// for (let index = 0; index <= fruitArray.length - 1; index++) { // 배열의 마지막 인덱스 = (배열.length - 1)
//     console.log(fruitArray[index])
// }

// 반복문 제어 키워드
// 1. continue;
// for(let 반복수 = 1; 반복수 <= 5; 반복수 ++){
//     if (반복수 == 3) continue // 가장 가까운 반복문의 증감식으로 흐름 이동 -> 만약 반복수가 3이면, 지금 당장 남은 실행문을 무시하고 다음 흐름으로 이동
//     console.log(반복수) // 반복수가 3일 때의 루프에선 실행 안됨.
// }

// 2. break;
// for (let 반복수 = 1; 반복수 <= 5; 반복수++) {
//     if (반복수 == 3) break // 이 반복문을 아예 종료하고(남은 루프를 건너뜀) 다음 코드로 이동 -> 만약 반복수가 3이면, 남은 실행문과 루프를 모두 무시하고 반복문을 종료
//     console.log(반복수)
// } //break 만나면 아예 여기로 이동함

// 3. 무한루프
// // for ( ; ; ){ console.log('무한루프')}
// for (; ;) { let 입력 = prompt(); if (입력 == 'exit') break; } // 무한입력


//=================================================================================================

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



//=================================================================================================
// 실습문제 1
console.log("실습문제 1 시작")

/*문제 1: 1부터 10까지 출력하기
for 반복문을 사용하여 1부터 10까지의 숫자를 콘솔에 순서대로 
출력하는 프로그램을 작성하시오.*/

// for (let i = 1; i <= 10; i++){
//     console.log(i)
// }





/*문제 2: 배열의 모든 요소 출력하기
다음과 같은 과일 배열이 있습니다. for 반복문을 사용하여 
배열의 모든 요소를 하나씩 콘솔에 출력하시오.
let fruits = ['사과', '바나나', '포도', '딸기'];*/

// let fruits = ['사과', '바나나', '포도', '딸기'];
// for (let i = 0; i <= fruits.length - 1; i++){
//     console.log(fruits[i])
// }





/*문제 3: 배열 역순으로 출력하기
주어진 배열을 for 반복문을 사용하여 
역순으로 (마지막 요소부터 첫 요소 순서로) 출력하는 프로그램을 작성하시오.
let numbers = [1, 2, 3, 4, 5];  출력 예시: 5 4 3 2 1  */

// let numbers = [1, 2, 3, 4, 5];
// for (let i = numbers.length - 1; i >= 0; i--) {
//     console.log(numbers[i])
// }




/*문제 4: 1부터 50까지의 합계 구하기
for 반복문을 사용하여 1부터 50까지 모든 정수의 합을 구하여 콘솔에 출력하시오.*/

// let sum = 0
// for (let i = 1; i <= 50; i++) {
//     sum += i
// }
// console.log(sum)




/*문제 5: 짝수만 출력하기
for 반복문과 if 조건문을 사용하여, 1부터 20까지의 숫자 중 짝수만 콘솔에 출력하시오.*/

// for (let i = 1; i <= 20; i++) {
//     if ( i % 2 == 0) {console.log(i)}
// }




/*문제 6: 배열 요소의 합계와 평균 구하기
다음 학생들의 점수가 담긴 배열이 있습니다. for 반복문을 사용하여 모든 점수의 합계와 평균을 계산하여 콘솔에 출력하시오.
let scores = [85, 92, 78, 65, 95]; */

// let scores = [85, 92, 78, 65, 95];
// let totalScore = 0
// for( let i = 0; i <= scores.length - 1; i++){
//     totalScore += scores[i]
// }
// let averageScore = totalScore / scores.length

// console.log(totalScore, averageScore)



/* 문제 7: 특정 조건에서 반복문 탈출하기 (break)
점수 배열에서 100점 만점자가 처음 나타나면, 그 학생의 점수를 출력하고 반복문을 즉시 종료하는 프로그램을 작성하시오.
let scores = [77, 82, 100, 54, 96];
출력 예시: 100점 만점자를 찾았습니다!*/

// let scores = [77, 82, 100, 54, 96];
// for(let i = 0; i <= scores.length -1; i++){
//     if (scores[i] == 100) { console.log("100점 만점자를 찾았습니다!")}
// }




/*문제 8: 특정 조건 건너뛰기 (continue)
점수 배열에서 60점 미만(과락)인 점수는 건너뛰고, 60점 이상인 점수만 콘솔에 출력하는 프로그램을 작성하시오.
let scores = [90, 45, 72, 88, 59, 100];*/

// let scores = [90, 45, 72, 88, 59, 100];
// for (let i = 0; i <= scores.length - 1; i++){
//     if (scores[i] < 60) continue; console.log(scores[i])
// }


/*문제 9: 배열에서 특정 값의 개수 세기
다음 배열에서 'A'형 혈액형을 가진 사람이 몇 명인지 for 반복문을 통해 세고, 그 수를 콘솔에 출력하시오.
let bloodTypes = ['A', 'B', 'O', 'AB', 'A', 'B', 'A']; */

// let bloodTypes = ['A', 'B', 'O', 'AB', 'A', 'B', 'A'];
// let aCount = 0
// for (let i = 0; i<= bloodTypes.length - 1; i++){
//     if (bloodTypes[i] == 'A') {aCount++}
// }
// console.log(aCount)


/*문제 10: 학생 점수 시각화하기 
주어진 학생 이름과 점수 배열을 이용하여, 각 학생의 점수를 동그라미(●, ○)로 시각화하여 HTML에 출력하는 프로그램을 작성하시오.

(1). 초기 데이터
학생 이름과 점수는 두 배열의 동일한 인덱스를 사용합니다.
let nameArray = ['유재석', '강호동', '신동엽'];
let scores = [92, 86, 72];

(2). 구현 조건
for 반복문을 사용하여 모든 학생의 데이터를 순회합니다.
점수를 100점 만점으로 환산하여 시각화합니다.
점수의 십의 자리 숫자만큼 꽉 찬 동그라미(●)를, **나머지(10 - 십의 자리 수)**만큼 빈 동그라미(○)를 출력합니다.
예시: 점수가 92점이면 십의 자리는 9이므로, ●●●●●●●●●○ 와 같이 표현합니다.
HTML에 학생 이름과 변환된 점수 시각화를 한 줄씩 출력합니다.

(3). 출력 예시 (HTML)
유재석 ●●●●●●●●●○
강호동 ●●●●●●●●○○
신동엽 ●●●●●●●○○○  */

let nameArray = ['유재석', '강호동', '신동엽'];
let scores = [92, 86, 72];
let html = ''

for (let i = 0; i <= nameArray.length -1; i++){
    
    html += `${nameArray[i]} `
    let colorCircle = parseInt(scores[i] / 10)
    for (let i = 1; i <= colorCircle; i++){
        html += '●'
    }
    for(let i = 1; i <= 10 - colorCircle; i++){
        html += '○'
    }
    html += '<br>'
}

document.querySelector('h3').innerHTML = html