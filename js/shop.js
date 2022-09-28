const $goldMain = document.querySelector('.gold')
const $btnHeroes = document.querySelector('.btn_hero')
const $btnWeaps = document.querySelector('.btn_weap')
const $body = document.querySelector('.content_body')
const $btnWeap = document.querySelector('.card_weap')
window.addEventListener('load', () =>{
    if(!localStorage.getItem('hero') ||!localStorage.getItem('team')||!localStorage.getItem('weap')||!localStorage.getItem('gold')||!localStorage.getItem('enemy')||!localStorage.getItem('stok')){
        window.open('index.html', '_self')
    }    
    if (!localStorage.getItem('contBody')) {
        localStorage.setItem('contBody', true)
    }else{
        let contBody = localStorage.getItem('contBody')
        if (contBody == 'true') {
            heroCont()
        } else {
            weapCont()
        }
        Cold()
    }
})
const weapApp = JSON.parse(localStorage.getItem('weap'))
let gold = localStorage.getItem('gold')
const stok = JSON.parse(localStorage.getItem('stok'))
const heroApp = JSON.parse(localStorage.getItem('hero'))
$btnWeaps.addEventListener('click', e=>{
    e.preventDefault()
    weapCont()
    localStorage.setItem('contBody',false)
    console.log(localStorage.getItem('contBody'));
})
$btnHeroes.addEventListener('click', e=>{
    e.preventDefault()
    heroCont()
    localStorage.setItem('contBody',true)
    console.log(localStorage.getItem('contBody'));
})
function btnWeap(id){
    const bougWeap = weapApp.map(item =>{
        if (id === item.id) {
            if (gold >= item.coin) {
                if (item.boug !== true) {
                    gold = gold - item.coin
                    localStorage.setItem('gold',gold)
                let a = {
                    ...item,
                    boug: true
                }
                const array = stok.concat(a)
                localStorage.setItem('stok', JSON.stringify(array))
                return a
                }else{
                    return item
                }
            }else{
                return item
            }
        }else{
            return item
        }
    })
    console.log(bougWeap);
    localStorage.setItem('weap', JSON.stringify(bougWeap))
    window.location.reload()
}
function btnHero(id){
    const bougWeap = heroApp.map(item =>{
        if (id === item.heroId) {
            if (gold >= item.price) {
                if (item.boug !== true) {
                    gold = gold - item.price
                    localStorage.setItem('gold',gold)  
                    let a = {
                        ...item,
                        boug: true
                    }
                    const array = stok.concat(a)
                    localStorage.setItem('stok', JSON.stringify(array))
                    return a
                }else{
                    return item
                }
            }else{
                return item
            }
        }else{
            return item
        }
    })
    console.log(bougWeap);
    localStorage.setItem('hero', JSON.stringify(bougWeap))
    window.location.reload()
}
function heroCont(){
    const heroArr = heroApp.map((item)=>{
        if (item.heroId !== 1) {
            if (false == item.boug) {

            return`
                <div class="cont_hero">
                    <div onclick='btnHero(${item.heroId})' class="card_hero btn_shomHero">
                        <img src="${item.img}" alt="${item.heroId}">
                        <div class="price">
                            <p>${item.price}</p>
                        </div>
                    </div>
                </div>
            `
            }else{
                return`
                <div class="cont_hero">
                    <div onclick='btnHero(${item.heroId})' class="card_hero btn_shomHero">
                        <img src="${item.img}" alt="${item.heroId}">
                    </div>
                </div>
            `
            }
        }
    })
    $body.innerHTML = heroArr
}   
function weapCont(){
    const weapArr = `<div class="cont_weap">
    ${weapApp.map((item)=>{
        if (item.id !== 1) {
            if (false == item.boug) {
                return`
                <div class="weap_body">
                    <div onclick="btnWeap(${item.id})" class="card_weap">
                        <img src="${item.img}" alt="${item.id}">
                        <div class="price">
                            <p>${item.coin}</p>
                        </div>
                    </div>
                </div>
            `
            }else{
                return`
                <div class="weap_body">
                    <div onclick="btnWeap(${item.id})" disabled='disabled' class="card_weap">
                        <img src="${item.img}" alt="${item.id}">
                    </div>
                </div>
            `
            }
        }
    })}
    </div>`
    $body.innerHTML = weapArr
}
function Cold(){
    $goldMain.innerHTML = `
    <p>${localStorage.getItem('gold')} G</p>
    `
}