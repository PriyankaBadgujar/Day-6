function printOddNum(N) {
    
      for(var i = 1; i <= N; i++){
          arr=[i]
        //   console.log(arr)
          arr.forEach(element => {
            if(element%2!=0){
                
                console.log(element)
            }
            
              
          });

        
      }
      
  }
  console.log("Odd Numbers Between 1-100 are: ")
  printOddNum(100)