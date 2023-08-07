// https://teachablemachine.withgoogle.com/models/b9A8W9umc/

var classificação;

function iniciar(){
    navigator.mediaDevices.getUserMedia({
        audio: true
    })
    classificação = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/b9A8W9umc/model.json", carregarModelo)
    
}

function carregarModelo(){
    console.log("modeloCarregado")
    classificação.classify(pegarResultados)
}

function pegarResultados(error, resultado){
    if(error){
        console.log(error)
    }
    else{
        console.log(resultado)
    }
}