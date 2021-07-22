
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault(); // 브라우저 기본동작막기 (새로고침)
    loginForm.classList.add(HIDDEN_CLASSNAME); // form  숨켜주기
    const username = loginInput.value; // 변수저장 인풋값
    localStorage.setItem(USERNAME_KEY, username); // 로컬스토리지에 저장
    paintGreetings(username); // 함수를 호출 

}

function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`; // 텍스트 추가
    greeting.classList.remove(HIDDEN_CLASSNAME);

}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}