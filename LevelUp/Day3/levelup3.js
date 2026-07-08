let startHour = Number(prompt("출입 시각이 몇 시인지 입력"))
let startMinute = Number(prompt("출입 시각이 몇 분인지 입력"))

let endHour = Number(prompt("퇴장 시각이 몇 시인지 입력"))
let endMinute = Number(prompt("퇴장 시각이 몇 분인지 입력"))

let totalminute = ((endHour * 60 + endMinute) - (startHour * 60 + startMinute))

console.log(totalminute)