let icons = document.querySelectorAll(".header .container .icon-box")

function iconF(par) {
    icons.forEach(function(ele){
        ele.classList.remove("active")
    })
    par.classList.add("active");
}

icons.forEach(function(ele){
    ele.onclick = function(ele){
        iconF(this);
    }
})

let btn = document.querySelector("button");
function btnF() {
    if (window.scrollY >= 500) {
        btn.style.opacity = "1";
    } else {
        btn.style.opacity = "0";
    }
}

window.addEventListener('scroll',function () {
    btnF();
    homeF();
});

btn.onclick = function () {
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: 'smooth',
    });
};


function link(address) {
    window.location.href = address;
}


let home = document.getElementById('landing');
let about = document.getElementById('about');
let srv = document.getElementById('srv');
let skills = document.getElementById('skills')
let port = document.getElementById('portfolio');
let contact = document.getElementById('cont');
let homeBtn = document.getElementById('landingBtn');
let aboutBtn = document.getElementById('aboutBtn');
let srvBtn = document.getElementById('srvBtn');
let skillsBtn = document.getElementById('skillsBtn')
let portBtn = document.getElementById('portfolioBtn');
let contactBtn = document.getElementById('contBtn');

function homeF() {
    if (window.scrollY >= home.offsetTop - 500 && window.scrollY < about.offsetTop - 500){
        iconF(homeBtn);
    } else if (window.scrollY >= about.offsetTop - 500 && window.scrollY < srv.offsetTop - 500) {
        iconF(aboutBtn);
    } else if (window.scrollY >= srv.offsetTop - 500 && window.scrollY < skills.offsetTop - 500) {
        iconF(srvBtn);
    }else if (window.scrollY >= skills.offsetTop - 500 && window.scrollY < port.offsetTop - 500) {
        iconF(skillsBtn);
    }else if (window.scrollY >= port.offsetTop - 500 && window.scrollY < contact.offsetTop - 500) {
        iconF(portBtn);
    }else if (window.scrollY >= contact.offsetTop - 500){
        iconF(contactBtn);
    }
}

/////////
// let darkBtn = document.getElementById('dark');
// let lightBtn = document.getElementById('light');
// const paddinglight1 = document.getElementById("paddinglight1");
// const paddinglight2 = document.getElementById("paddinglight2");
// const paddinglight3 = document.getElementById("paddinglight3");
// const paddinglight4 = document.getElementById("paddinglight4");
// const paddinglight5 = document.getElementById("paddinglight5");
// const paddinglight6 = document.getElementById("paddinglight6");
// const paddinglight7 = document.getElementById("paddinglight7");
// const paddinglight8 = document.getElementById("paddinglight8");
// const paddingdark1 = document.getElementById("paddingdark1");
// const paddingdark2 = document.getElementById("paddingdark2");
// const paddingdark3 = document.getElementById("paddingdark3");
// const paddingdark4 = document.getElementById("paddingdark4");
// const paddingdark5 = document.getElementById("paddingdark5");
// const paddingdark6 = document.getElementById("paddingdark6");
// const paddingdark7 = document.getElementById("paddingdark7");
// const paddingdark8 = document.getElementById("paddingdark8");
// const img = document.getElementById('img');

// darkBtn.addEventListener('click',function(){
//     darkBtn.style.display = "none";
//     lightBtn.style.display = "flex";
//     document.documentElement.style.setProperty(`--main-color` , `#222222`);
//     document.documentElement.style.setProperty(`--sec-color` , `#ffb400`);
//     document.documentElement.style.setProperty(`--thr-color` , `#323232`);
//     document.documentElement.style.setProperty(`--fth-color` , `#444`);
//     document.documentElement.style.setProperty(`--fif-color` , `rgb(121, 121, 121)`);
//     document.documentElement.style.setProperty(`--white-color` , `white`);
//     document.documentElement.style.setProperty(`--black-color` , `black`);
//     document.documentElement.style.setProperty(`--transparent-color` , `rgba(255,255,255,0.4)`);
//     document.body.style.backgroundImage = "url(./images/back.jpeg)";
//     paddinglight1.style.display = "none";
//     paddinglight2.style.display = "none";
//     paddinglight3.style.display = "none";
//     paddinglight4.style.display = "none";
//     paddinglight5.style.display = "none";
//     paddinglight6.style.display = "none";
//     paddinglight7.style.display = "none";
//     paddinglight8.style.display = "none";
//     paddingdark1.style.display = "block";
//     paddingdark2.style.display = "block";
//     paddingdark3.style.display = "block";
//     paddingdark4.style.display = "block";
//     paddingdark5.style.display = "block";
//     paddingdark6.style.display = "block";
//     paddingdark7.style.display = "block";
//     paddingdark8.style.display = "block";
// })

// lightBtn.addEventListener('click',function(){
//     lightBtn.style.display = "none";
//     darkBtn.style.display = "flex";
//     document.documentElement.style.setProperty(`--main-color` , `#dfdfdf`);
//     document.documentElement.style.setProperty(`--sec-color` , `#ffb400`);
//     document.documentElement.style.setProperty(`--thr-color` , `#a1a1a1`);
//     document.documentElement.style.setProperty(`--fth-color` , `#444`);
//     document.documentElement.style.setProperty(`--fif-color` , `#222222`);
//     document.documentElement.style.setProperty(`--white-color` , `#222222`);
//     document.documentElement.style.setProperty(`--black-color` , `white`);
//     document.documentElement.style.setProperty(`--transparent-color` , `rgba(0,0,0,0.4)`);
//     document.body.style.backgroundImage = "url(./images/lightBack.jpg)";
//     img.style.filter = "drop-shadow(-4px 12px 6px transparent) !important";
//     paddinglight1.style.display = "block";
//     paddinglight2.style.display = "block";
//     paddinglight3.style.display = "block";
//     paddinglight4.style.display = "block";
//     paddinglight5.style.display = "block";
//     paddinglight6.style.display = "block";
//     paddinglight7.style.display = "block";
//     paddinglight8.style.display = "block";
//     paddingdark1.style.display = "none";
//     paddingdark2.style.display = "none";
//     paddingdark3.style.display = "none";
//     paddingdark4.style.display = "none";
//     paddingdark5.style.display = "none";
//     paddingdark6.style.display = "none";
//     paddingdark7.style.display = "none";
//     paddingdark8.style.display = "none";
// })
