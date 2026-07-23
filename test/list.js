printBoard()
function printBoard(){
    let boardList = localStorage.getItem('boardList')
    if (boardList == null) {
        boardList = []
    } else {
        boardList = JSON.parse(boardList)
    }

    let html = ''

    for(let i = 0; i <= boardList.length - 1; i++){
        let object = boardList[i]
        html += `<tr><td>${object.no}</td><td><a href = 'view.html?no=${object.no}'>${object.title}</a></td></tr>`    
    }

    document.querySelector('#mainTbody').innerHTML = html
}