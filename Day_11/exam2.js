/*예제 1: 요소 내용 변경하기
id가 'title'인 <h1> 요소의 내용을 'DOM 조작 성공!'으로 변경하시오.*/
const title = document.querySelector('#title')
title.innerHTML = "DOM 조작 성공!"
//vs
// document.querySelector('#title') = "DOM 조작 성공!"

/*예제 2: 사용자 입력값 가져와서 표시하기
id가 'usernameInput'인 <input>에 이름을 입력하고 '확인' 버튼(id: 'submitBtn')을 클릭하면, id가 'greeting'인 <p> 태그에 "안녕하세요, [입력된이름]님!"이라고 표시하시오.*/
function greetings() {
    const 입력마크업 = document.querySelector('#usernameInput')
    const 입력값 = 입력마크업.value
    document.querySelector('#greeting').innerHTML = `안녕하세요, ${usernameInput.value}님!`
}
/*예제 3: 요소 스타일 동적으로 변경하기
'스타일 변경' 버튼(id: 'styleBtn')을 클릭하면, id가 'colorBox'인 <div>의 배경색을 'skyblue'로, 글자색을 'white'로 변경하시오.*/
function changeStyle(){
    const 컬러박스 = document.querySelector('#colorBox')
    컬러박스.style = "background-color:skyblue; color:white;"
}
/*예제 4: CSS 클래스 토글하기 (다크 모드 예시)
'테마 변경' 버튼(id: 'themeBtn')을 클릭할 때마다 <body> 태그에 'dark-mode' 클래스를 추가하거나 제거(토글)하시오. */
function toggleDarkMode(){
    const body = document.querySelector('body')
    //classList : 클래스 목록 반환함.
    //.classList.toggle( '클래스명'): 클래스 목록에 특정 CSS 클래스명 대입/삭제 토글 형식으로 가능
    body.classList.toggle('dark-mode')
}

/*예제 5: 특정 HTML 요소 제거하기
'박스 삭제' 버튼(id: 'removeBtn')을 클릭하면, id가 'targetBox'인 <div> 요소를 문서에서 제거하시오. */
function removeBox(){
    let 타겟박스 = document.querySelector('#targetBox')
    타겟박스.remove()
    //vs
    // document.querySelector('#targetBox') = ' '
}

/*예제 6: 여러 요소에 동일한 작업 반복하기
클래스가 'item'인 모든 < p > 요소의 글자색을 'green'으로, 글자 두께를 'bold'로 변경하시오. */

let p = document.querySelectorAll('.item') // 여러 개의 특정한 마크업 DOM을 배열 형태로 가져오기

for(let i = 0; i <= p.length - 1; i++){
    p[i].style = 'color:green; font-weight:bold;'

    //p.style.color = 'green'
    //p.style.fontweight = 'bold'
}

/*예제 7: 이미지 소스(src) 변경하기 , https://placehold.co/
'이미지 변경' 버튼(id: 'changeImgBtn')을 클릭하면, id가 'mainImage'인 <img> 요소의 src 속성을 'https://placehold.co/600x400/red/white'로 변경하시오. */
function changeImg()
{
    const image = document.querySelector('#mainImage')
    image.src = 'https://placehold.co/600x400/red/white'
}

/* 예제 8 : select 에서 선택한 option값 console 출력하기. */
function changeSelect(){
    let 마크업 = document.querySelector('select')
    let 선택값 = 마크업.value;
    console.log(선택값)
}


/* 예제 9 : input 에서 입력받은 값을 전역 배열에 저장하고 배열 상태를 출력하기. */
let arr = []
function pushArray(){
    const 마크업 = document.querySelector('#inputText')
    const 배열출력자리 = document.querySelector("#textArray")
    const 입력값 = 마크업.value
    arr.push(입력값)

    console.log(arr)
    배열출력자리.innerHTML = arr
}