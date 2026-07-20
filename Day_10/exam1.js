//1. 함수 사용법
//(1) 미리 만들어진 함수 쓰기 : 라이브러리, 각 프로그래밍 회사에서 제공(함수 호출만)
console.log("함수1")
document.querySelector('h3').innerHTML="함수2"

//(2) 개발자가 직접 만들기 : 정의함수, 함수도 자료 타입 중 하나다.

// 함수 정의
function func1( 매개변수1 ) {
    console.log(매개변수1)
}

//함수 호출
func1(3)


// 예시 1
function 믹서기함수( 과일 ){
    return 과일+"주스"
}
let 컵1 = 믹서기함수("사과") //믹서기함수에 사과를 인자값으로 전달하여 사과주스 반환하여 컵1 변수에 저장
let 컵2 = 믹서기함수("포도") //믹서기함수에 포도를 인자값으로 전달하여 사과주스 반환하여 컵2 변수에 저장
console.log(컵1)
console.log(컵2)
// 예시 2
function 수학공식함수(x,y) {
    a = x+y;
    return a
}
let 결과1 = 수학공식함수(3, 5) //x에 3, y에 5 => 8 반환
let 결과2 = 수학공식함수(3, -2) //x에 3, y에 -2 => 1 반환
// ======================================================================================================

// 1. 매개변수 x, 반환값 x
function func2( ) {
    y = 3 + 2
}
func2()

// 2. 매개변수 o, 반환값 x / 예시 - console.log() 
function func3( x ) { console.log( 'func3 exe'); y = x + 2 }
func3( 10 )

// 3. 매개변수 o, 반환값 o / 예시 prompt() * 반환값ㅅ이 있는 함수느 반환값을 변수에 저장함
function func4(x) {console.log('func4 exe'); y = x + 2; return y;}
let result4 = func4(10) // let result = x(10) + 2
console.log(result4)

// 4. 매개변수 x, 반환값 o
function func5() { console.log( 'func5 exe'); y = 3+2; return y; }
let result5 = func5() // 3+2
console.log(result5)

// 지역 변수
// if, for, function의 { 실행문 } 안에서 선언(let)된 변수.
let 전역변수 = '대한민국' // 1) 해당 변수는 {} 안에 있는 선언이 아니므로 모든 곳에서 호출 가능함
if( true ){
    let 지역변수1 = '경기도' // 2) 해당 변수는 {} 안에 있는 선언이므로 밖에서 호출 가능함
    for (let i = 1; i <= 1; i++){
        let 지역변수2 = "안양시"
        console.log(지역변수1);
        console.log(지역변수2);
    }
    // console.log(지역변수2); //오류: 지역변수 2는 for문에서 선언된 지역변수이므로 밖에서 호출 불가

    if ( true ) {
        let 지역변수3 = "성남시"
        console.log(지역변수3)
    }
} //if end

console.log(전역변수)
// console.log(지역변수1) //오류: 지역변수1은 {} if문에서 선언된 지역변수이므로 밖에서 호출 불가

// 2. if, for와 다르게 function은 return 반환 키워드 이용한 지역변수의 값 이동
function func6(){
    let 지역변수4 = '수원시';
    return 지역변수4;
}
let 전역변수2 = func6();

// 3. HTML에서 함수 호출하기
function func7( ){console.log('func7 exe')}
// 3-1 : JS에서 함수 호출하는 방법 : 함수명(매개변수)
func7()
// 3-2 : HTML에서 함수 호출 방법 <마크업 onClick()="">