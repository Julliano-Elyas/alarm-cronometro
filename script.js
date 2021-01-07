var display = document.getElementById('display')

var minutos = document.getElementById('minutos')
var segundos = document.getElementById('segundos')

var dcomecar = document.getElementById('comecar')

var cronometroSeg;

var minutoAtual;
var segundoAtual;

var interval;

for(var i = 0; i <= 60; i++){
    minutos.innerHTML+='<option value="'+i+'">' +i+ '</option>';
}

for(var i = 0; i <= 60; i++){
    segundos.innerHTML+='<option value="'+i+'">' +i+ '</option>';
}

comecar.addEventListener('click',function(){
    minutoAtual = minutos.value;
    segundoAtual = segundos.value;

    if(segundoAtual < 10){
        if(minutoAtual < 10){
            display.childNodes[1].innerHTML ="0" + minutoAtual + ":0" + segundoAtual;
        }else{
            display.childNodes[1].innerHTML = minutoAtual + ":0" + segundoAtual;
        }
    }else{
        if(minutoAtual >= 10){
            display.childNodes[1].innerHTML = minutoAtual + ":" + segundoAtual;
        }else{
            display.childNodes[1].innerHTML ="0" + minutoAtual + ":" + segundoAtual;
        }
    }

    interval = setInterval(function(){

        segundoAtual--;

        if(segundoAtual < 0){
            if(minutoAtual > 0){
                minutoAtual--;
                segundoAtual = 59;
            }else{
                
                alert("Seu tempo ACABOU!");
                document.getElementById("sound").play();
                clearInterval(interval);
                segundoAtual = 0
            }
        }

        if(segundoAtual < 10){
            if(minutoAtual < 10){
                display.childNodes[1].innerHTML ="0" + minutoAtual + ":0" + segundoAtual;
            }else{
                display.childNodes[1].innerHTML = minutoAtual + ":0" + segundoAtual;
            }
        }else{
            if(minutoAtual >= 10){
                display.childNodes[1].innerHTML = minutoAtual + ":" + segundoAtual;
            }else{
                display.childNodes[1].innerHTML ="0" + minutoAtual + ":" + segundoAtual;
            }
        }



        },1000);

})