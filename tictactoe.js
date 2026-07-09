/*
3x3 보드를 임의의 1차원 배열로 표현한다(이때, 사용할 인덱스는 0 ~ 8)

[보드 번호]
1   2   3
4   5   6
7   8   9
플레이어 1, 플레이어 2가 번갈아가며 원하는 인덱스에 prompt를 통해 넣는다. -> 이 단계를 총 9번 반복

총 9번 반복 후 보드가 모두 채워져 있을 것이다.(배열이 모두 채워져 있음)

칸이 모두 채워진 보드를 확인하여 한 줄이 만들어진 형태인지 확인한다.

이때, O 또는 X가 인덱스 0,1,2 / 3,4,5 / 6,7,8 / 0,3,6 / 1,3,7 / 2,5,8 / 0,4,8 / 2,4,6 에 동시에 존재할 경우 해당 마커를 사용하는 플레이어는 승리한다.
*/

let arr = [" "," "," "," "," "," "," "," "," "]

let choice1 = Number(prompt("1. 틱택토 보드 번호 입력(1~9)"))
arr[choice1 - 1] = "X"
// console.log(choice1)
// console.log(arr[0])
// console.log(arr)

let choice2 = Number(prompt("2. 틱택토 보드 번호 입력(1~9)"))
arr[choice2 - 1] = "O"

let choice3 = Number(prompt("3. 틱택토 보드 번호 입력(1~9)"))
arr[choice3 - 1] = "X"

let choice4 = Number(prompt("1. 틱택토 보드 번호 입력(1~9)"))
arr[choice4 - 1] = "O"

let choice5 = Number(prompt("5. 틱택토 보드 번호 입력(1~9)"))
arr[choice5 - 1] = "X"

let choice6 = Number(prompt("6. 틱택토 보드 번호 입력(1~9)"))
arr[choice6 - 1] = "O"

let choice7 = Number(prompt("7. 틱택토 보드 번호 입력(1~9)"))
arr[choice7 - 1] = "X"

let choice8 = Number(prompt("8. 틱택토 보드 번호 입력(1~9)"))
arr[choice8 - 1] = "O"

let choice9 = Number(prompt("1. 틱택토 보드 번호 입력(1~9)"))
arr[choice9 - 1] = "X"

console.log(arr)

console.log(arr[0], arr[1], arr[2])
console.log(arr[3], arr[4], arr[5])
console.log(arr[6], arr[7], arr[8])

if (arr[0] == "X" & arr[1] == "X" & arr[2] == "X") {
    //O 또는 X가 인덱스 0,1,2 / 3,4,5 / 6,7,8 / 0,3,6 / 1,3,7 / 2,5,8 / 0,4,8 / 2,4,6 에 동시에 존재할 경우 해당 마커를 사용하는 플레이어는 승리한다.
    console.log("X 플레이어의 승리")
} else if (arr[3] == "X" & arr[4] == "X" & arr[5] == "X") {
    console.log("X 플레이어의 승리")
} else if (arr[6] == "X" & arr[7] == "X" & arr[8] == "X") {
    console.log("X 플레이어의 승리")
} else if (arr[0] == "X" & arr[3] == "X" & arr[6] == "X") {
    console.log("X 플레이어의 승리")
} else if (arr[1] == "X" & arr[3] == "X" & arr[7] == "X") {
    console.log("X 플레이어의 승리")
} else if (arr[2] == "X" & arr[5] == "X" & arr[8] == "X") {
    console.log("X 플레이어의 승리")
} else if (arr[0] == "X" & arr[4] == "X" & arr[8] == "X") {
    console.log("X 플레이어의 승리")
} else if (arr[2] == "X" & arr[4] == "X" & arr[6] == "X") {
    console.log("X 플레이어의 승리")
} 

// 나머지 인덱스 돌고 이후 'O' 버전으로 체크