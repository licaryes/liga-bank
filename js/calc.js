const MORTGAGE = 9.6;
const AUTO = 3.5;
const CREDIT = 14.5;

// Выпадающий список

let select = document.querySelector(".select")

let prosent=MORTGAGE

document.querySelector('.select_arrow').addEventListener('click', () => {
    select.classList.remove("hidden")
    document.querySelector('.select_wrapper2').classList.remove("hidden")
})

document.querySelector('#choise').addEventListener('click', () => {
    select.classList.remove("hidden")
    document.querySelector('.select_wrapper2').classList.remove("hidden")
})

window.onclick = function (e) {
    if (e.target == document.querySelector('.select_wrapper2')) {
        select.classList.add("hidden")
        document.querySelector('.select_wrapper2').classList.add("hidden")
    }

    if (e.target == document.querySelector('#mortgage')) {

        document.getElementById('choise').value = document.getElementById('mortgage').value
        select.classList.add("hidden")
        document.querySelector('.select_wrapper2').classList.add("hidden")
        prosent=MORTGAGE
        month_money()
        document.getElementById('precent').value= String(MORTGAGE)+'%'
    }
    if (e.target == document.querySelector('#auto')) {

        document.getElementById('choise').value = document.getElementById('auto').value
        select.classList.add("hidden")
        document.querySelector('.select_wrapper2').classList.add("hidden")
        prosent=AUTO
        month_money()
        document.getElementById('precent').value= String(AUTO)+'%'
    }
    if (e.target == document.querySelector('#credit')) {

        document.getElementById('choise').value = document.getElementById('credit').value
        select.classList.add("hidden")
        document.querySelector('.select_wrapper2').classList.add("hidden")
        prosent=CREDIT
        month_money()
        document.getElementById('precent').value= String(CREDIT)+'%'
    }
}

// Подсчет

let cost_value = Number(document.getElementById('cost_value').value)
let period_value_text = Number(document.getElementById('period_value_text').value)
let cont_value_text = Number(document.getElementById('cont_value_text').value)

let minus = document.querySelector('.minus')
let plus = document.querySelector('.plus')


let all_money = () => {
    let cost_value = Number(document.getElementById('cost_value').value)
    let cont_value_text = Number(document.getElementById('cont_value_text').value)
    document.getElementById('all_money').value = String(cost_value - cont_value_text)
}

let max_cost=()=>{
    let cont_value_text = Number(document.getElementById('cost_value').value)
    document.getElementById('cont_value').setAttribute('max',cont_value_text*0.7)
    document.getElementById('cont_value').setAttribute('min',cont_value_text*0.2)
    document.getElementById('cont_value_text').value=cont_value_text*0.2
    document.getElementById('cont_value').value=value=cont_value_text*0.2

}

let month_rate=(prosent)=>{
    return prosent/12/100
}

let general_rate=(month_rate)=>{
    a=(1 + month_rate)**(document.getElementById('period_value_text').value * 12)
    
    return Math.round(a*100)/100
}

let month_money=()=>{
    let a=month_rate(prosent)*general_rate(month_rate(prosent))/(general_rate(month_rate(prosent))-1)
    let b =Math.round(document.getElementById('all_money').value * a)
    if (Number.isInteger(b)){
    document.getElementById('month_pay').value =  b
    document.getElementById('income').value = Math.round( b*2.5)
    }else{
        document.getElementById('month_pay').value = '—'
        document.getElementById('income').value = '—'
    }
}

document.getElementById('cont_value').addEventListener('change', (e) => {
    document.getElementById('cont_value_text').value = e.target.value
    all_money()
    month_money()
})

minus.addEventListener('click', () => {
    if (document.getElementById('cost_value').value > 0) {
        document.getElementById('cost_value').value = Number(document.getElementById('cost_value').value) - 100000
        all_money()
        max_cost()
        month_money()
    }
})

plus.addEventListener('click', () => {
    document.getElementById('cost_value').value = Number(document.getElementById('cost_value').value) + 100000
    all_money()
    max_cost()
    month_money()
})

document.getElementById('period_value').addEventListener('change', (e) => {
    document.getElementById('period_value_text').value = Number(e.target.value)
    month_money()
})

month_money()

document.getElementById('application').addEventListener('click',()=>{
    document.querySelector('.popup.thx').classList.remove('hidden')
})

document.getElementById('cost_value').addEventListener('input',()=>{
    max_cost()
    all_money()
    month_money()
})

document.getElementById('cont_value_text').addEventListener('input',()=>{
    all_money()
    month_money()
})

document.getElementById('period_value_text').addEventListener('input',()=>{
    max_cost()
    all_money()
    month_money()
})
