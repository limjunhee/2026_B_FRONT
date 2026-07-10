/* 문제 1) 계좌 배열 기반 ATM 출금 시스템
다음 조건을 만족하는 ATM 출금 프로그램을 작성하시오.

사전 제공 코드(수정 금지)
let accountNumberList = ['111-222', '333-444', '555-666'];
let balanceList = [50000, 120000, 30000];
두 배열에서 같은 인덱스는 동일한 계좌를 의미한다.
    예) '333-444' → 잔액 120000원

입력(prompt 사용)
    계좌번호(문자열)
    prompt("계좌번호를 입력하세요");
    출금 금액(정수)
    prompt("출금 금액을 입력하세요");
    출금 규칙
    계좌 존재 여부
입력한 계좌번호가 accountNumberList에 존재할 경우만 출금 가능
존재하지 않으면 즉시 다음 문구 출력: 존재하지 않는 계좌입니다.
출금 조건(우선순위 중요)
출금 금액이 10000원 미만일 경우
출력: 출금 금액이 너무 적습니다.
출금 금액이 10000원 단위가 아닐 경우
출력: 출금 단위 오류입니다.
(출금 금액 + 수수료: 1200) > 계좌 잔액일 경우
출력: 잔액이 부족합니다.
모든 조건을 통과한 경우
출력: 출금 완료 */

// let accountNumberList = ['111-222', '333-444', '555-666'];
// let balanceList = [50000, 120000, 30000];

// let accountNumber = prompt("계좌번호를 입력하기")
// let accountNumberIsCorrect = accountNumberList.includes(accountNumber) // 계좌 존재여부 판별

// if (accountNumberIsCorrect) {
//     let money = Number(prompt("출금 금액을 입력하기(만 원 단위)"))

//     if (money < 10000) {
//         console.log("출금 금액이 너무 적습니다.")
//     } else if (money % 10000 != 0) {
//         console.log("출금 단위 오류 발생")
//     } else {
//         money += 1200 //수수료 1200원
//         if (accountNumber == accountNumberList[0]) {
//             if(balanceList[0] < money){
//                 console.log("잔액이 부족합니다.")
//             } else{
//                 balanceList[0] -= money
//                 console.log(`출금 완료. (${accountNumberList[0]}의 남은 잔액: ${balanceList[0]})`)
//             }
//         } else if (accountNumber == accountNumberList[1]) {
//             if (balanceList[1] < money) {
//                 console.log("잔액이 부족합니다.")
//             } else {
//                 balanceList[1] -= money
//                 console.log(`출금 완료. (${accountNumberList[1]}의 남은 잔액: ${balanceList[1]})`)
//             }
//         } else if (accountNumber == accountNumberList[2]) {
//             if (balanceList[2] < money) {
//                 console.log("잔액이 부족합니다.")
//             } else {
//                 balanceList[2] -= money
//                 console.log(`출금 완료. (${accountNumberList[2]}의 남은 잔액: ${balanceList[2]})`)
//             }
//         }
//     }
// } else {
//     console.log("존재하지 않는 계좌입니다.")
// }



// ===============================================================================================================
// ===============================================================================================================
// ===============================================================================================================


/*문제 2) “주차비 계산기”
다음 조건을 만족하는 주차장 요금 계산 프로그램을 작성하시오.

사전 제공 코드(수정 금지)
let carNumberList = ['12가3456', '34나7890', '56다1234'];
let useTimeList = [45, 130, 320];

두 배열에서 같은 인덱스는 동일한 차량의 정보이다.
 useTimeList 는 해당 차량의 총 주차 시간(분) 을 의미한다.
    예) '34나7890' → 130분 주차

    입력(prompt 사용)
    차량 번호(문자열)
    prompt("차량 번호를 입력하세요");

    -요금 규칙-

    차량 존재 여부
    입력한 차량 번호가 carNumberList 에 존재할 경우만 요금 계산 가능
    존재하지 않으면 즉시 다음 문구 출력
     -> 존재하지 않는 차량입니다.
    
    -주차 요금 계산 기준-
    기본 요금: 최초 60분까지 1000원
    이후 초과 시간은 30분 단위마다 500원 추가
    30분 미만 초과 시에도 1단위(500원)로 계산한다.

    -주차 요금 계산 방법-
    총 사용 시간이 60분 이하일 경우
     -> 요금 = 1000원
    총 사용 시간이 60분 초과일 경우
     -> 초과 시간 = 사용시간 - 60
    초과 시간이
     -> 0 ~30분 → 500원
     -> 31 ~60분 → 1000원
     -> 61 ~90분 → 1500원

-출력 조건(우선순위 중요)-
사용 시간이 0분 이하일 경우
출력: 잘못된 사용 시간입니다.

계산된 주차 요금이 10000원을 초과할 경우
 최대 요금 10000원 적용

 모든 조건을 통과한 경우
출력: 주차 요금은 ○○원입니다.*/

let carNumberList = ['12가3456', '34나7890', '56다1234'];
let useTimeList = [45, 130, 320];
let finalFee = 0
let carNumber = prompt("차량 번호 입력")
let carNumberIsCorrect = carNumberList.includes(carNumber)

if (carNumberIsCorrect) {
    let feeIndex = useTimeList[carNumberList.indexOf(carNumber)]

    if (useTimeList[feeIndex] <= 60) {
        finalFee = 1000
        console.log(`${carNumberList[feeIndex]}의 최종 요금: ${finalFee}`)
    } else {
        let additionalTime = useTimeList[finalFee] - 60
        let additionalFee = 0
        
        if (additionalTime % 30 == 0) { additionalFee += 500 }
        
        additionalFee += 500 * parseInt(additionalTime / 30)
    }
    finalFee = 1000 + additionalFee
    if(finalFee > 10000){
        finalFee = 10000
    }
    console.log(`${carNumberList[feeIndex]}의 최종 요금: ${finalFee}`)
} else {
    console.log("존재하지 않는 차량입니다.")
}