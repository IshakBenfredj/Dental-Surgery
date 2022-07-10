// Navbar
let open = document.querySelector(".header .container .open-icon"),
    close = document.querySelector(".header .container .close"),
    navbar = document.querySelector(".header .container .main-nav");

document.addEventListener("click",function(e){
    if (e.target === open) {
        navbar.classList.add('open');
    } else if (e.target === close) {
        navbar.classList.remove('open');
    }
})
// ######################################################################
// Change The color of site
let mainColor = localStorage.getItem("mainColor");
let secColor = localStorage.getItem("secColor");
let colors = document.querySelectorAll(".setting-menu .colors .colors-menu li");

if (mainColor !== null) {
    document.documentElement.style.setProperty("--main-color",mainColor);
    document.documentElement.style.setProperty("--secondary-color",secColor);
    colors.forEach((li)=>{
        li.classList.remove('active');
        if(li.dataset.maincolor === mainColor){
            li.classList.add("active");
        }
    });
}
colors.forEach((li)=>{
    li.onclick = function(){
        colors.forEach((li)=>{
            li.classList.remove('active');
        })
        this.classList.add("active")
        document.documentElement.style.setProperty("--main-color",this.dataset.maincolor);
        localStorage.setItem("mainColor",this.dataset.maincolor);
        document.documentElement.style.setProperty("--secondary-color",this.dataset.seccolor);
        localStorage.setItem("secColor",this.dataset.seccolor);
    }
})
// Change the Mood of site
let moods = document.querySelectorAll(".setting-menu .mood .moods i"),
    moodStorage = localStorage.getItem("mood");
    if (moodStorage !== null){
        if (moodStorage === 'night'){
            nightMood();
        } else {
            sunyMood();
        }
        moods.forEach((i)=>{
            i.classList.remove("active");
            if (i.dataset.mood === moodStorage){
                i.classList.add("active");
            }
        });
    }
moods.forEach((i)=>{
    i.onclick = function(){
        moods.forEach((i)=>{
            i.classList.remove("active");
        });
        i.classList.add("active");
        if (this.dataset.mood === 'night'){
            nightMood();
        } else {
            sunyMood();
        }
        localStorage.setItem("mood",this.dataset.mood);
    }
})

function nightMood(){
    document.documentElement.style.setProperty("--section-background","#000");
    document.documentElement.style.setProperty("--mood-color","#262525");
    document.documentElement.style.setProperty("--text-color","#fff");
    document.documentElement.style.setProperty("--antimood-color","#fff");
}
function sunyMood(){
    document.documentElement.style.setProperty("--section-background","#f6f6f6");
    document.documentElement.style.setProperty("--mood-color","#fff");
    document.documentElement.style.setProperty("--text-color","#777");
    document.documentElement.style.setProperty("--antimood-color","#000");
}
// ######################################################################
// Open Settings
let setting = document.querySelector(".setting"),
    settingMenu = document.querySelector(".setting-menu");

setting.onclick = function (){
    settingMenu.classList.toggle("open");
}
document.addEventListener("click",function(e){
    if (e.target !== settingMenu && e.target !== setting) {
        if (settingMenu.classList.contains("open")){
            settingMenu.classList.remove("open");
        }
    };
})
// window.onscroll = function(){
//     settingMenu.classList.remove("open");
// }
