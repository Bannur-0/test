const $back = document.querySelector('.levels_arrow_left')
const $level = document.querySelector('.level')
const $next = document.querySelector('.levels_arrow_right')
const $link = document.querySelector('.a')
const $body_hero = document.querySelector('.body_hero_cont')
const $goldMain = document.querySelector('.main_cold')
const $team = document.querySelector('.team')
let pageLevel = 1
let gold = '5000'
const weapon = [
    {
        id: 1,
        img: 'img/sword-1.webp',
        damMin: 40,
        damMax: 60,
        perc: 0,
        boug: false,
        select: true
    },
    {
        id: 2,
        img: 'img/sword-2.webp',
        damMin: 40,
        damMax: 60,
        perc: 5,
        coin:1000,
        boug: false,
        select: false
    },
    {
        id: 3,
        img: 'img/sword-3.webp',
        damMin: 40,
        damMax: 60,
        perc: 10,
        coin:2000,
        boug: false,
        select: false
    },
    {
        id: 4,
        img: 'img/sword-4.webp',
        damMin: 40,
        damMax: 60,
        perc: 20,
        coin:3000,
        boug: false,
        select: false
    },
    {
        id: 5,
        img: 'img/sword-5.webp',
        damMin: 40,
        damMax: 60,
        perc:30,
        coin:4000,
        boug: false,
        select: false
    },
    {
        id: 6,
        img: 'img/sword-6.webp',
        damMin: 40,
        damMax: 60,
        perc:40,
        coin:5000,
        boug: false,
        select: false
    },
    {
        id: 7,
        img: 'img/sword-7.webp',
        damMin: 40,
        damMax: 60,
        perc:50,
        coin:6000,
        boug: false,
        select: false
    },
    {
        id: 8,
        img: 'img/sword-8.webp',
        damMin: 40,
        damMax: 60,
        perc:60,
        coin:7000,
        boug: false,
        select: true
    },
    {
        id: 9,
        img: 'img/sword-9.webp',
        damMin: 40,
        damMax: 60,
        perc:70,
        coin:8000,
        boug: false,
        select: false
    },
    {
        id: 10,
        img: 'img/sword-10.webp',
        damMin: 40,
        damMax: 60,
        perc:80,
        coin:9000,
        boug: false,
        select: false
    },
    {
        id: 11,
        img: 'img/sword-11.webp',
        damMin: 40,
        damMax: 60, 
        perc:90,
        coin:10000,
        boug: false,
        select: false
    },
    {
        id: 12,
        img: 'img/sword-12.webp',
        damMin: 40,
        damMax: 60,
        perc:100,
        coin:11000,
        boug: false,
        select: false
    },
]
const enemys = [
    {
        level: 1,
        enemyId: 1,
        img: 'img/enemy-1.webp',
        damMin:38,
        damMax:58,
        hil: 180
    },
    {
        level: 1,
        enemyId: 2,
        img: 'img/enemy-2.webp',
        damMin:40,
        damMax:60,
        hil: 200
    },
    {
        level: 2,
        enemyId: 3,
        img: 'img/enemy-3.webp',
        damMin:45,
        damMax:65,
        hil: 220
    },
    {
        level: 2,
        enemyId: 4,
        img: 'img/enemy-4.webp',
        damMin:47,
        damMax:67,
        hil: 240
    },
    {
        level: 3,
        enemyId: 5,
        img: 'img/enemy-5.webp',
        damMin:53,
        damMax:73,
        hil: 260
    },
    {
        level: 3,
        enemyId: 6,
        img: 'img/enemy-6.webp',
        damMin:55,
        damMax:75,
        hil: 280
    },
    {
        level: 4,
        enemyId: 7,
        img: 'img/enemy-7.webp',
        damMin:60,
        damMax:80,
        hil: 300
    },
    {
        level: 4,
        enemyId: 8,
        img: 'img/enemy-8.webp',
        damMin:63,
        damMax:83,
        hil: 320
    },
]
const hero = [
    {
        heroId: 1,
        img: 'img/hero.webp',
        hil:200,
        select: false,
        
    },
    {
        heroId: 2,
        img: 'img/hero-2.webp',
        hil:250,
        select: false,
        boug: false,
        price: '3000'
    }
]
const stok = [
    weapon[0],
    hero[0],
]
window.addEventListener('load', ()=>{
    
    if (!localStorage.getItem('team') && !localStorage.getItem('stok')) {
        localStorage.setItem('team', JSON.stringify(firstTeam(stok)))
        localStorage.setItem('stok',JSON.stringify(stok))
    }
    if (!localStorage.getItem('weap') || !localStorage.getItem('hero')) {
        localStorage.setItem('weap', JSON.stringify(weapon))
        localStorage.setItem('hero', JSON.stringify(hero))        
    }
    if (!localStorage.getItem('gold')) {
        localStorage.setItem('gold', gold)        
    }
    $level.innerHTML = pageLevel
    localStorage.setItem('enemy', JSON.stringify(enemys.filter(item => item.level === pageLevel ? item : '')))
    heroCard(JSON.parse(localStorage.getItem('team')))
})
$link.addEventListener('click', e =>{
    e.preventDefault()
})
$back.addEventListener('click', e =>{
    e.preventDefault()
    pageLevel--
    if (pageLevel === 0) {
        pageLevel++
    } else {
        $level.innerHTML = pageLevel
        const doEnemys = enemys.filter(item =>{
            if (pageLevel === item.level) {
                return item
            }
        })
        localStorage.setItem('enemy', JSON.stringify(doEnemys))
    }
})
$next.addEventListener('click', e=>{
    e.preventDefault()
    pageLevel++
    if (pageLevel >= 5) {
        pageLevel--
    } else {
        $level.innerHTML = pageLevel
        const doEnemys = enemys.filter(item =>{
            if (pageLevel === item.level) {
                return item
            }
        })
        localStorage.setItem('enemy', JSON.stringify(doEnemys))
    }
})
$team.addEventListener('click', e=>{
    e.preventDefault()
    window.open('team.html','_self')
})
// console.log(Math.floor(Math.random() * (60 - 42) + 42));
function heroCard (){
    const team =  JSON.parse(localStorage.getItem('team'))
    const cards = team.map(item =>{
    return   `
    <div class="body_hero">
        <img src="${item.img}" class="hero" alt="${item.heroId}">
        <div class="hero_weap">
            <img src='${item.weap.img}'alt='${item.weap.id}' >
        </div>
    </div>
  `}).join('')
    $goldMain.innerHTML = `
    <p>${localStorage.getItem('gold')} G</p>
    `
    $body_hero.innerHTML = cards
}
function firstTeam (item){
    let firstH = item[1]
    firstH.weap = item[0]
    firstH,select = true
    const team = [firstH];
    return team
}