window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.burger').addEventListener('click', function() {
        document.querySelector('.burger').classList.toggle('burger--active')
        document.querySelector('.header__nav').classList.toggle('header__nav--active')
    })

    document.querySelector('.header__btn').addEventListener('click', function() {
        document.querySelector('.search').classList.toggle('search--active')
        document.querySelector('.header__btn').classList.add('header__btn-hidden')

    })

    document.querySelector('.header__btn-close').addEventListener('click', function() {
        document.querySelector('.search').classList.remove('search--active')
        document.querySelector('.header__form').classList.toggle('header__form--active')
        document.querySelector('.header__btn').classList.remove('header__btn-hidden')
    })


    var tabLink = document.querySelectorAll('.how__link')

    tabLink.forEach(function(item) {
        item.addEventListener('click', function(event) {

            const path = event.currentTarget.dataset.path

            document.querySelectorAll('.how__items').forEach(function(tabContent) {
                tabContent.classList.remove('how__items-active')
            })
            document.querySelector(`[data-target="${path}"]`).classList.add('how__items-active')

            tabLink.forEach(function(item) {
                item.classList.remove('how__link-active')
            })
            item.classList.add('how__link-active')
        }, false)
    })







    const swiper = new Swiper('.swiper', {
        // Optional parameters

        speed: 300,

        // If we need pagination
        pagination: {
            el: '.hero__pagination',
            type: 'bullets',
            clickable: true
        },
        a11y: {
            paginationBulletMessage: "Слайд {{index}}"

        }

    });
})

$(function() {
    $("#accordion").accordion({
        heightStyle: "content",
        header: '>.faq__box >.accordion__header',
        active: false,
        collapsible: true

    });

});
