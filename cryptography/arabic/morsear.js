function fadeIn(elem){
    "use strict";
    elem.style.display="block";
    elem.style.opacity=0;
    var i=0;
    var inte = setInterval(function(){
        elem.style.opacity= Number(elem.style.opacity)+0.3;
        if(i>=1.2){
            clearInterval(inte);
        }
        else{
            i++;
        }
    },100);
}
function hide(elem){
    elem.style.display="none";
}
window.onload=function(){
    "use strict";
    var  decryptBtn=document.getElementById("decryptBtn"),
    encryptBtn=document.getElementById("encryptBtn"),
    input=document.getElementById("input"),
    morse=document.getElementById("morse"),
    output=document.getElementById("output"),
    morseletters = ["ا","ب","ث","د","ء","ف","غ","ح","ي","ج","ك","ل","م","ن","خ","ع","ق","ر","س","ت","ط","ض","و","ص","ظ","ذ","ز","ش","ه","ى","٠","١","٢","٣","٤","٥","٦","٧","٨","٩"," ","\n",".","،","؟","!","-","/","@","(",")","'","","~","`","|","√","π","÷","×","¶","∆","£","€","¢","¥","^","°","=","{","}","№","%","©","®","™","✓","[","]","<",">","#","$","&","+","*",":",";","Ω","Π","μ","§","←","↑","→","↓","′","″","∞","≠","≈","‰","℅","⟩","⟨","«","»","≤","≥","₱","±","★","†","‡","„","“","”","‚","‘","’","‹","›","¡","¿","‽","0","1","2","3","4","5","6","7","8","9","q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","m","n","b","v","c","x","z","ē","ê","é","è","ë","ū","ü","ú","û","ù","ì","ï","í","î","ī","õ","ō","œ","ø","ö","ò","ó","ô","æ","ã","å","ā","à","á","â","ä","ß","ç","ñ","?",","], 
        morsesymbols=[".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".-.-","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--..","---.","----","..-..",".--.","-----",".----","..---","...--","....-",".....","-....","--...","---..","----.","/","\n","","--..--","..--..","-.-.--","","-..-.",".--.-.","-.--.","-.--.-",".-..-.","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];
    encryptBtn.onclick=function(){
       var txt=input.value.trim().toUpperCase().split(""),
       code="";
       
       for(var i in txt){
           code+=morsesymbols[morseletters.indexOf(txt[i])]+" ";
       }
       output.innerText=code.replace("undefined","");
       fadeIn(output);
    }
    decryptBtn.onclick=function(){
        var code=input.value.trim().replace(/[−‒–—―]/g, '-').replace(/[﹒．·⋅·•]/g, '.').split(" "),
        txt="";
        
        for(var i in code){
            txt+=morseletters[morsesymbols.indexOf(code[i])];
        }
        output.innerText=txt.replace("undefined","");
        fadeIn(output);
    }
}