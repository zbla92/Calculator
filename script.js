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
    },
    multiply: function(a,b){
        return a * b;
    },
    divide: function(a, b){
        return a / b;
    }
    
}

return{
    getCalculatorOperations: function(){
        return Operations;
    },
    
    
    
    
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
        operationKeys: '.operation__key',
        mainDisplay: '.main',
        tmpDisplay: '.tmp'
    };
        

    
    return{
        
        getDOMstrings: function(){
                return DOMvariables;
            },
        
        updateMainScreen: function(e){
            return document.querySelector(DOMvariables.mainDisplay).textContent = e;
            
        },
        updateTmpScreen: function(e){
            return document.querySelector(DOMvariables.tmpDisplay).textContent = e
        }
        
        
        
    }
     
})();































//////////////////////////////////////////////
////////// App Controller //////////////
//////////////////////////////////////////////

var controller = (function(UICtrl, CalCtrl){
    var historyString = '';
    var tmpPre = 0; // Broj koji cuvam dok se naredni znak ne pricine
    var tmpPost; // UkucaniBroj
    var tmpResult;
   
    
    /////////////////////EVENT LISTENERS//////////////////
    //Input Class Variables
        var DOMstrings = UICtrl.getDOMstrings();
        var calcOperations = CalCtrl.getCalculatorOperations();
        var operation = calcOperations.plus; // Cuvam funkciju koja ce se  izvrsit
    
    
    
    ///////////////////// OPERATION KEYS ///////////////////////////////////////
    
    //********************Mathematical Operations*****************************//
    
    // Sabiranje
    document.querySelector(DOMstrings.plusBtn).addEventListener('click', function(){
        // Izracunaj trenutni rezultat sa prethodnom operacijom
            completeTheCalculation();
        
        //Update UI
            UICtrl.updateMainScreen(tmpResult);
             stringUpdatingModule(' + ')
      
        //Post Calculation 
            operation = calcOperations.plus;
            tmp = '';
    })
    
    // Oduzimanje
    document.querySelector(DOMstrings.minusBtn).addEventListener('click', function(){
        // Izracunaj trenutni rezultat sa prethodnom operacijom
            completeTheCalculation();
        
        //Update UI
            UICtrl.updateMainScreen(tmpResult);
            stringUpdatingModule(' - ')
        //Post Calculation 
        operation = calcOperations.minus;
        tmp = '';
    })
    
    
    // Multiply
    document.querySelector(DOMstrings.multiplyBtn).addEventListener('click', function(){
       // Izracunaj trenutni rezultat sa prethodnom operacijom
            completeTheCalculation();
        
        //Update UI
            UICtrl.updateMainScreen(tmpResult);
            stringUpdatingModule(' \u00d7 ')
        //Post Calculation 
        
        operation = calcOperations.multiply;
        tmp = '';
    });
    
    // Division
    document.querySelector(DOMstrings.devideBtn).addEventListener('click', function(){
        completeTheCalculation();
        
        UICtrl.updateMainScreen(tmpResult);
        stringUpdatingModule(' \u00F7 ')
        
        operation = calcOperations.divide;
        tmp = '';
    })
    
    
    
    //********************Control Operations*****************************//
    
    //Equal
    document.querySelector(DOMstrings.equalBtn).addEventListener('click', function(){
        
    })
    
////////////////////////////////////////////////////////////////////////////////////////   
//////////////////////////NUM KEYS////////////////////////////////////////////////////////
var tmp = '';
var numPress= '';

    // Number.
        document.querySelector(DOMstrings.pointBtn).addEventListener('click', function(){
            numPress = '.'; tmp = tmp + numPress; UICtrl.updateMainScreen(tmp);
        });
    // Number0
        document.querySelector(DOMstrings.btn0).addEventListener('click', function(){
           if(tmp !== 0){
                numPress = '0'; tmp = tmp + numPress; UICtrl.updateMainScreen(tmp);
           }


        });
    // Number1
        document.querySelector(DOMstrings.btn1).addEventListener('click', function(){
            numPress = '1'; tmp = tmp + numPress;UICtrl.updateMainScreen(tmp);

        });
    // Number2
        document.querySelector(DOMstrings.btn2).addEventListener('click', function(){
            numPress = '2'; tmp = tmp + numPress; UICtrl.updateMainScreen(tmp);

        });
    // Number3
        document.querySelector(DOMstrings.btn3).addEventListener('click', function(){
            numPress = '3'; tmp = tmp + numPress; UICtrl.updateMainScreen(tmp);
 
        });
    // Number4
        document.querySelector(DOMstrings.btn4).addEventListener('click', function(){
            numPress = '4'; tmp = tmp + numPress; UICtrl.updateMainScreen(tmp);

        });
    // Number5
        document.querySelector(DOMstrings.btn5).addEventListener('click', function(){
            numPress = '5'; tmp = tmp + numPress; UICtrl.updateMainScreen(tmp);

        });
    // Number6
        document.querySelector(DOMstrings.btn6).addEventListener('click', function(){
            numPress = '6'; tmp = tmp + numPress; UICtrl.updateMainScreen(tmp);

        });
    // Number7
        document.querySelector(DOMstrings.btn7).addEventListener('click', function(){
            numPress = '7'; tmp = tmp + numPress; UICtrl.updateMainScreen(tmp);

        });
    // Number8
        document.querySelector(DOMstrings.btn8).addEventListener('click', function(){
            numPress = '8';  tmp = tmp + numPress; UICtrl.updateMainScreen(tmp);

        });
    // Number9
        document.querySelector(DOMstrings.btn9).addEventListener('click', function(){
            numPress = '9';  tmp = tmp + numPress; UICtrl.updateMainScreen(tmp);

        });
    
    
        ///////////////////////////Perform some Functions////////////////////////////////////////////////
        //*********************************************************************************************//        
            //Initialize Calculator
            (function init(){
            historyString = '';
            tmpPre = 0;
            tmpPost= 0;
            tmp = '';
                
            // Update UI
                UICtrl.updateMainScreen('0');
                UICtrl.updateTmpScreen('Calculator Initialized');
            })();
           
            function completeTheCalculation(){
                 tmpPost = +tmp; // Trenutno ukucan String prebacujem u Int kroz varijabluy tmpPost
                 tmpResult = operation(tmpPre, tmpPost) // Pozivam prethodno ukucanu operaciju
                 tmpPre = tmpResult
            };

            //Modul za updateovanje stringa
            function stringUpdatingModule(input){
                historyString += tmp;
                historyString += input;
                UICtrl.updateTmpScreen(historyString)
            };


            
    
return{
    
    getTmp: function(){
        
        return tmp;
    }
    
}
    

    
})(UIController, calculatorController);



/////////////////////////////  GET NUMBERS/


    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

//