let firstNum,secondNum,operator ,resultPlus,resultMinus,resultTimes,resultDivide,resultPow;

    calcForm.addEventListener("input",()=>{
        if (fNum.value.length>0){
            reset.removeAttribute("disabled");
        } 
        else if (sNum.value.length>0){
            reset.removeAttribute("disabled");
        }
        else if(op.value.length>0){
            reset.removeAttribute("disabled");
        }
        else{
            reset.setAttribute("disabled","disabled");
        }
    })



    clearData=()=>{

    // document.getElementById("calcForm").reset();
    document.querySelector("h2").innerHTML="";
    document.getElementById("fNum").value="";
    document.getElementById("sNum").value="";
    document.getElementById("op").value="";
    reset.setAttribute("disabled","disabled");
   };

   


    onClick =()=>{ 
    let firstNum =parseInt( document.getElementById("fNum").value);
    let secondNum=parseInt(document.getElementById("sNum").value);
    let operator= document.getElementById("op").value;
        
    let superScript= "<sup>"+ secondNum+"</sup>";
    let resultPlus= firstNum+secondNum;
    let resultMinus= firstNum - secondNum;
    let resultTimes= firstNum*secondNum;
    let resultDivide=firstNum/secondNum;
    let resultPow= firstNum**secondNum;
    let resultModulus = firstNum%secondNum;
   
    switch (operator) {
        case "+":
            document.querySelector("h2").innerHTML=firstNum+ " + "+secondNum + " = "+resultPlus;
            break;

        case "-":
            document.querySelector("h2").innerHTML=firstNum+ " - "+secondNum + " = "+resultMinus;      
            break;

        case "x":
            document.querySelector("h2").innerHTML=firstNum+ " x "+secondNum + " = "+resultTimes;  
             break;
        case "X":
            document.querySelector("h2").innerHTML=firstNum+ " x "+secondNum + " = "+resultTimes;  
            break;

         case "*":
            document.querySelector("h2").innerHTML=firstNum+ " x "+secondNum + " = "+resultTimes;
            break;
            
         case ":":
            document.querySelector("h2").innerHTML=firstNum+ " : "+secondNum + " = "+resultDivide;
             break ;

         case "/":
            document.querySelector("h2").innerHTML=firstNum+ " : "+secondNum + " = "+resultDivide;
            break;

        case "^":
            document.querySelector("h2").innerHTML=firstNum + superScript +" = "+resultPow;
            break;

        case "%":
            document.querySelector("h2").innerHTML=firstNum + " % " + secondNum +" = "+resultModulus;
            break;

        default:
            alert("Please Enter Valid Numbers or Operator")
            break;
    }

   }

 