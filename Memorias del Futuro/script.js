document.addEventListener("DOMContentLoaded", function () {
    const titulo = document.getElementById("memorias");
    const audio = document.getElementById("audio-fondo");

    titulo.addEventListener("click", function () {
        audio.play();
    });
});

console.log("Los sueños pueden verse obligados a quedarse olvidados en la memoria");