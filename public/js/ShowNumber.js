var showNumber = () => {
    var num = document.getElementById('number');
    if (num.style.display === "none") {
        num.style.display = "block";
    } else {
        num.style.display = "none";
    }
}

//not going to create new js file for 3 lines of code :p
var toggleHeart = (tog) => {
    tog.classList.toggle('fas', 'fa-heart');
}