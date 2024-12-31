const ruleta = document.getElementById('ruleta');
const botonGirar = document.getElementById('girar');
let girando = false;

botonGirar.addEventListener('click', () => {
    if (!girando) {
        girando = true;
        let gradosIniciales = 0;
        if (ruleta.style.transform) {
            let matrix = ruleta.style.transform.replace(/[^0-9\-.,]/g, '').split(',');
            gradosIniciales = parseInt(Math.round(Math.atan2(matrix[1], matrix[0]) * (180 / Math.PI)));
            if (isNaN(gradosIniciales)) {
                gradosIniciales = 0
            }
        }
        let grados = gradosIniciales + Math.floor(Math.random() * 3600) + 1440;

        ruleta.style.transition = 'transform 8s ease-out'; // Usamos ease-out para el frenado suave
        ruleta.style.transform = `rotate(${grados}deg)`;

        ruleta.addEventListener('transitionend', () => {
            ruleta.style.transition = 'none';
            girando = false;
        }, { once: true });
    }
});