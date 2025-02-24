function sharePage(){
    navigator.share({
        title: "top films",
        url: window.location.href
    });
}