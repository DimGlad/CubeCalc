let inputIn = document.querySelector('input');
let buttonCalc = document.querySelector('.calc');
let buttonClear = document.querySelector('.clear');

buttonCalc.onclick = function(){
        let edge = +inputIn.value;
    if (edge == ''){
        alert("Введите данные!");
    }
    else {
        let Sface = edge * edge;
        let Sfull = Sface * 6;
        let V = edge * edge * edge;
        document.getElementById("Sface").innerHTML = 'Площадь грани: '+ Sface;
        document.getElementById("Sfull").innerHTML = 'Площадь полной поверхности: '+ Sfull;
        document.getElementById("V").innerHTML = 'Объем: '+ V;
    }
}
buttonClear.onclick = function(){
    inputIn.value = '';
    document.getElementById("Sface").innerHTML = 'Площадь грани: ';
    document.getElementById("Sfull").innerHTML = 'Площадь полной поверхности: ';
    document.getElementById("V").innerHTML = 'Объем: '; 
}

