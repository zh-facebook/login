let submitBtn = document.querySelector(".submit");
let showpasswd= document.getElementById("showpasswd");
let captchaText="";

function Fsubmit(){
  let username = document.getElementById("name").value;
  let password = document.getElementById("passwd").value;
  let CAPTCHA = document.getElementById("CAPTCHA_input").value; 
  if(username=="" || password==""){
    alert("輸入框不可為空!!")
  }
  else if (username=="admin"){
    if(password=="1234"){
      if(CAPTCHA.toUpperCase()==captchaText)
        location.href="../loading/loading.html";
      else{
        alert("驗證碼錯誤!!");
        generateCaptcha();  
      }
    }
    else{ 
      alert("密碼錯誤!!")
      generateCaptcha();
    }
  }
  else{
    alert("查無此人!!")
    generateCaptcha();
  }
}
submitBtn.addEventListener("click", Fsubmit);

function Fshowpasswd(){
  let password = document.getElementById("passwd");
  if(password.type === "password") {
    password.type = "text";
    this.textContent = "😮"; 
  } else {
    password.type = "password";
    this.textContent = "🫣";
  }
}
showpasswd.addEventListener("click", Fshowpasswd);

function generateCaptcha(){
  const canvas = document.getElementById("captchaCanvas");
  const ctx = canvas.getContext("2d");

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "rgb(208, 232, 255)"; //設定背景顏色
  ctx.fillRect(0, 0, canvas.width, canvas.height);//填入顏色
  captchaText = Math.random().toString(36).substring(2, 6).toUpperCase();
  ctx.font = "80px  Arial";
  ctx.fillStyle = "rgb(27, 91, 151)"; 
  ctx.fillText(captchaText,40,95);
}
window.onload = generateCaptcha;