var humburgerBtn = document.querySelector('.mobile-nav img');
var mobileNav = document.querySelector('.mobile-appear-nav');
var appearance = false;
humburgerBtn.addEventListener('click',()=>{
    if(appearance === false){
    humburgerBtn.src = 'imgs/icon-close.svg';
    mobileNav.classList.remove('navAnimationHide');
    mobileNav.classList.add('navAnimationAppear');
    appearance = true;
    }else{
        humburgerBtn.src = 'imgs/icon-hamburger.svg';
        mobileNav.classList.remove('navAnimationAppear');
        mobileNav.classList.add('navAnimationHide');
        appearance = false;
    }
})
var socials = document.querySelectorAll('.footer-col-1 a img');
socials.forEach(social=>{
    social.addEventListener('mouseover',()=>{
        social.src.fill = 'red';
        console.log('a7a')
    })
})