let para1 = document.getElementById('para1');
let para2 = document.getElementById('para2');

setInterval(function() {
    if (para1.style.opacity !== '0') {
        para1.style.opacity = '0';
        para2.style.opacity = '1';
    } else {
        para1.style.opacity = '1';
        para2.style.opacity = '0';
    }
}, 20000); // Change every 10 seconds
