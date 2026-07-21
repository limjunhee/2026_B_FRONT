function addList(){
    let date = document.querySelector('#date').value
    let content = document.querySelector('#content').value
    let price = document.querySelector('#price').value
    let table = document.querySelector('#tableMain')

    table.innerHTML += `<tr><td>${date}</td> <td>${content}</td><td>${price}</td></tr>`
}