// id, pw인풋창에 포커스인 했을 때 값이 있다면 ?
// 1. 인풋에 padding top 12px; 변화
// 2. .login-text 가 포지션 이동 top :0; font-size: 6px;
// 그밖에 경우 (인풋창에 값이 없다면) ?
let id = $("#id");
let pw = $("#password");
let pwtext = $(".password-wran");

id.on("input", function(){
  if(id.val()){
    id.css("padding-top", "12px");
    $(".login-text-id").css("top", "0");
    $(".login-text-id").css("font-size", "6px");
  } else {
    id.css("padding-top", "0px");
    $(".login-text-id").css("top", "7px");
    $(".login-text-id").css("font-size", "12px");
  }
});

pw.on("input", function(){
  if(pw.val()){
    pw.css("padding-top", "12px");
    $(".login-text-pw").css("top", "0");
    $(".login-text-pw").css("font-size", "6px");
    pwtext.addClass('on');
  } else {
    pw.css("padding-top", "0px");
    $(".login-text-pw").css("top", "7px");
    $(".login-text-pw").css("font-size", "12px");
    pwtext.css("display", "none");
  }
});

// .password-wran 을 클릭했을 때 
// val이 있다면?
// 1. pw인풋의 비밀번호가 보이기
// 2. .password-wran 텍스트 변경-> "숨기기"
// 만약 .password-wran을 다시 눌렀을 때 toggle.

pwtext.on("click", function(){
  if(pw.val()){
    pwtext.html("숨기기");
  } else {
    pwtext.css("display", "none");
  }
});