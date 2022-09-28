const $goldMain = document.querySelector('.gold')
const $contBody = document.querySelector('.cont_body')
const $btnChoose = document.querySelector('.btn_choose ')
window.addEventListener('load', () =>{
    if(!localStorage.getItem('hero') ||!localStorage.getItem('team')||!localStorage.getItem('weap')||!localStorage.getItem('gold')||!localStorage.getItem('enemy')||!localStorage.getItem('stok')){
        window.open('index.html', '_self')
    } 
    Cold()
    teamHeroCont()
})
const stok = JSON.parse(localStorage.getItem('stok'))
const team = JSON.parse(localStorage.getItem('team'))
let stokWeap = stok.filter(item =>{
    if (item.id) {
        return item
    }
}).splice(0,3  )
$btnChoose.addEventListener('click', e=>{
    e.preventDefault()

})
function teamHeroCont(){
    console.log(stok);
   
    const teamCont = stok.map((item, i ) =>{
        if (item.heroId) {
        return `
        <div class="cont_team">
            <div class="cont_hero">
                <div class="hero_select btn_hero" onclick='btnHero(${item.heroId})'>
                    <img src="${item.img}" alt="${item.heroId}">
                </div>
            </div>
            <div class="cont_weap">
                ${stokWeap.map((iteam) =>{
                    console.log(item.heroId);
                    if (iteam.id) {
                        return`
                        <button onclick='btnHWeap(${iteam.id },${item.heroId})' class="btn_weap btn_select">
                            <img src="${iteam.img}" alt="${iteam.id}">
                            <div class="select">
                                <p>Select</p> 
                            </div>
                        </button>
                        `   
                    }
                }).join('')
                }
                ${
                    btnLock(stokWeap.length)
                }
            </div>
        </div>           
                    `
        }
    }).join('')
    $contBody.innerHTML = teamCont
   
}
function btnHero(id){
    const selHero = stok.map((item,i )=>{
        if (item.heroId === id) {
            if (item.select === false) {
                let a = {
                    ...item,
                    select: true
                }
                stok[i] = a 
                return a    
            }else if(item.select === true ){
                let a = {
                    ...item,
                    select: false
                }
                stok[i] = a
                return a
            }
        }else{
            return item
        }
    })
    localStorage.setItem('stok', JSON.stringify(selHero))
    const selTeam = stok.map((item,i) =>{
        if (item.heroId) {
            if (item.select ===true) {
                team.map(tem =>{
                    if (tem.heroId !== item.heroId) {
                        team.push(item)
                    }else{
                        return tem
                    }
                })
                localStorage.setItem('team', JSON.stringify(team))
            } else {
                
            }
        } else {
            return item
        }
    })
    console.log(selHero);
    console.log(stok);
}
function btnHWeap(id, Hid){
    console.log(Hid);
    const selHero = stok.map((item,i )=>{
        if (item.id) {
            if (item.id === id) {
                if (item.select === false) {
                    let a = {
                        ...item,
                        select: true
                    }
                    stok[i] = a 
                    return a    
                }else if(item.select === true ){
                    let a = {
                        ...item,
                        select: false
                    }
                    stok[i] = a
                    return a
                }
            }else{
                if(item.select === true ){
                    let a = {
                        ...item,
                        select: false
                    }
                    stok[i] = a
                    return a
                }
            }
        }else{
            return item
        }
    })
    localStorage.setItem('stok', JSON.stringify(selHero))
    const selTeam = stok.map((item,i) =>{
        if (item.heroId) {
            if (item.heroId == Hid) {
                let a = stok.filter(iteam =>{
                    if (iteam.id) {
                        if (iteam.select === true) {
                            let a =({
                                ...item,
                                weap: iteam
                            });
                            console.log(a);
                            team.map(tem =>{
                                if (tem.heroId !== a.heroId) {
                                    team.push(a)
                                }else{
                                    tem = a
                                }
                            })
                            localStorage.setItem('team', JSON.stringify(team))
                        }
                        return item
                    }
                })
                return item
            }else{
                return item
            }
            
        } else {
            return item
        }
    })
    console.log(selTeam);
    console.log(stok);
    console.log(team);
}
function btnLock(num){
    if (num == 1) {
        return `
    <button class="btn_weap btn_lock">
        <img src="img/box-locked.webp" alt="1">
    </button>
    <button class="btn_weap btn_lock">
        <img src="img/box-locked.webp" alt="1">
    </button>
    <button class="btn_weap btn_lock">
        <img src="img/box-locked.webp" alt="1">
    </button>
    `   
    }else if(num == 2) {
        return `
    <button class="btn_weap btn_lock">
        <img src="img/box-locked.webp" alt="1">
    </button>
    <button class="btn_weap btn_lock">
        <img src="img/box-locked.webp" alt="1">
    </button>
    ` }else if(num == 3) {
        return `
    <button class="btn_weap btn_lock">
        <img src="img/box-locked.webp" alt="1">
    </button>
    ` }else if(num == 0) {
        return `
    <button class="btn_weap btn_lock">
        <img src="img/box-locked.webp" alt="1">
    </button>
    <button class="btn_weap btn_lock">
        <img src="img/box-locked.webp" alt="1">
    </button>
    <button class="btn_weap btn_lock">
        <img src="img/box-locked.webp" alt="1">
    </button>
    <button class="btn_weap btn_lock">
        <img src="img/box-locked.webp" alt="1">
    </button>
    ` }else{
        return ''
    }
    
}
function Cold(){
    $goldMain.innerHTML = `
    <p>${localStorage.getItem('gold')} G</p>
    `
}
  
  