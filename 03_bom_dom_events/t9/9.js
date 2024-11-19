function calculate(){
    const calculation = document.querySelector("#calculation").value
    let num1 = 0;
    let num2 = 0;
    const operators = ["+","-","*","/"]
    let op = ""
    operators.forEach(operator => {
        if(calculation.includes(operator)){
            let parts = calculation.split(operator)
            op = operator
            num1 = parseInt(parts[0])
            num2 = parseInt(parts[1])
        }
    })
    const resultP = document.querySelector("#result")
    let result = 0;
    switch (op){
        case("+"):{
            result = num1+num2;
            resultP.innerHTML = "Sum: " + result
            break
        }
        case("-"):{
            result = num1-num2;
            resultP.innerHTML = "Sub: " + result
            break
        }
        case("*"):{
            result = num1*num2;
            resultP.innerHTML = "Multi: " + result
            break
        }
        case("/"):{
            result = num1/num2;
            resultP.innerHTML = "Div: " + result
            break
        }
    }
}