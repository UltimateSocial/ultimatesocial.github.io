var letters = [
   "ا",
   "ب",
   "ت",
   "ث",
   "ج",
   "ح",
   "خ",
   "د",
   "ذ",
   "ر",
   "ز",
   "س",
   "ش",
   "ص",
   "ض",
   "ط",
   "ظ",
   "ع",
   "غ",
   "ف",
   "ق",
   "ك",
   "ل",
   "م",
   "ن",
   "ه",
   "و",
   "ي",
];
var option = document.getElementById("algorithm-option");
var inputField = document.getElementById("input");
var shiftInputDiv = document.getElementById("shift-input-div");
var shiftInputField = document.getElementById("shift-input");
var output = document.getElementById("output");
var encryptBtn = document.getElementById("encryptBtn");
var decryptBtn = document.getElementById("decryptBtn");

// Mozilla Reload Bug Fix
option.value = "caeser";

encryptBtn.addEventListener("click", () => {
   var data = inputField.value;
   if (option.value == "atbash") {
      if (!inputField.value.replace(/\s/g, "").length) {
         alert("يرجى تعبئة الحقول المطلوبة");
      } else {
         crypt(data, applyAtbash);
      }
   } else if (option.value == "caeser") {
      if (
         !inputField.value.replace(/\s/g, "").length ||
         !shiftInputField.value.replace(/\s/g, "").length
      ) {
         alert("يرجى تعبئة الحقول المطلوبة");
      } else {
         crypt(data, applyCaeserEncrypt);
      }
   } else if (option.value == "morse") {
      if (
         !inputField.value.replace(/\s/g, "").length
      ) {
         alert("يرجى تعبئة الحقول المطلوبة");
      } else {
         crypt(data, applyMorse);
      }
   } else {
      alert("*يرجى تحديد خوارزمية من الخيارات المتاحة.");
   }
});

decryptBtn.addEventListener("click", () => {
   var data = inputField.value;
   if (option.value == "atbash") {
      if (!inputField.value.replace(/\s/g, "").length) {
         alert("يرجى تعبئة الحقول المطلوبة");
      } else {
         crypt(data, applyAtbash);
      }
   } else if (option.value == "caeser") {
      if (
         !inputField.value.replace(/\s/g, "").length ||
         !shiftInputField.value.replace(/\s/g, "").length
      ) {
         alert("يرجى تعبئة الحقول المطلوبة");
      } else {
         crypt(data, applyCaeserDecrypt);
      }
   } else if (option.value == "morse") {
      if (
         !inputField.value.replace(/\s/g, "").length
      ) {
         alert("يرجى تعبئة الحقول المطلوبة");
      } else {
         crypt(data, applyMorse);
      }
   } else {
      alert("*يرجى تحديد خوارزمية من الخيارات المتاحة.");
   }
});

option.addEventListener("change", e => {
   var selectedOption = option.value;
   if (selectedOption === "caeser") {
      shiftInputDiv.style.display = "block";
   } else if (selectedOption === "atbash") {
      shiftInputDiv.style.display = "none";
   } else if (selectedOption === "morse") {
      shiftInputDiv.style.display = "none";
   }
});

// Atbash Algorithm Method
function applyAtbash(data) {
   data = data.toUpperCase();
   data = data.split("");
   var newData = data
      .map(char => {
         if (char == " ") {
            return " ";
         } else {
            var index = letters.indexOf(char);
            var newIndex = Math.abs(index - 27);
            return letters[newIndex];
         }
      })
      .join("");
   return newData;
}

// Caeser Algorithm Encryption Method
function applyCaeserEncrypt(data) {
   data = data.toUpperCase();
   data = data.split("");
   var newData = data
      .map(char => {
         if (char == " ") {
            return " ";
         } else {
            var index = letters.indexOf(char);
            var newIndex =
               Math.abs(index + parseInt(shiftInputField.value)) % 28;
            return letters[newIndex];
         }
      })
      .join("");
   return newData;
}

// Caeser Algorithm Decryption Method
function applyCaeserDecrypt(data) {
   data = data.toUpperCase();
   data = data.split("");
   var newData = data
      .map(char => {
         if (char == " ") {
            return " ";
         } else {
            var index = letters.indexOf(char);
            var newIndex =
               Math.abs(index - parseInt(shiftInputField.value)) % 28;
            return letters[newIndex];
         }
      })
      .join("");
   return newData;
}

inputField.addEventListener("keypress", e => {
   var key = e.keyCode || e.charCode;
   if (
      (key >= 65 && key <= 90) ||
      (key >= 97 && key <= 122) ||
      key == 8 ||
      key == 32
   ) {
      return true;
   } else {
      alert("يمكن أن تحتوي البيانات على أحرف أبجدية فقط");
      e.preventDefault();
   }
});

shiftInputField.addEventListener("keypress", e => {
   var key = e.keyCode || e.charCode;
   if (key >= 48 && key <= 57) {
      return true;
   } else {
      alert("من المفترض أن تكون قيمة التحول رقمًا");
      e.preventDefault();
   }
});

inputField.addEventListener("input", () => {
   output.innerHTML = inputField.value;
});

function crypt(data, cb) {
   output.innerHTML = "";
   output.scrollIntoView();
   var result = cb(data).split("");
   var rate = 50;
   var time = data.length * rate;
   //			var temp = 0;
   var randomLetters = [];
   var key = setInterval(() => {
      for (var i = 0; i < data.length; i++) {
         randomLetters[i] = letters[Math.floor(Math.random() * Math.floor(28))];
      }

      output.innerHTML = "";

      randomLetters.forEach(letter => {
         output.innerHTML += letter;
      });

      //				var tempOutput = output.innerHTML.split('');
      //
      //				temp++;
      //
      //				for (var i = 0; i < temp; i++) {
      //					tempOutput[i] = result[i];
      //				}
      //
      //				output.innerHTML = tempOutput.join('');
      //
      //				console.log(temp);
   }, rate);

   setTimeout(() => {
      clearInterval(key);
      output.innerHTML = result.join("");
   }, time);}

// Morse Algorithm Method
function applyMorse(data) {
   data = data.toUpperCase();
   data = data.split("");
   var newData = data
      .map(char => {
         if (char == " ") {
            return " ";
         } else {
            var index = morseletters.indexOf(char);
            var newIndex = Math.abs(index);
            return morseletters[newIndex];
         }
      })
      .join("");
   return newData;
}