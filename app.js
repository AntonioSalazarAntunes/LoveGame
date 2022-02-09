

function calcular() {
    

    var nomeUm = document.getElementById("nameOne").value;
    var nomeDois = document.getElementById("nameTwo").value;
    var resultado = Math.floor(Math.random()*100 + 1);

    var imagem = document.querySelector("img");

    if(resultado >= 50) {
        imagem.src = "images/love.jpg";
        
    } else {
        imagem.src = "images/broken.jpg";
    }

    var frase = nomeUm + " é " + resultado + "% compatível com " + nomeDois;
    
    document.getElementById("frase").innerHTML = frase;







}
