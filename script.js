let content = document.querySelector('.content');

window.addEventListener('scroll', function() {
    let scrolled = window.scrollY;
    let maxFontSize = 100; // in pixels
    let minFontSize = 20;  // in pixels
    let windowHeight = window.innerHeight;
    
    let newFontSize = maxFontSize - (scrolled / windowHeight * (maxFontSize - minFontSize));

    newFontSize = newFontSize < minFontSize ? minFontSize : newFontSize;
    
    content.style.fontSize = newFontSize + 'px';
});
