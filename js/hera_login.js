const keyBtn = document.querySelector(".view_keyboard_btn");
const keyImg = document.querySelector(".key_img");
const keyText = document.querySelector(".key_text");
const icon = document.querySelector(".icon");
const signupBtn = document.querySelector(".signup_btn")
const signupBtnEm = document.querySelector(".signup_btn_em")

// 뒤로가기 함수
function back() {
  window.history.back();
}

// PC 키보드 열기 클릭이벤트 함수
function keyBtnClick() {
  if (keyImg.classList.contains("hidden")) {
    keyImg.classList.remove("hidden");
    keyText.textContent = "PC 키보드 닫기";  // 버튼 텍스트 변경
    icon.style.transform = "rotate(180deg)" // 아이콘 180도 회전

  } else {
    keyImg.classList.add("hidden");
    keyText.textContent = "PC 키보드 열기";  // 버튼 텍스트 변경
    icon.style.transform = "rotate(0deg)" // 아이콘 0도 회전 (기존상태)
  }
}

// 회원가입 버튼 클릭 시 회원가입 텍스트 outline 스타일 지정
signupBtn.addEventListener("focus", function(){
  signupBtnEm.style.outline = "3px dotted blue"
})

// 회원가입 버튼 제외 아무대나 클릭 시 outline 스타일 삭제
signupBtn.addEventListener("blur", function(){
  signupBtnEm.style.outline = "none"
})

// PC 키보드 열기 클릭이벤트 함수 출력
keyBtn.addEventListener("click", keyBtnClick);


// id 입력 시, 삭제버튼 추가 및 삭제
const loginId = document.getElementById("login_id");
const loginIdDel = document.getElementById("login_id_del")
const loginBtn = document.querySelector(".login_btn")


loginId.addEventListener("input", function() {
  if (loginId.value.length > 0) {
    loginIdDel.style.display = "block";
  } else {
    loginIdDel.style.display = "none";
  }
  updateBtn();
})

function clearId() {
  loginId.value = ""
  loginIdDel.style.display = "none"
}

// pw 입력 시, 삭제버튼 추가 및 삭제
const loginPw = document.getElementById("login_pw");
const loginPwDel = document.getElementById("login_pw_del")

loginPw.addEventListener("input", function(){
  if (loginPw.value.length > 0) {
    loginPwDel.style.display = "block";
  } else {
    loginPwDel.style.display = "none";
  }
  updateBtn();
})

function clearPw() {
  loginPw.value = ""
  loginPwDel.style.display = "none"
}

// id,pw 값이 둘다 비어있지 않을 때, 버튼의 색상 변경
function updateBtn () {
  const idValue = loginId.value.trim();
  const pwValue = loginPw.value.trim();

  if (idValue !== '' && pwValue !== '') {
    loginBtn.disabled = true;
    loginBtn.style.backgroundColor = '#5c95f0';
    loginBtn.style.color = '#fff'
  } else {
    loginBtn.disabled = false;
    loginBtn.style.backgroundColor = '#f0f0f0';
    loginBtn.style.color = '#c6c6c6'
  }
}