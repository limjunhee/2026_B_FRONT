boardPrint();
function boardPrint(){
    //1. id가 'boardTbody'인 <tdoby>에 넣을 준비
    const boardTbody = document.querySelector('#boardTbody')

    // 2. 무엇을 넣을 것인가?
    // 2-1. localstorage에서 배열 가져옴
    let boardList = localStorage.getItem('boardList')
    if(boardList == null) {boardList = []}
    else{boardList = JSON.parse(boardList)} // 객체로 파싱

    // 2-2. 배열 내 하나씩 조회(반복문)
    let html = ``
    for(let index = 0; index <= boardList.length-1; index++){
        
        const obj = boardList[index]; // obj의 현재 게시물의 정보 입력시킴

        // 2-3. 하나씩 <tr> 구성
        html += `<tr>
                <td>${obj.no}</td>
                <td><a href="view.html?no=${obj.no}"> ${obj.title}</a></td>
                </tr>`
    }

    // 3. 출력
    boardTbody.innerHTML = html;
}