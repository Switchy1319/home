let zuka = 30

if( zuka % 3 == 0 && zuka % 5 == 0){
    console.log ("FizzBuzz") }
      else if ( zuka % 5 == 0 ){
        console.log("Buzz")}
        else if (zuka % 3 == 0){
            console.log("Fizz")
        }else{
            console.log("kaito")
        }



        const brg = document.getElementById("bruger");
        const brg1 = document.querySelector('.logoo'); 

    
        brg.addEventListener('click', function() {
        brg1.classList.toggle('active');
        if(brg1.classList.toggle("active")){
            burgeristvis.display.style="block"
        }else {
            burgeristvis.display.style="none"
        }
    });