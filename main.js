function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}
function hideSidebar(event){
     event.preventDefault();

     event.stopPropagation();

    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}

var typed = new Typed("#text", {
strings: ["Frontend Developer.", "Web Designer.", "Technical Support."],
typeSpeed: 100,
backSpeed: 100,
backDelay: 1000,
loop: true
});