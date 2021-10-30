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
    morseletters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9"," ","\n",".",",","?","!","-","/","@","(",")","'","_","~","`","|","√","π","÷","×","¶","∆","£","€","¢","¥","^","°","=","{","}","№","%","©","®","™","✓","[","]","<",">","#","$","&","+","*",":",";","Ω","Π","μ","§","←","↑","→","↓","′","″","∞","≠","≈","‰","℅","⟩","⟨","«","»","≤","≥","₱","±","★","†","‡","„","“","”","‚","‘","’","‹","›","¡","¿","‽","١","٢","٣","٤","٥","٦","٧","٨","٩","٠","ض","ص","ث","ق","ف","غ","ع","ه","خ","ح","ج","ش","س","ي","ب","ل","ا","ت","ن","م","ك","ط","ذ","ء","ؤ","ر","ى","ة","و","ز","ظ","د","ڨ","ڢ","ڤ","ڥ","ه‍","چ","ڜ","ئ","پ","لإ","لآ","لأ","ٱ","إ","أ","ژ","آ","گ","ک","،","؟"],
        morsesymbols=[".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--..","-----",".----","..---","...--","....-",".....","-....","--...","---..","----.","/","\n","","--..--","..--..","-.-.--","","-..-.",".--.-.","-.--.","-.--.-",".-..-.","..--.-","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];
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