let _name = prompt("이름을 입력하세요")
let _exercise = prompt("오늘 한 운동은 무엇인가요?")
let _time = prompt("오늘 운동을 총 몇분 하셨나요?")
let _calrorie = _time * 7

console.log("[오늘의 운동 기록]")
console.log("이름")
console.log(_name)
console.log("운동 종류")
console.log(_exercise)
console.log("운동 시간")
console.log(_time)
console.log("소모 칼로리")
console.log(_calrorie)