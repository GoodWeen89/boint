document.addEventListener('DOMContentLoaded', () => {
    arrowAnimate();
    burgerMenu();
    sliderSwiper();
    productRating();
    sumPrice();
    counter();
})

function arrowAnimate() {
    const selectItem = document.querySelector('select');
    const selectBlock = document.querySelector('.language_items');

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

function productRating() {
    document.querySelectorAll(".rating").forEach(ratingBlock => {
        let ratingValue = parseInt(ratingBlock.getAttribute("data-rating"), 10);
        let stars = ratingBlock.querySelectorAll(".star");

        stars.forEach(star => {
            let starValue = parseInt(star.getAttribute("data-value"), 10);
            if (starValue <= ratingValue) {
                star.classList.add("active");
            }
        });
    });
}

function sumPrice() {  
    let total = 0;  

    document.querySelectorAll(".price-value").forEach((element) => {  
        let priceText = element.textContent.replace(/[^\d]/g, '');  
        let price = parseFloat(priceText);  

        if (!isNaN(price)) {  
            total += price;  
        }  
    });  

    let formattedTotal = total.toLocaleString("ru-RU");  
    let sumElement = document.querySelector(".sum-price-value");  

    if (sumElement) {  
        sumElement.setAttribute("data-value", total);  
        sumElement.textContent = `${formattedTotal} р`;  
    }  
 
    let discountPercentage = 0.10;
    let discountAmount = total * discountPercentage;  
    let finalPrice = total - discountAmount;   
    let difference = total - finalPrice;   
    let formattedDifference = difference.toLocaleString("ru-RU");  
    let differenceElement = document.querySelector(".sum-discount-value");  

    if (differenceElement) {  
        differenceElement.textContent = `${formattedDifference} руб`;  
    }  
}


function counter() {
    document.querySelectorAll('.footer__menu_link[data-count]').forEach(item => {
        let count = parseInt(item.getAttribute('data-count'), 10);
        if (count > 0) {
            let badge = document.createElement('span');
            badge.classList.add('counter');
            badge.textContent = count;
            item.appendChild(badge);
            item.removeAttribute('data-count');
        }
    });
}



