function next() {
    const imgs = document.getElementsByClassName('carrossel');
    const img1 = imgs[0];
    const img2 = imgs[1];
    const img3 = imgs[2];

    const atual = document.getElementsByClassName('principal')[0];

    if (atual === img1) {
        img1.classList.remove('principal');
        img2.classList.add('principal');
    } else if (atual === img2) {
        img2.classList.remove('principal');
        img3.classList.add('principal');
    } else {
        img3.classList.remove('principal');
        img1.classList.add('principal');
    }
}

function preview() {
    const imgs = document.getElementsByClassName('carrossel');
    const img1 = imgs[0];
    const img2 = imgs[1];
    const img3 = imgs[2];
    const atual = document.getElementsByClassName('principal')[0];

    if (atual === img1) {
        img1.classList.remove('principal');
        img3.classList.add('principal');
    } else if (atual === img2) {
        img2.classList.remove('principal');
        img1.classList.add('principal');
    } else {
        img3.classList.remove('principal');
        img2.classList.add('principal');
    }
}
setInterval(next, 7500);