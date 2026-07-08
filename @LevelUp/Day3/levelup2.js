let inputSeconds = Number(prompt("시간 입력하기 (단위: 초)"))

let hourResult = String(parseInt(inputSeconds / 3600))
let minuteResult = String(parseInt((inputSeconds % 3600) / 60))
let secondResult = String(parseInt((inputSeconds % 3600) % 60))

let hourChange = Number(hourResult) < 10 ? 0 + hourResult : hourResult
let minuteChange = Number(minuteResult) < 10 ? 0 + minuteResult : minuteResult
let secondChange = Number(secondResult) < 10 ? 0 + secondResult : secondResult

document.write(`${hourChange}:${minuteChange}:${secondChange}`)