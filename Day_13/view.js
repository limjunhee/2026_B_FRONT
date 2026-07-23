// [1] 쿼리스트링에서 특정한 게시물번호의 정보 조회
getBoard();

function getBoard(){
    // 1. url(웹주소) 상 웹주소 가져오기
    const url = new URLSearchParams( location.search )
    console.log(url)
    
    // 웹주소에서 선택된 게시물 번호(쿼리스트링값) 가져오기
    const selectNo = url.get('no')
    console.log(selectNo)

    // 로컬 스토리지에서 배열 불러오기
    let boardList = localStorage.getItem('boardList')
    if(boardList == null){boardList = []}
    else{boardList = JSON.parse(boardList); }

    // 선택된 게시물번호와 일치하는 게시물 탐색
    for(let index = 0; index <= boardList.length - 1; index++){
        const obj = boardList[index];
        if( obj.no == selectNo){ //만약 내가 선택한 게시물번호와 일치하다면
            
            document.querySelector('#title').innerHTML = obj.title
            document.querySelector('#content').innerHTML = obj.content
            return;
        }
    }
}


//[2] 삭제 함수
function boardDelete(){
    const url = new URLSearchParams( location.search )

    const selectNo = url.get('no')

    let boardList = localStorage.getItem('boardList')
    if (boardList == null) { boardList = [] }
    else { boardList = JSON.parse(boardList); }

    for (let i = 0; i < boardList.length; i++){
        const obj = boardList[i]
        if(obj.no == selectNo){ //만약에 선택된 게시물번호를 찾았으면
            const confirm = prompt('비밀번호 입력')
            if(obj.pwd == confirm){ //비밀번호 일치
                boardList.splice(i, 1) // 객체 1개 삭제
                localStorage.setItem('boardList', JSON.stringify(boardList));
                alert('삭제 성공')
                location.href = 'list.html'; // 성공했으니 list.html 이동
            } else{
                alert('비밀번호가 일치하지 않습니다.')
            }
        }
    }
}