var mytglbtn = document.querySelector(".toggler");
var mysidebar = document.querySelector(".main_sidebar");
var mybody = document.querySelector(".main_body")
var mylogobox = document.querySelector(".logo_box");

mytglbtn.addEventListener("click", function(){
    if(mysidebar.classList.contains("main_sidebar")){
        mysidebar.classList.replace("main_sidebar", "main_sidebar--show");
    }
    else{
        mysidebar.classList.replace("main_sidebar--show", "main_sidebar");
    }
});


