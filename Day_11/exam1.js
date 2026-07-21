

/*
    DOM: document, object, model -> HTML문서 객체 표준
    - HTML 언어는 객체가 없으며, 즉 변수/연산.험수가 없어 제어와 조작이 불가능함
    - JS 언어는 객체가 있음 -> 즉 JS가 HTML 제어 및 조작한다.

    1. 내장객체: document, js거 html 구조(객체로) 가짐, JS가 포함된 HTML
    2. 주요 속성:
        1)quetySelector("CSS 선택자") : 선택자의 마크업을 객체로 반환 
*/

// [1] HTML 전체 DOM 확인
console.log(document)

// [2] 특정 마크업, 클래스 확인
const div = document.querySelector('div')
console.log(div)

const box2 = document.querySelector('.box2')
console.log(box2)

const box3 = document.querySelector('#box3')
console.log(box3)

const divList = document.querySelectorAll('div')
console.log(divList)

// [3] 가져온 DOM 마크업 객체에 속성
const divHTML = div.innerHTML //<마크업> inner </마크업>
console.log(divHTML)
div.innerHTML = "상자1"

// [4] 입력받은 값 가져오는 속성
const name = document.querySelector('.name')
const value = name.value // <input value="" />
console.log( value )
name.value = "제목입력해"

// [5] 함수활용 : 입력받은 값 함수내 가져오기
function 등록함수(){

    //1. 특정한 마크업DOM 가져오기
    const 입력마크업 = document.querySelector('.title')

    //2. 가져온 마크업DOM에서 value 속성 가져오기
    const 입력받은값 = 입력마크업.value;

    //3. 특정한 위치에 출력
    box2.innerHTML = 입력받은값
}

// [6] css 활용
// 1. 특정한 마크업DOM 가져오기
const 제목마크업 = document.querySelector('.title2')

// 2. 가져온 마크업DOM에서 style 속성 대입하기
제목마크업.style = "color:red; font-size:5px;"