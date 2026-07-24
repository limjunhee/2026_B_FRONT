printBoard()

function printBoard(){
    let url = new URLSearchParams( location.search )

    let no = url.get( 'no' )

    let boardList = localStorage.getItem('boardList')
    if (boardList == null) {
        boardList = []
    } else {
        boardList = JSON.parse(boardList)
    }

    for (let i = 0; i <= boardList.length - 1; i++){
        if(no == boardList[i].no){
            document.querySelector('#viewTitle').innerHTML = boardList[i].title
            document.querySelector('#viewContent').innerHTML = boardList[i].content
        }
    }
}

function deleteBoard(){
    let url = new URLSearchParams(location.search)

    let no = url.get('no')

    let boardList = localStorage.getItem('boardList')
    if (boardList == null) {
        boardList = []
    } else {
        boardList = JSON.parse(boardList)
    }

    let object;
    for(let i = 0; i <= boardList.length - 1; i++){

        if(no == boardList[i].no){
            object = boardList[i]
        }
    }
    console.log(object)
     
    let pw = prompt('비밀번호를 입력하세요')
    if (pw != object.pw) { alert('비밀번호가 일치하지 않습니다.'); return;}

    for (let i = 0; i <= boardList.length - 1; i++) {
        let object = boardList[i]
        if (no == boardList[i].no) {
            boardList.splice(i, 1)
            localStorage.setItem('boardList', JSON.stringify(boardList))
            alert('게시물이 삭제되었습니다.')
            location.href = 'list.html'
            return;
        }
    }
    
}