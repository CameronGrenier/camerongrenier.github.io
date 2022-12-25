window.addEventListener('scroll', function () {
    var header = document.getElementById('header');
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 115) {
        header.style.backgroundColor = 'transparent';
    } else {
        header.style.backgroundColor = '#0c092e';
    }
});