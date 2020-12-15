var string=`Peter Piper picked a peck of pickled peppers
A peck of pickled peppers Peter Piper picked
If Peter Piper picked a peck of pickled peppers
Where’s the peck of pickled peppers Peter Piper picked?`
function  printOddNums(){
     var count=0;
    for (let index = 0; index < string.length; index++) {
        const ele = string[index];
        if(string[index]=="o")
        {
            count++;
        }
       }
       console.log("Number of O letter in par are:",count)
    
}
printOddNums(string)
