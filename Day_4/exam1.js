// 연산 및 함수 결과는 무조건 하나임
// 분기/조건문: 상황에 따른 흐름의 분기/제어
    // 비가 오면? 우산을 핀다
    // 그치면? 우산을 접는다
    // 프로젝트/실무 진행 시 상황에 따른 적절한 판단이 중요(이게 진짜 필요한 기능이여서 개발하려 하는가?)

// 1. if문: if(조건식) 실행문, 조건식 결과가 true이면 실행 처리
if ( 10 > 3 ) {
    console.log( "1. 10은 3보다 큼" )
}

if ( 10 < 3 ) {
    console.log( "2. 3은 10보다 큼" )  // false
}

// 2. if문2 - 실행문이 2개 이상이면 중괄호로 묶으면 되나, 그냥 아무 때나 상관없이 중괄호로 묶어도 상관없다.
if ( 10 > 3 ) {
    console.log( "3. 10은 3보다 큼" ); console.log( "3. [2]" ); // 한 줄에 여러 명령어를 쓰고 싶으면 세미콜론으로 구분해줘야 한다.
}

// 3. if ~ else문 : 조건식 결과 true(참), false(거짓) 분기 처리
if ( 10 > 3 ) { console.log( "4. 10은 3보다 큼" ); }
else { console.log( "4. 3은 10보다 큼" ); }

// 4. if ~ else if ~ else 문 : 
// 다수 조건일 때의 true 결과를 한 개만 처리할 때
if ( 10 > 3 ){ console.log( "5. 10은 3보다 크다" ); }
else if ( 10 > 2 ){ console.log( "5. 10은 2보다 크다" ); }
else if ( 10 > 1 ){ console.log( "5. 10은 1보다 크다" ); }
else { console.log( "거짓" ); }
//vs
// 다수 조건일 때 여러 개의 true 결과를 여러 개 처리할 때
if ( 10 > 3 ) { console.log("5. 10은 3보다 크다"); }
if ( 10 > 2 ) { console.log("5. 10은 2보다 크다"); }
if ( 10 > 1 ) { console.log("5. 10은 1보다 크다"); }
else { console.log("거짓"); }

// 5. 중첩 if문 (가독성은 낮음)
let 성별 = "남"; let 점수 = 90
if ( 성별 == "여" ) { // 만약 성별이 여자면
    if ( 점수 >= 80 ) { //여학생의 점수가 80점 이상이면
        console.log("우수 여학생")
    } else { console.log("여학생") }
} else { // 남자면
    if (점수 >= 80) { console.log("우수 남학생") } //남학생 점수가 80점 이상이면
    else { console.log("남학생") }
}


//------------------------------------------------------------------------------------------------------------
console.log("[실습문제 시작]")

// /*문제 1: 합격/불합격 판정
// 두 개의 점수를 입력받아 총점을 계산하세요. 총점이 90점 이상이면 '성공'을, 그렇지 않으면 '실패'를 출력하는 프로그램을 작성하시오. 
// 기본 프로세스: 입력 - 저장 - 처리 - 출력 */
// let score1 = Number(prompt("1. 1차 점수를 입력하세요"))
// let score2 = Number(prompt("1. 2차 점수를 입력하세요"))
// if (score1 + score2 >= 90) {
//     console.log("성공")
// } else {
//     console.log("실패")
// }





// /*문제 2: 두 수 중 더 큰 수 찾기
// 서로 다른 두 개의 정수를 입력받아, 더 큰 수를 출력하는 프로그램을 작성하시오.*/
// let num1 = Number(prompt("2. 첫 번째 수를 입력하세요"))
// let num2 = Number(prompt("2. 두 번째 수를 입력하세요"))

// if (num1 > num2) {
//     console.log(num1)
// } else if (num1 < num2) {
//     console.log(num2)
// } else {
//     console.log("두 수는 똑같은 수입니다.")
// }

// let 결과 = num1 > num2
// if (결과) { console.log(num1) } else { console.log(num2) } // ★ 더 짧은 버전





// /*문제 3: 로그인 시스템
// 사용자로부터 아이디와 비밀번호를 입력받습니다. 아이디가 'admin'이고 비밀번호가 '1234'와 모두 일치하면 '로그인 성공'을, 하나라도
// 다르다면 '로그인 실패'를 출력하는 프로그램을 작성하시오.*/
// let id = prompt("3. 아이디 입력하기")
// let pw = prompt("3. 비밀번호 입력하기")

// if (id == 'admin' & pw == '1234') {
//     console.log("로그인 성공")
// } else {
//     console.log("로그인 실패")
// }






// /*문제 4: 비밀번호 보안 등급 확인
// 사용자로부터 비밀번호를 문자열로 입력받아, 길이에 따라 보안 등급을 출력하는 프로그램을 작성하시오.
// 힌트 : 해당 변수 뒤에 .length를 붙여 비밀번호의 길이를 숫자로 구합니다.
// 8자 미만: '보안 등급: 약함 (8자 이상으로 설정해주세요.)'
// 8자 이상 12자 미만: '보안 등급: 보통'
// 12자 이상: '보안 등급: 강함' */
// let password = prompt("4. 비밀번호 설정(12자 이상 권장)")
// if (password.length < 8) {
//     console.log("보안 등급: 약함 (8자 이상으로 설정해주세요.)")
// } else if (password.length < 12) {
//     console.log("보안 등급: 보통")
// } else {
//     console.log("보안 등급: 강함")
// }




// /* 문제 5: 좌석 예약 시스템
// 3개 좌석의 예약 상태를 나타내는 배열이 있습니다. ('O': 예약 완료, 'X': 예약 가능)
// let seatList = [ 'O', 'X', 'O' ];
// 사용자로부터 예약할 좌석의 인덱스 번호(0, 1, 2)를 입력받아, 해당 좌석이 예약 가능('X')하면
// '예약 성공'을, 이미 예약된 좌석('O')이면 '예약 불가' 를 출력하는 프로그램을 작성하시오. */
// let seatList = ['O', 'X', 'O'];
// let seatNum = prompt("5. 좌석번호 입력 (0 ~ 2)")
// console.log(seatList)
// if (seatList[seatNum] == 'X') { console.log("예약 성공") } else { console.log("예약 불가") }




// /*문제 6: 점수에 따른 상품 지급
// 게임 점수를 정수로 입력받아, 아래 기준에 따라 지급될 상품을 출력하는 프로그램을 작성하시오.
// 900점 이상: 'A급 경품'            , 700점 이상 900점 미만: 'B급 경품'
// 500점 이상 700점 미만: 'C급 경품' , 500점 미만: '참가상' */
// let gameScore = Number(prompt("6. 게임 점수 입력"))
// if (gameScore >= 900) {
//     console.log("A급 경품")
// } else if (gameScore >= 700) {
//     console.log("B급 경품")
// } else if (gameScore >= 500) {
//     console.log("C급 경품")
// } else {
//     console.log("참가상")
// }





// /*문제 7: 사용자 역할에 따른 접근 권한 부여
// 사용자 역할(role)을 문자열로 입력받습니다. 역할에 따라 다른 접근 권한 메시지를 출력하는 프로그램을 작성하시오.
// admin: '모든 기능에 접근할 수 있습니다.'    , editor: '콘텐츠 수정 및 생성 기능에 접근할 수 있습니다.'
// viewer: '콘텐츠 조회만 가능합니다.'         , 그 외 역할: '정의되지 않은 역할입니다.' */
// let userRole = prompt("7. 사용자 역할 입력 (admin, editor, viewer)")
// if (userRole == 'admin') {
//     console.log('모든 기능에 접근할 수 있습니다.')
// } else if (userRole == 'editor') {
//     console.log('콘텐츠 수정 및 생성 기능에 접근할 수 있습니다.')
// } else if (userRole == 'viewer') {
//     console.log('콘텐츠 조회만 가능합니다.')
// } else {
//     console.log('정의되지 않은 역할입니다.')
// }


// /*문제 8: 나이에 따른 놀이공원 입장료 계산
// 사용자의 나이를 정수로 입력받아, 아래 기준에 따라 입장료를 출력하는 프로그램을 작성하시오.
// 8세 미만: '무료'                    , 8세 이상 19세 이하: '5,000원'
// 20세 이상 65세 미만: '10,000원'     , 65세 이상: '3,000원' */
// let age = Number(prompt("8. 나이 입력"))
// if (age >= 65) {
//     console.log("3,000원")
// } else if (age >= 20){
//     console.log("10,000원")
// } else if (age >= 8){
//     console.log("5,000원")
// } else {
//     console.log("무료")
// }


// /*문제 9: 음료 자판기
// 다음 음료 목록 배열이 주어져 있습니다.
// 음료 이름 목록 : let drinkNames = ['콜라', '사이다', '커피'];
// 음료 가격 목록 : let drinkPrices = [1000, 1000, 1500];
// 사용자로부터 원하는 음료(0, 1, 2)의 번호를 입력받아, 
// 해당하는 음료 이름과 가격을 '선택하신 음료는 [음료이름]입니다. 가격은 [가격]원입니다.' 형식으로 출력하세요. 
// 만약 목록에 없는 번호를 입력하면 '없는 상품입니다.'라고 출력하는 프로그램을 작성하시오.*/
// let drinkNames = ['콜라', '사이다', '커피'];
// let drinkPrices = [1000, 1000, 1500];

// let drinkIndex = prompt("9. 음료 번호를 입력하기")
// if (drinkNames[drinkIndex] != undefined) {
//     console.log(drinkNames[drinkIndex])
//     console.log(drinkPrices[drinkIndex])
// } else {
//     console.log("없는 상품입니다.")
// }