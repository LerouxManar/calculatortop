


    function operate (x , y , operator){

        add(x,y)
        substract(x,y)
        divide(x,y)
        multiply (x,y)

        operator= prompt("select operator")
        x=prompt("What your first nunmber")
        y=prompt("Whats your second number")

        if(operator=="add"){
            add(x,y)
        } else if(operator=="subtract"){
            substract(x,y)
        }else if(operator=="multiply"){
            multiply(x,y);
        } else if (operator=="divide"){
            divide (x,y)
        }  
     
    }



    function add (x,y) {
        console.log(+x + +y)
    }

    function substract (x , y){
        console.log(x-y);
    }

    
    function divide (x , y){
        console.log(x/y);
    }

    
    function multiply (x , y){
        console.log(x*y);
    }

    //operate();

  
    

    

