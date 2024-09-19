const form = document.getElementById('form');

form.addEventListener('submit', function(event){
    event.preventDefault(); //não deixa atualizar a página quando clica em calcular

    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    //pega os valores de altura e peso

    const bmi = (weight / (height * height)).toFixed(2); // faz o calculo do IMC; toFixed(2) só deixa aparecer dois números ápos a vírgula

    const value = document.getElementById('value'); //pega o valor do span value no HTML
    let description = ''; //cria uma variável para descrição e deixa ela vazia por enquanto

    value.classList.add('attention') // adicionando a classe para deixar o valor do resultado do IMC vermelho
    
    document.getElementById('infos').classList.remove('hidden'); //ao clicar em calcular, remove a classe hidden que deixa a parte de exibir os resultados escondida

    if(bmi < 18.5){
        description = 'Cuidado! Você está abaixo do peso!'
    }
    else if(bmi >= 18.5 && bmi<= 25){
        description = 'Você está no peso ideal!'
        value.classList.remove('attention'); //remove a classe attention que deixa o número vermelho
        value.classList.add('normal'); //adiciona a classe normal que deixa o númro verde
    }
    else if(bmi >= 25 && bmi<= 30){
        description = 'Cuidado! Você está com sobrepeso!'
    }
    else if(bmi >= 30 && bmi<= 35){
        description = 'Cuidado! Você está com obesidade moderada!'
    }
    else if(bmi >= 35 && bmi<= 40){
        description = 'Cuidado! Você está com obesidade severa!'
    }
    else{
        description = 'Cuidado! Você está com obesidade morbida!'
    }
    //cria as condições para classificar o peso da pessoa a partir do resultado do calcula do IMC

    value.textContent = bmi.replace('.',','); //adiciona o resultado do bmi ao value; troca onde for ponto para vígula
    document.getElementById('description').textContent = description; //pegando o lugar de description no HTML e adicionando o o texto de descrição relacionado a condição onde o resultado do bmi se encaixa
})