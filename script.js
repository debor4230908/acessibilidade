document.addEventListener('DOMContentLoaded', function(){
    const aumentarFonteBotao = document.getElementById('aumentar-fonte') ;
    const diminuiFonteBotao = document.getElementById('diminuir-fonte') ;
 
 
    let tamanhoAtualFonte = 1;
    aumentarFonteBotao. addEventListener('click', function(){
        tamanhoAtualFonte += 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
 
 
 
 
    });
    diminuiFonteBotao.addEventListener('click', function(){
        tamanhoAtualFonte -= 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`
 
 
    });
   
 });
 
 