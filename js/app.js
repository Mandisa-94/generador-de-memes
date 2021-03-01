

//Body//
const etiquetaBody = document.getElementById ('etiqueta-body');
const backgroundPage = document.getElementById ('background-page');
const boxFiltros = document.querySelectorAll('.box-filtros');
const tituloSecundario = document.querySelectorAll('h2');
const tituloTerciario = document.querySelectorAll('h3');
const closed = document.getElementById ('closed');
const labelSideBar = document.getElementById ('label-side-bar');




//ID de header//
const imagenBotonera = document.getElementById ('imagen-botonera');
const textoBotonera = document.getElementById ('texto-botonera');
const oscuroBotonera = document.getElementById ('oscuro-botonera');
const header = document.getElementById('header');
const containerImgText = document.getElementById('container-img-text');
const containerBotonera = document.getElementById ('container-botonera');
const botonera = document.querySelectorAll('.botonera');


 
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
const labelFiltrosImg = document.querySelectorAll ('.label-filtros-img');
const inputFiltrosImg = document.querySelectorAll ('.input-filtros-img');
const buttonTonalidadesColorImgOptions = document.getElementById('button-tonalidades-color-img-options');
const titleUrlFondo = document.querySelectorAll('.title-url-fondo');




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
const boxTextoMeme = document.querySelectorAll ('.box-texto-meme');
const boxTextDark = document.querySelectorAll ('.box-text-dark');
const titleDarkText = document.querySelectorAll ('.title-dark-text');
const titleFuenteDark = document.getElementById ('title-fuente-dark');
const optionsDark = document.querySelectorAll ('.options-dark');
const labelSinTextoS = document.getElementsByClassName ('label-sin-texto-s')[0];
const labelSinTextoI = document.getElementsByClassName ('label-sin-texto-i')[0];
const labelTransparentText = document.getElementsByClassName ('label-transparent-text')[0];
const colorTextOptions = document.getElementById ('color-text-options');
const fondoTextOptions = document.getElementById ('fondo-text-options');

//ID container meme//
const boxTextoMemeTop = document.getElementById ('box-texto-meme-top');
const containBoxMeme = document.getElementById ('contain-box-meme');
var boxTextoMemeBottom = document.getElementById ('box-texto-meme-bottom');
const boxImgMeme = document.getElementById ('box-img-meme');
const topText = document.getElementById ('top-text');







//Funcionalidad de Header- Aside//
imagenBotonera.addEventListener('click', (e)=>{
    boxImgOptions.style.display = 'flex';
    boxTextOptions.style.display = 'none';
    responsiveMenu()
}
);

textoBotonera.addEventListener('click', (e)=>{
        boxImgOptions.style.display = 'none';
        boxTextOptions.style.display = 'flex';
        responsiveMenu()
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

const ocultarTextos = ()=>{
    if (noSuperiorText.checked && noBottomText.checked){
        boxTextoMemeTop.style.display = 'none'
        boxTextoMemeBottom.style.display = 'none'
        boxImgMeme.style.height = '100%'   
}}

noSuperiorText.addEventListener('click', ()=>{
    if(noSuperiorText.checked){
    boxTextoMemeTop.style.display = 'none'
    boxImgMeme.style.height = '100%'}
    else if (!noSuperiorText.checked){
        boxTextoMemeTop.style.display = 'flex'
        boxTextoMemeTop.style.justifyContent = 'center'
        boxImgMeme.style.height = '100%'
    }
    else {ocultarTextos()}
})

noBottomText.addEventListener('click', ()=>{
    if(noBottomText.checked){
        boxTextoMemeBottom.style.display = 'none'
        boxImgMeme.style.height = '100%'
    }
    else if (!noBottomText.checked){
        boxTextoMemeBottom.style.display = 'flex'
        boxTextoMemeBottom.style.justifyContent = 'center'
        boxImgMeme.style.height = '100%'
    }
    else {ocultarTextos()}
})


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
    colorTextOptions.innerText = inputColorTexto.value
});

//7- Elegir color de fondo de texto + Fondo tranparente//
inputColorFondoTexto.addEventListener ('input', (e)=>{
    boxTextoMemeTop.style.backgroundColor = `${inputColorFondoTexto.value}`;
    boxTextoMemeBottom.style.backgroundColor = `${inputColorFondoTexto.value}`;
    fondoTextOptions.innerText = inputColorFondoTexto.value
});

transparentTextOption.addEventListener ('change', (e) => {
    if(transparentTextOption.checked){
        boxTextoMemeTop.style.backgroundColor = 'transparent'
        boxTextoMemeBottom.style.backgroundColor = 'transparent'
        boxTextoMemeTop.style.position = 'absolute'
        boxTextoMemeTop.style.top = '0'
        boxTextoMemeBottom.style.position = 'absolute'
        boxTextoMemeBottom.style.marginTop = '27%'
        boxImgMeme.style.height = '100%'

    }else if (!transparentTextOption.checked) {
        boxTextoMemeTop.style.position = 'static'
        boxTextoMemeBottom.style.position = 'static'
        boxTextoMemeBottom.style.marginTop = '0'
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
    blackColorImgFondo.innerText = colorFondo
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
        etiquetaBody.style.backgroundColor = '#272323'
        closed.style.color = 'cyan'
        backgroundPage.setAttribute ('src', './Img/backgroundDark-.JPG');
        header.setAttribute('class', 'header-dark');
        containerImgText.setAttribute ('class', 'container-img-text-dark')
        urlImgOptions.style.backgroundColor = 'cyan'
        urlImgOptions.style.color = 'rgb(33, 33, 73)'
        colorFondoImg.style.backgroundColor = 'cyan'
        blackColorImgFondo.style.color = 'rgb(33, 33, 73)'
        colorOptions.style.backgroundColor = 'cyan'
        colorOptions.style.color = 'rgb(33, 33, 73)'
        buttonTonalidadesColorImgOptions.style.backgroundColor= 'cyan'
        containBoxMeme.style.backgroundColor= 'black'
        colorTextOptions.style.color = 'white'
        fondoTextOptions.style.color = 'white'


        for(let i = 0; i<tituloTerciario.length; i++ ){
            tituloTerciario[i].style.color = 'white'
        }

        for(let i= 0; i < boxFiltros.length; i++){
             boxFiltros[i].setAttribute('class', 'box-filtros-dark');
            }

        containerBotonera.setAttribute ('class', 'container-botonera-dark');
        for(let i = 0; i<botonera.length; i++){
            botonera[i].style.color = 'rgb(58, 190, 230)'
        }
        for(let i = 0; i<tituloSecundario.length; i++){
            tituloSecundario[i].style.color = 'white'
        }
        for(let i = 0; i<labelFiltrosImg.length; i++){
            labelFiltrosImg[i].style.color = 'rgb(33, 33, 73'
        }
        
        for(let i = 0; i<inputFiltrosImg.length; i++){
            inputFiltrosImg[i].style.backgroundColor = 'rgb(71, 71, 71)' 
        }

        for(let i = 0; i<boxTextoMeme.length; i++){
            boxTextoMeme[i].style.backgroundColor = 'black' 
        }

        //Estilos Dark de TEXTO//
        for(let i = 0; i<boxTextDark.length; i++){
            boxTextDark[i].style.backgroundColor = 'cyan' 
        }

        for(let i = 0; i<titleDarkText.length; i++){
            titleDarkText[i].style.color = 'rgb(33, 33, 73)'  
        }

        titleFuenteDark.style.backgroundColor = 'transparent'

        for(let i = 0; i<optionsDark.length; i++){
            optionsDark[i].style.backgroundColor = 'rgb(71, 71, 71)' 
            optionsDark[i].style.color = 'white' 
        }
        labelSinTextoS.style.color = 'rgb(33, 33, 73)'
        labelSinTextoI.style.color = 'rgb(33, 33, 73)'
        labelTransparentText.style.color = 'rgb(33, 33, 73)'
       
   

    }else if (!oscuroBotonera.checked){
        etiquetaBody.style.backgroundColor = 'transparent'
        closed.style.color = 'rgb(33, 33, 73)'
        backgroundPage.setAttribute ('src', './Img/background.jpg');
        header.setAttribute ('class', 'header');
        containerImgText.setAttribute ('class', 'container-img-text');
        urlImgOptions.style.backgroundColor = 'rgb(33, 33, 73)'
        urlImgOptions.style.color = 'white'
        colorFondoImg.style.backgroundColor = 'rgb(33, 33, 73)'
        blackColorImgFondo.style.color = 'white'
        colorOptions.style.backgroundColor = 'rgb(33, 33, 73)'
        colorOptions.style.color = 'white'
        buttonTonalidadesColorImgOptions.style.backgroundColor= 'rgb(33, 33, 73)'
        containBoxMeme.style.backgroundColor= 'white'
        colorTextOptions.style.color = 'black'
        fondoTextOptions.style.color = 'black'

        for(let i = 0; i<tituloTerciario.length; i++ ){
            tituloTerciario[i].style.color = 'white'
        }

        for(let i = 0; i<titleUrlFondo.length; i++ ){
            titleUrlFondo[i].style.color = 'black'
        }
        
        for(let i= 0; i < boxFiltros.length; i++){
            boxFiltros[i].setAttribute ('class', 'box-filtros')    
        }

        containerBotonera.setAttribute ('class', 'container-botonera');
        for(let i = 0; i<botonera.length; i++){
            botonera[i].style.color = 'rgb(51, 190, 190)'
        }

        for(let i = 0; i<tituloSecundario.length; i++){
            tituloSecundario[i].style.color = 'black'
        }
        for(let i = 0; i<labelFiltrosImg.length; i++){
            labelFiltrosImg[i].style.color = 'white'
        }

        for(let i = 0; i<inputFiltrosImg.length; i++){
            inputFiltrosImg[i].style.backgroundColor = 'cyan'
        }

        for(let i = 0; i<boxTextoMeme.length; i++){
            boxTextoMeme[i].style.backgroundColor = 'rgb(33, 33, 73)' 
        }


        //Estilos Dark de TEXTO//

        boxTextDark
        for(let i = 0; i<boxTextDark.length; i++){
            boxTextDark[i].style.backgroundColor = 'rgb(33, 33, 73)'  
        }
        
        for(let i = 0; i<titleDarkText.length; i++){
            titleDarkText[i].color = 'white'  
        }

        titleFuenteDark.style.backgroundColor = 'white'

        for(let i = 0; i<optionsDark.length; i++){
            optionsDark[i].style.backgroundColor = 'white'
            optionsDark[i].style.color = 'black'  
        }

        labelSinTextoS.style.color = 'white'
        labelSinTextoI.style.color = 'white'
        labelTransparentText.style.color = 'white'
    }
});



//SIDE-BAR//

const responsiveMenu = ()=>{
    if(window.screen.width < 900){
        header.style.display = 'none'
        backgroundPage.style.display = 'none'
        containerImgText.style.display = 'flex'
        containerImgText.classList.add ('container-img-text-phone')
        


    }else{
        header.style.display = 'flex'
        backgroundPage.style.display = 'flex'
        containerImgText.classList.remove ('container-img-text-phone')
        containerImgText.classList.add ('container-img-text')  
      
}
}
const colorMenuImgText = () =>{
    if(window.screen.width < 900){
        boxImgOptions.classList.toggle ('box-img-options-dark') 
        boxTextOptions.classList.toggle ('box-text-options-dark')
    }
}



imagenBotonera.addEventListener('click', ()=>{

    responsiveMenu()
})

textoBotonera.addEventListener('click', ()=>{

    responsiveMenu()
})

oscuroBotonera.addEventListener('click', ()=>{
    colorMenuImgText()
})



closed.addEventListener('click', ()=>{
  
    containerImgText.style.display = 'none'
    header.style.display = 'flex'
    backgroundPage.style.display = 'flex'
    }
)






