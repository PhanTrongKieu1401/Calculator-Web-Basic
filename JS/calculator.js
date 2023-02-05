function myfunctionplus(){	
    if(check()){
        var xau = String(calculator.display1.value + "+" + calculator.display2.value);
        calculator.answer.value = eval(xau);	
    }
}
function myfunctionminus(){	
    if(check()){
        var xau = String(calculator.display1.value + "-" + calculator.display2.value);
        calculator.answer.value = eval(xau);	
    }
}
function myfunctionmultiply(){	
    if(check()){
        var xau = String(calculator.display1.value + "*" + calculator.display2.value);
        calculator.answer.value = eval(xau);	
    }
}
function myfunctiondiv(){	
    if(check()){
        var xau = String(calculator.display1.value + "/" + calculator.display2.value);
        calculator.answer.value = eval(xau);	
    }	
}
function check(){
    var xau1= String(document.getElementById("display1").value);
    var xau2= String(document.getElementById("display2").value);
    console.log(xau1);
    console.log(xau2);
    if(xau1 == "" || xau2 == ""){
        missWarn();
        return false;
    }
    if(!isFinite(xau1)|| !isFinite(xau2)){
        numberWarn();
        return false;
    }
    return true;
}
function missWarn(){
    alert("Vui lòng nhập đủ 2 số!");
}
function numberWarn(){
    alert("Vui lòng chỉ nhập số!");
}