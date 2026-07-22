/*

1. 기획서/요구사항을 따른 프로토타입
2. 메모리 설계
-> 저장할 것들: 카테고리, 제품이름, 가격, 이미지, 등록일

-> 속성들 간의 종속관계 파악, 테이블 나누기.
    카테고리명   제품명  가격    이미지  등록일
    음료        콜라    1000    .png    2026-07-22
    음료        사이다  1200    .png    2026-07-23
    --------------------------------------------------------
    카테고리명          제품명      가격        이미지      등록일
    음료                콜라        1000        .png       2026-07-22 
                        사이다      2000        .png      2026-07-23


-> 쪼개진 테이블 간 연관 만들기, 관계형데이터베이스
    테이블당 식별자1개(PK: PRIMARY KEY) 권장
    상하관계 파악해서 식병자 하위요소에 저장한다. ( FK : 참조(외래)키 ), 교집합
    카테고리번호 카테고리명     제품코드    제품명      가격    이미지  등록일        카테고리코드(FK)  
    1           음료            1         콜라       1000    .png   2026-07-22      1
    2           과자            2         사이다     2000    .png   2026-07-22      1

-> js로 객체 표현하기, 표 = 배열 / 객체 = 행 / 열 = 속성

-> 기능 설계 : CRUD, RESTAPI
    등록(CREATE) : 게시물쓰기, 회원가입, 수강신청 등등
        - 실행조건: 등록버튼 클릭했을 때 -> 함수명: productAdd, 매개변수: X, 반환값: X;
    
    조회(READ) : 게시물전체조회, 마이페이지 등등
        - 실행조건 : JS 최초 실행, 최신화(등록/수정/삭제) -> 함수명: productPrint, 매개변수 : X, 반환값 : X;

    수정(UPDATE) : 게시물수정, 내정보수정, 수강신청수정 등등
        - 실행조건 : 수정버튼 클릭했을 때 -> 함수명: productUpdate, 매개변수 : 수정할제품코드(대상), 반환값 : X;

    삭제(DELETE) : 게시물삭제, 회원탈퇴 등등
        - 실행조건 : 삭제버튼 클릭했을때 -> 함수명: productDelete, 매개변수 : tkrwp할제품코드(대상), 반환값 : X;
    
*/

let categoryList = [ { 'ccode': 1, 'cname': '음료' }, { 'ccode': 2, 'cname': '과자' } ]

let productList = [
    { 'pcode': 1, 'pname': '콜라', 'pprice': 1000, 'pimg': 'https://placehold.co/100x100', 'pdate': '2026-07-22', 'ccode' : 1 },
    { 'pcode': 2, 'pname': '사이다', 'pprice': 2000, 'pimg': 'https://placehold.co/100x100', 'pdate': '2026-07-23', 'ccode': 1 }
]

// 전체조회 함수
productPrint() // JS 열릴 때 최초 한 번 실행
function productPrint() {
    // 어디에
    let tbody = document.querySelector( '#main table tbody' )

    // 무엇을 -> 배열 내 모든 자료들을 HTML 형식(HTML)으로 구성
    let html = ''
    for(let index = 0; index <= productList.length-1; index++){
        let product = productList[index]

        // ++ 현재 index번째 제품의 카테고리번호에 해당하는 카테고리명 찾기
        let cname = ''
        for( let j = 0; j <= categoryList.length-1; j++){
            if (categoryList[j].ccode == product.ccode) { //만약 카테고리 내 카테고리번호와 제품의 카테고리번호와 같다면?
                cname = categoryList[j].cname
                break;
            }
        }

        //만약 샘플 HTML 존재한다면 출력, 변수 자리에 ${} 변경하기
        html += `<tr>
                    <td> <img src="${product.pimg}" /> </td>
                    <td> ${cname} </td>
                    <td> ${product.pname} </td>
                    <td> ${product.pprice} </td>
                    <td> ${product.pdate} </td>
                    <td>
                        <button class="deleteBtn" onclick = "productDelete(${product.pcode})">삭제</button>
                        <button class="updateBtn" onclick = "productUpdate(${product.pcode})">수정</button>
                    </td>
                </tr>`
    }

    // 출력
    tbody.innerHTML = html
}

// 삭제 함수, 삭제할 제품 코드를 매개변수로 받아옴
function productDelete(productCode){
    // 1. 삭제할 pcode의 제품객체를 배열에서 찾는다.
    for (let index = 0; index <= productList.length - 1; index++){
        if (productList[index].pcode == productCode) {
            // 2. 배열에서 요소 삭제 .splice(인덱스 번호, 개수)
            productList.splice(index, 1)
            alert('삭제 성공')
            
            // 3. 화면 최신화 -> 'React'에선 렌더링이라고 함.
            productPrint()
            return // 주의: return은 함수 탈출 vs break는 for문 탈출  (현재는 차이 없어서 뭘 쓰던지 상관없음)
        }
    }
}

// 수정 함수
function productUpdate(productCode){
    // 1. 수정할 pcode의 제품객체를 배열에서 찾는다.
    for (let index = 0; index <= productList.length - 1; index++) {
        if (productList[index].pcode == productCode) {
            let new_pname = prompt('수정할 제품명 입력')
            let new_pprice = prompt('수정할 가격 입력')

            productList[index].pname = new_pname
            productList[index].pprice = new_pprice

            alert('수정 성공')

            productPrint()
            return
        }
    }
}

// 등록 함수
// 제품 식별자 = finalPcode
let finalPcode = 2
function productAdd(){
    // 1. 입력받은 값 가져오기
    let category = document.querySelector(".category").value
    let name = document.querySelector('.name').value
    let price = document.querySelector('.price').value
    let image = document.querySelector('.image').files[0] //첨부파일은 .files 속성에서 첨부파일 자료를 가져옴, [0] 인덱스 지정해서 첫 번째로 받은거(단일) 가져옴
    console.log(category)
    console.log(name)
    console.log(price)
    console.log(image)
    // 유효성 검사 - 카테고리를 선택하지 않은 상태라면?
    if(category == 'disabled'){
        alert('카테고리를 선택하십시오'); return;
    }

    //2. 입력받은 값을 객체화, 중간 검사 console.log로 실행하기
        // pcode는 제품 식별자로, 사용자가 직접 지정하는 게 아니라 자동으로 지정 (마지막 제품코드에 +1)
        // pdate -> 현재 시스템의 날짜/시간을 반환하는 라이브러리 함수 new Date()
            //현재연도: new Date().getFullYear() -> 연도만 빼옴
            //현재 월: new Date().getMonth()
            //현재 일: new Date().getDate()
            // console.log(new Date().getFullYear())
            // console.log(new Date().getMonth())
            // console.log(new Date().getDate())
    let pdate = `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate() }`

    let object ={   
                    ccode:category, pname:name, pprice:price, 
                    pimg: image == undefined ? 'https://placehold.co/100x100' : URL.createObjectURL(image), // URL.createObjectURL(객체) 객체 주소 생성
                    pcode:finalPcode+1, pdate:pdate 
                }
    finalPcode += 1
    productList.push(object)
    console.log(object)
    
    productPrint()

    return;
}   