var section = document.getElementsByTagName('section');
var navA = document.getElementsByTagName('nav')[0].getElementsByTagName('a');
var coverNav = document.getElementById('cover-nav');
setInterval(() => {
    if (document.getElementsByTagName('article')[0].getBoundingClientRect().y < 80 * 2) {
        document.getElementsByTagName("header")[0].className = 'headerBlur';
    }else{document.getElementsByTagName("header")[0].className = '';}
    }, 10);

 setInterval(() => {

    if (document.body.clientWidth >= 1201) {
        if (section[1].getBoundingClientRect().y < 180 && section[1].getBoundingClientRect().y >= -section[1].offsetHeight + 180) {
            coverNav.style.width = navA[0].offsetWidth + 'px';
            coverNav.style.left = navA[0].offsetLeft + 'px';
            navA[0].style.color = 'white';
            coverNav.style.opacity = '1';
        }else if(section[1].getBoundingClientRect().y > 0){
            navA[0].style.color = '';
            coverNav.style.opacity = '0';
        }else{coverNav.style.opacity = '1'; navA[0].style.color = '';}
    
        if (section[2].getBoundingClientRect().y < 180 && section[2].getBoundingClientRect().y >= -section[2].offsetHeight + 180) {
            coverNav.style.width = navA[1].offsetWidth + 'px';
            coverNav.style.left = navA[1].offsetLeft + 'px';
            navA[1].style.color = 'white';
        }else{navA[1].style.color = '';}
    
        if (section[3].getBoundingClientRect().y < 180 && section[3].getBoundingClientRect().y >= -section[3].offsetHeight + 10) {
            coverNav.style.width = navA[2].offsetWidth + 'px';
            coverNav.style.left = navA[2].offsetLeft + 'px';
            if(section[3].getBoundingClientRect().y < -section[3].offsetHeight + 180){navA[2].style.color = 'black';}else{navA[2].style.color = 'white';}
            coverNav.style.background = 'white';
            document.getElementById('header').color = 'white !important';
            document.getElementsByTagName('header')[0].style.background = 'rgba(0,0,0,.5)';
            document.getElementsByTagName('nav')[0].className = 'blackBack';
            document.getElementById('header').getElementsByTagName('button')[0].style.filter = 'invert(1)';
            document.getElementsByClassName('logo')[0].style.color = 'white';
        }
        else{
            document.getElementsByTagName('header')[0].style.background = '';
            navA[2].style.color = '';
            document.getElementsByTagName('nav')[0].className = '';
            coverNav.style.background = '';
            document.getElementById('header').getElementsByTagName('button')[0].style.filter = '';
            document.getElementsByClassName('logo')[0].style.color = '';
    
        }
    
        if (section[4].getBoundingClientRect().y < 180 && section[4].getBoundingClientRect().y >= -section[4].offsetHeight) {
            coverNav.style.width = navA[3].offsetWidth + 'px';
            coverNav.style.left = navA[3].offsetLeft + 'px';
            navA[3].style.color = 'white';
        }else{navA[3].style.color = '';}
    }
    else if (document.body.clientWidth <= 1200) {
        if (section[1].getBoundingClientRect().y < (180 * 2) && section[1].getBoundingClientRect().y >= -section[1].offsetHeight + 140) {
            console.log(section[1].getBoundingClientRect().y,-section[1].offsetHeight + 160);
            coverNav.style.width = navA[0].offsetWidth + 'px';
            coverNav.style.left = navA[0].offsetLeft + 'px';
            navA[0].style.color = 'white';
            coverNav.style.opacity = '1';
        }else if(section[1].getBoundingClientRect().y > 0){
            navA[0].style.color = '';
            coverNav.style.opacity = '0';
        }else{coverNav.style.opacity = '1'; navA[0].style.color = '';}
    
        if (section[2].getBoundingClientRect().y < 130 && section[2].getBoundingClientRect().y >= -section[2].offsetHeight + -60) {
            console.log(section[2].getBoundingClientRect().y,-section[2].offsetHeight + (180 * 2));
            coverNav.style.width = navA[1].offsetWidth + 'px';
            coverNav.style.left = navA[1].offsetLeft + 'px';
            navA[1].style.color = 'white';
        }else{navA[1].style.color = '';}
    
        if (section[3].getBoundingClientRect().y < 140 && section[3].getBoundingClientRect().y >= -section[3].offsetHeight + -15    0) {
            coverNav.style.width = navA[2].offsetWidth + 'px';
            coverNav.style.left = navA[2].offsetLeft + 'px';
            if(section[3].getBoundingClientRect().y < -section[3].offsetHeight + 180){navA[2].style.color = 'black';}else{navA[2].style.color = 'white';}
            coverNav.style.background = 'white';
            document.getElementById('header').color = 'white !important';
            document.getElementsByTagName('header')[0].style.background = 'rgba(0,0,0,.5)';
            document.getElementsByTagName('nav')[0].className = 'blackBack';
            document.getElementById('header').getElementsByTagName('button')[0].style.filter = 'invert(1)';
            document.getElementsByClassName('logo')[0].style.color = 'white';
        }
        else{
            document.getElementsByTagName('header')[0].style.background = '';
            navA[2].style.color = '';
            document.getElementsByTagName('nav')[0].className = '';
            coverNav.style.background = '';
            document.getElementById('header').getElementsByTagName('button')[0].style.filter = '';
            document.getElementsByClassName('logo')[0].style.color = '';
    
        }
    
        if (section[4].getBoundingClientRect().y < (180 * 2) && section[4].getBoundingClientRect().y >= -section[4].offsetHeight) {
            coverNav.style.width = navA[3].offsetWidth + 'px';
            coverNav.style.left = navA[3].offsetLeft + 'px';
            navA[3].style.color = 'white';
        }else{navA[3].style.color = '';}
    }
    
}, 100);


function scrollSection(p) {

    if (window.pageXOffset > 1200) {
        window.scroll({

            top: section[p].offsetTop - 5,
            behavior: "smooth",
    
        })
    }
    if (window.pageXOffset <= 1200) {
        window.scroll({

            top: section[p].offsetTop - 30,
            behavior: "smooth",
    
        })
    }

}

function dropDown(target) {
    if (target == '0') {
        var menu = document.getElementsByClassName('menu')[target];
        if(menu.className == 'menu'){
            document.getElementById('dropSvg').style.transform = 'rotate(0) translateY(-5px)';
            menu.className = 'menu dropMenus';
            
        }else{
            menu.className = 'menu'
            document.getElementById('dropSvg').style.transform = '';
        }

    }

}

function telValue() {
    var tel = document.getElementById('tel');
    setInterval(() => {
        if (tel.value.length <= 4) {
            tel.value = '+380-';
        }
    }, 10);
    tel.onkeypress = event => {
        event.preventDefault();
        if (tel.value.length <= 15) {
            if (event.key.length > 1) return true;
                tel.value = (tel.value+event.key).replace( /[^\d-]/g, '');
            if (tel.value.length == 6) {
                tel.value = (tel.value + '-');
            }
            if(tel.value.length == 10) {
                tel.value = (tel.value + '-');
            }
            if (tel.value[0] !== '+') {
                tel.value = '+' + tel.value;
            }
        }
    }
}