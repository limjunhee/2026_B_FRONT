/*
3. 데이터 관리

저장소: 모든 회원 정보는 브라우저의 ** localStorage ** 를 사용하여 저장 및 관리되어야 합니다. 

데이터 구조: 회원 목록은 객체(Object)를 담는 배열(Array) 형태로 관리합니다.

각 회원 객체는 { 'no' : 회원번호, 'id' : 아이디, 'pw' : 비밀번호 } 형태를 가집니다.

    회원번호(no)는 등록 시마다 1씩 자동 증가해야 합니다.

이 배열 전체는 JSON.stringify()를 통해 문자열로 변환된 후, localStorage에 'memberList'라는 키(key)로 저장되어야 합니다.

4. 핵심 기능 구현

signup() 구현:

입력된 아이디와 비밀번호를 입력받아(memberList)배열 에 새로 생성한 회원 객체를 추가(push)합니다.

회원번호는 현재 배열의 마지막 회원번호에 1을 더한 값으로 자동 부여합니다.

login() 구현:

입력된 아이디와 비밀번호를 입력받아(memberList)배열 내의 어떤 회원 객체의 id, pw 값과 모두 일치하면, "로그인 성공" 알림창을 띄
우고 함수를 즉시 종료합니다.

일치하는 정보를 찾지 못하면, "동일한 회원정보가 없습니다. 로그인실패" 알림창을 띄웁니다.
*/

// let memberList = [ {'no': 1, 'id': 'testid', 'pw': 'testpw'} ]
let finalNo = 1


function signUp() {
    let newId = document.querySelector('.signId').value
    let newPw = document.querySelector('.signPw').value
    let memberList = JSON.parse(localStorage.getItem('memberList'))
    
    if (newId == '' || newPw == '') { //유효성 검사
        alert("회원가입 시 아이디와 비밀번호는 필수 입력사항입니다.")
        return
    }

    // console.log(memberList) //아무것도 없으면 null(최초등록하는 상황일 경우)
    if(memberList == null){
        memberList = []
    }

    let finalNo = memberList.length == 0 ? 1 : memberList[ memberList.length - 1].no+1

    // 입력값 객체화
    let newMember = { 'no': finalNo, 'id': newId, 'pw': newPw }
    // 배열에 등록
    memberList.push(newMember); console.log(memberList);
    alert('등록 성공')

    // localStorage에 memberList 배열 저장하기
    localStorage.setItem('memberList', JSON.stringify(memberList))
    localStorage.getItem('memberList')
}


function login() {
    let loginId = document.querySelector('.loginId').value
    let loginPw = document.querySelector('.loginPw').value

    if (loginId == '' || loginPw == '') {
        alert("로그인 시 아이디와 비밀번호는 필수 입력사항입니다.")
        return
    }

    let members = JSON.parse(localStorage.getItem( 'memberList' ))
    if (members == null){return}
    
    for(let i = 0; i <= members.length - 1; i++){
        if (members[i].id == loginId & members[i].pw == loginPw){
            alert("로그인 성공.")
            return
        }
    }
    alert("동일한 회원정보가 없습니다. 로그인 실패.")
}
