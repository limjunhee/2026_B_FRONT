function AddBoard(){
    let inputTitle = document.querySelector('#inputTitle').value
    let inputContent = document.querySelector('#inputContent').value
    let inputPw = document.querySelector('#inputPw').value

    let boardList = localStorage.getItem( 'boardList' )
    if( boardList == null){
        boardList = []
    } else {
        boardList = JSON.parse( boardList )
    }

    let object = { title: inputTitle, content : inputContent, pw: inputPw }
    // console.log(object)

    object.no = boardList.length == 0 ? 1 : boardList[boardList.length - 1].no + 1
    // console.log(object)
    
    boardList.push( object ) // 배열에 객체 저장

    localStorage.setItem('boardList', JSON.stringify(boardList)) // 배열 저장
    
    location.href = 'list.html'
}