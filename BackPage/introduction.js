function toggleContent() {
    var card = document.getElementById("card");
    var content = document.getElementById("content");


    if (card.classList.contains("hide")) {
        card.classList.remove("hide");
        content.classList.add("hide");
        document.title = "預告函";
   
    } else {
        card.classList.add("hide");
        content.classList.remove("hide");
        document.title = "什麼是釣魚網站？";
    }
}

function showAnswer(num){
    event.stopPropagation();

    // 先隱藏所有答案
    let allAnswers = document.querySelectorAll('.answer');
    allAnswers.forEach(function(answer) {
        answer.innerHTML = ''; // 清空所有答案
    });

    let answer = "";
    let answerElement = document.getElementById("answer" + num); // 根據按鈕對應的答案區域
    switch(num){
        case 1:
            answer = "1. 個人資料外洩<br>2. 金融損失<br>3. 帳號被盜<br>4. 信用評分受損<br>5. 法律責任<br>6. 網路安全風險<br>";
            break;
        case 2:
            answer = "1. 網址不正確或有拼寫錯誤<br>2. 網站使用不安全的連接(HTTP而非HTTPS)<br>3. 網站內容不一致或有語法錯誤<br>4. 要求提供敏感資訊(如密碼、信用卡號碼)<br>5. 網站設計與合法網站相似但有細微差異<br>6. 網站上有不明的廣告或彈出視窗<br>";
            break;
        case 3:
            answer = "1. 網路釣魚(Phishing)<br>2. 魚叉式釣魚(Spear Phishing)<br>3. 網頁仿冒(Web Spoofing)<br>4. 社交工程學(Social Engineering)<br>";
        break;
        case 4:
            answer = "1. 使用安全的網路連接<br>2. 不隨意點擊不明連結<br>3. 使用防毒軟體<br>4. 定期更改密碼<br>5. 開啟雙重驗證<br>6. 使用密碼管理器<br>";
        break;
    }
    answerElement.innerHTML = answer; // 將答案填入對應的區域
}
