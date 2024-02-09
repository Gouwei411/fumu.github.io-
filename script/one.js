const shuzi = document.querySelector('.shuzi');
let shuzu = [3, 2, 1];
let i = 0;

let timezhuzi = setInterval(function() {
    if (i < shuzu.length) {
        shuzi.innerHTML = shuzu[i];
        i++;
    } else {
        shuzi.style.opacity=0;
        clearInterval(timezhuzi);
    }
}, 1000); 


document.addEventListener('DOMContentLoaded', function() {  

    function startjdt() {  
        const jdt = document.querySelector("#jdt"); 
        const bfb = document.querySelector("#bfb"); 
        let i = 0;  
        jdt.style.opacity=1;
        bfb.style.opacity=1;
        const progressInterval = setInterval(() => {  
            if (i >= 100) {  
                clearInterval(progressInterval);  
                window.location.href = "./yhuo.html"; 
            } else { 
                 
                jdt.value = i; 
                bfb.textContent = i + "%"; 
                i++; 
            }  
        }, 80);
    }  

    setTimeout(startjdt, 5000);  
});  