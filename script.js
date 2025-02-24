
document.querySelector('.share').addEventListener('click', function(){
    navigator.share({
        title: "top films",
        url: window.location.href
    });
})