const image = document.getElementById('img');
let imageSize = 300;

function resizeImage(action) {
    if (action === 'increase') {
        imageSize -= 50; 
    } else if (action === 'decrease') {
        imageSize += 50; 
        if (imageSize < 50) { 
            imageSize = 50;
        }
    }
    image.style.width = imageSize + 'px'; 
}