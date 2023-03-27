const header= document.querySelector('.header')
console.log(header)
const scroll=()=>{
    
 if(window.scrollY>0){
    header.classList.add('scrolled');
 }
 else{
    header.classList.remove('scrolled');

 }
}
document.addEventListener('scroll',scroll)