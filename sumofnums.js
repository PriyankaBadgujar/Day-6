function printSumOf(N) {
    var total = 0;
      for(var i = 1; i <= N; i++){
          arr=[i]
        //   console.log(arr)
          arr.forEach(element => {

            total += i;
              
          });

        
      }
       console.log("sum of number between 1-100 is",total);
  }
  printSumOf(100)