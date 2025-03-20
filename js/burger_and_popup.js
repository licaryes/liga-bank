
// Меню в телефонной версии

document.querySelector('.burger').addEventListener('click', () => {


    document.querySelector(".notvis").classList.toggle('vis')

})

// Модальное окно

let popup=document.querySelector('.popup')

document.querySelector('.enter_block').addEventListener('click', () => {


    popup.classList.remove('hidden')
    document.getElementById('password').value=localStorage.getItem('password')
    document.getElementById('login').value=localStorage.getItem('login')
    document.getElementById("login").focus();

})

document.querySelector('.popup_close').addEventListener('click', () => {

    popup.classList.add('hidden')

})

window.onclick = function(e){
    if(e.target == popup){
        popup.classList.add('hidden')
    }
}

document.addEventListener('keyup',(e)=>{
    if(e.key=="Escape"){
        document.querySelector('.popup.thx').classList.add('hidden')
    }
})

document.querySelector('.show_password').addEventListener('mousedown',()=>{
    document.getElementById('password').setAttribute('type','text')
})

document.querySelector('.show_password').addEventListener('mouseup',()=>{
    document.getElementById('password').setAttribute('type','password')
})

document.querySelector('.popup form').addEventListener('submit',(e)=>{
    let login = document.getElementById("login").value
    let password = document.getElementById("password").value
    let ls=localStorage;
    if(login==""||password==""){
        alert("Форма не заполнена!")
        e.preventDefault();
    }else{
        ls.setItem('password',password)
        ls.setItem('login',login)
        popup.classList.add('hidden')
    }
})

document.querySelector('.close_thx').addEventListener('click',()=>{
    document.querySelector('.popup.thx').classList.add('hidden');
})

window.onclick = function(e){
    if(e.target == document.querySelector('.popup.thx')){
        document.querySelector('.popup.thx').classList.add('hidden')
    }
}

let acc=0

document.querySelector('.tab1').addEventListener('focus',()=>{
    document.getElementById('tab1').checked= true
})
document.querySelector('.tab2').addEventListener('focus',()=>{

    document.getElementById('tab2').checked= true
})
document.querySelector('.tab3').addEventListener('focus',()=>{
    document.getElementById('tab3').checked= true
})
document.querySelector('.tab4').addEventListener('focus',()=>{
    document.getElementById('tab4').checked= true
})