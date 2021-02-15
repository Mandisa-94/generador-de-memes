//ID seccion a descargar//
const boxMeme = document.getElementById ('box-meme');
const descargaMeme = document.getElementById('descarga-meme');



//Evento que utiliza la variable//
descargaMeme.addEventListener('click', ()=> {
    descarga()
})

// Variable donde se guarda meme//
const descarga = () => {domtoimage.toBlob(boxMeme)
.then(function (blob) {
    window.saveAs(blob, 'my-node.png');
});}
