//////////////////////////////////////////////
////////// CalCulator Controller //////////////
//////////////////////////////////////////////

var calculatorController = (function(){

var Operations = {
    minus: function(a,b){
        return a - b;
    },
    plus: function(a,b){
        return a + b;
    }
}

return{
    getCalculatorOperations: function(){
        return Operations;
    }
    
    
    
}




})();



































//////////////////////////////////////////////
//////////     UI Controller  ////////////////
//////////////////////////////////////////////

var UIController = (function(){
    //Class to variables
    var DOMvariables = {
        percentageBtn: '.id__percentage',
        squareRootBtn: '.id__squareRoot',
        squareBtn:'.id__square',
        underXbtn: '.id__underX',
        btnCE: '.id__CE',
        clearBtn: '.id__clearAll',
        eraseBtn: '.id__erase',
        devideBtn: '.id__devide',
        multiplyBtn: '.id__times',
        minusBtn: '.id__minus',
        plusBtn: '.id__plus',
        plusMinusBtn: '.id__plusMinus',
        pointBtn: '.id__point',
        btn9: '.id__9',
        btn8: '.id__8',
        btn7: '.id__7',
        btn6: '.id__6',
        btn5: '.id__5',
        btn4: '.id__4',
        btn3: '.id__3',
        btn2: '.id__2',
        btn1: '.id__1',
        btn0: '.id__0',
        equalBtn: '.id__equal',
        operationKeys: '.operation__key'
    };
        

    
    return{
        
        getDOMstrings: function(){
                return DOMvariables;
            },
        
        updateTmpScore: function(a){
            return document.querySelector('.main').textContent = a;
            
        }
        
        
    }
     
})();































//////////////////////////////////////////////
////////// App Controller //////////////
//////////////////////////////////////////////

var controller = (function(UICtrl, CalCtrl){
    var tmpPre = 0; // Broj koji cuvam dok se naredni znak ne pricine
    var tmpPost = 0 // Broj
   
    
    /////////////////////EVENT LISTENERS//////////////////
    var tmpResult = 10;
    //Input Class Variables
        var DOMstrings = UICtrl.getDOMstrings();
        var calcOperations = CalCtrl.getCalculatorOperations();
     var operation = calcOperations.plus; // Cuvam funkciju koja ce se  izvrsit
    
    
    
    ///////////////////// OPERATION KEYS ///////////////////////////////////////
    //Percentage
    document.querySelector(DOMstrings.percentageBtn).addEventListener('click', function(){
        console.log('radi')
        // Izracunaj
    });
    
    
    
    // Sabiranje
    document.querySelector(DOMstrings.plusBtn).addEventListener('click', function(){
        tmpresult = tmp;    
        console.log(`tmpResult = ${tmpResult} prije  operacije`)
        // Temp Rezultat = Sabiranje 2 broja
            console.log(tmpResult);
             console.log(tmpPost);
            tmpResult = operation(tmpResult, tmpPost);
        
        // Temp rezulatat nakon sabiranja
            operation = calcOperations.plus
    })
    
    // Oduzimanje
    document.querySelector(DOMstrings.minusBtn).addEventListener('click', function(){

    })
    
    
////////////////////////////////////////////////////////////////////////////////////////   
//////////////////////////NUM KEYS////////////////////////////////////////////////////////
var tmp = '';
var numPress= '';

    // Number.
        document.querySelector(DOMstrings.pointBtn).addEventListener('click', function(){
            numPress = '.'; tmp = tmp + numPress; UICtrl.updateTmpScore(tmp);
        });
    // Number0
        document.querySelector(DOMstrings.btn0).addEventListener('click', function(){
            numPress = '0'; tmp = tmp + numPress; UICtrl.updateTmpScore(tmp);


        });
    // Number1
        document.querySelector(DOMstrings.btn1).addEventListener('click', function(){
            numPress = '1'; tmp = tmp + numPress;UICtrl.updateTmpScore(tmp);

        });
    // Number2
        document.querySelector(DOMstrings.btn2).addEventListener('click', function(){
            numPress = '2'; tmp = tmp + numPress; UICtrl.updateTmpScore(tmp);

        });
    // Number3
        document.querySelector(DOMstrings.btn3).addEventListener('click', function(){
            numPress = '3'; tmp = tmp + numPress; UICtrl.updateTmpScore(tmp);
 
        });
    // Number4
        document.querySelector(DOMstrings.btn4).addEventListener('click', function(){
            numPress = '4'; tmp = tmp + numPress; UICtrl.updateTmpScore(tmp);

        });
    // Number5
        document.querySelector(DOMstrings.btn5).addEventListener('click', function(){
            numPress = '5'; tmp = tmp + numPress; UICtrl.updateTmpScore(tmp);

        });
    // Number6
        document.querySelector(DOMstrings.btn6).addEventListener('click', function(){
            numPress = '6'; tmp = tmp + numPress; UICtrl.updateTmpScore(tmp);

        });
    // Number7
        document.querySelector(DOMstrings.btn7).addEventListener('click', function(){
            numPress = '7'; tmp = tmp + numPress; UICtrl.updateTmpScore(tmp);

        });
    // Number8
        document.querySelector(DOMstrings.btn8).addEventListener('click', function(){
            numPress = '8';  tmp = tmp + numPress; UICtrl.updateTmpScore(tmp);

        });
    // Number9
        document.querySelector(DOMstrings.btn9).addEventListener('click', function(){
            numPress = '9';  tmp = tmp + numPress; UICtrl.updateTmpScore(tmp);

        });
    
    
        ///////////////////////////Perform some Functions////////////////////////////////////////////////
        

return{
    
    getTmp: function(){
        
        return tmp;
    }
    
}
    

    
})(UIController, calculatorController);



/////////////////////////////  GET NUMBERS/


    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

//