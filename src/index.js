window.onload = function(){
    addMenuClickHandler();
    addTagsClickHandler();  
    addScroll();
    addMobileMenuClickHandler();
    addArrowClickHandler();
}
/// addTagsClickHandler
const addTagsClickHandler = () => {
    document.querySelector('.portfolio-tags').addEventListener('click', (e) => {
        if (e.target.classList.contains('tag')) {
            let clickedTag = e.target;
            // let all = clickedTag.innerText === "All";
            // let webDesign = clickedTag.innerText === "Web Design";
            // let graphicDesign = clickedTag.innerText === "Graphic Design";
            // let artwork = clickedTag.innerText === "Artwork";
            removeSelectedTags();
            selectClickedTag(clickedTag);
        }
    })
}

const removeSelectedTags = () => {
    const tags = document.querySelectorAll('.portfolio-tags .tag');
    tags.forEach(tag => {
        tag.classList.remove('tag-selected');
        tag.classList.add('tag-bordered');
    })
}
const selectClickedTag = (clickedTag) => {
    clickedTag.classList.add('tag-selected');
    clickedTag.classList.remove('tag-bordered');
}

/// addMenuClickHandler
const addMenuClickHandler = () => {
    document.querySelector('.main-nav').addEventListener('click', (e) => {
        if (e.target.classList.contains('menu')) {
            let clickedMenu = e.target;
            removeSelectedMenuElement();
            selectClickedMenuElement(clickedMenu);
        }
    })
}

const removeSelectedMenuElement = () => {
    const menuElement = document.querySelectorAll('.main-nav .menu');
    menuElement.forEach(menu => {
        menu.classList.remove('menu-selected');
        menu.classList.add('menu-bordered');
    })
}
const selectClickedMenuElement = (clickedMenu) => {
    clickedMenu.classList.add('menu-selected');
    clickedMenu.classList.remove('menu-bordered');
}
// addScroll
const addScroll = () => {
document.addEventListener('scroll', onScroll);
}

function onScroll(event){
    const corPos = window.scrollY;
    const divs = document.querySelectorAll('.wrapper .div');
    const links = document.querySelectorAll('#menu-center a');

    divs.forEach((el) => {
        el.getAttribute('id');

        if(el.offsetTop <= curPos && (el.offsetTop + el.offsetHeight) > corPos){
            links.forEach((a) => {
                a.classList.remove('menu-selected');
                if(el.getAttribute('id') === a.getAttribute('href').substring(1)) {
                    a.classList.add('menu-selected');
                }
            })
        }
    });
}

/// addMobileMenuClickHandler
const addMobileMenuClickHandler = () => {
    const hamburgerShow = document.querySelector('.hamburger');
    const headerMenu = document.querySelector('.header-wrapper');
    const bodyShadow = document.querySelector('.shadow');

    hamburgerShow.addEventListener('click', (e) => {
        headerMenu.classList.toggle('mobile-menu-on');
        bodyShadow.classList.toggle('shadow-on');
        })
}
////addArrowClickHandler
const addArrowClickHandler = () => {
    const slider = document.querySelector('.slider');
    const arrowsClick = document.querySelector('.wrapper-slider');
    const nextSlider = document.querySelector('.wrapper-slider .arrow-right');
    const prewSlider = document.querySelector('.wrapper-slider .arrow-left');
    const allSliderArray = document.querySelectorAll('.carousel .main-slider');
    let i = 0; //number of the current image
   
    arrowsClick.addEventListener('click', (e) => {
        if (e.target === prewSlider) {
            allSliderArray[i].style.display = "none";
            i = i - 1;
            if(i < 0){
                i = allSliderArray.length - 1;
                slider.style.background = "rgba(100,139,240,1)";
            }else {
                slider.style.background = "rgba(240, 108, 100, 1)";
            }
        } else if(e.target === nextSlider) {
            allSliderArray[i].style.display = "none";
            i = i + 1
            if(i >= allSliderArray.length){
                i = 0;
                slider.style.background = "rgba(240, 108, 100, 1)";
            }else{
                slider.style.background = "rgba(100,139,240,1)";
            }
        }
        allSliderArray[i].style.display = "flex";
        
    })
}