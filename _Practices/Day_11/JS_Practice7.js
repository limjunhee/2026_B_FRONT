// 미니 가계부 : 날짜, 항목, 금액을 입력받아 테이블에 출력
// 1. 프로토타입 : 만들고자 하는 화면 스케치하기 = 피그마 응용
// 2. 메모리 설계 : 날짜, 항목, 금액
// 3. 기능 설계 : 등록 + 출력 (유지 보수, 재사용성)

// function addList(){
//     let date = document.querySelector('#date').value
//     let content = document.querySelector('#content').value
//     let price = document.querySelector('#price').value
//     let table = document.querySelector('#tableMain')

//     table.innerHTML += `<tr><td>${date}</td> <td>${content}</td><td>${price}</td></tr>`
// }

//============================================================================================
// 배열 객체로 하는 게 더 관리하기 쉬움(원래 버전은 디폴트를 HTML에 미리 때려박았음).

let 가계부목록 = [ { 날짜: '2025-06-19', 항목: '점심 식사', 금액 : 9000},
    { 날짜: '2025-06-19', 항목: '점심 식사', 금액 : 9000 } ]


// 등록 함수와 출력 함수 2개 사용하기
// 1. 등록: 버튼을 클릭하면 = 3개의 입력받은 값 가져와서 가계부목록에 객체로 저장하기
// 2. 출력: 페이지가 열리면 or 등록 성공하면 = 현재 가계부목록에 저장된 객체들을 테이블에 출력하기

function inputList () {
    //1. 특정한 마크업 DOM에 입력받은 값 가져오기. (서로 다른 세 곳)
    let 날짜 = document.querySelector('#date').value;
    let 항목 = document.querySelector('#content').value
    let 금액 = Number(document.querySelector('#price').value) // 입력받은 값들을 문자열로 반환함

    let 객체 = { 날짜, 항목, 금액 } // 객체 생성시, 속성명과 속성값의 변수명이 같으면 생략 가능
    // => let 객체 = { 날짜:날짜, 항목:항목, 금액:금액 }

    // 3. 추후 java 혹은 python 백엔드 언어들에게 통신
    가계부목록.push( 객체 )

    // 4. 성공 안내
    alert( '등록성공' )

    // 5. 등록 성공 시 출력 기능 한번 실행
    outputList()
}

function outputList(){
    // 백엔드 통신
    // 1. 어디에
    let table = document.querySelector('table > tbody')
    
    // 2. 무엇을 , 배열에 모든 자료들을 HTML 형식으로
    let html = ''

    for(let i = 0; i<= 가계부목록.length-1; i++){
        let 가계부 = 가계부목록[i];
        html += `<tr><td>${가계부.날짜}</td><td>${가계부.항목}</td><td>${가계부.금액.toLocaleString()}원</td></tr>`
    }

    // 3. 출력
    table.innerHTML = html;
}

outputList( ) // -> JS가 실행되면 아무 조건 없이 테이블을 출력