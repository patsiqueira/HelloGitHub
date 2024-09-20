function calcSalario(){
    let id, horas, valorHora, salario 
    id = Number(prompt("Digite seu id: "));
    horas = Number(prompt("Quantas horas você trabalhou?"));
    valorHora = Number(prompt("quanto você ganha por hora?"));
    salario = horas * valorHora
    alert("ID: " +id+ "\nSalário: R$" + salario.toFixed(2))
}

function calcSlBonus(){
    let id, salarioFixo, comissao
    id = prompt("Digite seu nome e sobrenome: ");
    salarioFixo = Number(prompt("Digite seu salário fixo: "));
    comissao = Number(prompt("Digite sua comissão total: "));
    let salarioTotal = salarioFixo + (comissao * 0.15);
    alert("Funcionário: " +id+ "\nSalário Fixo: R$" +salarioFixo + 
    "\nSalário Fixo + 15% da comissão: R$" + salarioTotal.toFixed(2))
}

function calcLanche(){
    //Ler o código
    let codigo = Number(prompt("Digite o código"));

    //Ler a quantidade
    let quantidade = Number(prompt("Quantidade: "));

    //Definir o preço do produto
    let preco
    if (codigo == 1){ //comparação, operador lógico operacional
        preco = 4 //atribuição, "recebe"
    }
    else if (codigo ==2){
        preco = 4.5
    }
    else if (codigo == 3){
        preco = 5.0
    }
    else if (codigo == 4){
        preco = 2
    }
    else if (codigo == 5){
        preco = 1.50
    }
    else{
        alert("Código inexistente!")
    }

    //calcular o valor da conta (preço*quantidade)
    total = preco*quantidade
    alert("Total: R$" + total)
}

function calcDDD(){
    let DDD = Number(prompt("Digite o DDD"));
    if (DDD == 61){
        destino = "Brasília"
    }
    else if(DDD == 71){
        destino = "Salvador"
    }
    else if(DDD == 11){
        destino = "São Paulo"
    }
    else if(DDD == 21){
        destino = "Rio de Janeiro"
    }
    else{
        alert("Código não cadastrado")
    }
    alert(destino)
}

function qualQuadrante(){
   let x = Number(prompt("Digite X"));
   let y = Number(prompt("Digite Y"));
   if(x > 0 && y > 0){
    alert("Primeiro quadrante")
   }
   else if(x < 0 && y > 0){
    alert("Segundo quadrante")
   }
   else if(x < 0 && y < 0){
    alert("Terceiro quadrante")
   }
   else if(x > 0 && y < 0){
    alert("Quarto quadrante")
   }
   else if (x == 0 || y == 0){
    alert("")
   }
}