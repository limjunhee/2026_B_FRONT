//[문제] 아래 조건문 관련 10문제, 단]for (반목문) 은 사용하지 않습니다.





// /*문제 1: 과일 목록 관리
// 다음 과일 목록 배열이 주어져 있습니다.
// let fruitList = ['사과', '바나나'];
// 사용자로부터 새로운 과일 이름을 입력받아, fruitList에 이미 존재하는 과일이면 '이미 존재하는 과일입니다.'를 출력하세요.
// 존재하지 않는 과일이면 배열에 추가한 뒤, 변경된 배열 전체를 출력하는 프로그램을 작성하시오.*/
// let fruitList = ['사과', '바나나'];
// let newFruit = prompt("1. 과일 이름 입력")

// if(fruitList[0] == newFruit){
//     console.log("이미 존재하는 과일입니다.")
// } else if (fruitList[1] == newFruit){
//     console.log("이미 존재하는 과일입니다.")
// } else {
//     fruitList.push(newFruit)
//     console.log(fruitList)
// }

// //.includes()를 까먹었음, 존재여부 변수(bool)를 만들어서 그걸로 판별하는 게 더 효율적임








// /*문제 2: 성별에 따른 색상 지정
// 주민등록번호 13자리를 문자열로 입력받습니다.성별을 나타내는 7번째 숫자가 '1' 또는 '3'이면 'blue'를, '2' 또는 '4'이면 'red'를 출력하는 프로그램을 작성하시오.*/
// let num = prompt("2. 주민등록번호 13자리 입력하기")
// console.log(num)
// console.log(num[6])

// if (num[6] == '1' || num[6] == '3') { console.log("blue") } else if (num[6] == '2' || num[6] == '4') { console.log("red") }






// /*문제 3: 구매 금액에 따른 할인율 적용
// 사용자로부터 총 구매 금액을 입력받습니다.구매 금액에 따라 아래와 같이 할인율을 적용하여 최종 결제 금액을 출력하는 프로그램을 작성하시오.
// 50,000원 이상: 10 % 할인
// 30,000원 이상 50,000원 미만: 5 % 할인
// 10,000원 이상 30,000원 미만: 1 % 할인
// 10,000원 미만: 할인 없음 */
// let totalPrices = Number(prompt("3. 총 구매 금액 입력"))
// if (totalPrices >= 50000) {
//     console.log(parseInt(totalPrices - totalPrices * 0.1))
// } else if (totalPrices >= 30000){
//     console.log(parseInt(totalPrices - totalPrices * 0.05))
// } else if (totalPrices >= 10000){
//     console.log(parseInt(totalPrices - totalPrices * 0.01))
// } else {
//     console.log(totalPrices)
// }






// /*문제 4: 월(Month)에 따른 계절 판별
// 1부터 12 사이의 월(Month)을 숫자로 입력받아, 해당하는 계절을 출력하는 프로그램을 작성하시오.
// 봄: 3, 4, 5월
// 여름: 6, 7, 8월
// 가을: 9, 10, 11월
// 겨울: 12, 1, 2월
// 만약 1~12 이외의 숫자를 입력하면 '잘못된 월입니다.'를 출력하세요.*/
// let month = prompt("4. 원하는 월 입력하기(숫자만)")
// if (month == '3' || month == '4' || month == '5'){
//     console.log('봄')
// } else if (month == '6' || month == '7' || month == '8') {
//     console.log('여름')
// } else if (month == '9' || month == '10' || month == '11') {
//     console.log('가을')
// } else if (month == '12' || month == '1' || month == '2') {
//     console.log('겨울')
// } 

// //Number로 변환해서 ( month >= 3 & month <= 5 ) 조건으로 고려하는 것도 ㄱㅊ을듯


// /*문제 5: 세 수 중 가장 큰 수 찾기
// 서로 다른 세 개의 정수를 입력받아, 가장 큰 수를 출력하는 프로그램을 작성하시오.*/
// let number1 = Number(prompt("4. 원하는 정수 입력하기 1"))
// let number2 = Number(prompt("4. 원하는 정수 입력하기 2"))
// let number3 = Number(prompt("4. 원하는 정수 입력하기 3"))

// if ( number1 > number2 & number1 > number3 ){
//     console.log(`가장 큰 정수: ${number1}`)
// } else if ( number2 > number3 ){
//     console.log(`가장 큰 정수: ${number2}`)
// } else {
//     console.log(`가장 큰 정수: ${number3}`)
// }

// // max 변수를 선언해서 첫 번째 정수를 넣고, 그 변수와 다음 정수를 비교하여 보다 더 큰 값을 넣는 코드를 짜고 출력하는 것도 방법.
// // 설명해주신 버전엔 if문만 여러개 쓰셨는데 else if 쓰면 안되나
// // if (max < 정수2){
// //     max = 정수2
// //     console.log(max)
// // } else if(max < 정수3){
// //     max = 정수3
// //     console.log(max)
// // } else{
// //     console.log(max)
// // } // 이거 안되는거임?


// /*문제 6: 윤년 판별기
// 사용자로부터 연도(year)를 입력받아 해당 연도가 윤년인지 평년인지 판별하는 프로그램을 작성하시오.
// 윤년 조건:
// 연도가 4의 배수이면서, 100의 배수는 아닐 때
// 또는 연도가 400의 배수일 때
// 출력 예시: '2024년은 윤년입니다.' 또는 '2023년은 평년입니다.'*/
// let year = Number(prompt('6. 년도를 입력하기'))
// if ((year % 4 == 0 & year % 100 != 0) || year % 400 == 0){
//     console.log(`${year}년도는 윤년입니다.`)
// } else {
//     console.log(`${year}년도는 평년입니다.`)
// }


// /*문제 7: 세 수 오름차순 정렬
// 서로 다른 세 개의 정수를 입력받아, 오름차순(작은 수부터 큰 수 순서)으로 정렬하여 출력하는 프로그램을 작성하시오.
// 예시: 17, 4, 8 입력 시 4, 8, 17 출력*/
// let a = Number(prompt('7. 정수 입력하기 1'))
// let b = Number(prompt('7. 정수 입력하기 2'))
// let c = Number(prompt('7. 정수 입력하기 3'))
// console.log(`${a},${b},${c}`)

// if (a < b & a < c & b < c ) {
//     console.log(a, b, c)
// }
// if (a < b & a < c & c < b) {
//     console.log(a, c, b)
// }
// if (b < a & b < c & a < c) {
//     console.log(b, a, c)
// }
// if (b < c & b < a & c < a) {
//     console.log(b, c, a)
// }
// if (c < a & c < b & a < b) {
//     console.log(c, a, b)
// } 
// if (c < b & c < a & b < a) {
//     console.log(c, b, a)
// }




// /*문제 8: 가위바위보 게임
// 두 명의 플레이어가 참여하는 가위바위보 게임을 만드시오.
// 입력: 플레이어 1과 플레이어 2는 각각 0(가위), 1(바위), 2(보) 중 하나의 숫자를 입력합니다.
// 규칙:
// 가위(0)는 보(2)를 이깁니다.
// 바위(1)는 가위(0)를 이깁니다.
// 보(2)는 바위(1)를 이깁니다.            출력:
// 플레이어 1이 이기면 '플레이어1 승리'를 출력합니다.
// 플레이어 2가 이기면 '플레이어2 승리'를 출력합니다.
// 두 플레이어가 같은 것을 내면 '무승부'를 출력합니다.*/

// let player1 = prompt("8. 가위 0 , 바위 1 , 보 2")
// let player2 = prompt("8. 가위 0 , 바위 1 , 보 2")

// if (player1 == '0') {
//     if(player2 == '0'){
//         console.log('무승부')
//     } else if (player2 == '1'){
//         console.log('플레이어 2 승리')
//     } else if (player2 == '2') {
//         console.log('플레이어 1 승리')
//     }
// }
// if (player1 == '1') {
//     if (player2 == '0') {
//         console.log('플레이어 1 승리')
//     } else if (player2 == '1') {
//         console.log('무승부')
//     } else if (player2 == '2') {
//         console.log('플레이어 2 승리')
//     }
// }
// if (player1 == '2') {
//     if (player2 == '0') {
//         console.log('플레이어 2 승리')
//     } else if (player2 == '1') {
//         console.log('플레이어 1 승리')
//     } else if (player2 == '2') {
//         console.log('무승부')
//     }
// }



// /*문제 9: 주차 차량 위치 검색
// 주차장 차량 정보가 다음과 같이 두 개의 배열로 관리되고 있습니다.두 배열에서 같은 인덱스는 동일한 차량의 정보를 의미합니다.
// 차량 번호 목록: let carArray = ['250어7142', '142가7415', '888호8888'];
// 주차 위치 목록: let locationArray = ['A1', 'B3', 'C2'];
// 사용자로부터 차량 번호를 입력받아, carArray에서 해당 차량을 찾은 뒤 locationArray에 있는 그 차량의 주차 위치를 찾아 출력하는 프로그램을 작성하시오.
// 만약 해당하는 차량 번호가 없다면 '차량이 존재하지 않습니다.'를 출력하시오.*/
// let carArray = ['250어7142', '142가7415', '888호8888'];
// let locationArray = ['A1', 'B3', 'C2'];

// let carNum = prompt("9. 차량 번호 입력")

// if (carNum == carArray[0]) {
//     console.log(`해당 차량의 위치: ${locationArray[0]}`)
// } else if (carNum == carArray[1]){
//     console.log(`해당 차량의 위치: ${locationArray[1]}`)
// } else if (carNum == carArray[2]) {
//     console.log(`해당 차량의 위치: ${locationArray[2]}`)
// } else {
//     console.log("차량이 존재하지 않습니다.")
// }


// /*문제 10: 수강 신청 목록에서 과목 제외하기
// 현재 수강 신청한 과목 목록이 배열로 주어져 있습니다.
// let courseList = ['수학', '영어', '과학', '국어'];
// 사용자로부터 제외하고 싶은 과목명을 입력받아, courseList에 해당 과목이 존재하면 목록에서 삭제한 뒤 변경된 배열 전체를 출력하세요.
// 만약 존재하지 않는 과목이면 '해당 과목은 신청 목록에 없습니다.'를 출력하는 프로그램을 작성하시오.*/
// let courseList = ['수학', '영어', '과학', '국어'];
// let deleteCourse = prompt("10. 삭제하고 싶은 과목 선택")

// if (deleteCourse == courseList[0]) {
//     courseList.splice(0, 1)
//     console.log(courseList)
// } else if (deleteCourse == courseList[1]){
//     courseList.splice(1, 1)
//     console.log(courseList)
// } else if (deleteCourse == courseList[2]) {
//     courseList.splice(2, 1)
//     console.log(courseList)
// } else if (deleteCourse == courseList[3]) {
//     courseList.splice(3, 1)
//     console.log(courseList)
// } else {
//     console.log("해당 과목은 신철 목록에 없습니다.")
// } 