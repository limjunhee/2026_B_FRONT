let finalFee = 0
let startHour = Number(prompt("입차 시각이 몇 시인지 입력 22"))
let startMinute = Number(prompt("입차 시각이 몇 분인지 입력 10"))

let endHour = Number(prompt("출차 시각이 몇 시인지 입력 23"))
let endMinute = Number(prompt("출차 시각이 몇 분인지 입력 05"))

let totalminute = ((endHour * 60 + endMinute) - (startHour * 60 + startMinute))
console.log(`총 이용시간: ${totalminute}`)

totalminute -= 30
finalFee += 2000 //30분까지 기본요금 2000원
console.log(`30분 차감 후 남은 이용시간: ${totalminute}`)

let add500WonCount = parseInt(totalminute / 10)
add500WonCount = totalminute % 10 > 0 ? ++add500WonCount : add500WonCount
console.log(totalminute % 10)
console.log(add500WonCount)

finalFee += add500WonCount * 500
console.log(`최대 금액 제한 전 금액 ${finalFee}`)
finalFee = finalFee > 20000 ? 20000 : finalFee
console.log(`최대 금액 제한 후 금액 ${finalFee}`)

finalFee = startHour >= 22 ? finalFee - finalFee * 0.2 : finalFee
console.log(`심야요금 할인 여부 확인 후 최종이용금액: ${finalFee}`)
