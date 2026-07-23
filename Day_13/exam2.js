/* 
    QueryString : url 웹 주소 상에 매개변수 사용
        - 페이지 이동 간에 매개변수 값 전달. **주로 자료 식별자 자료 또는 css 식별자**
        - URL ? 매개변수명 = 값 & 매개변수 = 값
        - ? 뒤쪽 부분이 쿼리스트링이다
    https://finance.naver.com/item/main.naver?code=005930

    - 사용법
        1) new URLSearchParams( location.search ) : querySting 객체 반환
        2) .get( '매개변수명' ) : querySting 내 특정한 매개변수명의 값 반환

*/

// [1] JS에서 URL 정보 객체 호출
let url = new URLSearchParams( location.search ); //현재 주소상 위치 반환. location = 현재 지역을 뜻함
console.log(url)
// http://127.0.0.1:5500/Day_13/exam2.html?name=유재석

let name = url.get( 'name' )

console.log( name)

// [2] 페이지 이동하는 방법

// (1) <a href = "웹주소"> 링크 </a>
let pcode = url.get( 'pcode' )
let page = url.get( 'page' )

console.log(pcode, page)

// (2) JS에서 이동 : location.href = "웹주소"
function 링크함수(){
    location.href = "exam2.html?name=강호동"
}

/*
    인터벌 : 특정한 주기에 따라 코드를 반복 실행
        - 사용법
            setInterval( 함수명, 주기 )
                * 함수명에 소괄호를 넣으면 안됨
                * 밀리초(1/1000) : 1000이 1초임 , 반복 주기
            clearInterval( 인터벌객체 )
*/
let value = 0;
function 증가함수(){
    value ++
    document.querySelector('#box1').innerHTML = value
}

// [1] 특정한 함수를 주기에 따라 반복 실행하기
setInterval( 증가함수 , 1000 )

function 시계함수(){
    let today = new Date() // 현재 날짜/시간 가져옴
    let hour = today.getHours()  // 시
    let minute = today.getMinutes() // 분
    let second = today.getSeconds() // 초
    let time = `${hour} : ${minute} : ${second < 10 ? '0' + second : second }` //시 + 분 + 초
    document.querySelector('#box2').innerHTML = time //html에 출력하기
}
// [2]
setInterval( 시계함수, 1000 )

// [3] 인터벌 시작/종료
let time = 0; //초 저장하는 변수
let timeInter; // 인터벌 저장하는 변수
function 타이머시작(){
    timeInter = setInterval( 타이머함수, 1000 )
}

function 타이머함수(){
    time++
    document.querySelector('#box3').innerHTML = time
}

function 타이머종료(){
    clearInterval( timeInter )
}