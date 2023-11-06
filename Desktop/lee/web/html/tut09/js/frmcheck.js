let userid = document.querySelector(".userid");
let passwd = document.querySelector(".passwd");
let button = document.querySelector("button");
//      페이지 로딩 후 실행되는 자바 스크립트
window.onload = function () {
  userid.focus();
};

//  내부함수 사용법
// button.onclick('click') = function () {

// alert("ok")
// }
// button.onclick = () => {
//     alert("ok");
// }

button.addEventListener("click", function (e) {
  e.preventDefault();
  // 이벤트 발생시 동작 처리
  if (userid.value == "") {
    alert("아이디를 입력하세요!");
    userid.focus();
    return false;
  }
});
/*button.addEventListener('click', (e) => {
    e.preventDefault();
    alert("아이디를 입력하세요!");
});*/
