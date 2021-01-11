function verificar(){

    let valor1 = Number(document.querySelector('input#txnota1').value);
    let valor2 = Number(document.querySelector('input#txnota2').value);
    let valor3 = Number(document.querySelector('input#txnota3').value);
    let valor4 = Number(document.querySelector('input#txnota4').value);
    
    let res = document.querySelector('div#res');
    let media = (valor1 + valor2 + valor3 + valor4)/4;
    media.toFixed(2);
    res.innerHTML = `Sua média final é ${media}.<br>`;

    switch (media){
        
        case 1:
            media <= 60;
            res.innerHTML += `Você está reprovado.`;
            document.body.style.background = '#ef233c';
            break
        case 2:
            media < 70;
            res.innerHTML += `Você está de recuperação.`;
            document.body.style.background = '#f6bd60';
            break
        case 3:
            media < 100;
            res.innerHTML += `Você foi aprovado!`;
            document.body.style.background = '#52b788';
            break
        default:
            window.alert('Preencha os campos corretamente!');
 }
        
    }  
    

    

    
