//Body//
const etiquetaBody = document.getElementById ('etiqueta-body');
const backgroundPage = document.getElementById ('background-page');


//ID de header//
const imagenBotonera = document.getElementById ('imagen-botonera');
const textoBotonera = document.getElementById ('texto-botonera');
const oscuroBotonera = document.getElementById ('oscuro-botonera');

 
//ID de opciones de IMG//
const boxImgOptions = document.getElementById ('box-img-options');
const boxTextOptions = document.getElementById ('box-text-options');
const urlImgOptions = document.getElementById ('url-img-options');
const colorFondoImg = document.getElementById ('color-fondo-img');
const colorOptions = document.getElementById ('color-options');
const blackColorImgFondo = document.getElementById ('black-color-img-fondo');
const brilloFiltrosImg = document.getElementById ('brillo-filtros-img');
const opacidadFiltrosImg = document.getElementById ('opacidad-filtros-img');
const contrasteFiltrosImg = document.getElementById ('contraste-filtros-img');
const desenfoqueFiltrosImg = document.getElementById ('desenfoque-filtros-img');
const escalaFiltrosImg = document.getElementById ('escala-filtros-img');
const sepiaFiltrosImg = document.getElementById ('sepia-filtros-img');
const hueFiltrosImg = document.getElementById ('hue-filtros-img');
const saturadoFiltrosImg = document.getElementById ('saturado-filtros-img');
const negativoFiltrosImg = document.getElementById ('negativo-filtros-img');
const buttonRestablecerFiltrosImg = document.getElementById ('button-restablecer-filtros-img');



//ID de opciones de Texto//
const topTextOptions = document.getElementById ('top-text-options');
const bottomTextOptions = document.getElementById ('bottom-text-options');
const noSuperiorText = document.getElementById ('no-superior-text');
const noBottomText = document.getElementById ('no-bottom-text');
const buttonFuentesText =  document.getElementById ('button-fuentes-text');
const tamañoFuenteTextOptions = document.getElementById ('tamaño-fuente-text-options');
const buttonLeftTextOptions = document.getElementById ('button-left-text-options');
const buttonCenterTextOptions = document.getElementById ('button-center-text-options');
const buttonRightTextOptions = document.getElementById ('button-right-text-options');
const inputColorTexto = document.getElementById ('input-color-texto');
var inputColorFondoTexto = document.getElementById('input-color-fondo-texto');
const buttonNingunoTextOptions =document.getElementById ('button-ninguno-text-options');
const buttonClaroTextOptions = document.getElementById ('button-claro-text-options');
const buttonOscuroTextOptions = document.getElementById ('button-oscuro-text-options');
const espaciadoTextOptions = document.getElementById ('espaciado-text-options');
const interlineadoTextOptions = document.getElementById ('interlineado-text-options');
const transparentTextOption = document.getElementById ('transparent-text-option');

//ID container meme//
const boxTextoMemeTop = document.getElementById ('box-texto-meme-top');
const containBoxMeme = document.getElementById ('contain-box-meme');
var boxTextoMemeBottom = document.getElementById ('box-texto-meme-bottom');
const boxImgMeme = document.getElementById ('box-img-meme');







//Funcionalidad de Header- Aside//
imagenBotonera.addEventListener('click', (e)=>{
    boxImgOptions.style.display = 'flex';
    boxTextOptions.style.display = 'none';
}
);

textoBotonera.addEventListener('click', (e)=>{
        boxImgOptions.style.display = 'none';
        boxTextOptions.style.display = 'flex';
    }
    );

                                                  //Funcionalidad de opciones de Texto//

 //1- Escribir texto en meme - top y bottom//
 topTextOptions.addEventListener ('keyup', (e)=>{
    boxTextoMemeTop.innerHTML = topTextOptions.value;
 });

 bottomTextOptions.addEventListener ('keyup', (e)=>{
    boxTextoMemeBottom.innerHTML = bottomTextOptions.value;
});

//2- Desaparecer los texto en meme - top y bottom//
//hacer una funcion dentro de una funcion//
const ocultarTextos = () =>{
    if (noSuperiorText.checked && noBottomText.checked){
        boxTextoMemeBottom.classList.add ('box-texto-meme-none')
        boxTextoMemeTop.classList.add ('box-texto-meme-none')
        boxImgMeme.classList.add('sin-textos')
    }
};

     noSuperiorText.addEventListener('click', (e)=>{
    if(noSuperiorText.checked){
        boxImgMeme.classList.add ('sin-sup')
        boxTextoMemeTop.classList.add ('box-texto-meme-none')

        // boxTextoMemeTop.style.display = 'none';
        //  boxImgMeme.style.height = '50vh'
    }else if (!noSuperiorText.checked)
    {boxImgMeme.classList.remove ('sin-sup')
     boxTextoMemeTop.classList.remove ('box-texto-meme-none')
}
            //  {boxTextoMemeTop.style.display = 'flex';
            //  boxTextoMemeTop.style.justifyContent = 'center'
            //  boxImgMeme.style.height = '40vh'}
     else{ocultarTextos()}
});

 noBottomText.addEventListener('click', (e)=>{
    if(noBottomText.checked){
        boxImgMeme.classList.add ('sin-inf')
        boxTextoMemeBottom.classList.add ('box-texto-meme-none')
        // boxTextoMemeBottom.style.display = 'none';
        // boxImgMeme.style.height = '50vh'
    }else if (!noBottomText.checked)
    {
        boxImgMeme.classList.remove('sin-inf')
        boxTextoMemeBottom.classList.remove ('box-texto-meme-none')
    }
            //  {boxTextoMemeBottom.style.display = 'flex';
            //  boxTextoMemeBottom.style.justifyContent = 'center'
            //  boxImgMeme.style.height = '40vh'}
    else{ocultarTextos()}
});


  
// const ocultarTextos = () => {
// if(noSuperiorText.checked || noBottomText.checked){
//     boxImgMeme.style.height = '50vh'
// } else if (!noSuperiorText.checked ){
//     boxImgMeme.style.height = '40vh'
//     boxTextoMemeTop.style.display = 'flex';
//     boxTextoMemeTop.style.justifyContent = 'center'

// } else if (!noBottomText.checked){
//     boxImgMeme.style.height = '40vh'
//     boxTextoMemeBottom.style.display = 'flex';
//     boxTextoMemeBottom.style.justifyContent = 'center'
// }
// else if (noSuperiorText.checked && noBottomText.checked){
//     boxImgMeme.classList.toggle ('sin-textos')
// }}
// noSuperiorText.addEventListener('click', (e)=>{
//     boxTextoMemeTop.style.display = 'none';
//     ocultarTextos()
// });

// noBottomText.addEventListener('click', (e)=>{    
//     boxTextoMemeBottom.style.display = 'none';
//     ocultarTextos()
// });

//3- Seleccionar tipografia//
buttonFuentesText.addEventListener('change',(e) =>{
    boxTextoMemeTop.style.fontFamily = `${buttonFuentesText.value}`;
    boxTextoMemeBottom.style.fontFamily = `${buttonFuentesText.value}`;
});

//4- Seleccionar tamaño de texto//
tamañoFuenteTextOptions.addEventListener ('change', (e)=>{
    boxTextoMemeTop.style.fontSize = `${tamañoFuenteTextOptions.value}px`;
    boxTextoMemeBottom.style.fontSize = `${tamañoFuenteTextOptions.value}px`;
});

tamañoFuenteTextOptions.addEventListener ('keyup', (e)=>{
    boxTextoMemeTop.style.fontSize = `${tamañoFuenteTextOptions.value}px`;
    boxTextoMemeBottom.style.fontSize = `${tamañoFuenteTextOptions.value}px`;
});

//5- Seleccionar centrado de texto//
buttonLeftTextOptions.addEventListener ('click', (e)=>{
    boxTextoMemeTop.style.textAlign = 'left';
    boxTextoMemeBottom.style.textAlign = 'left';
});

buttonCenterTextOptions.addEventListener ('click', (e)=>{
    boxTextoMemeTop.style.textAlign = 'center';
    boxTextoMemeBottom.style.textAlign = 'center';
});

buttonRightTextOptions.addEventListener ('click', (e)=>{
    boxTextoMemeTop.style.textAlign = 'right';
    boxTextoMemeBottom.style.textAlign = 'right';
});

//6- Elegir color de texto//
inputColorTexto.addEventListener ('input', (e)=>{
    boxTextoMemeTop.style.color = `${inputColorTexto.value}`;
    boxTextoMemeBottom.style.color = `${inputColorTexto.value}`;
});

//7- Elegir color de fondo de texto + Fondo tranparente//
inputColorFondoTexto.addEventListener ('input', (e)=>{
    boxTextoMemeTop.style.backgroundColor = `${inputColorFondoTexto.value}`;
    boxTextoMemeBottom.style.backgroundColor = `${inputColorFondoTexto.value}`;
});

transparentTextOption.addEventListener ('change', (e) => {
    if(transparentTextOption.checked){
        boxTextoMemeTop.style.backgroundColor = 'transparent'
        boxTextoMemeBottom.style.backgroundColor = 'transparent'
    }else if (!transparentTextOption.checked) {
        boxTextoMemeTop.style.backgroundColor = `${inputColorFondoTexto.value}`;
        boxTextoMemeBottom.style.backgroundColor = `${inputColorFondoTexto.value}`;
    }
    
});

//8- Elegir contorno de letra//
buttonNingunoTextOptions.addEventListener ('click', (e)=>{
    boxTextoMemeTop.style.webkitTextStroke = 'transparent';
    boxTextoMemeBottom.style.webkitTextStroke = 'transparent';
});

buttonClaroTextOptions.addEventListener ('click', (e)=>{
    boxTextoMemeTop.style.webkitTextStroke = '1px white';
    boxTextoMemeBottom.style.webkitTextStroke = '1px white';
});
buttonOscuroTextOptions.addEventListener ('click', (e)=>{
    boxTextoMemeTop.style.webkitTextStroke = '1px black';
    boxTextoMemeBottom.style.webkitTextStroke = '1px black';
});

//9- Establecer espaciado entre letras//
espaciadoTextOptions.addEventListener('change', ()=>{
    boxTextoMemeTop.style.letterSpacing = `${espaciadoTextOptions.value}px`;
    boxTextoMemeBottom.style.letterSpacing = `${espaciadoTextOptions.value}px`;
});
espaciadoTextOptions.addEventListener('keyup', ()=>{
    boxTextoMemeTop.style.letterSpacing = `${espaciadoTextOptions.value}px`;
    boxTextoMemeBottom.style.letterSpacing = `${espaciadoTextOptions.value}px`;
});

//10- Establecer interlineado entre letras//
interlineadoTextOptions.addEventListener('change', ()=>{
    boxTextoMemeTop.style.lineHeight = `${espaciadoTextOptions.value}px`;
    boxTextoMemeBottom.style.lineHeight = `${espaciadoTextOptions.value}px`;
});
interlineadoTextOptions.addEventListener('keyup', ()=>{
    boxTextoMemeTop.style.lineHeight = `${espaciadoTextOptions.value}px`;
    boxTextoMemeBottom.style.lineHeight = `${espaciadoTextOptions.value}px`;
});



                                                //   Funcionalidad de opciones de Imagen

                                               
//1- Agregar imagen//

urlImgOptions.addEventListener ('keyup', ()=>{
    const urlImg = urlImgOptions.value;
     boxImgMeme.style.backgroundImage = `url('${urlImg}')`;   
});

//2- Cambiar color de fondo de imagen + Efectos de blend//

colorFondoImg.addEventListener ('input', (e)=>{
    const colorFondo = e.target.value;
    boxImgMeme.style.backgroundColor = colorFondo;
});
colorOptions.addEventListener('change', ()=>{
    boxImgMeme.style.backgroundBlendMode = colorOptions.value;
});

//3- Filtros

//3 a- Brillo
brilloFiltrosImg.addEventListener ('change',()=>{
    boxImgMeme.style.filter = `brightness(${brilloFiltrosImg.value})`;
});

//3 b- Opacidad
opacidadFiltrosImg.addEventListener ('change',()=>{
    boxImgMeme.style.filter = `opacity(${opacidadFiltrosImg.value})`;
});

//3 c- Contraste
contrasteFiltrosImg.addEventListener ('change',()=>{
    boxImgMeme.style.filter = `contrast(${contrasteFiltrosImg.value}%)`;
});

//3 d- Desenfoque
desenfoqueFiltrosImg.addEventListener ('change',()=>{
    boxImgMeme.style.filter = `blur(${desenfoqueFiltrosImg.value}px)`;
});

//3 e- Escala de grises
escalaFiltrosImg.addEventListener ('change',()=>{
    boxImgMeme.style.filter = `grayscale(${escalaFiltrosImg.value}%)`;
});

//3 f- Sepia
sepiaFiltrosImg.addEventListener ('change',()=>{
    boxImgMeme.style.filter = `sepia(${sepiaFiltrosImg.value}%)`;
});

//3 g- HUE
hueFiltrosImg.addEventListener ('change',()=>{
    boxImgMeme.style.filter = `hue-rotate(${hueFiltrosImg.value}deg)`;
});

//3 h- Saturado
saturadoFiltrosImg.addEventListener ('change',()=>{
    boxImgMeme.style.filter = `saturate(${saturadoFiltrosImg.value}%)`;
});

//3 i- Negativo
negativoFiltrosImg.addEventListener ('change',()=>{
    boxImgMeme.style.filter = `invert(${negativoFiltrosImg.value})`;
});

//4- Reestablecer valores
const filtros =()=>{boxImgMeme.style.filter = `opacity(${opacidadFiltrosImg.value})`,  boxImgMeme.style.filter = `opacity(${opacidadFiltrosImg.value})`, boxImgMeme.style.filter = `contrast(${contrasteFiltrosImg.value})`, boxImgMeme.style.filter = `blur(${desenfoqueFiltrosImg.value})`,  boxImgMeme.style.filter = `grayscale(${escalaFiltrosImg.value})`, boxImgMeme.style.filter = `sepia(${sepiaFiltrosImg.value})`,  boxImgMeme.style.filter = `hue-rotate(${hueFiltrosImg.value})`, boxImgMeme.style.filter = `saturate(${saturadoFiltrosImg.value})`, boxImgMeme.style.filter = `invert(${negativoFiltrosImg.value})`}

buttonRestablecerFiltrosImg.addEventListener('click', ()=>{
    brilloFiltrosImg.value = '1';
    opacidadFiltrosImg.value= '1';
    contrasteFiltrosImg.value= '100';
    desenfoqueFiltrosImg.value= '0';
    escalaFiltrosImg.value = '0';
    sepiaFiltrosImg.value = '0';
    hueFiltrosImg.value= '0';
    saturadoFiltrosImg.value = '100';
    negativoFiltrosImg.value = '0';
    filtros();
});




//DARK-MODE//
oscuroBotonera.addEventListener('click', (e)=>{
    if (oscuroBotonera.checked === true){
        backgroundPage.setAttribute ('src', './Img/backgroundDark-.JPG')
    }else if (!oscuroBotonera.checked){
        backgroundPage.setAttribute('src', './Img/background.jpg')
    }
 
});