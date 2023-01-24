const menuEl = document.querySelector(".menu");


const socialListsEl = document.querySelector(".social-lists");


const yt = document.getElementById("yt").addEventListener("click", function(){
    window.open("https://youtube.com")
 
})



const facebook = document.getElementById("facebook").addEventListener("click", function(){
    window.open("https://facebook.com")
 
})


const twitter = document.getElementById("twitter").addEventListener("click", function(){
    window.open("https://twitter.com")
 
})


const twitch = document.getElementById("twitch").addEventListener("click", function(){
    window.open("https://twitch.tv")
 
})







menuEl.addEventListener("click", function() {
    socialListsEl.classList.toggle("hide")
    menuEl.classList.toggle("rotate")
 
})