const comPic = document.querySelector(".comPic");
const myPicR = document.querySelector(".myPicR");
const myPicS = document.querySelector(".myPicS");
const myPicP = document.querySelector(".myPicP");
const forMain2 = document.querySelector(".forMain2");

const RSP = ["묵", "찌", "빠"];
const caseR = { 묵: "비겼다", 찌: "이겼다", 빠: "졌다" };
const caseS = { 묵: "졌다", 찌: "비겼다", 빠: "이겼다" };
const caseP = { 묵: "이겼다", 찌: "졌다", 빠: "비겼다" };

function randomPic() {
  const randomNum = Math.floor(Math.random() * 3);
  const randomRSP = RSP[randomNum];
  return randomRSP;
}

function mainFunction(pic) {
  const randomRSP = randomPic();
  comPic.innerText = randomRSP;
  if (pic == "묵") {
    const result = caseR[randomRSP];
    forMain2.innerText = `이번판은 ${result}!`;
  } else if (pic == "찌") {
    const result = caseS[randomRSP];
    forMain2.innerText = `이번판은 ${result}!`;
  } else {
    const result = caseP[randomRSP];
    forMain2.innerText = `이번판은 ${result}!`;
  }
}

myPicR.addEventListener("click", function () {
  mainFunction("묵");
});
myPicS.addEventListener("click", function () {
  mainFunction("찌");
});
myPicP.addEventListener("click", function () {
  mainFunction("빠");
});

// 1. 메인함수로 내가 선택한 묵찌빠를 보낸다
// 2. 랜덤RSP로 퓨터가 선택한 묵찌빠를 가져온다
// 3. if문을 통해서 승패결과를 가른다