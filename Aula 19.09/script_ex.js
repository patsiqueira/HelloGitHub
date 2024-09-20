function calcularIMC(){
    let peso = document.getElementById("inpPeso").value 
    let altura = document.getElementById("inpAltura").value

    // let imc = peso / (altura*altura)
    let imc = peso / (altura**2)

    // document.getElementById("inpResultado").value = "Seu IMC é: " + imc

    document.getElementById("pResultado").innerHTML = "Seu IMC é: " + imc.toFixed(2)

    // alert("O seu IMC é: "+imc)

    // console.log(document.getElementById("inpPeso"))
}

function calcularIdadeDod(){
    let idade = document.getElementById("inpIdade").value

    let calculo = (idade * 7)

    if(calculo>=65){
        alert("O Dog já pode se aposentar, ele tem "+calculo+" anos")
    }
else{
    alert("O Dog não pode se aposentar, pois ele tem menos de 65 anos")
}
    
}