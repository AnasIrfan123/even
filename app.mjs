function check2() {
    document.getElementById("number").required = true;
    const num = document.getElementById("number");
    let computerNum = Math.round(num.value);
    if(num.value !== ""){
      if (computerNum % 2 === 0) {
    
      document.getElementById("display").innerHTML = "The Number is Even";
      } else {
      
        document.getElementById("display").innerHTML = "The Number is Odd";
      }
    }else{
      document.getElementById("display").innerHTML ="value is  Empty!!"
    }
  
    }
  function res(){
    document.getElementById("display").innerHTML = " ";
    const num = document.getElementById("number");
    num.value = "  "
  } 
  