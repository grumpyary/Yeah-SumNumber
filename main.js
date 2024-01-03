let numbers = [];
const input = document.querySelector(`input`)
const span = document.querySelector(`span`)

function add() {
    let inputNumber = parseFloat(input.value)
        numbers.push(inputNumber)
        input.value = ''
        input.textContent = numbers;
        print()
    }

    function print() {
        let resultOnScreen = ''
        
        numbers.forEach(elemento => {
            
            if(resultOnScreen.length > 0) {
                
                resultOnScreen += " + "
            } 
            
            resultOnScreen += elemento
        });

        span.textContent = resultOnScreen
    }
    
    function calculate() {
        let sum = 0

    for (let i=0; i<numbers.length; i++){
        sum += numbers[i]
    }
    
   span.textContent = sum
    }
    
    function update(){
        let result = ""
    
        for (let i=0; i<numbers.length; i++){
            if(i > 0 ){
                result += "+"
        }
        result += numbers[i]
        }
        span.textContent = result
    }

    function clean() {
        numbers = []
        input.value = ''
        span.textContent = "0"
    }