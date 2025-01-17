document.addEventListener('DOMContentLoaded', () => {
    arrowAnimate();
    burgerMenu();
    sliderSwiper();
    modalOpen();
    //changeCursor();
})

function arrowAnimate() {
    const selectItem = document.querySelector('select');
    const selectBlock = document.querySelector('.accordion');

    selectItem.addEventListener ('click', () => {
        selectBlock.classList.toggle('menu_active');
    })
}

function burgerMenu() {
    const burgerMenu = document.querySelector ('.burger');
    const activeSelector = document.querySelector ('header');

    burgerMenu.addEventListener('click', () => {
        activeSelector.classList.toggle('burger_active');
    })
}

function sliderSwiper() {
    new Swiper('.swiper', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        effect: 'fade',
        fadeEffect: {
            crossFade: true,
        }
    })
}

function modalOpen() {
    const modalButton = document.querySelector('.reviews__button');
    const modalWindow = document.querySelector('body');
    const cross = document.querySelector('.cross');

    modalButton.addEventListener('click', (e) => {
        modalWindow.classList.add('open_modal');
    })

    cross.addEventListener('click', () => {
        modalWindow.classList.remove('open_modal');
    })
}


// function changeCursor() {
//     const blockItem = document.querySelector('.slider__block');

//     blockItem.addEventListener('mousedown', () => {
//         this.classList.add('click_active');
//     })

//     blockItem.addEventListener('mouseup', () => {
//         this.classList.remove('click_active');
//     })
// }

