let cards = document.querySelectorAll('.card');
let postsMoreInfo = document.querySelectorAll('.more-info');
let postsInfoCloseButton = document.querySelector('.close')
let cardsAmount = document.querySelectorAll('.card-amount');
let topics = document.querySelectorAll('.topic');
let body = document.querySelector('body');
const data = ['Dragon Slayer', 'Ripper', 'Party Girl', 'Crime Statistics'];
const search = document.getElementById('search');
let searchInput = '';
search.addEventListener('input', searchResult)

topics[0].addEventListener('click', dragonSlayer);
topics[1].addEventListener('click', ripper);
topics[2].addEventListener('click', partyGirl);
topics[3].addEventListener('click', crimeStat);
cardsAmount[0].addEventListener('click', tenCardsView);
cardsAmount[1].addEventListener('click', twentyCardsView);
cardsAmount[2].addEventListener('click', allCardsView);
postsInfoCloseButton.addEventListener('click', closeInfo);

for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', postOnClick);
}

function searchResult() {
    searchInput = event.target.value;
    if (searchInput === 'Dragon Slayer') {
        dragonSlayer();
    } else if (searchInput === 'Ripper') {
        ripper();
    } else if (searchInput === 'Party Girl') {
        partyGirl()
    } else if (searchInput === 'Crime Statistics') {
        crimeStat()
    }
}

function dragonSlayer() {
    for (let i = 0; i < cards.length; i++) {
        if (cards[i].children.item(4).textContent === '#Dragon Slayer') {
            cards[i].classList.add('filter')
        } else {
            cards[i].classList.remove('filter')
        }
    }
}

function closeInfo() {
    postsMoreInfo[0].classList.remove('able');
    postsMoreInfo[0].classList.add('disable');
}

function ripper() {
    for (let i = 0; i < cards.length; i++) {
        if (cards[i].children.item(4).textContent === '#Ripper') {
            cards[i].classList.add('filter')
        } else {
            cards[i].classList.remove('filter')
        }
    }
}

function partyGirl() {
    for (let i = 0; i < cards.length; i++) {
        if (cards[i].children.item(4).textContent === '#Party girl') {
            cards[i].classList.add('filter')
        } else {
            cards[i].classList.remove('filter')
        }
    }
}

function crimeStat() {
    for (let i = 0; i < cards.length; i++) {
        if (cards[i].children.item(4).textContent === '#Crime statistics') {
            cards[i].classList.add('filter')
        } else {
            cards[i].classList.remove('filter')
        }
    }
}

function postOnClick() {
    postsMoreInfo[0].classList.add('able');
    postsMoreInfo[0].classList.remove('disable');
}

function tenCardsView() {
    for (let i = 0; i < 40; i++) {
        cards[i].classList.add('disable');
    }
}

function twentyCardsView() {
    for (let i = 0; i < 30; i++) {
        cards[i].classList.add('disable')
    }
    for (let i = 30; i < cards.length; i++) {
        cards[i].classList.remove('disable')
    }
}

function allCardsView() {
    for (let i = 0; i < cards.length; i++) {
        cards[i].classList.add('able');
        cards[i].classList.remove('disable');
    }
}