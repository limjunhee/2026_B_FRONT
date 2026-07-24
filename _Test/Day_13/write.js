function AddBoard(){
    let inputTitle = document.querySelector('#inputTitle').value
    let inputContent = document.querySelector('#inputContent').value
    let inputPw = document.querySelector('#inputPw').value

    let boardList = localStorage.getItem( 'boardList' ) // 로컬 스토리지 안 키가 'boardList'인 값 가져오기
    if( boardList == null){
        boardList = []
    } else {
        boardList = JSON.parse( boardList ) // 문자열인 상태에서 배열 객체로 가져와서 저장
    }

    let object = { title: inputTitle, content : inputContent, pw: inputPw } // 입력값 객체화
    // console.log(object)

    object.no = boardList.length == 0 ? 1 : boardList[boardList.length - 1].no + 1 // 객체에 no(게시물번호) 추가
    // console.log(object)
    
    boardList.push( object ) // 배열에 객체 저장
    
    localStorage.setItem('boardList', JSON.stringify(boardList)) // 배열 저장
    
    location.href = 'list.html'
}