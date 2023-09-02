var word = ["safa", "mahemmed", "ammar", "ali"];
var try_ = 6;
var hangmanImage = 0;
const startGame = document.querySelector("#start-game");
// اختيار اسم عشوائي
var randomName = word[Math.floor(Math.random() * word.length)];
var displayedWord = "";
var blank = "";

// document.getElementById("name").innerHTML = randomName;

function initializeGame() {
    displayedWord = "_".repeat(randomName.length); // تحويل الكلمة إلى فراغات
    document.getElementById("blank").innerHTML = displayedWord;
}

document.getElementById("blank").innerHTML = blank;

function select(key) {

    if (try_ == 0) {
        alert("number try are finish");
        return;
    }
    if (randomName.includes(key)) {
        let wordArray = displayedWord.split("");
        for (let i = 0; i < randomName.length; i++) {
            if (randomName[i] === key) {
                wordArray[i] = key; // استبدال الفراغ بالحرف الصحيح
            }
        }
        displayedWord = wordArray.join(""); // تحويل المصفوفة إلى سلسلة نصية
        document.getElementById("blank").innerHTML = displayedWord;

        if (!displayedWord.includes("_")) {
            alert("تهانينا! لقد أكملت الكلمة بنجاح.");
        }
    }
    else {
        try_--;
        alert("الحرف غير صحيح! لديك " + try_ + " محاولات متبقية.");
        hangmanImage++;
        document.querySelector("#hangman").src = "images/" + hangmanImage + ".png";


    }

}


function resetAll() {
    try_ = 0;
    alert("Play Again");
    document.querySelector("#hangman").src = "images/0.png";
    Resettry();
}
function Resettry() {
    try_ = 6;
    hangmanImage = 0;
}
initializeGame();
