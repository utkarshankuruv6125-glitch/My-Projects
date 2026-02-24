const loginpopup=document.querySelector('.loginpopup');
const loginbtn=document.getElementById('loginbtn');
const closebtn=document.getElementById('closebtn');
const registerpopup=document.querySelector('.registerpopup');
const registerbtn=document.getElementById('registerbtn');
const closebtn2=document.getElementById('closebtn2');
const loginbtn2=document.getElementById('loginbtn2');
loginbtn.addEventListener('click',()=>{
    loginpopup.classList.add('active');
})
closebtn.addEventListener('click',()=>{
    loginpopup.classList.remove('active');
})
registerbtn.addEventListener('click',()=>{
    registerpopup.classList.add('active');
    loginpopup.classList.remove('active');
})
closebtn2.addEventListener('click',()=>{
    registerpopup.classList.remove('active');
})
loginbtn2.addEventListener('click',()=>{
    loginpopup.classList.add('active');
    registerpopup.classList.remove('active');
})