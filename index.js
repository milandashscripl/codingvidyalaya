var mytglbtn = document.querySelector(".toggler");
var mysidebar = document.querySelector(".main_sidebar");
var mybody = document.querySelector(".main_body")
var mylogobox = document.querySelector(".logo_box");
var myproflicon = document.querySelector(".profile");
var myproflemenu = document.querySelector(".profile_menu")

mytglbtn.addEventListener("click", function(){
    if(mysidebar.classList.contains("main_sidebar")){
        mysidebar.classList.replace("main_sidebar", "main_sidebar--show");
    }
    else{
        mysidebar.classList.replace("main_sidebar--show", "main_sidebar");
    }
});


myproflicon.addEventListener("click", function(){
    if(myproflemenu.classList.contains("profile_menu")){
        myproflemenu.classList.replace("profile_menu", "profile_menu--show");
    }
    else{
        myproflemenu.classList.replace("profile_menu--show", "profile_menu");
    }
})

