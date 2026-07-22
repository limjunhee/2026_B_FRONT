let vacationList = [ 
{ 'vcode': 1, 'ecode': 1, 'name': '김민준', 'startDay': '2025-08-04', 'endDay': '2025-08-04', 'reason': '병원 진료' },
{ 'vcode': 2, 'ecode': 2, 'name': '이서연', 'startDay': '2025-07-21', 'endDay': '2025-07-25', 'reason': '여름 휴가' }
]

let employeeList = [ 
{ 'ecode' : 1, 'eimg' : 'https://placehold.co/100x100', 'name' : '김민준', 'dcode' : 1, 'position': '선임 개발자' } ,
{ 'ecode' : 2, 'eimg' : 'https://placehold.co/100x100', 'name' : '이서연', 'dcode' : 2, 'position': '수석 디자이너' } ,
{ 'ecode' : 3, 'eimg' : 'https://placehold.co/100x100', 'name' : '박도윤', 'dcode' : 3, 'position': '팀장' }
] // 사원 목록							


let departmentList = [
{ 'dcode': 1, 'dname': '개발팀' },
{ 'dcode': 2, 'dname': '디자인팀' },
{ 'dcode': 3, 'dname': '기획팀' }
] // 부서 목록							




// 휴가신청 ====================================================================================================
vacationPrint()

//사원 휴가신청 데이터 변경 시 업데이트 (READ)
function vacationPrint (){
    // 표시할 곳 -> 사원 휴가신청 전체 목록 카드
    let fbody = document.querySelector( '.col-right > .card.sub-section')
    let html = ' '
    for (let i = 0; i <= vacationList.length - 1; i++){
        // 뭘 표시할거냐 -> vacationList 안에 있는 거 전부 다
        html += `
                <div class="vacation-card">
                    <div class="user-name">${vacationList[i].name}</div>
                    <div class="date">${vacationList[i].startDay} ~ ${vacationList[i].endDay}</div>
                    <div class="reason">사유: ${vacationList[i].reason}</div>
                    <button type="button" class="btn-cancel" onclick = 'vacationDelete(${vacationList[i].vcode})'>신청취소</button>
                </div>
                `

    }
    fbody.innerHTML = html
}

// 사원 휴가 신청 카드에서 신청버튼 클릭 시
function vacationAdd () {
    // 1. 입력받은 값을 가져오기 ---------------------------------------------------------------------------------
    // 사원 이름
    let inputName = document.querySelector('.col-right > .card > form > .form-group > select').value
    
    if (inputName == '휴가 신청 사원을 선택하세요') {alert('사원을 선택해야 합니다.'); return;}


    // 휴가기간 시작일, 종료일
    let inputDay = document.querySelectorAll('.col-right > .card > form > .input-row > .form-group > input')
    let outputDay = []
    for(let i = 0; i <= inputDay.length - 1; i++){
        outputDay.push(inputDay[i].value) //outputDay[0] = 시작일 ~ outputDay[1] = 복귀일
    }
    if (outputDay[0] == '' || outputDay[1] == '') { alert('휴가 날짜를 설정해야 합니다.'); return; }

    //휴가사유
    let inputReason = document.querySelector('.col-right > .card > form > .form-group > input').value
    if ( inputReason == '') { alert('휴가 사유를 작성해야 합니다.'); return; }

    console.log(name, outputDay[0], outputDay[1], inputReason)

    //2. 신청사원 이름 키 가져오기(외래키: ecode) ---------------------------------------------------------------------------------
    let ecode = -1;
    for(i = 0; i <= employeeList.length - 1; i++){
        if (employeeList[i].name == inputName){ ecode = employeeList[i].ecode }
    }


    //3. 입력받은 값을 객체화하기 ---------------------------------------------------------------------------------
    let lastVcode = vacationList[vacationList.length - 1].vcode //마지막 휴가내역코드(key)
    // console.log(lastVcode)

    let newVacation = {
        'vcode': lastVcode + 1, 'ecode': ecode, 'name': inputName, 'startDay': outputDay[0], 'endDay': outputDay[1], 'reason': inputReason
    }

    console.log(newVacation)
    vacationList.push(newVacation)
    lastVcode ++ // 신청내역 식별자 1 더하기
    
    vacationPrint()
}

// 사원 휴가내역 삭제
function vacationDelete(vcode){
    console.log(vcode)
    for(let i = 0; i <= vacationList.length - 1; i++){
        if(vacationList[i].vcode == vcode){
            vacationList.splice(i,1)
            alert("휴가 내역을 삭제했습니다.")

            vacationPrint()
            return;
        }
    }
}
