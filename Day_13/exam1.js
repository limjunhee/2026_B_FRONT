/*
    프론트엔드 : 화면, 시각적 요소
    백엔드 : 비지니스로직, 서버

    브라우저(크롬, 엣지, 사파리)에 의존하여 HTML 렌더링
    HTML 안에 JS/CSS도 포함하여 같이 렌더링 됨
    F5 자체가 HTML을 재렌더링(재요청)하는 것. 그러므로 JS는 초기값으로 돌아감
*/

/*
1) JS 변수들은 새로고침 하면 초기화됨(초기값으로 돌아감)
2) HTML 안에 포함된 JS/CSS 파일들은 개발자 도구에서 확인 가능
    -> 그래서 백엔드가 필요하다.
    -> 하나의 html에 여러 개 js/css 가능
3) 서로 다른 .js 파일에서 동일한 HTML에 포함되면 코드 공유 가능
    // test.js에서 선언된 변수를 exam1.js에서 호출 가능하다.
*/
console.log(x)



/* 
    브라우저에 저장 기능 , 개발자도구 [F12] -> [application]

    [1] 세션스토리지 : 세션 저장소
        - 모든 브라우저가 종료되면 자동 초기화(삭제)
        - 서로 다른 브라우저/탭 자료 공유 안됨.
        예시] 이벤트 정보들
    [2] 로컬스토리지 : 로컬 저장소
        - 모든 브라우저가 종료해도 저장을 유지함
        - 서로 다른 브라우저/탭 자료 공유 됨. ( 단, 동일한 도메인 혹은 브라우저일 경우 )
        예시] 자동 로그인, 로그인 유지
    
    ★ 노출에 대한 위험이 존재할 경우 암호화를 통해 자료를 반환
    
*/

// [1] 웹 스토리지의 객체를 호출해봄
console.log(localStorage)
console.log(sessionStorage)


// [2] 웹 스토리지 객체 내 자료 추가 .setItem( 'key' , value )
// 개발자 도구 어플리케이션 -> 왼쪽 메뉴에서 세션 스토리지 -> 도메인 선택 시 확인 가능
sessionStorage.setItem( 'name', '유재석' )
localStorage.setItem('age', 40)


// [3] 웹 스토리지 객체 내 자료 호출 .getItem( 'key' )
let name = sessionStorage.getItem( 'name' ); console.log( name )
let age = localStorage.getItem( 'age' ); console.log( age )


// [4] 웹 스토리지 객체 내 자료 삭제 .removeItem( 'key' ) , .clear()
sessionStorage.removeItem( 'name' ) // 개발자 도구에서 삭제 후 결과 확인 가능
localStorage.clear() // 특정 키가 아닌 전체를 삭제

// [*] 웹 스토리지도 문자열만 지원 -> 저장되는 것들은 전부 문자열이므로 *타입 변환이 필요*

// 동적타입
let a = 10 // JS - 여기 있는 a의 자료 타입이 뭔지 잘 모르겠으니 TypeScript 사용(정적 타입 기능 추가하기도 한다.)
a = 10 //py
// 정적 타입
// int a = 10;


// [5] JSON(자바스크립트객체) - 프로그래밍 언어에 독립적인 *경량 데이터 교환 방식*

// 브라우저는 객체를 몰라서 인식 불가 - [object Object]로 뜸
// JSON.stringify( 객체 )
sessionStorage.setItem('회원객체', JSON.stringify({'name' : '유재석', 'age' : 40})) 

// 불러올 땐 JSON.parse( 문자열 ) : 문자열 타입을 객체 타입으로 호환해서 변환
let 회원객체 = JSON.parse(sessionStorage.getItem( '회원객체' ))
console.log( 회원객체 )

//JS는 새로고침하면 초기화되니 백엔드가 필요하다.