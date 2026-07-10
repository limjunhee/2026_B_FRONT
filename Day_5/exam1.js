// 반복문 : for 문
// for ( 초기값; 조건식; 증감식 ){ }

// 안녕하세요 3번 출력하기
// [1] - 복붙
console.log("안녕하세요")
console.log("안녕하세요")
console.log("안녕하세요")

// 어디부터(초기값) 어디까지(조건식) (증감식으로 인해 반복수가)증가하면서 무엇을(실행문) 반복할 것인지 정하기
// 반복수++ -> 증감연산자를 이용하여 매 루프마다 1 증가시킴
for (let 반복수 = 1; 반복수 <= 3 ; 반복수++) { console.log("안녕하세요") }

// [2]
// 1~5까지 출력하기
console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)

// 초기값, 조건식, 증감식 설정하기
for ( let num = 1; num <= 5; num++ ){
    console.log(num)
}


// [3] 1 ~ 5 까지의 총 합을 구하기
let num = 0
num = 1 + 2 + 3 + 4 + 5
console.log(num)

// 반복문으로 하면?
num = 0
for (let n = 1; n <= 5; n++){
    num += n
}
console.log(num)

// [4] 구구단 2단
for ( let i = 1; i <= 9; i++ ){
    console.log(`2 * ${i} = ${ 2 * i }`)
}

// [5] 중첩 for문으로 구구단 2단 ~ 9단 구현하기
for (let a = 2; a <= 9; a++){
    console.log(`${a}단 시작`)

    for (let b = 1; b <= 9; b++){
        console.log(`${a} * ${b} = ${a * b}`)
    }
}

// [6] 3개의 문자열을 입력받아 배열에 저장함
let arr = [ ] //빈 배열
for ( let c = 1; c <= 3; c++){
    let input = prompt() //입력
    arr.push(input) //저장
}
console.log(arr) // 저장한거 다 출력하기(배열 전체를)