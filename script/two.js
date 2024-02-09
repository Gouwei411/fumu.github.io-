let userInput = prompt("请输入你的名字:"); 
let pp =document.querySelector(".pp")
pp.innerHTML=`${userInput}`
const span = document.getElementById("sp");  
let text = `亲爱的${userInput}，新年来临之际，愿你们身体健康，万事如意。感谢你们一直以来的养育之恩，愿幸福和快乐永远伴随你们`;
let i = 0;  
let time = setInterval(function() {    
span.innerHTML += text[i];    
if (i === text.length - 1) {    
  clearInterval(time);
}  
i++; 
}, 100); 
document.addEventListener('DOMContentLoaded', function() {  
const btn = document.querySelector(".but");  
setTimeout(function() {  
  btn.style.display = "block";  
}, 5500);  
});