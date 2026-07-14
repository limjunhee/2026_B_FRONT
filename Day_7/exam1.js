// 1. 객체 선언 {} vs 배열 선언 []
{ }

// 2. 객체/배열은 주로 변수에 대입/저장한다.
let 객체변수1 = { }
console.log( 객체변수1 ) //객체가 저장된 변수 호출

// 3. 객체 내 속성( properties ) 구성 -> '속성명' : 속성값
const 객체변수2 = {속성명1 : 10, '속성명2' : '안녕'}
console.log( 객체변수2 )

// 4. 객체 내 속성 호출, .(점/도트/접근) 연산자 , 왼쪽자료의 속성 참조
console.log( 객체변수2.속성명1 ) // 객체변수2의 속성명1은 10이므로, 10을 출력함
console.log( ) // console 객체 내의 log라는 함수를 호출함

console.log(Object.keys( 객체변수2)) //객체 내 모든 속성명(배열) 출력
console.log(Object.values(객체변수2)) //객체 내 모든 속성값(배열) 출력
console.log(Object.entries(객체변수2)) //객체 내 모든 속성명/속성값 (배열) 출력