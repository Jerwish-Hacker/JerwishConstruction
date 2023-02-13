let color
window.addEventListener("load", startup, false);
let r = document.querySelector(':root');  
let rs = getComputedStyle(r);

function startup() {
    color = document.querySelector("#color");        
    color.addEventListener("input", updateFirst, false);
    color.addEventListener("change", updateAll, false);        
  }


function updateFirst(event) {  
  r.style.setProperty('--banner-color',event.target.value);  
}
  
function updateAll(event) {    
    r.style.setProperty('--banner-color',event.target.value);    
}
